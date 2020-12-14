let hlasy = [
  {
    kraj: "Hlavní město Praha",
    s1: 82668,
    s2: 21915,
    s3: 21327,
    s4: 135100,
    s5: 70378,
    s6: 32051,
    s7: 5427,
    s8: 18758,
    s9: 96564,
    s10: 49975,
    s11: 37888,
    celkem: 586509,
  },
  {
    kraj: "Středočeský kraj",
    s1: 115756,
    s2: 16880,
    s3: 17369,
    s4: 91926,
    s5: 55594,
    s6: 25473,
    s7: 6881,
    s8: 39714,
    s9: 125984,
    s10: 90478,
    s11: 23246,
    celkem: 627492,
  },
  {
    kraj: "Jihočeský kraj",
    s1: 64535,
    s2: 7229,
    s3: 7382,
    s4: 39760,
    s5: 25166,
    s6: 20749,
    s7: 3267,
    s8: 22023,
    s9: 52810,
    s10: 51193,
    s11: 7667,
    celkem: 311171,
  },
  {
    kraj: "Plzeňský kraj",
    s1: 57057,
    s2: 5970,
    s3: 8415,
    s4: 29696,
    s5: 28036,
    s6: 12781,
    s7: 2519,
    s8: 14673,
    s9: 48808,
    s10: 41529,
    s11: 6033,
    celkem: 263425,
  },
  {
    kraj: "Karlovarský kraj",
    s1: 26185,
    s2: 2393,
    s3: 3893,
    s4: 12374,
    s5: 8255,
    s6: 4126,
    s7: 1585,
    s8: 10225,
    s9: 26157,
    s10: 20520,
    s11: 2802,
    celkem: 122673,
  },
  {
    kraj: "Ústecký kraj",
    s1: 70233,
    s2: 7418,
    s3: 7869,
    s4: 28746,
    s5: 21130,
    s6: 7520,
    s7: 5136,
    s8: 25845,
    s9: 71986,
    s10: 68758,
    s11: 9082,
    celkem: 338082,
  },
  {
    kraj: "Liberecký kraj",
    s1: 34195,
    s2: 4899,
    s3: 6713,
    s4: 30867,
    s5: 14087,
    s6: 6108,
    s7: 2743,
    s8: 16145,
    s9: 43727,
    s10: 29132,
    s11: 5146,
    celkem: 202451,
  },
  {
    kraj: "Královéhradecký kraj",
    s1: 50870,
    s2: 7303,
    s3: 6744,
    s4: 35360,
    s5: 19933,
    s6: 18610,
    s7: 3065,
    s8: 22132,
    s9: 55548,
    s10: 38564,
    s11: 7873,
    celkem: 273891,
  },
  {
    kraj: "Pardubický kraj",
    s1: 52499,
    s2: 5962,
    s3: 6843,
    s4: 27643,
    s5: 18167,
    s6: 19693,
    s7: 5321,
    s8: 17523,
    s9: 50677,
    s10: 37378,
    s11: 6473,
    celkem: 255603,
  },
  {
    kraj: "Kraj Vysočina",
    s1: 60313,
    s2: 5332,
    s3: 6175,
    s4: 23769,
    s5: 17912,
    s6: 27643,
    s7: 4804,
    s8: 17938,
    s9: 41662,
    s10: 44197,
    s11: 6818,
    celkem: 262032,
  },
  {
    kraj: "Jihomoravský kraj",
    s1: 131684,
    s2: 14868,
    s3: 14110,
    s4: 56224,
    s5: 40255,
    s6: 58928,
    s7: 9714,
    s8: 37258,
    s9: 99509,
    s10: 82414,
    s11: 18780,
    celkem: 573857,
  },
  {
    kraj: "Olomoucký kraj",
    s1: 67751,
    s2: 5910,
    s3: 6744,
    s4: 23609,
    s5: 18407,
    s6: 24210,
    s7: 4719,
    s8: 27032,
    s9: 59808,
    s10: 51922,
    s11: 7097,
    celkem: 304844,
  },
  {
    kraj: "Zlínský kraj",
    s1: 57281,
    s2: 7035,
    s3: 5884,
    s4: 27225,
    s5: 16722,
    s6: 39047,
    s7: 7815,
    s8: 30056,
    s9: 54089,
    s10: 38099,
    s11: 6912,
    celkem: 295334,
  },
  {
    kraj: "Moravskoslezský kraj",
    s1: 145802,
    s2: 9450,
    s3: 12949,
    s4: 34058,
    s5: 30132,
    s6: 40031,
    s7: 12117,
    s8: 43017,
    s9: 99911,
    s10: 96885,
    s11: 13208,
    celkem: 552620,
  },
  {
    kraj: "strany",
    s1: "ČSSD",
    s2: "Svobodní",
    s3: "Piráti",
    s4: "TOP 09",
    s5: "ODS",
    s6: "KDU-ČSL",
    s7: "SPOZ",
    s8: "Úsvit",
    s9: "ANO 2011",
    s10: "KSČM",
    s11: "SZ",
  },
  {
    kraj: "celkem",
    s1: 1016829,
    s2: 122564,
    s3: 132417,
    s4: 596357,
    s5: 384174,
    s6: 336970,
    s7: 75113,
    s8: 342339,
    s9: 927240,
    s10: 741044,
    s11: 159025,
    celkem: 4969984,
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
          strany: [
            99182,
            34079,
            30920,
            28158,
            12857,
            107590,
            77325,
            124445,
            29143,
            35547,
          ],
        },
        {
          nazev: "Středočeský kraj",
          hlasyCelkem: 660619,
          strany: [
            85415,
            43853,
            53368,
            47695,
            10679,
            79815,
            41843,
            189371,
            19925,
            59497,
          ],
        },
        {
          nazev: "Jihočeský kraj",
          hlasyCelkem: 315319,
          strany: [
            38232,
            23035,
            14435,
            29414,
            5303,
            33143,
            16713,
            91012,
            16983,
            31062,
          ],
        },
        {
          nazev: "Plzeňský kraj",
          hlasyCelkem: 271510,
          strany: [
            32833,
            21643,
            13180,
            23502,
            4138,
            27201,
            13095,
            84114,
            9499,
            28686,
          ],
        },
        {
          nazev: "Karlovarský kraj",
          hlasyCelkem: 122142,
          strany: [
            10796,
            8530,
            6453,
            9960,
            1544,
            12264,
            4495,
            43268,
            2885,
            15233,
          ],
        },
        {
          nazev: "Ústecký kraj",
          hlasyCelkem: 339686,
          strany: [
            32197,
            22464,
            12299,
            33628,
            4595,
            28004,
            12336,
            127574,
            6127,
            42777,
          ],
        },
        {
          nazev: "Liberecký kraj",
          hlasyCelkem: 208817,
          strany: [
            21468,
            11811,
            26780,
            13981,
            3152,
            23859,
            8825,
            62302,
            4297,
            22878,
          ],
        },
        {
          nazev: "Královéhradecký kraj",
          hlasyCelkem: 278720,
          strany: [
            32242,
            18128,
            14184,
            19792,
            4310,
            29932,
            14308,
            88551,
            16294,
            28038,
          ],
        },
        {
          nazev: "Pardubický kraj",
          hlasyCelkem: 258169,
          strany: [
            28313,
            19294,
            12855,
            20002,
            3998,
            27146,
            10864,
            79551,
            17599,
            26202,
          ],
        },
        {
          nazev: "Kraj Vysočina",
          hlasyCelkem: 262764,
          strany: [
            25989,
            24631,
            11251,
            24829,
            3565,
            26086,
            10163,
            75247,
            24295,
            25237,
          ],
        },
        {
          nazev: "Jihomoravský kraj",
          hlasyCelkem: 583442,
          strany: [
            69319,
            49248,
            21222,
            46966,
            10421,
            53207,
            26356,
            159909,
            52346,
            67973,
          ],
        },
        {
          nazev: "Olomoucký kraj",
          hlasyCelkem: 305639,
          strany: [
            27266,
            22760,
            13580,
            26853,
            3963,
            25955,
            9903,
            95950,
            25257,
            41397,
          ],
        },
        {
          nazev: "Zlínský kraj",
          hlasyCelkem: 294679,
          strany: [
            28752,
            20454,
            17168,
            20669,
            4812,
            24859,
            8443,
            84750,
            33631,
            38020,
          ],
        },
        {
          nazev: "Moravskoslezský kraj",
          hlasyCelkem: 547789,
          strany: [
            40944,
            48417,
            14462,
            47651,
            5892,
            47332,
            14142,
            194069,
            35362,
            76027,
          ],
        },
      ],
      strany: [],
    },
  ],
};

var dataToPush = {
  rok: 2013,
  hlasyCelkem: 0,
  kraje: [],
  strany: [],
};

data.roky.push(dataToPush);

let indexRoku = 1;

for (let index = 0; index < 14; index++) {
  let kraj = { nazev: "", hlasyCelkem: 0, strany: [] };

  data.roky[indexRoku].kraje.push(kraj);

  data.roky[indexRoku].kraje[index].nazev = hlasy[index].kraj;

  data.roky[indexRoku].kraje[index].hlasyCelkem = hlasy[index].celkem;

  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s1);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s2);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s3);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s4);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s5);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s6);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s7);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s8);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s9);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s10);
  data.roky[indexRoku].kraje[index].strany.push(hlasy[index].s11);
}

data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s1,
  hlasy: hlasy[15].s1,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s2,
  hlasy: hlasy[15].s2,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s3,
  hlasy: hlasy[15].s3,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s4,
  hlasy: hlasy[15].s4,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s5,
  hlasy: hlasy[15].s5,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s6,
  hlasy: hlasy[15].s6,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s7,
  hlasy: hlasy[15].s7,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s8,
  hlasy: hlasy[15].s8,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s9,
  hlasy: hlasy[15].s9,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s10,
  hlasy: hlasy[15].s10,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s11,
  hlasy: hlasy[15].s11,
  barva: "#",
});

data.roky[indexRoku].hlasyCelkem = hlasy[15].celkem;

indexRoku = 0;

data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s1,
  hlasy: hlasy[15].s1,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s2,
  hlasy: hlasy[15].s2,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s3,
  hlasy: hlasy[15].s3,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s4,
  hlasy: hlasy[15].s4,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s5,
  hlasy: hlasy[15].s5,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s6,
  hlasy: hlasy[15].s6,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s7,
  hlasy: hlasy[15].s7,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s8,
  hlasy: hlasy[15].s8,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s9,
  hlasy: hlasy[15].s9,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s10,
  hlasy: hlasy[15].s10,
  barva: "#",
});
data.roky[indexRoku].strany.push({
  nazev: hlasy[14].s11,
  hlasy: hlasy[15].s11,
  barva: "#",
});

var jsonData = JSON.stringify(data);

var fs = require("fs");
fs.writeFile("dataForFireBase.json", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
