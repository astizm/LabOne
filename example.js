let firstName = "Asti"
console.log (firstName)
firstName = "sup"
console.log (firstName)
var NewVar = "this is var" 
var SideVar = "this is let" //re-assign previous var
NewVar = "This is new value for var variable."
SideVar = "This is new value for let variable."
console.log (SideVar)
console.log (NewVar)

function myFunc() {
    // Local variable
    var myLocalVariable = 'I am local'
    let myLocalLetVariable = 'I am also local'  // Inner function
    function myInnerFunc() {
      // Try to access the value of myLocalVariable
      // from function inside the myFunc function
      myLocalVariable
      // 'I am local'    myLocalLetVariable
      // 'I am also local'
    }
  }