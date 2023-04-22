$(document).ready(function() {
    let inputResultado = $('#resultado');
    let operacion = '';
    let numero1 = '';
    let numero2 = '';
  
    function actualizarPantalla() {
        inputResultado.val(numero1 + (operacion ? ' ' + operacion + ' ' : '') + numero2);
    }
  
    $('.btn').on('click', function() {
        let numero = $(this).data('numero');
        let accion = $(this).data('accion');
  
        if (numero !== undefined) {
            if (operacion === '') {
                numero1 += numero;
            } else {
                numero2 += numero;
            }
            actualizarPantalla();
        }