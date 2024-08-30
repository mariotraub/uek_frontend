const zipIn = document.getElementById("zip");
const cityIn = document.getElementById("city");
let places = (await (await fetch("./places.json")).json());
zipIn.addEventListener("blur", () => {
    cityIn.value = places.find(place => place.zipcode === zipIn.value)?.place;
});
export {};
