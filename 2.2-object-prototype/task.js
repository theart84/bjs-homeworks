'use strict'
String.prototype.isPalindrome = function () {
  const newString = this.replace(/\s/g, '').toLocaleLowerCase();
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - 1 - [i]]) {
      return false;
    }
  }
  return true;
}

function getAverageMark(marks) {
  if (marks.length === 0)
    return 0;
  const average = marks.reduce((curValue, prevValue) => {
    return curValue + prevValue
  }, 0) / marks.length;
  return Math.round(average);
}

function checkBirthday(birthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  let agePerson = currentDate.getFullYear() - birthdayDate.getFullYear();
  let diffCurrentDate = currentDate.setFullYear(1970);
  let diffBirthdayDate = birthdayDate.setFullYear(1970);
  console.log(diffCurrentDate)
  console.log(diffBirthdayDate)
  if (diffCurrentDate < diffBirthdayDate)
     agePerson -= 1
  return agePerson >= 18;
}