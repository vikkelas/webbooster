/* eslint-disable indent */
import {
  v4 as uuidv4,
} from 'uuid';
import images from './images';
import SubmitPage from './SubmitPage';

const products = [{
    id: uuidv4(),
    title: 'Best cars from Europe',
    image: images.img1,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
    price: '12300',
  },
  {
    id: uuidv4(),
    title: 'Best cars from USA',
    image: images.img2,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
    price: '17300',
  },
  {
    id: uuidv4(),
    title: 'Best cars from Rus',
    image: images.img3,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
    price: '11300',
  },
  {
    id: uuidv4(),
    title: 'Best cars from Asia',
    image: images.img4,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
    price: '17300',
  },
];

const initPage = new SubmitPage(products);
initPage.init();
