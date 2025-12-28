import MiloImage from '../assets/milo.jpg';
import niveaImage from '../assets/nivea.jpg';
import iceCreamImage from '../assets/iceceam.jpg';
import Evasoap from '../assets/evasoap.jpg'
import Cabinbiscuit from '../assets/cabinbiscuit.jpg'
const products = [
  {
    id: 1,
    name: 'Milo',
    price: 5.99,
    image: MiloImage,
    category: 'Beverages'
  },
  {
    id: 2,
    name: 'Nivea',
    price: 7.23,
    image: niveaImage,
    category: 'Body-Cream'
  },
  {
    id: 3,
    name: 'Ice Cream',
    price: 2.81,
    image: iceCreamImage,
    category: 'Desserts'
  },
  {
    id: 4,
    name: 'Eva Soap',
    price: 1.99,
    image: Evasoap,
    category: 'Toiletries'
  },
  {
    id: 5,
    name: 'Cabin Biscuit',
    price: 3.50,
    image: Cabinbiscuit,
    category: 'Snacks'
  }
];

export default products;