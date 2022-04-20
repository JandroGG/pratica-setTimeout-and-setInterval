let clickIsDone = false;
let growUpLoopId;
const MAX_HEIGHT = "90%";
const MIN_HEIGHT = "25%";

	



function animation(){
    let boton = document.getElementById("button");

    if(!clickIsDone){    
        boton.textContent = "";
        const template = document.getElementById("template-animation-bar").content;
        const fragment = document.createDocumentFragment();
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        boton.appendChild(fragment);
        growUpLoop();
        growUpLoopId = setInterval(growUpLoop, 2000);
        clickIsDone = true;
    }
    else{
        Array.from(boton.children).forEach( item => boton.removeChild(item) );
        clearTimeout(growUpLoopId);
        boton.textContent = "Volver a enviar";
        clickIsDone = false;
    }
}

function growUpBarraUno(){
    let barraUno = document.getElementById("1");
    if(barraUno !== null){
        barraUno.style.height = MAX_HEIGHT;
        setTimeout( () => barraUno.style.height = MIN_HEIGHT, 200);
    }

}

function growUpBarraDos(){
    let barraDos = document.getElementById("2");
    if(barraDos !== null){
        barraDos.style.height = MAX_HEIGHT;
        setTimeout( () => barraDos.style.height = MIN_HEIGHT, 200);
    }
}

function growUpBarraTres(){
    let barraTres = document.getElementById("3");
    if(barraTres !== null){
        barraTres.style.height = MAX_HEIGHT;
        setTimeout( () => barraTres.style.height = MIN_HEIGHT, 200);
    }
}

function growUpBarraCuatro(){
    let barraCuatro = document.getElementById("4");
    if(barraCuatro !== null){
        barraCuatro.style.height = MAX_HEIGHT;
        setTimeout( () => barraCuatro.style.height = MIN_HEIGHT, 200);
    }
}

function growUpBarraCinco(){
    let barraCinco = document.getElementById("5");
    if(barraCinco !== null){
        barraCinco.style.height = MAX_HEIGHT;
        setTimeout( () => barraCinco.style.height = MIN_HEIGHT, 200);
    }
}

function growUpBarraSeis(){
    let barraSeis = document.getElementById("6");
    if(barraSeis !== null){
        barraSeis.style.height = MAX_HEIGHT;
        setTimeout( () => barraSeis.style.height = MIN_HEIGHT, 200);
    }
}

function growUpLoop(){
    growUpBarraUno();
    setTimeout( () => growUpBarraDos(), 200 );
    setTimeout( () => growUpBarraTres(), 400 );
    setTimeout( () => growUpBarraCuatro(), 600 );
    setTimeout( () => growUpBarraCinco(), 800 );
    setTimeout( () => growUpBarraSeis(), 1000 );
}

function growSide(){
    let container = document.getElementById("container-responsive");
    container.style.width = "60%";
}

function narrowSide(){
    let container = document.getElementById("container-responsive");
    container.style.width = "30%";
}

function growheight(event){
    let barraIn = document.getElementById(event.target.id);
    let container = barraIn.parentElement;
    container.style.transition = "0.05s";
    barraIn.style.transition = "0.05s";
    barraIn.style.marginTop = '0px'
    container.style.height = "90%";
}

function narrowheight(event){
    let barraIn = document.getElementById(event.target.id);
    let container = barraIn.parentElement;
    container.style.transition = "0.9s";
    barraIn.style.transition = "1.8s";
    barraIn.style.marginTop = '-278px'
    container.style.height = "10%";
}

function actualizarHora(){
    const date = new Date();

    const hora = document.getElementById("hora");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    let hr = (date.getHours()%12)*30 - 90;
    hora.style.transform = "translate(-50%, 1px) rotate(" + hr + "deg)";
    let min = date.getMinutes()*6 - 90;
    minutos.style.transform = "translate(-50%, 1px) rotate(" + min + "deg)";
    let seg = date.getSeconds()*6 - 90;
    segundos.style.transform = "translate(-50%, 1px) rotate(" + seg + "deg)";
    // console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
}


function _init(){
    document.getElementById("button").addEventListener("mouseup", animation, false);
    document.getElementById("container-responsive").addEventListener("mouseover", growSide, false);
    document.getElementById("container-responsive").addEventListener("mouseout", narrowSide, false);

    const barras = document.querySelectorAll(".barra-in");
    barras.forEach( (item) => {
        item.addEventListener( "mouseover", growheight, true );
        item.addEventListener( "mouseout", narrowheight, true );
    });

    setInterval( actualizarHora , 1000);
}



window.addEventListener("load", _init, false);