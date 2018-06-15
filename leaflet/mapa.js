
/******************************************************************************
 * Funciones para request asincrónico y sincrónico utilizando XMLHttpRequest
 */
var asyncQuery = function(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // https://stackoverflow.com/questions/13293617/why-is-my-ajax-function-calling-the-callback-multiple-times
        if (this.readyState === 4) {
            if (this.status === 200) {
                // parseamos el resultado para obtener el objeto JavaScript
                resObj = JSON.parse(xhttp.responseText)
                // llamamos a la función callback con el objeto parseado como parámetro.
                callback(resObj);
            }
        }
    };
    xhttp.open("GET", url, true);
    var ret = xhttp.send();
    return ret;
}

var syncQuery = function(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    // El browser (Chrome) dispara una excepción:
    // [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental
    // effects to the end user's experience.
    // For more help, check https://xhr.spec.whatwg.org/.
    xhttp.send();

    if (xhttp.status === 200) {
        resObj = JSON.parse(xhttp.responseText)
        return resObj;
    }
    return null;
}

function bootstrap() {
    
    var map = createMap('mapid');
    var drawer = new Drawer();
    }
    $(bootstrap);