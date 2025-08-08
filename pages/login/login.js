import { bannerLogin } from "../../componentes/bannerLogin/bannerLogin.js";

export function login(){

    let div = document.createElement("div");
    div.className = "login";

     let span = document.createElement('span');
    span.className = "texto";
    span.textContent = "Geeta."
    div.appendChild(span);

    let span_2 = document.createElement('span');
    span_2.className = "texto2"
    span_2.textContent = "Create your fashion in your own way"
    div.appendChild(span_2);

    let span_3 = document.createElement('span');
    span_3.className = "texto3"
    span_3.textContent = "Each men and women has their own style, Geeta help you to create your unique style."
    div.appendChild(span_3);

    let boton1 = document.createElement('div');
    boton1.className = "boton1"
    boton1.textContent = "LOG IN"
    div.appendChild(boton1);

    boton1.addEventListener('click',()=>{
        div.classList.add ("ocultar");
        document.body.appendChild(bannerLogin());
    });


    let span_4 = document.createElement('span');
    span_4.className = "texto4"
    span_4.textContent = "- OR -"
    div.appendChild(span_4);

    let boton2 = document.createElement('div');
    boton2.href = "#";
    boton2.className = "boton2"
    boton2.textContent = "REGISTER"
    div.appendChild(boton2);

    return div;
}

document.body.appendChild(login());