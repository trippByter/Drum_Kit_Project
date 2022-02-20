// Seleccionamos un elemento del html (button)
// se agrega el escuchador de eventos click
// cuando sucede, llama a la función 'handleClick'
// document.querySelector("button").addEventListener("click", handleClick);
// Funcion q retorna un alert
// cuando de hace click
// function handleClick(){
//     alert("I got clicked !");
// }

// Número total de elementos que contienen la clase '.drum'
var number_of_drum_buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < number_of_drum_buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got clicked !");
    });
}