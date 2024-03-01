//import { v4 as uuidv4 } from "react-uuid";

import bookCase from "../Images/living room products/book cases.jpg";
import mediaConsole from "../Images/living room products/media console.jpg";
import ottomans from "../Images/living room products/ottomans.jpg";
import paintings from "../Images/living room products/paintings.jpg";
import plants from "../Images/living room products/plants.jpg";
import rugs from "../Images/living room products/rugs.jpg";
import throwPillows from "../Images/living room products/throw pillows.jpg";

//const uniqueId = uuidv4();

export const livingRoomData = [
  {
    id: 1,
    image: bookCase,
    name: "Book case",
    description:
      "Transform your blank wall ransformed into handy storage space thanks to a set of built-in shelves",
    currentPrice: 8000,
    previousPrice: 10000,
    discount: 4, //auto calculate
    itemsLeft: 23, //editable
    ratings: 4, //ratable by person
  },
  {
    id: 2,
    image: mediaConsole,
    name: "Media console",
    description:
      " These are designed to accommodate a television while also providing enough storage space for assorted entertainment essentials, such as speakers, cable boxes, and gaming equipment.",
    currentPrice: 8000,
    previousPrice: 9000,
    discount: 4, //auto calculate
    itemsLeft: 23, //editable
    ratings: 4, //ratable by person
  },
  {
    id: 3,
    image: ottomans,
    name: "Ottoman",
    description:
      " This multipurpose item can be used as a cocktail table substitute, a decorative footstool for a sofa, or space-saving storage",
    currentPrice: 8000,
    previousPrice: 9000,
    discount: 5, //auto calculate
    itemsLeft: 23, //editable
    ratings: 5, //ratable by person
  },
  {
    id: 4,
    image: paintings,
    name: "Painting",
    description:
      " Provide aesthetic contribution to your space. Art adds visual interest, depth, and character to a room. A carefully selected painting can serve as a focal point, attract attention, and create a sense of balance in the space.",
    currentPrice: 8000,
    previousPrice: 9000,
    discount: 3, //auto calculate
    itemsLeft: 23, //editable
    ratings: 4, //ratable by person
  },
  {
    id: 5,
    image: plants,
    name: "Artificial plant",
    description:
      "Bring a touch of softness, texture, color, and life to any space in your home without the hard work that real plants require. Whether you want to liven up a dark corner in a room, add a pop of color to a space, or cover up pesky cords and plugs, these plants will help your home feel fresh all season long.",
    currentPrice: 600,
    previousPrice: 740,
    discount: 3, //auto calculate
    itemsLeft: 23, //editable
    ratings: 3, //ratable by person
  },
  {
    id: 6,
    image: rugs,
    name: "Rug",
    description:
      "A rug doesn't just complete the look of a room, it can be a game-changer to how the space looks and feels. A rug or a carpet can make the elements of a room fit in with harmony, mellow a room down, or even make a loud statement.",
    currentPrice: 800,
    previousPrice: 900,
    discount: 2, //auto calculate
    itemsLeft: 23, //editable
    ratings: 2, //ratable by person
  },
  {
    id: 7,
    image: throwPillows,
    name: "Throw pillow",
    description:
      " Throw pillows create an inviting atmosphere while also adding style and design to any room. They come in an endless variety of patterns, shapes, colors, and textures, which adds interest and allows you to further express your style in your home.",
    currentPrice: 800,
    previousPrice: 900,
    discount: 2, //auto calculate
    itemsLeft: 23, //editable
    ratings: 5, //ratable by person
  },
];
