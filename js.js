function Comoa(){

    document.getElementById('ca').innerHTML = " Para alimentar a un gato se recomienda: alternar alimento seco con alimento humedo, servir la comida en un lugar tranquilo y lejos de la caja de arena, utilizar un recipiente de metal o de ceramica, establecer un horario para darle una porcion de aliemnto humedo, no darle leche, no darle sobras de comida humana, ofrecer aliemntos frescos o humedos para mantenerlo hidatrado, elaborar comida casera, siguiendo las indicaciones del veterinario para asegurarnos de que ofrecemos todos los nutrientes.";



}

function Comol(){

    document.getElementById('cl').innerHTML = " Para limpiar a un gato sin bañarlo con agua necesitas: cepillo para el pelo; busca uno que te guste y le sea confortable. Cortauñas; asegurate de no cortarlas demasiado, recorta solamente las puntas para que no queden tan puntiagudas. Champu en seco para gatos: son productos en polvo o aerosol que ayudan a absorber el exceso de grasa y la suciedad del pelaje de tu gato.";



}

function Comoe(){

    document.getElementById('ce').innerHTML = " Comida adecuada: Proporciona alimentos específicamente formulados para gatos, ya sea en forma de comida seca, húmeda o una combinación de ambas. Horarios regulares**: Establece horarios fijos para las comidas, preferiblemente dos veces al día para adultos y más frecuentemente para gatitos. Agua fresca**: Asegúrate de que siempre tenga acceso a agua fresca y limpia. Porciones controladas**: No sobrealimentes a tu gato. Sigue las pautas de alimentación recomendadas en el envase de la comida y ajusta según las necesidades de tu mascota. Evita alimentos peligrosos**: Algunos alimentos humanos pueden ser tóxicos para los gatos, como el chocolate, la cebolla y el ajo. Evita darles estos alimentos. Visitas regulares al veterinario**: Consulta con un veterinario para determinar las necesidades nutricionales específicas de tu gato y cualquier problema de salud relacionado con la alimentación. Siguiendo estas pautas, puedes asegurarte de que tu gato esté bien alimentado y saludable.";



}

function calcularEdad() {
    var edadGato = document.getElementById("edadGato").value;

    if (edadGato <= 0) {
        alert("Por favor, ingrese un número positivo para la edad del gato.");
        return;
    }

    var edadHumanaAños = 0;
    var edadHumanaMeses = 0;

    if (edadGato == 1) {
        edadHumanaAños = 15;
        edadHumanaMeses = 15;
    } else if (edadGato == 2) {
        edadHumanaAños = 24;
        edadHumanaMeses = 24;
    } else {
        edadHumanaAños = 24 + (edadGato - 2) * 4;
        edadHumanaMeses = edadHumanaAños * 12;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>La edad del gato es aproximadamente " + edadHumanaAños + " años humanos</p>";
}
