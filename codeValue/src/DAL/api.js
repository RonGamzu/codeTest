import { uid } from "uid";

const productsList = [
  {
    id: uid(),
    name: "Bottle of water",
    description: "Cold drinking water",
    price: 10,
    creationDate: new Date("11/10/2018").getTime(),
  },
  {
    id: uid(),
    name: "Apple",
    description: "Fresh apple",
    price: 1,
    creationDate: new Date("5/3/2019").getTime(),
  },
  {
    id: uid(),
    name: "Pasta",
    description: "Italian pasta",
    price: 1000,
    creationDate: new Date("5/2/2017").getTime(),
  },
];

export default productsList;
