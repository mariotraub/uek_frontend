const zipIn = document.getElementById("zip") as HTMLInputElement;
const cityIn = document.getElementById("city") as HTMLInputElement;
let places = (await (await fetch("./places.json")).json()) as {zipcode: string, place: string}[];

zipIn.addEventListener("blur", () => {
    cityIn.value = places.find(place => place.zipcode === zipIn.value)?.place!
});

export {}