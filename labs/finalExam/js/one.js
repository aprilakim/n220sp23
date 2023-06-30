/*
April Kim
2 May 2023
N220 sp23
Class #23523
*/

//Solitaire Rules

//A pile for each of the 4 suits

let finalPile = [ "diamond", "spade", "club", "heart"];

//that will be placed in order from A,2,3,...,10,J,Q,K
//When all the cards are placed in order of this deck, game will be won

// let ace = 0, 2= 1, ...,  let J = 10, let Q = 11, let k = 12
let cards = [
    {suit: "hearts", order: 0, color: "red" }, // ace of hearts
    {suit: "hearts", order: 1, color: "red" }, //2 of hearts
    {suit: "hearts", order: 2, color: "red" }, //3 of hearts
    {suit: "hearts", order: 3, color: "red" },
    {suit: "hearts", order: 4, color: "red" },
    {suit: "hearts", order: 5, color: "red" },
    {suit: "hearts", order: 6, color: "red" },
    {suit: "hearts", order: 7, color: "red" },
    {suit: "hearts", order: 8, color: "red" },
    {suit: "hearts", order: 9, color: "red" },
    {suit: "hearts", order: 10, color: "red" }, //jack of hearts
    {suit: "hearts", order: 11, color: "red" },
    {suit: "hearts", order: 12, color: "red" }, // king of hearts

    {suit: "diamonds", order: 0, color: "red" }, // ace of diamonds
    {suit: "diamonds", order: 1, color: "red" }, //2 of diamonds
    {suit: "diamonds", order: 2, color: "red" }, //3 of diamonds
    {suit: "diamonds", order: 3, color: "red" },
    {suit: "diamonds", order: 4, color: "red" },
    {suit: "diamonds", order: 5, color: "red" },
    {suit: "diamonds", order: 6, color: "red" },
    {suit: "diamonds", order: 7, color: "red" },
    {suit: "diamonds", order: 8, color: "red" },
    {suit: "diamonds", order: 9, color: "red" },
    {suit: "diamonds", order: 10, color: "red" }, //jack ofdiamonds
    {suit: "diamonds", order: 11, color: "red" },
    {suit: "diamonds", order: 12, color: "red" }, // king of hearts

    {suit: "clubs", order: 0, color: "black" }, // ace of clubs
    {suit: "clubs", order: 1, color: "black" }, //2 of 
    {suit: "clubs", order: 2, color: "black" }, //3 of 
    {suit: "clubs", order: 3, color: "black" },
    {suit: "clubs", order: 4, color: "black" },
    {suit: "clubs", order: 5, color: "black" },
    {suit: "clubs", order: 6, color: "black" },
    {suit: "clubs", order: 7, color: "black" },
    {suit: "clubs", order: 8, color: "black" },
    {suit: "clubs", order: 9, color: "black" },
    {suit: "clubs", order: 10, color: "black" }, //jack of 
    {suit: "clubs", order: 11, color: "black" },
    {suit: "clubs", order: 12, color: "black" }, 

    {suit: "spades", order: 0, color: "black" }, // ace of spade
    {suit: "spades", order: 1, color: "black" }, //2 of 
    {suit: "spades", order: 2, color: "black" }, //3 of 
    {suit: "spades", order: 3, color: "black" },
    {suit: "spades", order: 4, color: "black" },
    {suit: "spades", order: 5, color: "black" },
    {suit: "spades", order: 6, color: "black" },
    {suit: "spades", order: 7, color: "black" },
    {suit: "spades", order: 8, color: "black" },
    {suit: "spades", order: 9, color: "black" },
    {suit: "spades", order: 10, color: "black" }, //jack of 
    {suit: "spades", order: 11, color: "black" },
    {suit: "spades", order: 12, color: "black" }, 
];

//7 piles of cards to be where main gameplay happens 

let displayCardPiles = [ ];
//1st pile has 1 card and each pile increases in the amount of 
function layoutCards(){
    pileOne.innerHTML = cards[Math.floor(random()*cards.length)];
    pileTwo.innerHTML = cards[Math.floor(random()*cards.length)];
    pileThree.innerHTML = cards[Math.floor(random()*cards.length)];
    pileFour.innerHTML = cards[Math.floor(random()*cards.length)];
    pileFive.innerHTML = cards[Math.floor(random()*cards.length)];
    pileSix.innerHTML = cards[Math.floor(random()*cards.length)];
    pileOne.innerHTML = cards[Math.floor(random()*cards.length)];
};

//cards included, only top card is displayed

//the draw pile has the remaining unordered cards

function drawCard(){
    drawPile.innerHTML= cards[Math.floor(random()*cards.length)];
};
//cards can only move in order and over other color in gameplay area
function placeCard(){
    
};
//black= spades and clubs
//red = hearts and diamonds