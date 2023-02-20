async function weather(){
    let delhiWeather =new Promise((resolve,reject) => {
       setTimeout(() => {
        resolve("27 deg");
       },2000);
    });
    let BangWeather =new Promise((resolve,reject) => {
        setTimeout(() => {
         resolve("21 deg");
        },6000);
     });

console.log("Fetching Delhi weather Please wait...");
let delhiW = await delhiWeather;
console.log("Fetched Delhi weather: "+delhiW);
console.log("Fetching Bangalore weather Please wait...");
let bangW = await BangWeather;
console.log("Fetched Bangalore weather: "+bangW);
return [delhiW,bangW];

}

console.log("Welcome to weather control room");
let a=weather();
a.then((value) => {
    console.log(value);
})
