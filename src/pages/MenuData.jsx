import IdlyTiffin from "../images/Tiffin/idly.jpg";
import UpmaTiffin from "../images/Tiffin/upma.jpg";
import MasalDosai from "../images/Tiffin/masalaDosa.jpg";
import PuriTiffin from "../images/Tiffin/puri.jpg";
//Meals
import NonVegMeals from "../images/Meals/nonVegMeals.jpg";
import VegMeals from "../images/Meals/vegMeals.jpg";
//Vadai 
import ParuppuVadai from "../images/Vadai/paruppuVadai.jpg";
import MethuVadai from "../images/Vadai/methuVadai.jpg";
// biryani
import ChickenBiryani from "../images/Biryani/chickenBiryani.jpg";
import FishBiryani from "../images/Biryani/fishBiryani.jpg";
import MuttonBiryani from "../images/Biryani/muttonBiryani.jpg";
// Fries
import ChettinadChicken from "../images/Fries/chettinadChicken.jpg";
import Chicken65 from "../images/Fries/chicken65.jpg";
import PallipalayamChicken from "../images/Fries/pallipalayamChicken.jpg";
import PepperChicken from "../images/Fries/pepperChicken.jpg";

const MenuData = [
  // tiffin
  {
    id: 1,
    category: "Tiffin",
    name: "Idly",
    price: 30,
    image: IdlyTiffin,
  },
  {
    id: 2,
    category: "Tiffin",
    name: "Upma",
    price: 50,
    image: UpmaTiffin,
  },
  {
    id: 3,
    category: "Tiffin",
    name: "Masal Dosai",
    price: 50,
    image: MasalDosai,
  },
  {
    id: 4,
    category: "Tiffin",
    name: "Puri",
    price: 45,
    image: PuriTiffin,
  },

  //   Biryani

  {
    id: 5,
    category: "Biryani",
    name: "Chicken Biryani",
    price: 120,
    image: ChickenBiryani,
  },
  {
    id: 6,
    category: "Biryani",
    name: "Mutton Biryani",
    price: 200,
    image: MuttonBiryani,
  },
  {
    id: 7,
    category: "Biryani",
    name: "Fish Biryani",
    price: 180,
    image: FishBiryani,
  },
  //   Fries
  {
    id: 8,
    category: "Fries",
    name: "Chettinad Chicken",
    price: 150,
    image: ChettinadChicken,
  },
  {
    id: 9,
    category: "Fries",
    name: "chicken 65",
    price: 90,
    image: Chicken65,
  },
  {
    id: 10,
    category: "Fries",
    name: "Pallipalayam Chicken",
    price: 120,
    image: PallipalayamChicken,
  },
  {
    id: 11,
    category: "Fries",
    name: "Pepper Chicken",
    price: 130,
    image: PepperChicken,
  },
  // Meals
  {
    id: 12,
    category: "Meals",
    name: "Veg Meals",
    price: 70,
    image: VegMeals,
  },
  {
    id: 13,
    category: "Meals",
    name: "Non Veg Meals",
    price: 130,
    image: NonVegMeals,
  },
  // Vadai
  {
    id: 14,
    category: "Vadai",
    name: "Methu  Vadai",
    price: 20,
    image: MethuVadai,
  },
  {
    id: 15,
    category: "Vadai",
    name: "Parppu Vadai",
    price: 20,
    image: ParuppuVadai,
  },
];
export default MenuData;
