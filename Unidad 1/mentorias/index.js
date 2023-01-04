const objeto = {
  name: "lauti",
  sum(a, b) {
    return a + b;
  },
  sumArrow: (a, b) => a + b,
};

console.log(objeto.sum(2, 3));
console.log("----------");
console.log(objeto.sumArrow(2, 3));
