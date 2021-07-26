document.addEventListener("DOMContentLoaded", function() { 
  //getDogProfiles();
  console.log('%c HI', 'color: firebrick')
});

//image and breed 
const dogData = ["https://dog.ceo/api/breeds/image/random/4", "https://dog.ceo/api/breeds/list/all"] 

for(const fidoDatum of dogData) {
  getDogProfiles(fidoDatum);	
}

document.getElementById


function getDogProfiles(fidoDatum) {
  let str = fidoDatum.split("/")
  let category = str[5]
  fetch(fidoDatum)
  .then(resp => resp.json())
  .then(data => parseDogData(data, category))

}

function parseDogData(data, category) {
//function taken from https://www.sitepoint.com/call-javascript-function-string-without-using-eval/

// function we want to run
var fnstring = `${category}`;

// find object
var fn = window[fnstring];

// is object a function?
if (typeof fn === "function") fn(data);


}

function image(data) {
  const array = data["message"]
  let div = document.getElementById("dog-image-container")	
  for(const imgOfDog of array) {
  	img = document.createElement("img");
  	img.src = imgOfDog;
  	img.setAttribute("height", "250")
  	img.setAttribute("width", "250")
  	div.append(img); 	
  }
} 

function list(data) {
  const list = data["message"]
  let div = document.getElementById("dog-image-container")	
  for(const breed in list) {
  	let li = document.createElement("li");
  	li.appendChild(document.createTextNode(breed));
  	li.onclick = function(){ li.style="color:blue"; }
    let ul = document.getElementById("dog-breeds")
  	ul.appendChild(li);
}

document.getElementById("breed-dropdown").addEventListener("click", function() { 
  filterResults();
});

function filterResults() {
    options = document.getElementById("breed-dropdown").options
  	for(let i=0; i<options.length; i++) {
      if (options[i].selected) {
      	listValue = options[i].text;
      	listResults(listValue);	
 }
      }
  	}

  }


function listResults(filter) {
  let breedList = document.getElementsByTagName("li")
    for(const breed of breedList) {
      if (breed.innerText.startsWith(filter) && (breed.hidden === true)) {
      	 breed.hidden = false
      	}else if (breed.innerText.startsWith(filter)) {
      		breed.hidden = true
         }
       }
      }
     
    

