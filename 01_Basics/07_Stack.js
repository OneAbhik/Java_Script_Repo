//Memory 

//Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "abhik";

let anothername = myYoutubename;
anothername = "aman";

// console.log(myYoutubename);
// console.log(anothername);

//Stack => hieracy based memory allocation
//HEAP => all point twoards same memory
let UserOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let UserTwo = UserOne;
UserTwo.email = "abhik@google.com";

console.log(UserOne.email);
console.log(UserTwo.email);