prompt('Enter Your Name: ');
prompt('Enter their Name: ');

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;


if(loveScore > 70){
    alert(`Your Love Score is ${loveScore} % and You Are Good for each Other`);
}
else{
    alert(`Your Love Score is ${loveScore} %`);
}