let heroName = "Merlin";
let heroLevel = 11000;
let levelName;

switch (true) {
  case heroLevel <= 1000:
    levelName = "Ferro";
    break;
  case heroLevel >= 1001 && heroLevel <= 2000:
    levelName = "Bronze";
    break;
  case heroLevel >= 2001 && heroLevel <= 5000:
    levelName = "Prata";
    break;
  case heroLevel >= 5001 && heroLevel <= 7000:
    levelName = "Ouro";
    break;
  case heroLevel >= 7001 && heroLevel <= 8000:
    levelName = "Platina";
    break;
  case heroLevel >= 8001 && heroLevel <= 9000:
    levelName = "Ascendente";
    break;
  case heroLevel >= 9001 && heroLevel <= 10000:
    levelName = "Imortal";
    break;
  case heroLevel >= 10001:
    levelName = "Radiante";
    break;
  default:
    console.log("Nível inválido");
}

// Output

console.log(`O Herói de nome ${heroName} está no nível de ${levelName}`)