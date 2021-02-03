function PridelMandatyPS_Delitel(
  dataRocnik,
  prvniCifraRady,
  increment,
  klauzule
) {
  let data = Kopie(dataRocnik);

  let mandatyKraju = VypoctiMandatyKraju(PripravHlasyAMandatyKraje(data));

  data = AplikujKlauzuli(data, klauzule);

  if (NikdoNepostoupil(data)) {
    return [];
  }

  let mandatyStran = PripravDataStran(data);

  let radaDelitelu = VypoctiRaduDelitelu(prvniCifraRady, increment);

  mandatyStran = PridelMandatyVKrajich_Delitel(
    mandatyStran,
    mandatyKraju,
    radaDelitelu,
    data
  );

  mandatyStran = VypoctiPocetHlasuNaMandat(mandatyStran);

  return mandatyStran;
}

function PridelMandatyPS_Kvota(dataRocnik, kvota, klauzule) {
  let data = Kopie(dataRocnik);

  let mandatyKraju = VypoctiMandatyKraju(PripravHlasyAMandatyKraje(data));

  data = AplikujKlauzuli(data, klauzule);

  if (NikdoNepostoupil(data)) {
    return [];
  }

  let mandatyStran = PripravDataStran(data);

  mandatyStran = PridelMandatyVKrajich_Kvota(
    mandatyKraju,
    mandatyStran,
    data,
    kvota
  ); // 1. skrutinium (krajske)

  let zbytekMandatu = VypoctiZbytekMandatu(mandatyStran, 200);

  mandatyStran = VypoctiMandatyVObvodu_Kvota(
    mandatyStran,
    zbytekMandatu,
    kvota
  ); // 2. skrutinium (celorepublikove)

  zbytekMandatu = VypoctiZbytekMandatu(mandatyStran, 200);

  mandatyStran = MetodaNejvetsichZbytku(mandatyStran, zbytekMandatu); // 3. skrutinium (metoda nejvetsich zbytku)

  mandatyStran = VypoctiPocetHlasuNaMandat(mandatyStran);

  return mandatyStran;
}

function VypoctiMandatyKraju(hlasyAMandaty) {
  hlasyAMandaty = VypoctiMandatyVObvodu_Kvota(hlasyAMandaty, 200, 0); // Hereova kvota

  let zbytekMandatu = VypoctiZbytekMandatu(hlasyAMandaty, 200);

  let mandatyKraju = MetodaNejvetsichZbytku(hlasyAMandaty, zbytekMandatu);

  return mandatyKraju;
}

function MetodaNejvetsichZbytku(hlasyAMandaty, mandatyKRozdeleni) {
  while (mandatyKRozdeleni > 0) {
    let max = 0;
    let maxIndex = -1;

    for (let index = 0; index < hlasyAMandaty.length; index++) {
      if (hlasyAMandaty[index].hlasy > max) {
        max = hlasyAMandaty[index].hlasy;
        maxIndex = index;
      }
    }
    hlasyAMandaty[maxIndex].mandaty++;
    hlasyAMandaty[maxIndex].hlasy = 0;
    mandatyKRozdeleni--;
  }

  return hlasyAMandaty;
}

function VypoctiMandatyVObvodu_Kvota(hlasyAMandaty, mandatyKRozdeleni, kvota) {
  let hlasyCelkem = VypoctiHlasyCelkem(hlasyAMandaty);
  let hlasyAMandaty_kopie = Kopie(hlasyAMandaty);
  let mandatyPredPridelenim = VypoctiMandatyCelkem(hlasyAMandaty);

  let mandatoveCislo = VypoctiMandatoveCislo(
    hlasyCelkem,
    mandatyKRozdeleni,
    kvota
  );

  hlasyAMandaty = VypoctiMandatyAZbytkyHlasu(hlasyAMandaty, mandatoveCislo);

  // Zkouska zda imperaliho kvota nerozdelila o hlas navic

  if (
    mandatyPredPridelenim + mandatyKRozdeleni >=
    VypoctiMandatyCelkem(hlasyAMandaty)
  ) {
    return hlasyAMandaty;
  } else {
    mandatoveCislo = VypoctiMandatoveCislo(hlasyCelkem, mandatyKRozdeleni, -1); // Zvolime pro tento obvod Droopovu kvotu jako nahradu za imperaliho

    hlasyAMandaty = hlasyAMandaty_kopie;
    hlasyAMandaty = VypoctiMandatyAZbytkyHlasu(hlasyAMandaty, mandatoveCislo);

    return hlasyAMandaty;
  }
}

function VypoctiMandatoveCislo(hlasyCelkem, mandaty, kvota) {
  if (kvota == -1) {
    return Math.floor(hlasyCelkem / (mandaty + 1) + 1); // Droopova kvota ma flag -1 protoze ma jiny vzorec nez ostatni kvoty
  }

  if (kvota == 0) {
    return Math.round(hlasyCelkem / mandaty);
  }

  return Math.ceil(hlasyCelkem / (mandaty + kvota));
}

function VypoctiMandatyAZbytkyHlasu(hlasyAMandaty, mandatoveCislo) {
  hlasyAMandaty.forEach((strana) => {
    let mandaty = Math.floor(strana.hlasy / mandatoveCislo);

    strana.mandaty += mandaty;
    strana.hlasy -= mandatoveCislo * mandaty;
  });
  return hlasyAMandaty;
}

function VypoctiZbytekMandatu(hlasyAMandaty, mandatyKRozdeleni) {
  let mandatyCelkem = VypoctiMandatyCelkem(hlasyAMandaty);

  return mandatyKRozdeleni - mandatyCelkem;
}

function PripravHlasyAMandatyKraje(dataRocnik) {
  let hlasyAMandaty = [];

  dataRocnik.kraje.forEach((kraj) => {
    hlasyAMandaty.push({
      mandaty: 0,
      hlasy: kraj.hlasyCelkem,
    });
  });

  return hlasyAMandaty;
}

function PripravHlasyAMandatyStran_Kraj(hlasyKraj) {
  let hlasyAMandaty = [];

  hlasyKraj.forEach((hlasyStrany) => {
    hlasyAMandaty.push({
      hlasy: hlasyStrany,
      mandaty: 0,
    });
  });

  return hlasyAMandaty;
}

function VypoctiHlasyCelkem(hlasyAMandaty) {
  let hlasyCelkem = 0;

  hlasyAMandaty.forEach((subjekt) => {
    hlasyCelkem += subjekt.hlasy;
  });

  return hlasyCelkem;
}

function AplikujKlauzuli(dataRocnik, klauzule) {
  let hlasyCelkem = dataRocnik.hlasyCelkem;

  for (
    let indexStrany = dataRocnik.strany.length - 1;
    indexStrany >= 0;
    indexStrany--
  ) {
    let strana = dataRocnik.strany[indexStrany];

    if (
      MaStranaDostHlasu(
        strana.hlasy,
        hlasyCelkem,
        klauzule,
        strana.pocetSubjektu
      ) == false
    ) {
      dataRocnik = VymazStranu(dataRocnik, indexStrany);
    }
  }

  return dataRocnik;
}

function MaStranaDostHlasu(hlasyStrany, hlasyCelkem, klauzule, pocetSubjektu) {
  let podilHlasu = hlasyStrany / hlasyCelkem / pocetSubjektu;

  return podilHlasu >= klauzule;
}

function VymazStranu(dataRocnik, indexStrany) {
  dataRocnik.kraje.forEach((kraj) => {
    kraj.strany.splice(indexStrany, 1);
  });

  dataRocnik.strany.splice(indexStrany, 1);

  return dataRocnik;
}

function PripravDataStran(dataRocnik) {
  let strany = [];

  let dataStran = dataRocnik.strany;

  dataStran.forEach((strana) => {
    strana.hlasyCelkem = strana.hlasy;
    strana.hlasy = 0;
    strana.mandaty = 0;
    strana.hlasyNaMandat = 0;
    strany.push(strana);
  });

  return strany;
}

function PridelMandatyVKrajich_Kvota(mandatyKraj, mandatyStranCR, data, kvota) {
  let pocetKraju = mandatyKraj.length;

  for (let indexKraj = 0; indexKraj < pocetKraju; indexKraj++) {
    let hlasyKraj = data.kraje[indexKraj].strany;

    let hlasyAMandaty = PripravHlasyAMandatyStran_Kraj(hlasyKraj);

    mandatyAHlasy = VypoctiMandatyVObvodu_Kvota(
      hlasyAMandaty,
      mandatyKraj[indexKraj].mandaty,
      kvota
    );

    mandatyStranCR = PrictiMandatyAZbytkyHlasu(mandatyStranCR, mandatyAHlasy);
  }
  return mandatyStranCR;
}

function PrictiMandatyAZbytkyHlasu(mandatyStranCR, hlasyAMandaty) {
  for (let index = 0; index < mandatyStranCR.length; index++) {
    mandatyStranCR[index].mandaty += hlasyAMandaty[index].mandaty;
    mandatyStranCR[index].hlasy += hlasyAMandaty[index].hlasy;
  }
  return mandatyStranCR;
}

function VypoctiPocetHlasuNaMandat(mandatyStran) {
  mandatyStran.forEach((strana) => {
    if (strana.mandaty == 0) {
      strana.hlasyNaMandat = 0;
    } else {
      strana.hlasyNaMandat = Math.floor(strana.hlasyCelkem / strana.mandaty);
    }
  });

  return mandatyStran;
}

function VypoctiMandatyCelkem(poleObjektuSMandaty) {
  let suma = 0;

  poleObjektuSMandaty.forEach((objekt) => {
    suma += objekt.mandaty;
  });

  return suma;
}

function Kopie(obejkt) {
  return JSON.parse(JSON.stringify(obejkt));
}

function VypoctiRaduDelitelu(prvniCifraRady, increment) {
  let rada = [];

  rada.push(prvniCifraRady);

  let cifra = Math.floor(prvniCifraRady);

  for (let i = 0; i < 200; i++) {
    cifra += increment;

    rada.push(cifra);
  }

  return rada;
}

function PridelMandatyVKrajich_Delitel(
  mandatyStran,
  mandatyKraju,
  radaDelitelu,
  data
) {
  for (let indexKraj = 0; indexKraj < mandatyKraju.length; indexKraj++) {
    let mandatyKRozdeleni = mandatyKraju[indexKraj].mandaty;
    let hlasyKraj = data.kraje[indexKraj].strany;

    let hlasyAMandatyStran_Kraj = PripravHlasyAMandatyStran_Kraj(hlasyKraj);

    hlasyAMandatyStran_Kraj = PridejPodily(
      hlasyAMandatyStran_Kraj,
      radaDelitelu,
      mandatyKRozdeleni
    );

    hlasyAMandatyStran_Kraj = PridelMandatyKraje_Delitel(
      hlasyAMandatyStran_Kraj,
      mandatyKRozdeleni
    );

    mandatyStran = PrictiMandatyAZbytkyHlasu(
      mandatyStran,
      hlasyAMandatyStran_Kraj
    );
  }

  return mandatyStran;
}

function PridelMandatyKraje_Delitel(hlasyAMandatyStran, mandatyKRozdeleni) {
  while (mandatyKRozdeleni > 0) {
    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < hlasyAMandatyStran.length; i++) {
      if (hlasyAMandatyStran[i].podily[0] > max) {
        max = hlasyAMandatyStran[i].podily[0];
        maxIndex = i;
      }
    }

    hlasyAMandatyStran[maxIndex].mandaty++;
    mandatyKRozdeleni--;
    hlasyAMandatyStran[maxIndex].podily.shift();
  }

  return hlasyAMandatyStran;
}

function PridejPodily(hlasyAMandatyStran, radaDelitelu, mandatyKRozdeleni) {
  hlasyAMandatyStran.forEach((strana) => {
    strana["podily"] = [];

    for (let i = 0; i < mandatyKRozdeleni; i++) {
      strana.podily.push(strana.hlasy / radaDelitelu[i]);
    }
  });

  return hlasyAMandatyStran;
}

function VypoctiMandatyPS(data, rok, klauzule, metoda) {
  let dataRocnik = PripravDataRocnik(data, rok);
  let mandatyStran = [];

  if (metoda < 10) {
    mandatyStran = PridelMandatyPS_Kvota(dataRocnik, metoda, klauzule); // Metoda odpovida typu kvoty
  } else if (metoda <= 30) {
    let increment = 1;
    let privniCifra = 1; // D'Hontuv delitel

    if (metoda == 20) {
      privniCifra = 1.42; // Modifikovany D'Hontuv delitel
    } else if (metoda == 30) {
      privniCifra = 2; // Imperialiho delitel
    }
    mandatyStran = PridelMandatyPS_Delitel(
      dataRocnik,
      privniCifra,
      increment,
      klauzule
    );
  } else {
    if (metoda == 40) {
      mandatyStran = PridelMandatyPS_Delitel(dataRocnik, 1, 2, klauzule); // Sainte-Lagueuv delitel
    } else if (metoda == 50) {
      mandatyStran = PridelMandatyPS_Delitel(dataRocnik, 1.4, 2, klauzule); // Modifikovany Sainte-Lagueuv delitel
    } else if (metoda == 60) {
      mandatyStran = PridelMandatyPS_Delitel(dataRocnik, 1, 3, klauzule); // Dansky delitel
    }
  }

  return UpravDataProGraf(mandatyStran);
}

function FormatujCislo(num){
  let cislo = num;
  
  let mil = Math.floor(cislo / 1000000);

  cislo %= 1000000;

  let tis = Math.floor(cislo / 1000);

  cislo %= 1000;

  let jed = cislo;

  if (num >= 1000000) {
    return mil + " " + tis + " " + jed;
  } else if (num >= 1000) {
    return tis + " " + jed;
  } else {
    return jed;
  }
 }

function UpravDataProGraf(mandatyStran) {
  let dataProGraf = [];

  while (mandatyStran.length > 0) {
    let maxIndex = 0;
    let max = 0;
    let strana = [];

    for (let index = 0; index < mandatyStran.length; index++) {
      if (mandatyStran[index].mandaty > max) {
        maxIndex = index;
        max = mandatyStran[index].mandaty;
      }
    }

    strana = mandatyStran[maxIndex];

    let dataStrany = [
      strana.nazevDlouhy,
      strana.mandaty,
      strana.barva,
      strana.nazev,
      FormatujCislo(strana.hlasyNaMandat)
    ];

    if (strana.mandaty > 0) {
      dataProGraf.push(dataStrany);
    }

    mandatyStran.splice(maxIndex, 1);
  }

  return dataProGraf;

  mandatyStran.forEach(strana => {


    let dataStrany = [
      strana.nazevDlouhy,
      strana.mandaty,
      strana.barva,
      strana.nazev,
      FormatujCislo(strana.hlasyNaMandat)
    ];

    if (strana.mandaty > 0) {
      dataProGraf.push(dataStrany);
    }

  });

  return dataProGraf;
}

function PripravDataRocnik(data, rok) {
  for (let indexRoku = 0; indexRoku < data.roky.length; indexRoku++) {
    if (data.roky[indexRoku].rok == rok) {
      return Kopie(data.roky[indexRoku]);
    }
  }
}

function NikdoNepostoupil(data) {
  return data.strany.length == 0;
}
