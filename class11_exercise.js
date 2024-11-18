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

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {
  //user readline to prompt for the name of the user to be added
    readline.question("What is the name?", _users=>{
        users.push(_users);
        console.log(users);
        StartApp();
    })
}


function CheckRegistry() {
  for(let i=0; i<users.length; i++){
    console.log(`The names are ${users[i]}`);
}
StartApp();
}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  readline.question("Who are you banning", _banUsers=>{
    banned.push(_banUsers);
    console.log(banned);
    StartApp();
   })
}

function CheckBanned(){
  for(let i=0; i< banned.length; i++){
    console.log(`The names are ${banned[i]}`);
}
StartApp();
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    
    //add other commands here to add
    if(_command === "quit"){
      readline.close();
  } else if(_command === "add"){
    AddUserToRegistry();
  }else if(_command ==="Ban"){
      BanUser();
  }else if(_command === "Check"){
    CheckRegistry();
  } else if(_command === "Check Banned"){
    CheckBanned();
  }
  
    if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();
