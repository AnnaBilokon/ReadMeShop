import p1_img from "./product_1.jpg";
import p2_img from "./product_2.jpg";
import p3_img from "./product_3.jpg";
import p4_img from "./product_4.jpg";
import p5_img from "./product_5.jpg";
import p6_img from "./product_6.jpg";
import p7_img from "./product_7.jpg";
import p8_img from "./product_8.jpg";
import p9_img from "./product_9.jpg";
import p10_img from "./product_10.jpg";
import p11_img from "./product_11.jpg";
import p12_img from "./product_12.jpg";
import p13_img from "./product_13.jpg";
import p14_img from "./product_14.jpg";
import p15_img from "./product_15.jpg";
import p16_img from "./product_16.jpg";
import p17_img from "./product_17.jpg";
import p18_img from "./product_18.jpg";
import p19_img from "./product_19.jpg";
import p20_img from "./product_20.jpg";
import p21_img from "./product_21.jpg";
import p22_img from "./product_22.jpg";
import p23_img from "./product_23.jpg";
import p24_img from "./product_24.jpg";
import p25_img from "./product_25.jpg";
import p26_img from "./product_26.jpg";
import p27_img from "./product_27.jpg";
import p28_img from "./product_28.jpg";
import p29_img from "./product_29.jpg";
import p30_img from "./product_30.jpg";
import p31_img from "./product_31.jpg";
import p32_img from "./product_32.jpg";
import p33_img from "./product_33.jpg";
import p34_img from "./product_34.jpg";
import p35_img from "./product_35.jpg";
import p36_img from "./product_36.jpg";

let all_product = [
  {
    id: 1,
    name: "The Midnight Library",
    category: "literaly_fiction",
	description:'In The Midnight Library, Matt Haigs enchanting blockbuster novel, Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place.',
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Where the crawdads sing",
    category: "literaly_fiction",
	description:'In Where the Crawdads Sing, Owens juxtaposes an exquisite ode to the natural world against a profound coming of age story and haunting mystery. Thought-provoking, wise, and deeply moving, Owens’s debut novel reminds us that we are forever shaped by the child within us, while also subject to the beautiful and violent secrets that nature keeps.',
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "The silent patient",
    category: "literaly_fiction",
	description:'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.',
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "A good girl's guide",
    category: "literaly_fiction",
	description:'The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it.But having grown up in the same small town that was consumed by the murder, Pippa Fitz-Amobi is not so sure. When she chooses the case as the topic for her final year project, she starts to uncover secrets that someone in town desperately wants to stay hidden. And if the real killer is still out there, how far will they go to keep Pip from the truth?',
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "All the light we cannot see",
    category: "literaly_fiction",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "A curse for true love",
    category: "fantasy",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Harry Potter and Philosopher's stone",
    category: "fantasy",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Legendary",
    category: "fantasy",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Babel",
    category: "fantasy",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Piranesi",
    category: "fantasy",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "A thousand splendid suns",
    category: "literaly_fiction",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "The seven husbands of Evelin Hugo",
    category: "literaly_fiction",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Reminders of him",
    category: "romance",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Things we never got over",
    category: "romance",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "A thousand boy kisses",
    category: "romance",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Archer's voice",
    category: "romance",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Love and other words",
    category: "romance",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Better then the movies",
    category: "romance",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "A little life",
    category: "literaly_fiction",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "The secret history",
    category: "literaly_fiction",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "If we were Villians",
    category: "literaly_fiction",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Fourth wing",
    category: "fantasy",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Powerless",
    category: "fantasy",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "The serpent and the wings of the night",
    category: "fantasy",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "House of flame and shadow",
    category: "fantasy",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "If he had been with me",
    category: "literaly_fiction",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "A fire in the flesh",
    category: "fantasy",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "The last mrs Parrish",
    category: "literaly_fiction",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Behind closed doors",
    category: "literaly_fiction",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "The housemaid",
    category: "literaly_fiction",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "The seven year slip",
    category: "romance",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "The nightingale",
    category: "literaly_fiction",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "The beekeeper of Aleppo",
    category: "literaly_fiction",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "As long as the lemon trees grow",
    category: "literaly_fiction",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "The island of missing trees",
    category: "literaly_fiction",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "The fourty rules of love",
    category: "romance",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
