export function bannerLogin(){

    let div = document.createElement('div');
    div.className = "bannerLogin";

    let span = document.createElement('span');
    span.className = "texto0";
    span.textContent = "🡸";
    div.appendChild(span);

    let h1 = document.createElement('h1');
    h1.className = "txt2";
    h1.textContent = "Welcome Back!";
    div.appendChild(h1);

    let p = document.createElement('p');
    p.className = "txt3";
    p.textContent = "Yay! You're back! Thanks for shopping with us.\nWe have excited deals and promotions going \non, grab your pick now! ";
    div.appendChild(p);

    let h2 = document.createElement('h2');
    h2.className = "txt4";
    h2.textContent = "LOG IN";
    div.appendChild(h2);

    let p_1 = document.createElement('p');
    p_1.className = "txt5";
    p_1.textContent = "Email address";
    div.appendChild(p_1);

    let div_1 = document.createElement('div');
    div_1.className = "boton_1";
    div_1.textContent = " hlo@geeta.co"
    div.appendChild(div_1);

    let imagen = document.createElement('img');
    imagen.className = "img1";
    imagen.src = "../../assets/icons/carta.png"
    div.appendChild(imagen);

    let imagen2 = document.createElement('img');
    imagen2.className = " img2";
    imagen2.src = "../../assets/icons/circulo.png"
    div.appendChild(imagen2);

    let p_2 = document.createElement('p');
    p_2.className = "txt6";
    p_2.textContent = "Password";
    div.appendChild(p_2);

    let div_2 = document.createElement('div');
    div_2.className = "boton_2";
    div_2.textContent = "Enter you password";
    div.appendChild(div_2);

    let imagen3 = document.createElement('img');
    imagen3.className = "img3";
    imagen3.src = "../../assets/icons/Lock.png";
    div.appendChild(imagen3);

    let p3 = document.createElement('p');
    p3.className = "txt7";
    p3.textContent = "Forgot Password?";
    div.appendChild(p3);

    let div_3 = document.createElement('div');
    div_3.className = "boton_3";
    div_3.textContent = "LOG IN";
    div.appendChild(div_3);
    
    let p4 = document.createElement('p');
    p4.className = "txt8";
    
    let textoNormal = document.createTextNode("Not registered yet? ");
    let spanMorado = document.createElement('span');

    spanMorado.className = "morado";  
    spanMorado.textContent = "Create an Account";

    p4.appendChild(spanMorado);
    p4.appendChild(textoNormal);
    div.appendChild(p4);
  
    return div;
}