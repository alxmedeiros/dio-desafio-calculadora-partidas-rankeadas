function calculateWinsBalance(wins, defeats) {
  let winsBalance = wins - defeats;
  let level;

  if (wins >= 101) {
    level = 'Imortal'
  } else if (wins > 90) {
    level = 'Lendário'
  } else if (wins > 80) {
    level = 'Diamante'
  } else if (wins > 50) {
    level = 'Ouro'
  } else if (wins > 20) {
    level = 'Prata'
  } else if (wins > 10) {
    level = 'Bronze'
  } else {
    level = 'Ferro'
  }

  return `O Herói tem de saldo de ${winsBalance} está no nível de ${level}`
}

console.log(calculateWinsBalance(101, 50));
console.log(calculateWinsBalance(91, 50));
console.log(calculateWinsBalance(81, 50));
console.log(calculateWinsBalance(51, 50));
console.log(calculateWinsBalance(21, 50));
console.log(calculateWinsBalance(11, 50));
console.log(calculateWinsBalance(10, 50));