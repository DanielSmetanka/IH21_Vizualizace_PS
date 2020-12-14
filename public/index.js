let rok = 2017;
let metoda = 10;
let klauzule = 0.05;
let data;
let chart;
let graf = {
  chart: {
    type: "item",
  },

  title: {
    text: "Vizualizace poslanecké sněmovny",
  },

  legend: {
    labelFormat:
      '{name} <span style="opacity: 0.8">{y} ({hlasuNaMandat} hl/m)</span>',
  },

  series: [
    {
      name: "Počet sedadel",
      keys: ["name", "y", "color", "label", "hlasuNaMandat"],
      data: [],
      dataLabels: {
        enabled: true,
        format: "{point.label}",
      },
      // Circular options
      center: ["50%", "88%"],
      size: "170%",
      startAngle: -100,
      endAngle: 100,
    },
  ],
};

fetch("./data.json")
  .then((resp) => resp.json())
  .then((dataJSON) => {
    data = dataJSON;
    PripravGraf(data, graf, rok, metoda, klauzule);
    VykresliGraf(graf);
  });

function VykresliGraf(graf) {
  chart = Highcharts.chart("container", graf);
}

function NahrajNovaData(dataProGraf, nazev) {
  chart.series[0].update({ data: dataProGraf });
  chart.title.update({ text: nazev });
}

function PripravGraf(data, graf, rok, metoda, klauzule) {
  graf.series[0].data = VypoctiMandatyPS(data, rok, klauzule, metoda);
}

function AktualizujGraf() {
  let dataProGraf = VypoctiMandatyPS(data, rok, klauzule, metoda);
  let nazev;

  if (dataProGraf.length == 0) {
    nazev = "Žádná strana se nedostala do poslenecké sněmovny!";
  } else {
    nazev = "Vizualizace poslanecké sněmovny";
  }

  NahrajNovaData(dataProGraf, nazev);
}

function ZmenaRoku(element) {
  rok = parseInt(element.value);
  PripravGraf(data, graf, rok, metoda, klauzule);
  VykresliGraf(graf);
  AktualizujGraf();
}

function ZmenaMetody(element) {
  metoda = parseInt(element.value);
  AktualizujGraf();
}

function ZmenaKlauzule(element) {
  klauzule = parseFloat(element.value) / 100;
  AktualizujGraf();
}
