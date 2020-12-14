var data = require("./data.json");

data.roky.forEach((rok) => {
  let strany = rok.strany;

  strany.forEach((strana) => {
    if (strana.koalice) {
      strana.pocetSubjektu = 2;
    } else {
      strana.pocetSubjektu = 1;
    }

    if (strana.nazevDlouhy === "") {
      strana.nazevDlouhy = strana.nazev;
    }

    delete strana.koalice;
  });
});

var jsonData = JSON.stringify(data);

var fs = require("fs");
fs.writeFile("dataKoalice.json", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
