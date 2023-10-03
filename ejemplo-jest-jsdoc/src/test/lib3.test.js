const mayorEntre4v3 = require("../lib/lib3");

test("v3 - El mayor es n1", () => {
  const mayor = mayorEntre4v3(500, 400, 300, 200);
  expect(mayor).toBe(500);
});
test("v3 - El mayor es n2", () => {
  const mayor = mayorEntre4v3(400, 500, 300, 200);
  expect(mayor).toBe(500);
});
test("v3 - El mayor es n3", () => {
  const mayor = mayorEntre4v3(400, 300, 500, 200);
  expect(mayor).toBe(500);
});
test("v3 - El mayor es n4", () => {
  const mayor = mayorEntre4v3(400, 300, 200, 500);
  expect(mayor).toBe(500);
});
