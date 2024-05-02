// Bloque de codigo que hace que cuando el cursor encuentre un elemento de lista
// dentro de del menu, lo despliega mostrando un submenu. 
// tambien lo cierra cuendo el cursor sale del elemento de la lista.
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos de lista dentro del menú
    const menuItems = document.querySelectorAll(".menu li");

    // Itera sobre cada elemento de lista
    menuItems.forEach(item => {
        // Añade un evento para cuando el cursor entra en un elemento de lista
        item.addEventListener("mouseenter", function() {
            // Busca el elemento secundario "submenu" dentro del elemento de lista actual
            const submenu = this.querySelector(".submenu");
            // Si se encuentra el "submenu", muestra el menú desplegable
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        // Añade un evento para cuando el cursor sale de un elemento de lista
        item.addEventListener("mouseleave", function() {
            // Busca el elemento secundario "submenu" dentro del elemento de lista actual
            const submenu = this.querySelector(".submenu");
            // Si se encuentra el "submenu", oculta el menú desplegable
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});







//Calculadora.
// Obtiene la referencia al elemento HTML con el id "op1"
const txtOp1 = document.getElementById("op1")
// Obtiene la referencia al elemento HTML con el id "operador"
const txtOperador = document.getElementById("operador")
// Obtiene la referencia al elemento HTML con el id "op2"
const txtOp2 = document.getElementById("op2")
// Obtiene la referencia al elemento HTML con el id "calcular"
const btnCalcular = document.getElementById("calcular")
// Obtiene la referencia al elemento HTML con el id "resultado"
const pResultado = document.getElementById("resultado")

// Añade un evento de clic al botón "calcular" que llamará a la función "calcular"
btnCalcular.addEventListener("click", calcular)

// Definición de la función "calcular"
function calcular () {
    // Obtiene el valor del operador ingresado por el usuario
    const operacion = txtOperador.value
    // Convierte el primer operando a un número de punto flotante
    const op1 = parseFloat(txtOp1.value)
    // Convierte el segundo operando a un número de punto flotante
    const op2 = parseFloat(txtOp2.value)

    // Verifica si la operación es válida y los operandos son números
    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)) {

        // Variable para almacenar el resultado de la operación
        let resultado;
        // Realiza la operación según el operador ingresado
        switch(operacion) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }

        // Establece el color del texto del elemento "resultado" a negro
        pResultado.style = "color:black"
        // Asigna el resultado al elemento "resultado"
        pResultado.innerText = "= " + resultado;
    }else{
        // Si la operación no es válida o los operandos no son números, establece el color del texto del elemento "resultado" a rojo
        pResultado.style = "color:red"
        // Muestra un mensaje de "cálculo imposible" en el elemento "resultado"
        pResultado.innerText = "calculo imposible"
    }
}








// Agraga la funcion de click sobre cada proyecto, y ubtiene su nombre previo
// a la apertura del mismo en una ventana emergente
document.addEventListener("DOMContentLoaded", function() {
    // Selector para los enlaces de los proyectos dentro del menú desplegable
    const projectLinks = document.querySelectorAll(".submenu .proyectos");

    // Agregar evento de clic a cada enlace de proyecto
    projectLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace cambie la URL
            const projectName = this.innerText.trim(); // Obtiene el nombre del proyecto
            openProject(projectName); // Llama a la función para abrir el proyecto correspondiente
        });
    });
});

// Función para abrir el proyecto en una ventana emergente
function openProject(projectName) {
    // Abre una nueva ventana emergente según el nombre del proyecto
    switch (projectName) {
        case "Calculadora":
            openCalculator();
            break;
        case "Juego de la Serpiente":
            openSnakeGame();
            break;
        // Agrega casos para otros proyectos si es necesario
    }
}

// Función para abrir la calculadora en una ventana emergente
function openCalculator() {
    const popup = window.open("", "Calculator", "width=400,height=400");
    const calculatorContent = document.getElementById("calculadoraOculta").innerHTML;
    popup.document.write(calculatorContent);
    const script = popup.document.createElement("script");
    script.src = "script.js";
    popup.document.body.appendChild(script);
}

// Función para abrir el juego de la serpiente en una ventana emergente
function openSnakeGame() {
    // Lógica para abrir el juego de la serpiente en una ventana emergente
    // Puedes adaptar esta función según el contenido del juego de la serpiente
    alert("Abriendo juego de la serpiente...");
}








