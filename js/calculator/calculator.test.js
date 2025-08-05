const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Tarea 1.1
test("Primera prueba unitaria divide",()=>{
  expect(calculator.divide(10,2)).toBe(5);
})

//Tarea 1.1
test("DIVISION ENTRE DOS NÚMEROS",()=>{
  expect(calculator.divide(8,2)).toBe(4);
})

//Tarea 1.2
test("Primera multiplicación", ()=>{
  expect(calculator.multiply(10,5)).toBe(50);
})

//Tarea 1.2
test("Segundaa multiplicación", ()=>{
  expect(calculator.multiply(5,10)).toBe(50);
})

//Tarea 3.1
test("Division por cero",()=>{
  expect(calculator.divide(10,0)).toBe(Infinity);
})
// test("Division por cero CORREGIDA",()=>{
//   expect(calculator.divide(10,0)).toThrow("No se puede dividir por cero");
// })
