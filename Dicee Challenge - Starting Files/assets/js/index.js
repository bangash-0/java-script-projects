
const randomNumberOne = Math.floor(Math.random() * 6); 
const randomNumberTwo = Math.floor(Math.random() * 6); 

const images = ['assets/images/dice1.png', 
                'assets/images/dice2.png', 
                'assets/images/dice3.png', 
                'assets/images/dice4.png', 
                'assets/images/dice5.png', 
                'assets/images/dice6.png',]




let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', images[randomNumberOne]);

let image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', images[randomNumberTwo]);

if(randomNumberOne > randomNumberTwo){
    document.querySelector('h1').textContent = 'Player 1 Wins';
}
else if (randomNumberTwo > randomNumberOne){
    document.querySelector('h1').textContent = 'Player 2 Wins';
}
else{
    document.querySelector('h1').textContent = 'Draw';
}