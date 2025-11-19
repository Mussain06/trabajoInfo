let button1 = document.getElementsByClassName('button1');
let button2 = document.getElementsByClassName('button2');
let capas = document.getElementsByClassName('capas');
let containerTexto = document.getElementsByClassName('containerTexto');
model = true;
let item1, item2, item3, item4, item5, item6, item7;

button2[0].addEventListener('click', function () {
    button1[0].classList.remove('active');
    button1[0].classList.add('desactive');
    button2[0].classList.remove('desactive');
    button2[0].classList.add('active');
    capas[0].innerHTML = '<h3 class="tituloH3">Modelo TCP/IP <span class="numCapas">(4 Capas)</span></h3>  <div class="itemCapa item4">Capa 4: Aplicación</div> <div class="itemCapa item3">Capa 3: Transporte</div> <div class="itemCapa item2">Capa 2: Internet</div> <div class="itemCapa item1">Capa 1: Acceso a la red</div>'
    model = false;
});
button1[0].addEventListener('click', function () {
    button1[0].classList.remove('desactive');
    button1[0].classList.add('active');
    button2[0].classList.remove('active');
    button2[0].classList.add('desactive');
    capas[0].innerHTML = '<h3 class="tituloH3">Modelo OSI <span class="numCapas">(7 Capas)</span></h3> <div class="itemCapa item7">Capa 7: Aplicación</div> <div class="itemCapa item6">Capa 6: Presentación</div> <div class="itemCapa item5">Capa 5: Sesión</div> <div class="itemCapa item4">Capa 4: Transporte</div> <div class="itemCapa item3">Capa 3: Red</div> <div class="itemCapa item2">Capa 2: Enlace de Datos</div> <div class="itemCapa item1">Capa 1: Física</div>'
    model = true;

});

setInterval(() => {
    if (model) {
        item1 = document.getElementsByClassName('item1');
        item2 = document.getElementsByClassName('item2');
        item3 = document.getElementsByClassName('item3');
        item4 = document.getElementsByClassName('item4');
        item5 = document.getElementsByClassName('item5');
        item6 = document.getElementsByClassName('item6');
        item7 = document.getElementsByClassName('item7');
        item7[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 7: Aplicación</h3> <p class="smallText">La capa más cercana al usuario. Proporciona servicios de red a las aplicaciones (navegador web, cliente de correo). <br> <br> <b>Protocolos clave:</b> HTTP, FTP, SMTP, DNS <br> <b>Dispositivos comunes:</b> Hosts, Firewalls de Aplicación, Gateways </p>'
        });
        item6[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 6: Presentación</h3> <p class="smallText">Traduce, cifra y comprime los datos. Asegura que los datos de la capa de aplicación de un sistema sean legibles por la capa de aplicación de otro. <br> <br> <b>Protocolos clave:</b> SSL/TLS, JPEG, ASCII <br> <b>Dispositivos comunes:</b> Hosts, Gateways </p>'
        });
        item5[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 5: Sesión</h3> <p class="smallText"> Establece, gestiona y finaliza las conexiones (sesiones) entre aplicaciones.<br> <br> <b>Protocolos clave:</b> NetBIOS, RPC <br> <b>Dispositivos comunes:</b> Hosts, Gateways </p>'
        });
        item4[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 4: Transporte</h3> <p class="smallText"> Proporciona una transferencia de datos fiable (TCP) o no fiable (UDP) entre sistemas finales. Controla el flujo y los errores.<br> <br> <b>Protocolos clave:</b> TCP, UDP <br> <b>Dispositivos comunes:</b> Hosts, Firewalls </p>'
        });
        item3[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 3: Red</h3> <p class="smallText"> Define el enrutamiento y el direccionamiento lógico (direcciones IP). Decide la mejor ruta para enviar los datos por la red.<br> <br> <b>Protocolos clave:</b> IP, ICMP, OSPF <br> <b>Dispositivos comunes:</b> Routers, Switches L3 </p>'
        });
        item2[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 2: Enlaces de Datos</h3> <p class="smallText"> Proporciona tránsito de datos fiable a través de un enlace físico. Gestiona el direccionamiento físico (direcciones MAC) y el control de acceso al medio.<br> <br> <b>Protocolos clave:</b> Ethernet, Wi-Fi, PPP <br> <b>Dispositivos comunes:</b> Switches, Puentes (Bridges), Tarjetas de Red (NIC) </p>'
        });
        item1[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 1: Física</h3> <p class="smallText"> Define las especificaciones eléctricas, mecánicas y de procedimiento para el medio físico. Transmite los bits (0s y 1s) por el cable o el aire.<br> <br> <b>Protocolos clave:</b> N/A (bits) <br> <b>Dispositivos comunes:</b> Hubs, Repetidores, Cables, Fibra Óptica, Tarjetas de Red (NIC) </p>'
        });

    }
    else {
        item1 = document.getElementsByClassName('item1');
        item2 = document.getElementsByClassName('item2');
        item3 = document.getElementsByClassName('item3');
        item4 = document.getElementsByClassName('item4');
        item4[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 4: Apliacación (TCP/IP)</h3> <p class="smallText"> Combina las funciones de las capas de Aplicación, Presentación y Sesión del modelo OSI. Es donde operan los protocolos de usuario.<br> <br> <b>Protocolos clave:</b> HTTP, SMTP, DNS <br> <b>Dispositivos comunes:</b> Hosts, Firewalls de Aplicación </p>'
        });
        item3[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 3: Transporte (TCP/IP)</h3> <p class="smallText"> Equivalente a la capa de Transporte de OSI. Gestiona la comunicación de extremo a extremo, usando TCP para fiabilidad y UDP para velocidad.<br> <br> <b>Protocolos clave:</b> TCP, UDP <br> <b>Dispositivos comunes:</b> Hosts, Firewalls </p>'
        });
        item2[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 2: Internet (TCP/IP)</h3> <p class="smallText"> Equivalente a la capa de Red de OSI. Se encarga del direccionamiento (IP) y enrutamiento de paquetes.<br> <br> <b>Protocolos clave:</b> IP, ICMP <br> <b>Dispositivos comunes:</b> Routers </p>'
        });
        item1[0].addEventListener('click', function () {
            containerTexto[0].innerHTML = '<h3 class="subtitulo">Capa 1: Acceso a Red (TCP/IP)</h3> <p class="smallText"> Combina las capas Física y de Enlace de OSI. Gestiona todo el hardware y los protocolos necesarios para conectarse al medio físico.<br> <br> <b>Protocolos clave:</b> Ethernet, Wi-Fi <br> <b>Dispositivos comunes:</b> Switches, Hubs, Cables, Tarjetas de Red (NIC) </p>'
        });
    }
}, 1000);



