let person={
    name:"Zara",
    age:7,
    city:"Karachi",
    address:{
        street:"vijay nagar",
        flatNo:201
    }
}
console.log(person);
console.log(person.name);
for(let key in person){
    console.log(key);
    console.log(person[key]);
}