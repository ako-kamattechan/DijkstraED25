var respuestas = [];
var correctas = [];
var aciertos;
var preguntas = [];
var calif = false;

function Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, res, state) {
    this.pregunta = pregunta;
    this.respuesta1 = respuesta1;
    this.respuesta2 = respuesta2;
    this.respuesta3 = respuesta3;
    this.respuesta4 = respuesta4;
    this.res = res;
    this.state = state;
};

function cuestionario() {
    for (n = 0; n < 10; n++) {
        i = Math.floor(Math.random() * preguntas.length);
        ;
        while (preguntas[i].state == false) {
            i = Math.floor(Math.random() * preguntas.length);
            ;
        }
        document.write("<div class='pregunta'>");
        document.write("<h2>" + (n + 1) + ". " + preguntas[i].pregunta + "</h2><table><tbody>");
        document.write("<tr><td><input type='radio' name='p" + i + "' value=0 onclick='respuesta(" + n + "," + 0 + ")'>" + preguntas[i].respuesta1 + "</td><td><input type='radio' name='p" + i + "' value=1 onclick='respuesta(" + n + "," + 1 + ")'>" + preguntas[i].respuesta2 + "</td>");
        document.write("<tr><td><input type='radio' name='p" + i + "' value=2 onclick='respuesta(" + n + "," + 2 + ")'>" + preguntas[i].respuesta3 + "</td><td><input type='radio' name='p" + i + "' value=3 onclick='respuesta(" + n + "," + 3 + ")'>" + preguntas[i].respuesta4 + "</td>");
        document.write('</tr></tbody></table></div>');
        correctas[n] = preguntas[i].res;
        preguntas[i].state = false;
    }
};

preguntas[0] = new Pregunta("¿Qué tipo de grafo puede ser resuelto por el algoritmo de Dijkstra? (01)", "Grafo no dirigido", "Grafo dirigido con pesos negativos", "Grafo con ciclos negativos", "Grafo conexo y ponderado", 3, true);
preguntas[1] = new Pregunta("¿Qué estructura de datos se utiliza en el algoritmo de Dijkstra para llevar un registro de los vértices visitados? (02)", "Pila", "Cola", "Set", "Heap", 3, true);
preguntas[2] = new Pregunta("¿Cuál es el objetivo del algoritmo de Dijkstra? (03)", "Encontrar la ruta más corta entre dos vértices en un grafo ponderado", "Encontrar el camino más largo entre dos vértices en un grafo ponderado", "Encontrar todos los caminos posibles entre dos vértices en un grafo ponderado", "Encontrar la ruta más corta entre un vértice origen y todos los demás vértices en un grafo ponderado", 3, true);
preguntas[3] = new Pregunta("¿Cuál es el tiempo de complejidad del algoritmo de Dijkstra? (04)", "O(V+E)", "O(V log V)", "O(E log V)", "O(V²)", 3, true);
preguntas[4] = new Pregunta("¿Qué algoritmo es similar al algoritmo de Dijkstra, pero es más rápido en grafos densos? (05)", "Algoritmo_01 de Bellman-Ford", "Algoritmo_01 de Floyd-Warshall", "Algoritmo_01 de Prim", "Algoritmo_01 de Johnson", 3, true);
preguntas[5] = new Pregunta("¿Cuál es la principal desventaja del algoritmo de Dijkstra? (06)", "No siempre encuentra la ruta más corta", "Es muy lento en grafos densos", "Requiere que los pesos de las aristas sean no negativos", "Solo funciona en grafos conexos", 2, true);
preguntas[6] = new Pregunta("¿Qué hace el algoritmo de Dijkstra si encuentra una arista con un peso negativo? (07)", "Continúa su ejecución normalmente", "Termina la ejecución y devuelve un error", "Corrige el peso de la arista y continua su ejecución", "No funciona en grafos con pesos negativos", 3, true);
preguntas[7] = new Pregunta("¿Qué es la lista de prioridad utilizada en el algoritmo de Dijkstra? (08)", "Una lista que mantiene los vértices visitados", "Una lista que mantiene la distancia más corta conocida desde el origen a cada vértice", "Una lista que mantiene los vértices por visitar", "Una cola de prioridad que mantiene los vértices por visitar, ordenados por su distancia desde el origen", 3, true);
preguntas[8] = new Pregunta("¿Qué tipo de búsqueda utiliza el algoritmo de Dijkstra? (09)", "Búsqueda en profundidad", "Búsqueda en anchura", "Búsqueda de costo uniforme", "No utiliza una búsqueda específica", 3, true);
preguntas[9] = new Pregunta("¿Cuál es el mejor caso de complejidad del algoritmo de Dijkstra? (10)", "O(V)", "O(E)", "O(1)", "O(log V)", 3, true);
preguntas[10] = new Pregunta("¿Cómo se inicializan las distancias en el algoritmo de Dijkstra? (11)", "Todas las distancias se inicializan en cero", "Todas las distancias se inicializan en infinito", "Las distancias de los vértices adyacentes al origen se inicializan en cero, y las demás en infinito", "Las distancias se inicializan con valores aleatorios", 3, true);
preguntas[11] = new Pregunta("¿Cuál es el nombre del paso donde se actualizan las distancias mínimas en el algoritmo de Dijkstra? (12)", "Paso de inicialización", "Paso de selección", "Paso de relajación", "Paso de terminación", 2, true);
preguntas[12] = new Pregunta("¿Qué es una cota inferior en el contexto del algoritmo de Dijkstra? (13)", "La distancia entre un vértice y su vecino más cercano", "La distancia más corta conocida desde el origen a un vértice", "Una estimación conservadora de la distancia más corta desde el origen a un vértice, que se utiliza para ordenar la lista de prioridad", "Un límite superior para la distancia entre dos vértices", 2, true);
preguntas[13] = new Pregunta("¿Qué es una cola de Fibonacci? (14)", "Una estructura de datos utilizada para mantener los vértices visitados", "Una estructura de datos utilizada para mantener las distancias más cortas conocidas", "Una estructura de datos utilizada para mantener los vértices por visitar", "Una estructura de datos utilizada para implementar la lista de prioridad en el algoritmo de Dijkstra", 3, true);
preguntas[14] = new Pregunta("¿Qué es la complejidad espacial del algoritmo de Dijkstra? (15)", " O(V+E)", "O(V log V)", "O(E log V)", "O(V)", 3, true);
preguntas[15] = new Pregunta("¿Qué es el camino más corto en el contexto del algoritmo de Dijkstra? (16)", "Un camino que visita todos los vértices del grafo", "Un camino que visita los vértices más cercanos al origen", "Un camino que visita los vértices en orden lexicográfico", "Un camino que visita los vértices más cercanos al origen y cuya longitud es la menor posible", 3, true);
preguntas[16] = new Pregunta("¿Qué es la matriz de adyacencia en el contexto del algoritmo de Dijkstra? (17)", "Una matriz que contiene la distancia más corta conocida desde el origen a cada vértice", "Una matriz que contiene los vértices adyacentes a cada vértice", "Una matriz que contiene los pesos de las aristas entre cada par de vértices", "Una matriz que contiene la distancia entre cada par de vértices", 2, true);
preguntas[17] = new Pregunta("¿Qué es una arista negativa en el contexto del algoritmo de Dijkstra? (18)", "Una arista cuyo peso es cero", "Una arista cuyo peso es menor que cero", "Una arista cuyo peso es mayor que cero", "Una arista que no tiene peso", 3, true);
preguntas[18] = new Pregunta("¿Por qué el algoritmo de Dijkstra no funciona en grafos con aristas negativas? (19)", "Porque el algoritmo utiliza una cota inferior que no puede ser negativa", "Porque el algoritmo utiliza una cola de prioridad que no puede manejar valores negativos", "Porque el algoritmo no puede garantizar que el camino más corto no pase por una arista negativa", "Porque el algoritmo no puede manejar ciclos negativos", 2, true);
preguntas[19] = new Pregunta("¿Cuál es la complejidad temporal del algoritmo A* en el peor caso? (20)", "O(V+E)", "O(V log V)", "O(E log V)", "Depende de la calidad de la heurística utilizada y del tamaño del grafo", 3, true);
preguntas[20] = new Pregunta("¿Qué son los grafos y dígrafos y cómo se utilizan en informática? (21)", "Son estructuras de datos que implementan el grafo o el dígrafo ADT y se utilizan para modelar problemas en informática", "Son estructuras de datos que implementan el grafo o el dígrafo ADT y se utilizan para modelar problemas en matemáticas", "Son estructuras de datos que implementan el grafo o el dígrafo ADT y se utilizan para modelar problemas en física.", "Son estructuras de datos que implementan el grafo o el dígrafo ADT y se utilizan para modelar problemas en química.", 0, true);
preguntas[21] = new Pregunta("¿Qué papel desempeñan los grafos y dígrafos en Internet y las redes de comunicación? (22)", "No tienen ningún papel en Internet y las redes de comunicación.", "Desempeñan un papel importante en la estructura subyacente de estas redes y se utilizan para modelarlas.", "Desempeñan un papel importante en la comunicación de datos en estas redes.", "Desempeñan un papel secundario en la estructura subyacente de estas redes.", 1, true);
preguntas[22] = new Pregunta("¿Qué problemas fundamentales para grafos ponderados con amplias aplicaciones se mencionan en el texto? (23)", "El problema del árbol mínimo y el problema del camino más largo.", "El problema del árbol máximo y el problema del camino más largo.", "El problema del árbol mínimo y el problema del camino más corto.", "El problema del árbol máximo y el problema del camino más corto", 2, true);
preguntas[23] = new Pregunta("¿Qué es el peso de un árbol de expansión? (24)", "La suma de los pesos de las aristas del grafo G", "La suma de los pesos de las aristas del árbol de expansión T", "La multiplicación de los pesos de las aristas del grafo G", "La multiplicación de los pesos de las aristas del árbol de expansión T", 1, true);
preguntas[24] = new Pregunta("¿Qué es un árbol de expansión mínima? (25)", "Un árbol de expansión que tiene un peso mínimo sobre todos los árboles de expansión de G.", "Un árbol de expansión que tiene un peso máximo sobre todos los árboles de expansión de G.", "Un árbol de expansión que tiene el mismo peso que todos los árboles de expansión de G.", "Un árbol de expansión que no tiene peso.", 0, true);
preguntas[25] = new Pregunta("¿Por qué es inviable una búsqueda enumerativa por fuerza bruta para encontrar árboles de expansión en grafos? (26)", "Porque el número de árboles de expansión suele ser muy pequeño, incluso para grafos grandes.", "Porque el número de árboles de expansión suele ser muy grande, incluso para grafos pequeños.", "Porque no es posible hacer una búsqueda enumerativa por fuerza bruta en grafos.", "Porque la búsqueda enumerativa por fuerza bruta es el método más eficiente para encontrar árboles de expansión en grafos.", 1, true);
preguntas[26] = new Pregunta("¿Qué algoritmo se estudiará en esta sección para determinar la trayectoria más corta entre dos vértices en una gráfica ponderada? (27)", "Algoritmo_01 de Kruskal", "Algoritmo_01 de Prim", "Algoritmo_01 de Dijkstra", "Algoritmo_01 de Floyd-Warshall", 2, true);
preguntas[27] = new Pregunta("¿Qué algoritmo se puede utilizar para encontrar el camino más corto entre dos ciudades en un mapa de carreteras ponderado? (28)", "Algoritmo_01 de búsqueda en amplitud", "Algoritmo_01 de búsqueda en profundidad", "Algoritmo_01 de Floyd", "Algoritmo_01 de Dijkstra\n", 2, true);
preguntas[28] = new Pregunta("¿Por qué no se pueden utilizar los algoritmos de búsqueda en amplitud y búsqueda en profundidad directamente en un grafo ponderado? (29)", "Porque suponen que todas las aristas del grafo tienen un costo de 1", "Porque son ineficientes en grafos ponderados", "Porque solo funcionan en grafos no ponderados", "Porque solo encuentran caminos más cortos entre nodos adyacentes", 0, true);
preguntas[29] = new Pregunta("¿Qué es necesario hacer antes de encontrar la longitud del camino mínimo desde un nodo hasta otro en un grafo ponderado? (30)", "Generar las longitudes de los caminos mínimos desde cada nodo hasta todos los demás nodos del grafo", "Seleccionar el nodo final vn y darle el valor cero a la distancia más corta desde ese nodo hasta sí mismo", "Seleccionar el nodo inicial v1 y darle el valor cero a la distancia más corta desde ese nodo hasta sí mismo", "Ignorar todos los nodos que están más alejados de v1", 0, true);
preguntas[30] = new Pregunta("¿Qué es el conjunto S en el algoritmo de Dijkstra? (31)", "El conjunto de nodos que se han encontrado sucesivamente más alejados de v1 y se han ignorado en cuanto a su distancia mínima a v1", "El conjunto de nodos que están inmediatamente más próximos a vn", "El conjunto de nodos que están inmediatamente más próximos a v1", "El conjunto de nodos que no se han visitado aún en el algoritmo de Dijkstra", 0, true);
preguntas[31] = new Pregunta("¿Qué es el algoritmo de Floyd y en qué se basa? (32)", "Es un algoritmo para hallar el camino más corto en un grafo y se basa en la representación matricial de una lista de adyacencia del grafo.", "Es un algoritmo para hallar todas las distancias más cortas y todos los caminos de un grafo y se basa en una representación de matriz de adyacencia del grafo.", "Es un algoritmo para hallar el camino más corto en un grafo y se basa en la representación matricial de un grafo denso.", "Es un algoritmo para hallar todas las distancias más cortas y todos los caminos de un grafo y se basa en una representación de matriz de incidencia del grafo.", 1, true);
preguntas[32] = new Pregunta("¿Por qué las búsquedas en amplitud y en profundidad no son utilizables directamente para encontrar el camino más corto en un grafo ponderado? (33)", "Porque suponen que todos las aristas del grafo tienen un coste de 1.", "Porque no son capaces de manejar grafos densos.", "Porque no están diseñadas para trabajar con grafos ponderados.", "Porque solo son útiles para encontrar el camino más corto desde el nodo inicial hasta un único nodo destino.", 0, true);
preguntas[33] = new Pregunta("¿Cuál es la ventaja del enfoque de Dijkstra en comparación con el algoritmo de Floyd para grafos dispersos? (34)", "Es más fácil de implementar.", "Es capaz de manejar grafos densos.", "Es más rápido en términos de análisis temporal.", "Es capaz de encontrar todos los caminos de un grafo.", 2, true);
preguntas[34] = new Pregunta("¿Qué sucede si no hay ningún camino desde v1 hasta un cierto nodo en el enfoque de Dijkstra? (35)", "La distancia actual de ese nodo se establece en cero.", "La distancia actual de ese nodo se establece en infinito.", "El algoritmo Dijkstra deja de funcionar.", "El algoritmo de Floyd se utiliza en su lugar.", 1, true);
preguntas[35] = new Pregunta("¿Qué es un grafo ponderado? (36)", "Un grafo en el que todos los vértices tienen el mismo peso.", "Un grafo en el que cada vértice tiene un peso diferente.", "Un grafo en el que todas las aristas tienen el mismo peso.", "Un grafo en el que cada arista tiene un peso diferente.", 3, true);
preguntas[36] = new Pregunta("¿Cómo se asignan las etiquetas a los vértices en el algoritmo de Dijkstra? (37)", "Por orden alfabético.", "Por orden de llegada.", "Por medio de un procedimiento iterativo.", "Al azar.", 2, true);
preguntas[37] = new Pregunta("¿Cuál es el conjunto V1 en la primera iteración del algoritmo de Dijkstra? (38)", "V0 - { vd}", "V0 + { vd}", "V0 x { vd}", "V0 / { vd}", 0, true);
preguntas[38] = new Pregunta("¿Cómo se identifica la trayectoria más corta en el algoritmo de Dijkstra? (39)", "Yendo de atrás hacia delante desde el vértice inicial hasta el vértice final.", "Yendo de atrás hacia delante desde el vértice final hasta el vértice inicial.", "Yendo de adelante hacia atrás desde el vértice inicial hasta el vértice final.", "Yendo de adelante hacia atrás desde el vértice final hasta el vértice inicial.", 1, true);
preguntas[39] = new Pregunta("¿Qué es lo que busca el algoritmo de Dijkstra en una gráfica ponderada? (40)", "La trayectoria más larga entre dos vértices.", "La trayectoria más corta entre dos vértices.", "El número de vértices en la gráfica.", "La cantidad de aristas en la gráfica", 1, true);
preguntas[40] = new Pregunta("¿Qué representa la etiqueta temporal de un vértice en el algoritmo de Dijkstra? (41)", "La longitud de la trayectoria más corta hasta el vértice", "La longitud de la trayectoria más larga hasta el vértice", "La cantidad de aristas hasta el vértice", "Ninguna de las anteriores", 3, true);
preguntas[41] = new Pregunta("¿En qué consiste la iteración inicial del algoritmo de Dijkstra? (42)", "Asignar etiquetas permanentes a todos los vértices de la gráfica", "Asignar etiquetas temporales a todos los vértices de la gráfica", "Asignar etiqueta permanente al vértice inicial y etiquetas temporales a todos los demás ", "Ninguna de las anteriores", 2, true);
preguntas[42] = new Pregunta("¿Qué sucede en cada iteración del algoritmo de Dijkstra? (43)", "Se revisan las etiquetas permanentes de los vértices y se actualizan las temporales", "Se revisan las etiquetas temporales de los vértices y se actualizan si es necesario.", "Se eliminan vértices de la gráfica", "Ninguna de las anteriores", 1, true);
preguntas[43] = new Pregunta("¿Cómo se determina la longitud de la trayectoria más corta entre dos vértices en el algoritmo de Dijkstra? (44)", "Se suman los pesos de todas las aristas en la trayectoria más corta.", "Se toma la etiqueta permanente del vértice final.", "Se va de atrás hacia delante desde el vértice final, incluyendo aquellos vértices etiquetados permanentemente.", "Ninguna de las anteriores.", 2, true);
preguntas[44] = new Pregunta("¿Qué sucede si un vértice no alcanzable tiene una etiqueta temporal diferente de infinito? (45)", "Se considera como un error en el algoritmo.", "Se considera como un vértice aislado.", "Se considera como un vértice no alcanzable y se ignora en la búsqueda de la trayectoria más corta.", "Ninguna de las anteriores.", 2, true);
preguntas[45] = new Pregunta("¿Qué es el peso de una arista en el contexto del algoritmo de Dijkstra? (46)", "El número de vértices que conecta la arista.", "La longitud de la arista medida en unidades de tiempo.", "El costo asociado a recorrer esa arista.", "Ninguna de las anteriores.", 2, true);
preguntas[46] = new Pregunta("¿Cuál es la complejidad temporal del algoritmo de Dijkstra para grafos densos? (47)", "O(n log n)", "O(n^2)", "O(n^3).", "O(2^n).", 1, true);
preguntas[47] = new Pregunta("¿Cómo se identifica la trayectoria más corta en el algoritmo de Dijkstra? (48)", "Se sigue la ruta de etiquetas permanentes desde el vértice final hasta el inicial.", "Se sigue la ruta de etiquetas temporales desde el vértice inicial hasta el final.", "Se sigue la ruta de etiquetas permanentes desde el vértice inicial hasta el final.", "Ninguna de las anteriores.¿Qué sucede si un vértice no alcanzable tiene una etiqueta temporal diferente de infinito?.", 2, true);
preguntas[48] = new Pregunta("¿Cuál es la principal ventaja del algoritmo de Dijkstra sobre el algoritmo de Bellman-Ford? (49)", "Mayor precisión en la determinación de la trayectoria más corta.", "Menor complejidad temporal en grafos densos.", "Capacidad para manejar grafos con ciclos negativos.", "Ninguna de las anteriores.", 1, true);
preguntas[49] = new Pregunta("¿Cuál es la complejidad temporal del algoritmo de Dijkstra en el peor de los casos para encontrar la ruta más corta entre dos vértices en una gráfica ponderada con V vértices y E aristas? (50)", "O(V log V)", "O(E log V)", "O(V^2)", "O(E + V log V)", 3, true);

cuestionario();

function respuesta(n_pregunta, r) {
    respuestas[n_pregunta] = r;
}

function calificar() {
    if (calif == false) {
        aciertos = 0;
        for (i = 0; i < correctas.length; i++) {
            if (correctas[i] == respuestas[i]) {
                aciertos++;
            }
        }
        calif = true;
        document.getElementById("resultado").innerHTML = aciertos;
    } else {
        document.getElementById("resultado").innerHTML = aciertos + "<br>(Reintentar)";
    }
};