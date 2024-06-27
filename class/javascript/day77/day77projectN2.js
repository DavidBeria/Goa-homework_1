let number = prompt("შეიყვანეთ რიცხვი")


function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;
    
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} არის ინტეჯერი.`);
    }
    else {
        console.log(`${x} არის ფლოატი`)
    }

}

checkNumber(number)