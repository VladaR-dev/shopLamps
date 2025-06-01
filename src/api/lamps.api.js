import lamp1 from '../static/img/lamp1.png';
import lamp2 from '../static/img/lamp2.png';
import lamp3 from '../static/img/lamp3.png';
import lamp4 from '../static/img/lamp4.png';
import lamp5 from '../static/img/lamp5.png';
import lamp6 from '../static/img/lamp6.png';
import lamp7 from '../static/img/lamp7.png';
import lamp8 from '../static/img/lamp8.png';

const lamps = [
  {
    id: '67eefd1c-66eb-465f-825a-c8739a3ea068',
    total: 13,
    productDescription:
      'A lamp with a light and airy design that fills the room with soft light and freshness',
    name: 'Breeze of Light',
    image: lamp1,
    price: 243,
  },
  {
    id: '3c215cc2-8caa-4ade-b9b3-d0569ef2b03c',
    total: 15,
    productDescription:
      'A modern designer lamp with bright light and a unique shape that adds style to your interior.',
    name: 'ArtLux',
    image: lamp2,
    price: 250,
  },
  {
    id: 'b1435312-e303-45bc-8530-9c19e9debf05',
    total: 10,
    productDescription:
      'A stylish lamp with a soft glow that creates the illusion of coziness and tranquility in your workspace',
    name: 'Mirage',
    image: lamp3,
    price: 199,
  },
  {
    id: '04062b9d-ef3d-4a3d-b456-f927a19ab8c3',
    total: 7,
    productDescription:
      'A balanced and stylish lamp with warm glow, ideal for bedrooms or study rooms.',
    name: 'Harmony of Light',
    image: lamp4,
    price: 300,
  },
  {
    id: '88714940-b328-4182-8c65-c7be3dd8378a',
    total: 12,
    productDescription:
      'An innovative desk lamp with adjustable brightness, stimulating creativity and focus.',
    name: 'Lamp of Inspiration',
    image: lamp5,
    price: 274,
  },
  {
    id: '022505a9-4ae2-45eb-98d3-9579927bcdfb',
    total: 10,
    productDescription:
      'An elegant desk lamp with soft diffused light, creating a cozy atmosphere in any room.',
    name: 'Luminaria',
    image: lamp6,
    price: 340,
  },
  {
    id: '7e8bccbf-47aa-4965-a0b2-2f703c0fb40b',
    total: 5,
    productDescription:
      'A minimalist lamp with warm illumination, perfect for reading and relaxing in the evening.',
    name: 'Firefly',
    image: lamp7,
    price: 254,
  },
  {
    id: '68938987-f396-45ba-b447-5687fca5259d',
    total: 8,
    productDescription:
      'A compact lamp with a starry sky effect, creating a magical ambiance in any space.',
    name: 'Star Spark',
    image: lamp8,
    price: 239,
  },
];

export function fetchAll() {
  return lamps;
}
