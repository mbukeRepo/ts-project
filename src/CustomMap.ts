import Mark from "./Mark";



export default class CustomMap {
    private googleMap: google.maps.Map;
    constructor(id: string){
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    public addMarker(mark: Mark) {
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position: {
                lat: mark.location.lat,
                lng: mark.location.lng
            }
        });
    }
}