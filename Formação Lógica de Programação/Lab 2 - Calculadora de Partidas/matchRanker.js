let wonMatches = "";
let lostMatches = "";
let drawMatches = "";

function matchRanker(wins, losses, draws = 0) {
  wonMatches = Number(wins);
  lostMatches = Number(losses);
  drawMatches = Number(draws);

  let victoriesCount = wonMatches - lostMatches;

  let level = "";

  if (wonMatches < 10) {
    level = "Ferro";
  } else if (wonMatches >= 11 && wonMatches <= 20) {
    level = "Bronze";
  } else if (wonMatches >= 21 && wonMatches <= 50) {
    level = "Prata";
  } else if (wonMatches >= 51 && wonMatches <= 80) {
    level = "Ouro";
  } else if (wonMatches >= 81 && wonMatches <= 90) {
    level = "Diamante";
  } else if (wonMatches >= 91 && wonMatches <= 100) {
    level = "Lendário";
  } else if (wonMatches >= 101) {
    level = "Imortal";
  } else {
    level = "Nível Inválido";
  }

  return { victoriesCount, level };
}

function matchClassifier(wins, losses, draws) {
  let result = matchRanker(wins, losses, draws);
  console.log(
    `O Herói tem de saldo de ${result.victoriesCount} está no nível de ${result.level}`
  );
}

matchClassifier(90, 20, 10); 
