'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${window.percent.value}"`
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${window.contribution.value}"`
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${window.amount.value}"`
  }
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let yearsBetweenYears = date.getFullYear() - currentYear;
  let amountMonth = yearsBetweenYears * 12 - currentMonth + date.getMonth();
  let interestRate = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** amountMonth) - 1)))
  let totalAmount = (amount + (monthlyPayment * amountMonth - amount)).toFixed(2);

  console.log(Number(totalAmount));

  return Number(totalAmount);
}

function getGreeting(name) {
  if (!name) {
    return `Привет, мир! Меня зовут Аноним`
  }
  return `Привет, мир! Меня зовут ${name}`;
}