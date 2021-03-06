let rok = 2017;
let metoda = 10;
let klauzule = 0.05;
let data;
let chart;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let graf = {
  chart: {
    type: "item",
  },

  title: {
    text: "Vizualizace Poslanecké sněmovny",
  },

  legend: {
    labelFormat:
      '{name} <span style="opacity: 0.8">{y} ({hlasuNaMandat} hlasů na 1 mandát)</span>',
  },

  series: [
    {
      name: "Počet křesel",
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
  chart = Highcharts.chart("chart", graf);
}

function NahrajNovaData(dataProGraf, nazev) {
  chart.series[0].update({ data: dataProGraf });
  chart.title.update({ text: nazev });
}

function PripravGraf(data, graf, rok, metoda, klauzule) {
  graf.series[0].data = VypoctiMandatyPS(data, rok, klauzule, metoda);
  UpravDleSirky(graf, width);
}

function UpravDleSirky(graf, width){
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width < 500) {
    graf.series[0].dataLabels.enabled = false } else {
      graf.series[0].dataLabels.enabled = true
    }
}

function AktualizujGraf() {
  let dataProGraf = VypoctiMandatyPS(data, rok, klauzule, metoda);
  let nazev;

  UpravDleSirky(graf, width);

  if (dataProGraf.length == 0) {
    nazev = "Žádná strana se nedostala do Poslenecké sněmovny.";
  } else {
    nazev = "Vizualizace Poslanecké sněmovny";
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
  PripravGraf(data, graf, rok, metoda, klauzule);
  VykresliGraf(graf);
  AktualizujGraf();
}

function ZmenaKlauzule(element) {
  if (element.value == "") {
    klauzule = 0;
  }else{
  klauzule = parseFloat(element.value) / 100;
  }
  PripravGraf(data, graf, rok, metoda, klauzule);
  VykresliGraf(graf);
  AktualizujGraf();
}
