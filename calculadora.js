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
        
        else if (accion !== undefined) {
            switch (accion) {
                case 'suma':
                    operacion = '+';
                    break;
                case 'resta':
                    operacion = '-';
                    break;
                case 'multiplica':
                    operacion = '*';
                    break;
                case 'divide':
                    operacion = '/';
                    break;
                case 'limpiar':
                    operacion = '';
                    numero1 = '';
                    numero2 = '';
                    inputResultado.val('');
                    break;
                case 'igual':
                    if (numero1 !== '' && numero2 !== '') {
                        let resultado = 0;
                        numero1 = parseFloat(numero1);
                        numero2 = parseFloat(numero2);