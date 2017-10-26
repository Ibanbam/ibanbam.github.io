var formulario = document.getElementById('formulario');
var mensajeErrorNom = document.getElementById('errorNom');
var mensajeSeg = document.getElementById('seguridad');
var mensajePassError = document.getElementById('passError');
var mensajeAceptar = document.getElementById('aceptarTerm');

formulario.addEventListener('keyup', function(evento){
    verificaContraseña();
});

formulario.usName.addEventListener('blur', function(evento){
    verificaNombre();
});

formulario.pass2.addEventListener('blur',function(evento){
    verificaSecondPass();
});

formulario.addEventListener('submit',function(evento){
    if(verificaContraseña() && verificaNombre() && verificaSecondPass() && verificaTerminos())
    {
       
    }
    else
    {
        
        evento.preventDefault();
    }
});

function verificaNombre(){
    var expRegAlf = (/[a-z]/);//Ignora mayusculas y minusculas
    if(expRegAlf.test(formulario.usName.value.charAt(0))){
        mensajeErrorNom.innerHTML = 'Nombre de usuario valido';
        mensajeErrorNom.classList.add('colorVerde');
        return true;
    }
    else{
        mensajeErrorNom.innerHTML = 'El nombre de usuario debe iniciar con minuscula o letra';
        mensajeErrorNom.classList.add('colorRojo');
        return false;
    }
}

function verificaContraseña(){
    var letras = (/[a-z]/i).test(formulario.pass.value);
    var numeros = (/[0-9]/).test(formulario.pass.value);
    var simbolos = (/[!"#%&()]/).test(formulario.pass.value);
    if(letras && numeros && simbolos)
    {
        mensajeSeg.innerHTML = 'Nivel de seguridad alto';
        mensajeSeg.classList.add('colorVerde');
    }
    else if(letras && numeros){
        mensajeSeg.innerHTML = 'Nivel de seguridad medio';
        mensajeSeg.classList.add('colorAmarillo');
    }
    else if(letras){
        mensajeSeg.innerHTML = 'Nivel de seguridad bajo';
        mensajeSeg.classList.add('colorRojo');
    }
}

function verificaSecondPass(){
    if(formulario.pass.value === formulario.pass2.value)
    {
        mensajePassError.innerHTML = 'Las contraseñas coinciden';
        mensajePassError.classList.add('colorVerde');
        return true;
    }
    else
    {
        mensajePassError.innerHTML = 'La contraseña no coincide';
        mensajePassError.classList.add('colorRojo');
        return false;
    }
}