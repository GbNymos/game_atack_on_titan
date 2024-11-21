const state={
    view:{tempo:document.querySelector("#tempo"),
          pontos:document.querySelector("#pontos"),
          linhas:document.querySelectorAll(".linhas"),
          active:document.querySelector(".active"),
    },
    values:{
        tempoId:null,
        posicao_linha:0,
        resultado:0,
        tempo_corrente:60,

    actions:{
        tempo_definido:setInterval(tempo_diminuir,1000),
        tempoId:setInterval(randomLinhas,1000),  // a cada intervalo de tempo ele chama a funcao randomLinhas


    }
    }
}

function tempo_diminuir(){
    state.values.tempo_corrente--;
    state.view.tempo.textContent=state.values.tempo_corrente;
    if(state.values.tempo_corrente<=0){
        clearInterval(state.values.tempoId);
        clearInterval(state.values.tempo_definido);
        state.values.tempo_corrente=60;
        alert("game over! o seu resultado foi: "+ state.values.resultado);
        state.values.resultado=0;

    }
}

function randomLinhas(){
    state.view.linhas.forEach((i) =>{
        i.classList.remove("active");
    });
    // sortear um quadrado aleatorio e adiciona a classe active
    let random_num=Math.floor(Math.random()*state.view.linhas.length); //sorteando numeros aleatorios e pegando apenas a parte inteira do numero
    let linha_sorteada=state.view.linhas[random_num];
    linha_sorteada.classList.add("active");
    state.values.posicao_linha=linha_sorteada.id;
    }





function addListenerHitBox(){
    state.view.linhas.forEach((i) =>{
        i.addEventListener("mousedown",()=>{
            if(i.id===state.values.posicao_linha){
                playsound()
                state.values.resultado++;
                state.view.pontos.textContent=state.values.resultado;
                state.values.posicao_linha=0;

            }
        })
    }
    );
}

function playsound(){
    let som= new Audio("../src/audios/hit.m4a");
    som.volume=0.2;
    som.play();

}

function main(){
    addListenerHitBox();


}

main()


