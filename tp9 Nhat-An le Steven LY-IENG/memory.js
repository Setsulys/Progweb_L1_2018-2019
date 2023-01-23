"use strict"

function MemoryGame(images, blank) {
  this.carte1= undefined;
  this.carte2= undefined;
  this.images = images;
  this.blank = blank;
  const taille = this.images.length;
  this.cards = shuffleCards(taille);
  
}



MemoryGame.prototype.build = function build(div) {
	
    for (let i = 0; i<this.cards.length;i++){
        let card=this.cards[i];
		/*
        const cheminImage = this.images[card];
        div.innerHTML += "<img src='"+ cheminImage +"'>";
        */
        const cheminImage = this.blank;
        div.innerHTML += "<a href='#' onclick='game.detection(" + i +");'><img id='"+ i +"' src='"+ cheminImage +"'></a>";
    }
    
}

MemoryGame.prototype.detection = function detection(index) {
	document.getElementById(index).setAttribute("src", this.images[this.cards[index]]);
	if (this.carte1 !== undefined){
		this.carte2 = index;
		if(this.images[this.cards[this.carte1]] === this.images[this.cards[this.carte2]]){
			document.getElementById(this.carte1).parentNode.removeAttribute("onclick");
			document.getElementById(this.carte2).parentNode.removeAttribute("onclick");
		} else {
			var carte1 = this.carte1;
			var carte2 = this.carte2;
			setTimeout(function(){
				document.getElementById(carte1).setAttribute("src", game.blank);
				document.getElementById(carte2).setAttribute("src", game.blank);
			}, 500);
		}
		this.carte1= undefined;
		this.carte2= undefined;
	}
	else{
		this.carte1 = index;
	}
}

function shuffleCards(length) {
  let cards = [];
  for(let i = 0; i < length; i++) {
    cards.push(i);
    cards.push(i);
  }
  return shuffle(cards);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
