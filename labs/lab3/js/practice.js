

let bike ={ age:0, wear: 0}




function bikeAging(Bike){
    Bike.age++
    if (Bike.age >= 5) {
        Bike.wear = 100;
    }
}
bikeAging(bike);
bikeAging(bike);
bikeAging(bike);
bikeAging(bike);
bikeAging(bike);
bikeAging(bike);

console.log(bike);
