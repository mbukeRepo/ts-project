import { faker } from '@faker-js/faker';
import Mark from './Mark';
export default class User implements Mark {
  name: String;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
     this.name = faker.name.firstName();
     this.location = {
       lat: parseFloat(faker.address.latitude()), 
       lng: parseFloat(faker.address.longitude())
     };
  }
}
