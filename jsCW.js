function calcularEdad() {
    var edadGato = document.getElementById("edadGato").value;

    if (edadGato <= 0) {
        alert("Por favor, ingrese un número positivo para la edad del gato.");
        return;
    }

    var edadHumanaAnos = 0;
    var edadHumanaMeses = 0;

    if (edadGato == 1) {
        edadHumanaAnos = 15;
        edadHumanaMeses = 15;
    } else if (edadGato == 2) {
        edadHumanaAnos = 24;
        edadHumanaMeses = 24;
    } else {
        edadHumanaAnos = 24 + (edadGato - 2) * 4;
        edadHumanaMeses = edadHumanaAnos * 12;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>La edad del gato es aproximadamente " + edadHumanaAnos + " anos humanos</p>";
}
