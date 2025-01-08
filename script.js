let herois = [

    ["aspas" , 3500],
    ["zeemit" , 1270],
    ["faker" , 12500],
    ["sacy" , 7835]

]

for(let i = 0; i < herois.length; i++){

    let nome = herois[i][0]
    let xp = herois[i][1]

    if(xp < 1000){

        console.log("o heroi " + nome + " esta no nivel ferro")

    } else if(xp > 1000 && xp <= 2000){

        console.log("o heroi " + nome + " esta no nivel bronze")

    } else if(xp > 2000 && xp <= 5000){

        console.log("o heroi " + nome + " esta no nivel prata")

    } else if(xp > 5000 && xp <= 7000){

        console.log("o heroi " + nome + " esta no nivel ouro")

    } else if(xp > 7000 && xp <= 8000){

        console.log("o heroi " + nome + " esta no nivel platina")

    } else if(xp > 8000 && xp <= 9000){

        console.log("o heroi " + nome + " esta no nivel ascendente")

    } else if(xp > 9000 && xp <= 10000){

        console.log("o heori " + nome + " esta no nivel imortal")

    } else if(xp > 10000){

        console.log("o heroi " + nome + " esta no nivel radiante")

    }

}