var guests = ["Usama", "Idrees", "Ahmed Ali"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", Would you like to join me for dinner"));
});
var unableToAttend = "Idrees";
console.log("".concat(unableToAttend, " Can't make it to a dinner"));
//Replace a guests
var newGuest = "Abdullah";
guests[guests.indexOf(unableToAttend)] = newGuest;
//Invitaion for new Guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner"));
});
