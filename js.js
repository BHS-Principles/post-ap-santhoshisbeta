var Temp = document.getElementById("temp");
var Card = Temp.querySelector(".card");
var Target = document.getElementById("target");


for(var i = 0; i < 5; i++){
    var carCopy = Card.cloneNode(true);
    cardCopy.innerHTML = "silver:" + i;
    cardCopy.style.backroundPositionX = -i + "00%";
    cardCopy.style.backroundPositionY = -Math.floor(i/13) + "00%";
    Target.append(cardCopy);
}