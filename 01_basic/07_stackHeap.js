// stack(primitive), Heap(Non-primitive)

let myYoutubename = "ankuKumar.com";

let anothername = myYoutubename;

anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "use@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "anku@google.com"

console.log(userOne.email)
console.log(userTwo.email)