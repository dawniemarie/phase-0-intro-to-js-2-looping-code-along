for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} // age practice

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i  < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts); // wrapGifts practice

const name = ["Guadalupe", "Ollie", "Aki"];
const surprise = "surprise"

function writeCards(name, surprise) {
    const thankYouCards = [];
    for (let i = 0; i < name.length; i++) {
        const message = `Thank you, ${name[i]}, for the wonderful ${surprise} gift!`;
            thankYouCards.push(message);
    }
    return thankYouCards;
} //  writeCards assignment

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}


