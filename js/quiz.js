function poserposerQuestion(question, bonneReponse,
points = 2){
    re=prompt("poser la question")
    if (re==bonneReponse){
                alert("Bonne réponse ! +" + points + " points");
        return points;
    }
    else {
        alert("Faux ! La bonne réponse était : " + bonneReponse);
        return 0;
    }
}

const calculerPourcentage = function(score, total) {
    return (score / total) * 100;
};

console.log(calculerPourcentage(7, 10));
const estReussi = pourcentage => pourcentage >= 50;

const mention = pourcentage => {
    if (pourcentage >= 80) {
        return "Très bien";
    }
    else if (pourcentage >= 50) {
        return "Bien";
    }
    else {
        return "Au revoir";
    }
};
function afficherBilan(joueur, score, total = 10) {
    let pourcentage = calculerPourcentage(score, total);

    console.log("Joueur : " + joueur);
    console.log("Score : " + score + "/" + total);
    console.log("Mention : " + mention(pourcentage));

    alert(joueur + (estReussi(pourcentage) ? " : quiz réussi" : " : quiz à repasser"));
}

afficherBilan("Sarra", 7);
