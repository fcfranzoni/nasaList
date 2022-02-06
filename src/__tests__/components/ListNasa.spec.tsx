import { render } from "@testing-library/react";
import ListNasa from "../../containers/Nasa/components/List";

describe("Header component", () => {
  it("should be able to render an ListNasa", () => {
    const T = [
      [
        "2015-09-08",
        [
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/2465633?api_key=DEMO_KEY",
            },
            id: "2465633",
            neo_reference_id: "2465633",
            name: "465633 (2009 JR5)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
            absolute_magnitude_h: 20.36,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.2251930467,
                estimated_diameter_max: 0.5035469604,
              },
              meters: {
                estimated_diameter_min: 225.1930466786,
                estimated_diameter_max: 503.5469604336,
              },
              miles: {
                estimated_diameter_min: 0.1399284286,
                estimated_diameter_max: 0.3128894784,
              },
              feet: {
                estimated_diameter_min: 738.8223552649,
                estimated_diameter_max: 1652.0570096689,
              },
            },
            is_potentially_hazardous_asteroid: true,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 20:28",
                epoch_date_close_approach: 1441744080000,
                relative_velocity: {
                  kilometers_per_second: "18.1279547773",
                  kilometers_per_hour: "65260.6371983344",
                  miles_per_hour: "40550.4220413761",
                },
                miss_distance: {
                  astronomical: "0.3027478814",
                  lunar: "117.7689258646",
                  kilometers: "45290438.204452618",
                  miles: "28142173.3303294084",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3426410?api_key=DEMO_KEY",
            },
            id: "3426410",
            neo_reference_id: "3426410",
            name: "(2008 QV11)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3426410",
            absolute_magnitude_h: 21.34,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.1434019235,
                estimated_diameter_max: 0.320656449,
              },
              meters: {
                estimated_diameter_min: 143.4019234645,
                estimated_diameter_max: 320.6564489709,
              },
              miles: {
                estimated_diameter_min: 0.0891057966,
                estimated_diameter_max: 0.1992466184,
              },
              feet: {
                estimated_diameter_min: 470.4787665793,
                estimated_diameter_max: 1052.0225040417,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 14:31",
                epoch_date_close_approach: 1441722660000,
                relative_velocity: {
                  kilometers_per_second: "19.7498128142",
                  kilometers_per_hour: "71099.3261312856",
                  miles_per_hour: "44178.3562841869",
                },
                miss_distance: {
                  astronomical: "0.2591250701",
                  lunar: "100.7996522689",
                  kilometers: "38764558.550560687",
                  miles: "24087179.7459520006",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3553060?api_key=DEMO_KEY",
            },
            id: "3553060",
            neo_reference_id: "3553060",
            name: "(2010 XT10)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3553060",
            absolute_magnitude_h: 26.5,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0133215567,
                estimated_diameter_max: 0.0297879063,
              },
              meters: {
                estimated_diameter_min: 13.3215566698,
                estimated_diameter_max: 29.7879062798,
              },
              miles: {
                estimated_diameter_min: 0.008277629,
                estimated_diameter_max: 0.0185093411,
              },
              feet: {
                estimated_diameter_min: 43.7058959846,
                estimated_diameter_max: 97.7293544391,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 12:07",
                epoch_date_close_approach: 1441714020000,
                relative_velocity: {
                  kilometers_per_second: "19.1530348886",
                  kilometers_per_hour: "68950.9255988812",
                  miles_per_hour: "42843.4237422604",
                },
                miss_distance: {
                  astronomical: "0.4917435147",
                  lunar: "191.2882272183",
                  kilometers: "73563782.385433689",
                  miles: "45710414.7542113482",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3726710?api_key=DEMO_KEY",
            },
            id: "3726710",
            neo_reference_id: "3726710",
            name: "(2015 RC)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710",
            absolute_magnitude_h: 24.3,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0366906138,
                estimated_diameter_max: 0.0820427065,
              },
              meters: {
                estimated_diameter_min: 36.6906137531,
                estimated_diameter_max: 82.0427064882,
              },
              miles: {
                estimated_diameter_min: 0.0227984834,
                estimated_diameter_max: 0.0509789586,
              },
              feet: {
                estimated_diameter_min: 120.3760332259,
                estimated_diameter_max: 269.1689931548,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 09:45",
                epoch_date_close_approach: 1441705500000,
                relative_velocity: {
                  kilometers_per_second: "19.486643553",
                  kilometers_per_hour: "70151.9167909206",
                  miles_per_hour: "43589.6729637806",
                },
                miss_distance: {
                  astronomical: "0.0269252677",
                  lunar: "10.4739291353",
                  kilometers: "4027962.697099799",
                  miles: "2502859.9608192662",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3727181?api_key=DEMO_KEY",
            },
            id: "3727181",
            neo_reference_id: "3727181",
            name: "(2015 RO36)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727181",
            absolute_magnitude_h: 22.9,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0699125232,
                estimated_diameter_max: 0.1563291544,
              },
              meters: {
                estimated_diameter_min: 69.9125232246,
                estimated_diameter_max: 156.3291544087,
              },
              miles: {
                estimated_diameter_min: 0.0434416145,
                estimated_diameter_max: 0.097138403,
              },
              feet: {
                estimated_diameter_min: 229.3718026961,
                estimated_diameter_max: 512.8909429502,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 14:36",
                epoch_date_close_approach: 1441722960000,
                relative_velocity: {
                  kilometers_per_second: "15.8053596703",
                  kilometers_per_hour: "56899.294813224",
                  miles_per_hour: "35355.0090465835",
                },
                miss_distance: {
                  astronomical: "0.0540392535",
                  lunar: "21.0212696115",
                  kilometers: "8084157.219990045",
                  miles: "5023262.364730821",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3727639?api_key=DEMO_KEY",
            },
            id: "3727639",
            neo_reference_id: "3727639",
            name: "(2015 RN83)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727639",
            absolute_magnitude_h: 21.7,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.1214940408,
                estimated_diameter_max: 0.2716689341,
              },
              meters: {
                estimated_diameter_min: 121.4940407996,
                estimated_diameter_max: 271.6689340891,
              },
              miles: {
                estimated_diameter_min: 0.0754928736,
                estimated_diameter_max: 0.1688071972,
              },
              feet: {
                estimated_diameter_min: 398.6025088171,
                estimated_diameter_max: 891.3023057169,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 15:42",
                epoch_date_close_approach: 1441726920000,
                relative_velocity: {
                  kilometers_per_second: "12.0811420305",
                  kilometers_per_hour: "43492.1113096542",
                  miles_per_hour: "27024.3066079349",
                },
                miss_distance: {
                  astronomical: "0.1684193589",
                  lunar: "65.5151306121",
                  kilometers: "25195177.358205543",
                  miles: "15655557.2525527734",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3730577?api_key=DEMO_KEY",
            },
            id: "3730577",
            neo_reference_id: "3730577",
            name: "(2015 TX237)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3730577",
            absolute_magnitude_h: 23.3,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.058150704,
                estimated_diameter_max: 0.130028927,
              },
              meters: {
                estimated_diameter_min: 58.1507039646,
                estimated_diameter_max: 130.0289270043,
              },
              miles: {
                estimated_diameter_min: 0.0361331611,
                estimated_diameter_max: 0.0807962044,
              },
              feet: {
                estimated_diameter_min: 190.7831555951,
                estimated_diameter_max: 426.6041048727,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 14:19",
                epoch_date_close_approach: 1441721940000,
                relative_velocity: {
                  kilometers_per_second: "6.573400491",
                  kilometers_per_hour: "23664.2417675863",
                  miles_per_hour: "14704.0395583094",
                },
                miss_distance: {
                  astronomical: "0.0795238758",
                  lunar: "30.9347876862",
                  kilometers: "11896602.433824546",
                  miles: "7392205.9712328948",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3731587?api_key=DEMO_KEY",
            },
            id: "3731587",
            neo_reference_id: "3731587",
            name: "(2015 UG)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3731587",
            absolute_magnitude_h: 22.81,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0728710415,
                estimated_diameter_max: 0.1629446024,
              },
              meters: {
                estimated_diameter_min: 72.8710414898,
                estimated_diameter_max: 162.9446023625,
              },
              miles: {
                estimated_diameter_min: 0.0452799519,
                estimated_diameter_max: 0.1012490505,
              },
              feet: {
                estimated_diameter_min: 239.0782277615,
                estimated_diameter_max: 534.595169215,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 18:50",
                epoch_date_close_approach: 1441738200000,
                relative_velocity: {
                  kilometers_per_second: "11.9557600601",
                  kilometers_per_hour: "43040.7362163935",
                  miles_per_hour: "26743.8396784585",
                },
                miss_distance: {
                  astronomical: "0.1132399881",
                  lunar: "44.0503553709",
                  kilometers: "16940461.018585347",
                  miles: "10526314.3652659086",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3747356?api_key=DEMO_KEY",
            },
            id: "3747356",
            neo_reference_id: "3747356",
            name: "(2016 EK158)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3747356",
            absolute_magnitude_h: 20.56,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.2053784995,
                estimated_diameter_max: 0.459240286,
              },
              meters: {
                estimated_diameter_min: 205.3784995184,
                estimated_diameter_max: 459.2402860401,
              },
              miles: {
                estimated_diameter_min: 0.1276162436,
                estimated_diameter_max: 0.2853585958,
              },
              feet: {
                estimated_diameter_min: 673.8139963601,
                estimated_diameter_max: 1506.6939000519,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 10:26",
                epoch_date_close_approach: 1441707960000,
                relative_velocity: {
                  kilometers_per_second: "16.9573055283",
                  kilometers_per_hour: "61046.29990174",
                  miles_per_hour: "37931.7967361673",
                },
                miss_distance: {
                  astronomical: "0.2804757126",
                  lunar: "109.1050522014",
                  kilometers: "41958569.191692162",
                  miles: "26071845.9281573556",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/3758838?api_key=DEMO_KEY",
            },
            id: "3758838",
            neo_reference_id: "3758838",
            name: "(2016 RT)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3758838",
            absolute_magnitude_h: 24.4,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0350392641,
                estimated_diameter_max: 0.0783501764,
              },
              meters: {
                estimated_diameter_min: 35.0392641108,
                estimated_diameter_max: 78.3501764334,
              },
              miles: {
                estimated_diameter_min: 0.0217723826,
                estimated_diameter_max: 0.0486845275,
              },
              feet: {
                estimated_diameter_min: 114.9582192654,
                estimated_diameter_max: 257.0543928497,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 01:02",
                epoch_date_close_approach: 1441674120000,
                relative_velocity: {
                  kilometers_per_second: "19.0983945697",
                  kilometers_per_hour: "68754.220451069",
                  miles_per_hour: "42721.1988130545",
                },
                miss_distance: {
                  astronomical: "0.170705627",
                  lunar: "66.404488903",
                  kilometers: "25537198.19621449",
                  miles: "15868079.146520362",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/54191333?api_key=DEMO_KEY",
            },
            id: "54191333",
            neo_reference_id: "54191333",
            name: "(2021 QP3)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54191333",
            absolute_magnitude_h: 22.7,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0766575574,
                estimated_diameter_max: 0.1714115092,
              },
              meters: {
                estimated_diameter_min: 76.6575573531,
                estimated_diameter_max: 171.4115092306,
              },
              miles: {
                estimated_diameter_min: 0.0476327831,
                estimated_diameter_max: 0.1065101409,
              },
              feet: {
                estimated_diameter_min: 251.5011804664,
                estimated_diameter_max: 562.3737359442,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 00:22",
                epoch_date_close_approach: 1441671720000,
                relative_velocity: {
                  kilometers_per_second: "9.3106795473",
                  kilometers_per_hour: "33518.4463701775",
                  miles_per_hour: "20827.0590792917",
                },
                miss_distance: {
                  astronomical: "0.3949696486",
                  lunar: "153.6431933054",
                  kilometers: "59086618.145208482",
                  miles: "36714722.0311497716",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
          {
            links: {
              self: "http://www.neowsapp.com/rest/v1/neo/54218591?api_key=DEMO_KEY",
            },
            id: "54218591",
            neo_reference_id: "54218591",
            name: "(2021 VC9)",
            nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54218591",
            absolute_magnitude_h: 27.037,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 0.0104029132,
                estimated_diameter_max: 0.0232616212,
              },
              meters: {
                estimated_diameter_min: 10.4029132426,
                estimated_diameter_max: 23.2616211744,
              },
              miles: {
                estimated_diameter_min: 0.0064640686,
                estimated_diameter_max: 0.0144540968,
              },
              feet: {
                estimated_diameter_min: 34.1302938828,
                estimated_diameter_max: 76.3176572139,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2015-09-08",
                close_approach_date_full: "2015-Sep-08 16:40",
                epoch_date_close_approach: 1441730400000,
                relative_velocity: {
                  kilometers_per_second: "5.2026208953",
                  kilometers_per_hour: "18729.435222936",
                  miles_per_hour: "11637.7426806071",
                },
                miss_distance: {
                  astronomical: "0.4431941124",
                  lunar: "172.4025097236",
                  kilometers: "66300895.211580588",
                  miles: "41197465.9325965944",
                },
                orbiting_body: "Earth",
              },
            ],
            is_sentry_object: false,
          },
        ],
      ],
    ];

    expect(render(<ListNasa list={T} />));
  });
});
