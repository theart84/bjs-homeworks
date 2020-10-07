'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${window.percent.value}"`
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${window.contribution.value}"`
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${window.amount.value}"`
  }
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const yearsBetweenYears = date.getFullYear() - currentYear;
  const amountMonth = yearsBetweenYears * 12 - currentMonth + date.getMonth();
  const interestRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** amountMonth) - 1)))
  const totalAmount = (amount + (monthlyPayment * amountMonth - amount)).toFixed(2);

  console.log(Number(totalAmount));

  return Number(totalAmount);
}

function getGreeting(name) {
  return `Привет, мир! Меня зовут ${(!name || name === 'undefined' || name === 'null') ? 'Аноним' : name}`;
}