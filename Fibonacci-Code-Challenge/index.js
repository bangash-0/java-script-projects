
function fibonacciGenerator(index){
    const output = [];
    if(index === 1){
        output = [0]; 
    }

    else if(index === 2){
        output = [0, 1];
    }

    else {
        output.push(0);
        output.push(1);

        for(let i = 2 ; i < index ; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output;
}


const array = fibonacciGenerator(10);

console.log(array);


