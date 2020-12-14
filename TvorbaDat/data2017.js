console.log("Hovno");

let hlasy2017 = [
  {
    kraj: "Hlavní město Praha",
    s1: 99182,
    s2: 34079,
    s3: 30920,
    s4: 28158,
    s5: 12857,
    s6: 107590,
    s7: 77325,
    s8: 124445,
    s9: 29143,
    s10: 35547,
    hlasyCelkem: 611450,
  },
  {
    kraj: "Středočeský kraj",
    s1: 85415,
    s2: 43853,
    s3: 53368,
    s4: 47695,
    s5: 10679,
    s6: 79815,
    s7: 41843,
    s8: 189371,
    s9: 19925,
    s10: 59497,
    hlasyCelkem: 660619,
  },
  {
    kraj: "Jihočeský kraj",
    s1: 38232,
    s2: 23035,
    s3: 14435,
    s4: 29414,
    s5: 5303,
    s6: 33143,
    s7: 16713,
    s8: 91012,
    s9: 16983,
    s10: 31062,
    hlasyCelkem: 315319,
  },
  {
    "": "",
    kraj: "Plzeňský kraj",
    s1: 32833,
    s2: 21643,
    s3: 13180,
    s4: 23502,
    s5: 4138,
    s6: 27201,
    s7: 13095,
    s8: 84114,
    s9: 9499,
    s10: 28686,
    hlasyCelkem: 271510,
  },
  {
    kraj: "Karlovarský kraj",
    s1: 10796,
    s2: 8530,
    s3: 6453,
    s4: 9960,
    s5: 1544,
    s6: 12264,
    s7: 4495,
    s8: 43268,
    s9: 2885,
    s10: 15233,
    hlasyCelkem: 122142,
  },
  {
    kraj: "Ústecký kraj",
    s1: 32197,
    s2: 22464,
    s3: 12299,
    s4: 33628,
    s5: 4595,
    s6: 28004,
    s7: 12336,
    s8: 127574,
    s9: 6127,
    s10: 42777,
    hlasyCelkem: 339686,
  },
  {
    kraj: "Liberecký kraj",
    s1: 21468,
    s2: 11811,
    s3: 26780,
    s4: 13981,
    s5: 3152,
    s6: 23859,
    s7: 8825,
    s8: 62302,
    s9: 4297,
    s10: 22878,
    hlasyCelkem: 208817,
  },
  {
    kraj: "Královéhradecký kraj",
    s1: 32242,
    s2: 18128,
    s3: 14184,
    s4: 19792,
    s5: 4310,
    s6: 29932,
    s7: 14308,
    s8: 88551,
    s9: 16294,
    s10: 28038,
    hlasyCelkem: 278720,
  },
  {
    kraj: "Pardubický kraj",
    s1: 28313,
    s2: 19294,
    s3: 12855,
    s4: 20002,
    s5: 3998,
    s6: 27146,
    s7: 10864,
    s8: 79551,
    s9: 17599,
    s10: 26202,
    hlasyCelkem: 258169,
  },
  {
    kraj: "Kraj Vysočina",
    s1: 25989,
    s2: 24631,
    s3: 11251,
    s4: 24829,
    s5: 3565,
    s6: 26086,
    s7: 10163,
    s8: 75247,
    s9: 24295,
    s10: 25237,
    hlasyCelkem: 262764,
  },
  {
    kraj: "Jihomoravský kraj",
    s1: 69319,
    s2: 49248,
    s3: 21222,
    s4: 46966,
    s5: 10421,
    s6: 53207,
    s7: 26356,
    s8: 159909,
    s9: 52346,
    s10: 67973,
    hlasyCelkem: 583442,
  },
  {
    kraj: "Olomoucký kraj",
    s1: 27266,
    s2: 22760,
    s3: 13580,
    s4: 26853,
    s5: 3963,
    s6: 25955,
    s7: 9903,
    s8: 95950,
    s9: 25257,
    s10: 41397,
    hlasyCelkem: 305639,
  },
  {
    kraj: "Zlínský kraj",
    s1: 28752,
    s2: 20454,
    s3: 17168,
    s4: 20669,
    s5: 4812,
    s6: 24859,
    s7: 8443,
    s8: 84750,
    s9: 33631,
    s10: 38020,
    hlasyCelkem: 294679,
  },
  {
    "": "",
    kraj: "Moravskoslezský kraj",
    s1: 40944,
    s2: 48417,
    s3: 14462,
    s4: 47651,
    s5: 5892,
    s6: 47332,
    s7: 14142,
    s8: 194069,
    s9: 35362,
    s10: 76027,
    hlasyCelkem: 547789,
  },
  {
    kraj: "CelkemČR",
    s1: 572948,
    s2: 368347,
    s3: 262157,
    s4: 393100,
    s5: 79229,
    s6: 546393,
    s7: 268811,
    s8: 1500113,
    s9: 293643,
    s10: 538574,
    hlasyCelkem: 5060745,
  },
];

let data = {
  roky: [
    {
      rok: 2017,
      hlasyCelkem: 5060745,
      kraje: [
        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 611450,
          strany: [],
        },

        {
          nazev: "Středočeský kraj",
          hlasyCelkem: 660619,
          strany: [],
        },

        {
          nazev: "Jihočeský kraj",
          hlasyCelkem: 315319,
          strany: [],
        },

        {
          nazev: "Plzeňský kraj",
          hlasyCelkem: 271510,
          strany: [],
        },

        {
          nazev: "Karlovarský kraj",
          hlasyCelkem: 122142,
          strany: [],
        },
        {
          nazev: "Ústecký kraj",
          hlasyCelkem: 339686,
          strany: [],
        },

        {
          nazev: "Liberecký kraj",
          hlasyCelkem: 208817,
          strany: [],
        },

        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 278720,
          strany: [],
        },

        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 258169,
          strany: [],
        },

        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 262764,
          strany: [],
        },

        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 583442,
          strany: [],
        },
        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 305639,
          strany: [],
        },

        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 294679,
          strany: [],
        },

        {
          nazev: "Hlavní město Praha",
          hlasyCelkem: 547789,
          strany: [],
        },
      ],
    },
  ],
};

for (let index = 0; index < 14; index++) {
  data.roky[0].kraje[index].nazev = hlasy2017[index].kraj;

  data.roky[0].kraje[index].hlasyCelkem = hlasy2017[index].hlasyCelkem;

  data.roky[0].kraje[index].strany.push(hlasy2017[index].s1);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s2);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s3);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s4);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s5);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s6);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s7);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s8);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s9);
  data.roky[0].kraje[index].strany.push(hlasy2017[index].s10);
}

var jsonData = JSON.stringify(data);

var fs = require("fs");
fs.writeFile("test.txt", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
