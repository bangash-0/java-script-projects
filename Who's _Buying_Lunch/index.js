function whosBuying(names) {
    const noOfPeople = names.length;
    const randomPersonPosition = Math.floor(Math.random() * noOfPeople);
    const randomPerson = names[randomPersonPosition];

    return randomPerson
}

const names = ['angela', 'ali','khan','baghi'];
alert(whosBuying(names));