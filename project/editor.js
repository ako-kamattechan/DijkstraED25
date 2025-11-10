

(() => {
  const svg = document.getElementById("stage");
  const svgNS = "http://www.w3.org/2000/svg";
  const S = () => Utils.state;


      let draggingNode = null, connectingFrom = null, tempLine = null;

  /* Helpers */
  const safeToSVG = (e) => {
    try { return Utils.ScreenToSVG(svg, e.clientX, e.clientY); }
    catch { return {x:0, y:0}; }
  };


  /* XY Coordinates; Detection Radius */
  const nodeAt = (x, y, Radius=NODE_HIT_RADIUS) => (S().nodes||[]).find(n => Math.hypot(x-n.x,y-n.y)<Radius);

  /* Mouse Logic */
  svg.addEventListener("mousedown",(e)=>{

    /* Guard; Important! */
    if (Utils.state.modalOpen) {
      e.preventDefault();
      return;
    }

    if (S().animating)
      return;
    const p = safeToSVG(e);

    const st = S();

    /* Delete; Shift+Click; Detection -Depends-> Radius */
    if (e.shiftKey) {
      const edgeHit = (() => {
        for (const ed of (st.edges||[])) {
          const A = (st.nodes||[]).find(n=>n.id===ed.a);
          const B = (st.nodes||[]).find(n=>n.id===ed.b);
          if (!A || !B) continue;

          const d1 = Math.hypot(p.x - A.x, p.y - A.y);
          const d2 = Math.hypot(p.x - B.x, p.y - B.y);

          if (d1 < EDGE_ENDPOINT_SKIP || d2 < EDGE_ENDPOINT_SKIP) continue;

          const Ax = p.x - A.x, Ay = p.y - A.y, Bx = B.x - A.x, By = B.y - A.y;
          const dot = Ax*Bx + Ay*By, len2 = Bx*Bx + By*By;
          let t = dot/len2; t = Math.max(0, Math.min(1, t));
          const cx = A.x + t*Bx, cy = A.y + t*By;
          if (Math.hypot(p.x - cx, p.y - cy) < 10) return ed;
        }
        return null;
      })();

      if (edgeHit) {
        st.edges = st.edges.filter(ed => ed !== edgeHit);
        Utils.recomputeAndRender();
        window.dispatchEvent(new CustomEvent('graph-changed'));
        return;
      }
    }

    const n = nodeAt(p.x,p.y);

    /* Ctrl + Drag -> Move */
    if (n && e.ctrlKey){
      draggingNode = n;
      svg.style.cursor="grabbing";
      Utils.setHoverLock(true);
      e.preventDefault();
      return;
    }

    /* Union */
    if (n && !e.ctrlKey && !e.shiftKey){
      connectingFrom = n;
      const g=document.createElementNS(svgNS,"line");
      g.setAttribute("class","temp-edge");
      g.setAttribute("x1",n.x); g.setAttribute("y1",n.y);
      g.setAttribute("x2",n.x); g.setAttribute("y2",n.y);
      svg.appendChild(g);
      tempLine=g;
      Utils.setHoverLock(true);
      e.preventDefault();
      return;
    }

    /* Create node */
      const hitEdge = (() => {
        try {
          return Utils.state && Utils.state.nodes && Utils.state.edges ? Utils.state.edges.find(eObj => {

            const A = st.nodes.find(n=>n.id===eObj.a);
            const B = st.nodes.find(n=>n.id===eObj.b);

            if (!A || !B)
              return false;

            const d1 = Math.hypot(p.x - A.x, p.y - A.y);
            const d2 = Math.hypot(p.x - B.x, p.y - B.y);

            if (d1<18 || d2<18)
                return false;

            const Apx=p.x - A.x, Apy=p.y - A.y, Bpx=B.x - A.x, Bpy=B.y - A.y;
            const dot = Apx*Bpx + Apy*Bpy, len2=Bpx*Bpx + Bpy*Bpy;
            let t = dot/len2; t=Math.max(0,Math.min(1,t));
            const cx = A.x + t*Bpx, cy = A.y + t*Bpy;
            return Math.hypot(p.x - cx, p.y - cy) < 12;
        }) : null;
        }catch{
          return null;
        }
      })();

    /* Node creation */
    if (!n && !hitEdge) {

        const badge = document.querySelector('.badge');
        if (st.nodes.length >= Utils.state.maxNodes) {
          badge.textContent = "Límite de nodos alcanzado";
          badge.style.color = "#f88";
          setTimeout(()=> {
            badge.textContent = "ESC -> regresar";
            badge.style.color = "var(--muted)";
          }, 1400);
          Utils.setHoverLock(false);
          return;
        }

        st.nodes = st.nodes || [];
        const id = Utils.uniqueId();
        st.nodes.push({ id, x: p.x, y: p.y });
        if (!st.sourceId)
          st.sourceId = id;
        Utils.recomputeAndRender();
        Utils.setHoverLock(false);
        window.dispatchEvent(new CustomEvent('graph-changed'));
    }
  });

  svg.addEventListener("mousemove",(e)=>{

    /* Guard; Important! */
    if (Utils.state.modalOpen) {
      e.preventDefault();
      return;
    }

    const p=safeToSVG(e);
    if(draggingNode){
      draggingNode.x=p.x; draggingNode.y=p.y;
      Utils.recomputeAndRender();
    }else if(connectingFrom&&tempLine){
      tempLine.setAttribute("x2",p.x);
      tempLine.setAttribute("y2",p.y);
    }
  });

  window.addEventListener("mouseup",(e)=>{

    /* Guard; Important! */
    if (Utils.state.modalOpen) {
      e.preventDefault();
      return;
    }

    svg.style.cursor="crosshair";
    const p=safeToSVG(e);

    if(draggingNode){
      draggingNode=null;
      Utils.setHoverLock(false);
      return;
    }

    if(connectingFrom){
      const n2=nodeAt(p.x,p.y);
      const st=S();
      if(n2 && n2!==connectingFrom){
        st.edges=st.edges||[];
        const exists = st.edges.some(ed=>
            (ed.a===connectingFrom.id&&ed.b===n2.id)||
            (ed.a===n2.id&&ed.b===connectingFrom.id));
        if(!exists) st.edges.push({a:connectingFrom.id,b:n2.id,w:1});
        window.dispatchEvent(new CustomEvent('graph-changed'));
      }
      if(tempLine){ tempLine.remove(); tempLine=null; }
      connectingFrom=null;
      Utils.recomputeAndRender();
      Utils.setHoverLock(false);
    }
  });

  /* Node deletion; shift+click */
  svg.addEventListener("click", (e) => {
    if (!e.shiftKey || S().animating)
      return;

    const p = safeToSVG(e);
    const st = S();

    const n = (st.nodes || []).find(n => Math.hypot(p.x - n.x, p.y - n.y) < NODE_DELETE_RADIUS);
    if (!n)
      return;

    /* Remove node and attached edges */
    st.nodes = st.nodes.filter(x => x !== n);
    st.edges = (st.edges || []).filter(eObj => eObj.a !== n.id && eObj.b !== n.id);
    if (st.sourceId === n.id) st.sourceId = st.nodes[0]?.id || null;

    Utils.recomputeAndRender();
    window.dispatchEvent(new CustomEvent('graph-changed'));
  });

  svg.style.userSelect="none";
  svg.style.pointerEvents="auto";
})();
