// INDEX //
// explicit binding .call() - line 5
//  

//  Binding explicit...call()
const person = {
    name: 'Boba',
};
function speak() {
    console.log(`Hello, my name is ${this.name}`)
}
console.log(speak()); // will return undefined b/c 'this' is binded to window (global object);
speak.call(person)    // .call binds 'this' to person and person is binded to speak function;
const personSpeak = speak.call(person) // saving it in a variable stores it for later use;

// **** .call() can take in a list of arguments, this is what differentiates it from .apply()
// **** .call() also does not make a copy of the function it's calling which differentiates it from .bind();

// ________________________________________________________________________  //
//////  .bind
// the JS engine is creating a new speak instance and binding person as its 'this' variable. 
// It is important to understand that it copies the speak function. After creating a copy of 
// the speak function it is able to call personSpeak(), although it wasn’t on the person object 
// initially.

// ________________________________________________________________________  //

// APPENDING THE DOM

// Step 1: Create a new tag
const newElement = document.createElement('p');
// Step 2: Set up the parent reference
const homeElement = document.querySelector('.home');
// Step 3: appendChild or prepend the child to the parent
homeElement.prepend(newElement); /* or */ homeElement.appendChild(newElement);
// Step 4: Update the value
newElement.innerText = "Testing, 1,2,3";

// CREATING/APPENDING TEXT NODES //
function myFunction() {
    var x = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    x.appendChild(t);
    document.body.appendChild(x)
}

// ________________________________________________________________________  //
//  REMOVE ALL CHILD ELEMENTS OF A PARENT NODE  //

//  document.query parent node
//  node.innerText = ''  // will remove all child nodes

// ________________________________________________________________________  //
//      WEB COMPONENTS   //

//   Creating a button component
    buttons = document.querySelectorAll('.button'); // 1
    buttons = Array.from(buttons); // 2
    buttons.map(button => new Button(button)) // 3
    class Buttons {
        constructor(buttons) {
          this.item = buttons;
          this.item.addEventListener('click', this.speaker)
        }
         speaker() {console.log(`${this.innerText} was clicked`)}
      }
/*
    1 - create reference for component 
    2 - turn button nodelist into an array. 
    3 - feeds every element through the Button class. 
    4 - ***** create class for new componenets, must be made ABOVE previous steps ****
    4a - button is passed into Buttons class super();

 -----  BINDING THIS TO COMPONENT ----------------------------
        this.item is referencing button
        this.speaker is referencing speak method but is not connected, thus this. problems arise
        


        class Buttons {
  constructor(buttons) {
    this.item = buttons;
    this.item.addEventListener('click', this.speaker).bind(this)
  }
   speaker() {console.log(`${this.innerText} was clicked`)}
}

--------------CLASS TAB BROWSING & DROPDOWN--------------------
class Link {
  constructor(linkItem) {
    this.link = linkItem;
    this.link.addEventListener('click', () => {this.linkClick()});
    this.linkData = this.link.dataset.tab;  
    this.tabContent = document.querySelector(`.content[data-tab="${this.linkData}"]`); 
    this.tabContent = new Content(this.tabContent);
  }
  linkClick() {
    this.tabContent.toggleContent()
  }
}

class Content {
  constructor(tabContent) {
    this.tabContent = tabContent;
  }
  toggleContent() {
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => content.classList.remove('showHide'));   
    this.tabContent.classList.toggle('showHide');
  }
}

document.querySelectorAll(".link").forEach((link) => new Link(link));



--------------CSS--------------------
active tag must come after hover
will execute when mouse hovers over target and click is held in
default will send element back to starting place when click released. 

.element:hover:active {
    do stuff
}

*/



// --------------GIT--------------------
/* 
error: pathspec did not many any files known to gir
git remote updat