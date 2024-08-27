document.addEventListener("DOMContentLoaded", () => {
    let root = document.querySelector("#root");

    let div_formulario = document.createElement("div");
    div_formulario.className = "div_formularios";
    let formularios = [
        {nombre: "login", link: "componentes/login/login.html"},
        {nombre: "formulario de contacto", link: "componentes/formularioDeContacto/contacto.html"},
        {nombre: "formulario de registro", link: "componentes/formularioDeRegistro/registro.html"},
        {nombre: "formulario de búsqueda", link: "componentes/formularioDeBusqueda/busqueda.html"},
        {nombre: "formulario de pedidos de compras", link: "componentes/formularioDePedidoCompras/pedidoCompras.html"},
        {nombre: "formulario de comentarios de reseñas", link: "componentes/formularioDeReseñas/reseñas.html"}

    ];

    formularios.forEach(element => {
        let div_item = document.createElement("a");
        div_item.className = "item";
        div_item.href = element.link;
        div_item.innerText = element.nombre;

        div_formulario.appendChild(div_item);
    });

    root.appendChild(div_formulario);
});