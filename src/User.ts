import { faker } from '@faker-js/faker';
export default class User {
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
