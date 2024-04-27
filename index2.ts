let guests : string[] =["Usama" , "Idrees" , "Ahmed Ali"];
guests.forEach (guests=>{
   console.log(`Dear ${guests}, Would you like to join me for dinner`);
});





let unableToAttend = "Idrees";
console.log(`${unableToAttend} Can't make it to a dinner`);

//Replace a guests
let newGuest = "Abdullah";
guests[guests.indexOf(unableToAttend)] = newGuest;


//Invitaion for new Guests
guests.forEach(guest=> {
   console.log(`Dear ${guest}, would you like to join me for dinner`);
});




