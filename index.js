function Turno(paciente, fecha, hora) {
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
}
// Array 
var turnos = [];
// Función para agendar un turno
function agendarTurno() {
    var paciente = prompt("Ingrese el nombre del paciente:");
    var fecha = prompt("Ingrese la fecha del turno (formato: DD/MM/AAAA):");
    var hora = prompt("Ingrese la hora del turno (formato: HH:MM):");

    // Date
    var partesFecha = fecha.split("/");
    var fechaTurno = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]); // Año, mes (restamos 1 porque los meses van de 0 a 11), día

    var nuevoTurno = new Turno(paciente, fechaTurno, hora);

    turnos.push(nuevoTurno);
}

function mostrarTurnos() {
    var container = document.getElementById('turnos-container');
    container.innerHTML = '';

    turnos.forEach(function(turno, indice) {
        var turnoHtml = document.createElement('p');
        turnoHtml.textContent = "Turno " + (indice + 1) + " - Paciente: " + turno.paciente + ", Fecha: " + turno.fecha.toLocaleDateString() + ", Hora: " + turno.hora;
        container.appendChild(turnoHtml);
    });
}

document.getElementById('agregar-turno-btn').addEventListener('click', function() {
    agendarTurno();
});

document.getElementById('mostrar-turnos-btn').addEventListener('click', function() {
    mostrarTurnos();
});



