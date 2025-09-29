/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

// Hent JSON-data
fetch(myDataFileUrl)
  .then((response) => response.json())
  .then((data) => {
    // vi vil have den danske historie
    const myStory = data.FI;
    console.log(myStory);
    createStory(myStory);
  })
  .catch((error) => console.error(error));

// Funktion til at bygge historien i DOM
function createStory(myStory) {
  // rydder indholdet først
  myStoryElement.innerHTML = "";

  let myHeadline = document.createElement("h2");
  myHeadline.innerText = myStory.headline;

  let myImage = document.createElement("img");
  myImage.src = "../../opgavefiler/img/felix.jpg";

  let myParagraph = document.createElement("p");
  myParagraph.innerText = myStory.text;

  myStoryElement.appendChild(myHeadline);
  myStoryElement.appendChild(myImage);
  myStoryElement.appendChild(myParagraph);
}

/* Opgave 2 - skriv videre på koden her: */

let myStorydata = null;

fetch(myDataFileUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    myStorydata = data;
    setUpStory("DK");
  })
  .catch((error) => {
    console.error(error);
  });

function setUpStory(myLanguage) {
  let myStory = null;

  switch (myLanguage) {
    case "DK":
      myStory = myStorydata.DK;
      break;

    case "FI":
      myStory = myStorydata.FI;
      break;

    case "SE":
      myStory = myStorydata.SE;
      break;

    case "UK":
      myStory = myStorydata.UK;
      break;

    default:
      myStory = myStorydata.DK;
      break;
  }
  createStory(myStory);
}

function createButtons() {
  let myDkbutton = document.createElement("button");
  myDkbutton.innerText = "Dansk";
  myDkbutton.addEventListener("click", (e) => {
    setUpStory("DK");
  });

  let mySebutton = document.createElement("button");
  mySebutton.innerText = "Svenska";
  mySebutton.addEventListener("click", (e) => {
    setUpStory("SE");
  });

  let myFibutton = document.createElement("button");
  myFibutton.innerText = "Finsk";
  myFibutton.addEventListener("click", (e) => {
    setUpStory("FI");
  });

  let myUkbutton = document.createElement("button");
  myUkbutton.innerText = "English";
  myUkbutton.addEventListener("click", (e) => {
    setUpStory("UK");
  });

  myStoryElement.appendChild(myDkbutton);
  myStoryElement.appendChild(mySebutton);
  myStoryElement.appendChild(myFibutton);
  myStoryElement.appendChild(myUkbutton);
}

/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

/* Opgave 4*/
// din kode her
