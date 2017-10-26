var materias = [
    { nombre: 'Tecnologias web', creditos: 0, optativa: true },
    { nombre: 'Pensamiento computacional', creditos: 10, optativa: false },
    { nombre: 'Compiladores A', creditos: 10, optativa: false },
    { nombre: 'Compiladores B', creditos: 10, optativa: false },
    { nombre: 'Programacion visual', creditos: 10, optativa: false },
    { nombre: 'Humanidades B', creditos: 3, optativa: true },
    { nombre: 'Seminario Integrador 4', creditos: 1, optativa: false }
];

var button = document.getElementById('buttonBuscar');
var textBox = document.getElementById('textBuscar');
var tipBusq = document.getElementById('tipBusq');
var tabla = document.getElementById('tabla');
var nombre = document.getElementById('nombre');
var creditos = document.getElementById('creditos');
var optativa = document.getElementById('optativa');
var textBuscar = document.getElementById('textBuscar');

muestraMaterias();
indexaMaterias();

nombre.addEventListener('click', function(evento) {
    limpiarTabla();
    materias.sort(comparaNombre);
    indexaMaterias();
});

creditos.addEventListener('click', function(evento) {
    limpiarTabla();
    materias.sort(comparaCredito);
    indexaMaterias();
});

optativa.addEventListener('click', function(evento) {
    limpiarTabla();
    materias.sort(comparaOptativa);
    indexaMaterias();
});

textBuscar.addEventListener('keyup', function(evento) {
    busqueda();
});

button.addEventListener('click', function(evento) {
    busqueda();
});

function busqueda() {
    var textBusq = textBox.value;
    var tipo = tipBusq.options[tipBusq.selectedIndex].value;
    limpiarTabla();

    switch (tipo) {
        case 'Nombre':
            mostrarBusqueda(buscarMateriaNombre(textBusq));
            break;
        case 'Creditos':
            mostrarBusqueda(buscarMateriaCreditos(textBusq));
            break;
        case 'Optativa':
            mostrarBusqueda(buscarMateriaOptativa(textBusq));
            break;
    }
}

function comparaNombre(materia1, materia2) {
    if (materia1.nombre === materia2.nombre) return 0;
    else if (materia1.nombre < materia2.nombre) return -1;
    else return 1;
}

function comparaCredito(materia1, materia2) {
    if (materia1.creditos === materia2.creditos) return 0;
    else if (materia1.creditos < materia2.creditos) return 1;
    else return -1;
}

function comparaOptativa(materia1, materia2) {
    return materia1.optativa - materia2.optativa;
}

function mostrarBusqueda(materiasFound) {
    materiasFound.forEach(function(mat) {
        tabla.appendChild(creaRenglon(mat));
    });
}

function limpiarTabla() {
    var nodosTabla = tabla.childNodes;
    var nodosEliminar = [];
    nodosTabla.forEach(function(nodo) {
        if (nodo.localName === 'tr') {
            nodosEliminar.push(nodo);
        }
    });
    nodosEliminar.forEach(function(nodo) {
        tabla.removeChild(nodo);
    });
}

function buscarMateriaNombre(nombre) {
    var busExpReg = new RegExp(nombre, 'i');
    var materiasFound = [];
    materias.forEach(function(mat) {
        if (busExpReg.test(mat.nombre)) {
            materiasFound.push(mat);
        }
    });
    return materiasFound;
}

function buscarMateriaCreditos(creditos) {
    var materiasFound = [];
    materias.forEach(function(mat) {
        if (mat.creditos == creditos) {
            materiasFound.push(mat);
        }
    });
    return materiasFound;
}

function buscarMateriaOptativa(optativa) {
    var materiasFound = [];

    materias.forEach(function(mat) {
        if ((mat.optativa ? 'si' : 'no') === optativa.toLowerCase()) {
            materiasFound.push(mat);
        }
    });
    return materiasFound;
}

function indexaMaterias() {
    materias.forEach(function(mat) {
        tabla.appendChild(creaRenglon(mat));
    });
}

function creaRenglon(mat) {
    var encabezado = document.createElement('tr');

    var nombre = document.createElement('td');
    var textoNombre = document.createTextNode(mat.nombre);
    nombre.appendChild(textoNombre);

    var creditos = document.createElement('td');
    var textoCreditos = document.createTextNode(mat.creditos);
    creditos.appendChild(textoCreditos);

    var optativa = document.createElement('td');
    var textoOptativa = document.createTextNode(mat.optativa ? 'Si' : 'No');
    optativa.appendChild(textoOptativa);

    encabezado.appendChild(nombre);
    encabezado.appendChild(creditos);
    encabezado.appendChild(optativa);

    return encabezado;
}

function muestraMaterias() {
    console.log('For-normal');
    for (var i = 0; i < materias.length; i++) {
        console.log('Nombre: ' + materias[i].nombre);
        console.log('Creditos: ' + materias[i].creditos);
        console.log('Optativa: ' + materias[i].optativa);
    }
    console.log('forEach');
    materias.forEach(function(mat) {
        console.log('Nombre: ' + mat.nombre);
        console.log('Creditos: ' + mat.creditos);
        console.log('Optativa: ' + mat.optativa ? 'Si' : 'No');
    });
}

function obtenerTR() {
    var nodosTabla = tabla.childNodes;
    var nodosSalvados = [];
    var materiasEnDisplay = [];
    nodosTabla.forEach(function(nodo) {
        if (nodo.localName === 'tr') {
            nodosSalvados.push(nodo);
        }
    });

    nodosSalvados.forEach(function(nodos) {
        var trs = nodos.childNodes;
    });
}