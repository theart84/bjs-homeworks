'use strict'
String.prototype.isPalindrome = function() {
  const source = this.toLowerCase().replace(/\s/g, '').split("");
  return source.join("") === source.reverse().join("");
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
  const diffMs = (+currentDate) - (+birthdayDate);
  const age = diffMs / 31557600000;
  return age > 18;
}