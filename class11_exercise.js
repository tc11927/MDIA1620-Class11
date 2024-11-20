const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/



/* PLAN:
do users registry first, then check registery, then banned list, and check banned list, then the challenges

REGISTRY, CHECK REGISTRY, BANNED LIST, CHECK BANNED:
Reference loops.js!!! Replace the words. Most of what we taught is in there. Do it in order or how it's laid out

CHALLENGE 1:
let checkBan=false, use this:
function ReadNames(){
    for(let i=0; i<names.length; i++){
        console.log(`The names are ${names[i]}`);
    }
    StartApp();
}
We learned in class, but adjust it!!

CHALLENGE 2:
Okay first edit your prexisting code before adding anything new. Try testing on AddUserToRegistry first before implementing the code everywhere.

Edit these lines:

if(settings.addRegistry === true){
} else {
    console.log("Nah bro")
}

As needed for your code. 

Edit these lines:
 else if(_command === "Allow Add"){
    settings.addRegistry = !settings.addRegistry;
    StartApp();
  }

As needed for your code.

Check and retry until it works.

GITHUB:
Push to Github every challenge completed.
*/



let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {
  if(settings.addRegistry === true){

    let checkBan = false;
    readline.question("What is the username?", _user=>{
    if (banned.includes(_user)) {
        checkBan = true; 
    } if (!checkBan) {
        users.push(_user);
        console.log(`${_user} has been added.`);
    } else {
        console.log(`${_user} is banned and cannot be added.`);
    }
    StartApp();
  })

} else {
    console.log("Nah bro")
}
}


function CheckRegistry() {
  if(settings.checkRegistry === true){
  if (!settings.checkRegistry) {
    console.log("Checking registry is disabled.");
    return StartApp();
  } for(let i=0; i<users.length; i++){
    console.log(`The names are ${users[i]}`);
}
StartApp();
} else {
  console.log("Nah bro")
}
}

function BanUser(){
  if(settings.banPerson === true){
  if (!settings.banPerson) {
    console.log("Banning users is disabled.");
    return StartApp();
  }

  //use readline to prompt for the name of the user to be banned
  readline.question("Who are you banning", _banUsers=>{
    banned.push(_banUsers);
    console.log(banned);
    StartApp();
   })
  } else {
    console.log("Nah bro")
  }
}

function CheckBanned(){
  if(settings.checkBans === true){
  if (!settings.checkBans) {
    console.log("Checking bans is disabled.");
    return StartApp();
  } for(let i=0; i< banned.length; i++){
    console.log(`The names are ${banned[i]}`);
}


StartApp();
} else {
  console.log("Nah bro")
}
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    
    //add other commands here to add
    if(_command === "Quit"){
      readline.close();
  } else if(_command === "Add"){
    AddUserToRegistry();
  }else if(_command ==="Ban"){
      BanUser();
  }else if(_command === "Check"){
    CheckRegistry();
  } else if(_command === "Check Banned"){
    CheckBanned();
  }  else if(_command === "Allow Add"){
    settings.addRegistry = !settings.addRegistry;
    StartApp();
  } else if(_command === "Allow Ban"){
    settings.banPerson = !settings.banPerson;
    StartApp();
  } else if(_command === "Allow Check Add"){
    settings.checkRegistry = !settings.checkRegistry;
    StartApp();
  } else if(_command === "Allow Check Banned"){
  settings.checkBans = !settings.checkBans;
  StartApp();
}
  
    if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}



StartApp();
