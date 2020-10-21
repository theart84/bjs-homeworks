'use strict'
function parseCount(value) {
  const parseNumber = Number.parseInt(value);
  if (isNaN(parseNumber)) {
    throw new Error('Невалидное значение');
  }
  return parseNumber;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (e) {
    if (e.message === 'Невалидное значение') return new Error('Невалидное значение')
  }
}


class Triangle {
  constructor(sideA, sideB, sideC) {
    if (!(sideB + sideC > sideA && sideA + sideC > sideB && sideA + sideB > sideC)) {
      throw new Error('Треугольник с такими сторонами не существует')
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC
  }
  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;
    return Number(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.sideA)
      * (halfPerimeter - this.sideB)
      * (halfPerimeter - this.sideC)).toFixed(3));
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    const newTriangle = new Triangle(sideA, sideB, sideC);
    return newTriangle;
  } catch (e) {
    return {
      getArea() {
        return 'Ошибка! Треугольник не существует'
      },
      getPerimeter() {
        return 'Ошибка! Треугольник не существует'
      }
    }
  }
}
