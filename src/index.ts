import User from "./User";
import Company from "./Company";
// testing my classes
const user = new User();
const company = new Company();
// creating new map on a webpage
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});
console.log(map);