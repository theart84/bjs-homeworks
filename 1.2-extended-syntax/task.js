'use strict';

function getResult(a,b,c){
    let array = [];
    let discriminant = b**2 - 4 * a * c;
    if (discriminant > 0){
        array =  [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
    } else if (discriminant === 0) {
        array = [- b / (2 * a)];
    }
    return array;
}

function getAverageMark(marks){
    let arr = [];
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log(`Количество оценок больше пяти!`);
        arr = marks.slice(0, 5);
    } else {
        arr = marks.slice();
    }
    return (arr.reduce((curValue, prevValue) => {
        return curValue + prevValue
    }, 0)) / arr.length;
}

function askDrink(name,dateOfBirthday){
    let yearPerson = dateOfBirthday.getFullYear();
    let currentYear = new Date().getFullYear();
    if ((currentYear - yearPerson) >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}