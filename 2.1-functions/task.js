'use strict'

function getSolutions(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    let root = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
    return {D: discriminant, roots: root};
  } else if (discriminant === 0) {
    let root = [-b / (2 * a)];
    return {D: discriminant, roots: root};
  }
  return {D: discriminant, roots: []};
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  (c < 0) ? console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x - ${Math.abs(c)}`)
    : console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D > 0)
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  else if (result.D === 0)
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  else
    console.log(`Уравнение не имеет вещественных корней`);
}

console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  phisics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}))

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }
  return (marks.reduce((curValue, prevValue) => {
    return curValue + prevValue
  }, 0)) / marks.length;
}

function getAverageScore(data) {
  const newObj = {};
  const arr = []
  for (const key in data) {
    newObj[key] = getAverageMark(data[key]);
    arr.push(newObj[key]);
  }
  newObj.average = getAverageMark(arr);
  return newObj;
}

console.log(getPersonData({
  aaa: 1,
  bbb: 0
}))

function getDecodedValue(secret) {
  if (secret === 1) {
    return 'Эмильо';
  }
  if (secret === 0) {
    return 'Родриго';
  }
}

function getPersonData(secretData) {
  return { firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) }
}