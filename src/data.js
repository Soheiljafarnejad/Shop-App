import Image_1 from "./assets/img/1.jpg"
import Image_2 from "./assets/img/2.jpg"
import Image_3 from "./assets/img/3.jpg"
import Image_4 from "./assets/img/4.jpg"
import Image_5 from "./assets/img/5.png"
export const products = [
  {
    name: "کفش مردانه سالومون راک مدل 411685",
    size: [38, 39, 40, 43, 44],
    fast: true,
    star: 4.7,
    price: 580000,
    offPrice: 550000,
    image: Image_1,
    id: 1,
  },
  {
    name: "کفش مردانه شوپا مدل lgr3006-LightGrey",
    size: [37, 38, 41, 42, 44],
    fast: false,
    star: 4.5,
    price: 920000,
    offPrice: 890000,
    image: Image_2,
    id: 2,
  },
  {
    name: "کفش مردانه آدیداس سفید مدل FX7979",
    size: [39, 40, 41, 42, 43],
    fast: true,
    star: 4.9,
    price: 750000,
    offPrice: 730000,
    image: Image_5,
    id: 3,
  },
  {
    name: " کفش کوهنوردی مدل jax کد 5320 ",
    size: [37, 39, 42, 43],
    fast: false,
    star: 3.9,
    price: 490000,
    offPrice: 480000,
    image: Image_3,
    id: 4,
  },
  {
    name: "کفش مردانه مدل کندو کد 9497",
    size: [37, 38, 40, 44],
    fast: true,
    star: 4.2,
    price: 320000,
    offPrice: 300000,
    image: Image_4,
    id: 5,
  },
];

export const sizeOptions = [
  { value: 37, label: `سایز 37` },
  { value: 38, label: `سایز 38` },
  { value: 39, label: `سایز 39` },
  { value: 40, label: `سایز 40` },
  { value: 41, label: `سایز 41` },
  { value: 42, label: `سایز 42` },
  { value: 43, label: `سایز 43` },
  { value: 44, label: `سایز 44` },
];

export const sortOptions = [
  { value: "low", label: "ارزان ترین" },
  { value: "high", label: "گران ترین" },
  { value: "fast", label: "سریع ترین ارسال" },
  { value: "star", label: "بیشترین امتیاز" },
];
