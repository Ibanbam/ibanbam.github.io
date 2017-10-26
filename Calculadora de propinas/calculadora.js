var btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click',function(){
    var propina = document.getElementById('propina');
    var propinaPersona = calcularPropina();
    propina.innerHTML = 'Propina $' + propinaPersona + ' por persona';
});

function calcularPropina(){
    var formCalculadora = document.getElementById('calculadora');
    var cuenta = parseFloat(formCalculadora.total.value);
    var nPersonas = parseInt(formCalculadora.personas.value);
    var calServicio = parseInt(formCalculadora.servicio.value);

    if(Number.isNaN(nPersonas)){

    }
    return cuenta/nPersonas*calServicio/100;
}
