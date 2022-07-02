/* import { filterBySearchGeneral, OrderAtoZ, OrderZtoA, descendingOrder, showData, showExtraData} from './data.js'; */
import { filterBySearchGeneral, OrderAtoZ, OrderZtoA, descendingOrder, showData, showExtraData} from '../src/data';

//Datos para realizar las pruebas de orden alfabético y por año de estreno
const tests = [
  { "release_date": "1986", "title": "Castle in the Sky", "rt_score": "95"},
  { "release_date": "1988", "title": "My Neighbor Totoro", "rt_score": "93"},
  { "release_date": "2001", "title": "Spirited Away", "rt_score": "97"},
  { "release_date": "1995", "title": "Whisper of the Heart", "rt_score": "91"},
  { "release_date": "1991", "title": "Only Yesterday", "rt_score": "100"},
  { "release_date": "1989", "title": "Kiki's Delivery Service", "rt_score": "96"}
];

const orderAZ = [
  { "release_date": "1986", "title": "Castle in the Sky", "rt_score": "95"},
  { "release_date": "1989", "title": "Kiki's Delivery Service", "rt_score": "96"},
  { "release_date": "1988", "title": "My Neighbor Totoro", "rt_score": "93"},
  { "release_date": "1991", "title": "Only Yesterday", "rt_score": "100"},
  { "release_date": "2001", "title": "Spirited Away", "rt_score": "97"},
  { "release_date": "1995", "title": "Whisper of the Heart", "rt_score": "91"}
]

const orderZA = [
  { "release_date": "1995", "title": "Whisper of the Heart", "rt_score": "91"},
  { "release_date": "2001", "title": "Spirited Away", "rt_score": "97"},
  { "release_date": "1991", "title": "Only Yesterday", "rt_score": "100"},
  { "release_date": "1988", "title": "My Neighbor Totoro", "rt_score": "93"},
  { "release_date": "1989", "title": "Kiki's Delivery Service", "rt_score": "96"},
  { "release_date": "1986", "title": "Castle in the Sky", "rt_score": "95"}
]

const mostRecent = [
  { "release_date": "2001", "title": "Spirited Away", "rt_score": "97"},
  { "release_date": "1995", "title": "Whisper of the Heart", "rt_score": "91"},
  { "release_date": "1991", "title": "Only Yesterday", "rt_score": "100"},
  { "release_date": "1989", "title": "Kiki's Delivery Service", "rt_score": "96"},
  { "release_date": "1988", "title": "My Neighbor Totoro", "rt_score": "93"},
  { "release_date": "1986", "title": "Castle in the Sky", "rt_score": "95"}
]

const mostRated = [
  { "release_date": "1991", "title": "Only Yesterday", "rt_score": "100"},
  { "release_date": "2001", "title": "Spirited Away", "rt_score": "97"},
  { "release_date": "1989", "title": "Kiki's Delivery Service", "rt_score": "96"},
  { "release_date": "1986", "title": "Castle in the Sky", "rt_score": "95"},
  { "release_date": "1988", "title": "My Neighbor Totoro", "rt_score": "93"},
  { "release_date": "1995", "title": "Whisper of the Heart", "rt_score": "91"}
]

describe('OrderAtoZ', () => {
  it('is a function', () => {
    expect(typeof OrderAtoZ).toBe('function');
  });

  it('returns `OrderAtoZ`', () => {
    expect(OrderAtoZ(tests, 'title')).toEqual(orderAZ);
  });
});


describe('OrderZtoA', () => {
  it('is a function', () => {
    expect(typeof OrderZtoA).toBe('function');
  });

  it('returns `OrderZtoA`', () => {
    expect(OrderZtoA(tests, 'title')).toEqual(orderZA);
  });
});

describe('descendingOrder', () => {
  it('is a function', () => {
    expect(typeof descendingOrder).toBe('function');
  });

  it('returns an object with descending sorting release year', () => {
    expect(descendingOrder(tests, 'release_date')).toEqual(mostRecent);
  });

  it('returns an object with descending sorting film rate', () => {
    expect(descendingOrder(tests, 'rt_score')).toEqual(mostRated);
  });
});

//Datos para realizar pruebas
const filmData = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
        "gender": "Male",
        "age": "33",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
        "gender": "Male",
        "age": "Unspecified/Elderly",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {
        "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "name": "Satsuki Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
        "gender": "Female",
        "age": "11",
        "eye_color": "Dark Brown/Black",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
        "name": "Mei Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
        "gender": "Female",
        "age": "4",
        "eye_color": "Brown",
        "hair_color": "Light Brown",
        "specie": "Human"
      },
      {
        "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "name": "Tatsuo Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
        "gender": "Male",
        "age": "37",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
        "name": "Yasuko Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
        "gender": "Female",
        "age": "36",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "name": "Granny",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
        "name": "Kanta Ogaki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
        "gender": "Male",
        "age": "11",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
        "name": "Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
        "gender": "Male",
        "age": "1300",
        "eye_color": "Grey",
        "hair_color": "Grey",
        "specie": "Totoro"
      },
      {
        "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "name": "Chu Totoro",
        "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "Blue",
        "specie": "Totoro"
      },
      {
        "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
        "name": "Chibi Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Totoro"
      },
      {
        "id": "f467e18e-3694-409f-bdb3-be891ade1106",
        "name": "Catbus",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Yellow",
        "hair_color": "Brown",
        "specie": "Cat"
      }
    ],
    "locations": [
      {
        "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
        "name": "Kusakabe's House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
        "name": "Matsugo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
        "name": "Satsuki's School House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  }
];

//showData() muestra propiedades generales de la película
const mainFilmData = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "producer": "Isao Takahata",
    "director": "Hayao Miyazaki",
    "score": "95",
    "date": "1986",
    "synopsis": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "producer": "Hayao Miyazaki",
    "director": "Hayao Miyazaki",
    "score": "93",
    "date": "1988",
    "synopsis": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
  }
];

describe('showData', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns an object with main film data', () => {
    expect(showData(filmData)).toEqual(mainFilmData);
  });
});

//showExtraData() muestra propiedades más específicas de las películas como:
const extraFilmData = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
        "gender": "Male",
        "age": "33",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
        "gender": "Male",
        "age": "Unspecified/Elderly",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "people": [
      {
        "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "name": "Satsuki Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
        "gender": "Female",
        "age": "11",
        "eye_color": "Dark Brown/Black",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
        "name": "Mei Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
        "gender": "Female",
        "age": "4",
        "eye_color": "Brown",
        "hair_color": "Light Brown",
        "specie": "Human"
      },
      {
        "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "name": "Tatsuo Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
        "gender": "Male",
        "age": "37",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
        "name": "Yasuko Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
        "gender": "Female",
        "age": "36",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "name": "Granny",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
        "name": "Kanta Ogaki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
        "gender": "Male",
        "age": "11",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
        "name": "Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
        "gender": "Male",
        "age": "1300",
        "eye_color": "Grey",
        "hair_color": "Grey",
        "specie": "Totoro"
      },
      {
        "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "name": "Chu Totoro",
        "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "Blue",
        "specie": "Totoro"
      },
      {
        "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
        "name": "Chibi Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Totoro"
      },
      {
        "id": "f467e18e-3694-409f-bdb3-be891ade1106",
        "name": "Catbus",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Yellow",
        "hair_color": "Brown",
        "specie": "Cat"
      }
    ],
    "locations": [
      {
        "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
        "name": "Kusakabe's House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
        "name": "Matsugo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
        "name": "Satsuki's School House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  }
]

describe('showExtraData', () => {
  it('is a function', () => {
    expect(typeof showExtraData).toBe('function');
  });

  it('returns an object with extra film data', () => {
    expect(showExtraData(filmData)).toEqual(extraFilmData);
  });
});

/* -----Test para el buscador------ */
describe('filterBySearchGeneral', ()=> {
  it('is a function', ()=> {
    expect(typeof filterBySearchGeneral).toBe('function');
  });

  it('should return `My Neighbor Totoro`', ()=> {
    const searchingTest = [{ "title": "Castle in the Sky"}, {"title": "My Neighbor Totoro"}, {"title": "Only Yesterday"}];
    expect(filterBySearchGeneral(searchingTest, 'totoro', 'title')).toEqual([ {"title": "My Neighbor Totoro"} ]);
  });

  it('should return `Isao Takahata`', ()=> {
    const directorTest = [{"director": "Isao Takahata", "title": "Only Yesterday"}, {"director": "Hayao Miyazaki", "title": "Porco Rosso"}];
    expect(filterBySearchGeneral(directorTest, 'Isao Takahata', 'director')).toEqual([{"director": "Isao Takahata", "title": "Only Yesterday"}]);
  });

  it('should return `Toru Hara`', ()=> {
    const producerTest = [{"producer": "Hayao Miyazaki",  "title": "My Neighbor Totoro"}, {"producer": "Toru Hara", "title": "Grave of the Fireflies"}];
    expect(filterBySearchGeneral(producerTest, 'Toru Hara', 'producer')).toEqual([{"producer": "Toru Hara", "title": "Grave of the Fireflies"}]);
  });
});