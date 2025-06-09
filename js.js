var Temp = document.getElementById("temp");
var CARD = Temp.querySelector(".card");
var Target = document.getElementById("target");


for(var i = 0; i < 52; i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "silver:" + i;
    cardCopy.style.backgroundPositionX = -(i)*100+"%";
    cardCopy.style.backgroundPositionY = Math.floor(i/-13)*99+2+"%";
    Target.append(cardCopy);
}
class Game{
    construtor(){
        this.state      = {};
        this.players    = players;
        this.deck       = deck;
        
        this.play();

    }

    play = function(){
        alert("Weeeeeee this is fun");
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(){
    }
}
class Deck{

    constructor(num){
        this.carCount = num;
        this.cards    = [];
        this.make();
    }

    make(){
        
        for(var i = 0; i < this.cardCount; i++){
            var card = new Card(i);
            this.cards.push(card);
        }

        return this.cards;
    }
    shuffle(){

    }

}
class Card{
    constructor(num){
        this.id         = num;
        this.suit       = Math.floor(num/13);
        this.val        = num % 13 + 1;
        this.background = "Cards.png";
        this.suits      = ["H", "C", "S", "D"];
    }

    getSuit(){
        return suit;
    }

    getDom(){
        var cardCopy = CARD.cloneNode(true);

        cardCopy.innerHTML = "silver:" + this.id;
        cardCopy.style.backgroundPositionX = -(this.id)*100+"%";
        cardCopy.style.backgroundPositionY = Math.floor(this.id/-13)*99+2+"%";

        return cardCopy;
    }
}


var playerz = [];
playerz[0] = new Player("bill");
var marieAntoinet = new Deck(52);
new Game(playerz, marieAntoinet);