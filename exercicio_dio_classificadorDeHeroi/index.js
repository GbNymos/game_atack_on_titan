//Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Se XP for entre 1.001 e 2.000 = Bronze-
//Se XP for menor do que 1.000 = Ferro-
//Se XP for entre 2.001 e 5.000 = Prata-
//Se XP for entre 5.001 e 7.000 = Ouro-
//Se XP for entre 7.001 e 8.000 = Platina-
//Se XP for entre 8.001 e 9.000 = Ascendente-
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"


let nome ="carlos";
let xp=Number(1010);

function classisficador_nivel(xp){
    if(xp<1000){
        return "ferro"
      };
    if(xp>=1001 && xp<=2000){
        return "Bronze";
    };
    if(xp>=2001 && xp<=5000){
        return "Prata";
    };
    if(xp>=5001 && xp<=7000){
        return "ouro";
    };
    if(xp>=7001 && xp<=8000){
        return "Platina";
    };
    if(xp>=8001 && xp<=9000){
        return "Ascendente";
    };
    if(xp>=9001 && xp<=10000){
        return "Imortal";
    };
    if(xp>=10001){
        return "ferro"
      };
};


console.log("O heroi de nome: "+ nome + " esta no nivel de: " + classisficador_nivel(xp)  )