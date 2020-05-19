

// Write your JavaScript code here!
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
   
let pilotInput = document.querySelector("input[name=pilotName]").value;
let copilotInput = document.querySelector("input[name=copilotName]").value;
let fuelInput = document.querySelector("input[name=fuelLevel]").value;
let massInput = document.querySelector("input[name=cargoMass]").value;
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelLevel");
let cargoStatus = document.getElementById("cargoStatus");
let launchStatus = document.getElementById("launchStatus");

if (pilotInput === "" || copilotInput === "" || fuelInput === "" || massInput === "") {
    alert("Entry missing. Check that proper launch data is ready");
    } else if (
        (!isNaN(pilotInput) || (!isNaN(copilotInput)) || isNaN(Number(fuelInput))) || isNaN(Number(massInput))) {
            alert("You data does meet requirements. Please enter valid responses.");
    }else{
        document.getElementById("faultyItems").style.visibility = "visible"
        }
pilotStatus.innerHTML = `Pilot: ${pilotInput} is ready`;
copilotStatus.innerHTML = `Co-pilot: ${copilotInput} is ready`;
          
if (massInput > 10000) {
    launchStatus.style.color= "red"
    launchStatus.innerHTML = "Shuttle is not ready to launch!!"
    cargoStatus.innerHTML = "Excess cargo detected. Please remove excess prior to launch."
   } else if 
   (fuelInput < 10000) {
       launchStatus.style.color= "red"
       launchStatus.innerHTML = "Shuttle is not ready to launch!!"
       fuelStatus.innerHTML = "Fuel is too low for takeoff."
   }else {
           launchStatus.style.color= "green"
           launchStatus.innerHTML = "Shuttle is ready to launch!!"   
         }
let launchAPI = "https://handlers.education.launchcode.org/static/planets.json";
fetch(launchAPI).then(function(response){
    response.json().then(function(target){
        missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
<h2>Mission Destination</h2>
<ol>
<li>Name: ${target[2].name}</li>
<li>Diameter: ${target[2].diameter}</li>
<li>Star: ${target[2].star}</li>
<li>Distance from Earth: ${target[2].distance}</li>
<li>Number of Moons: ${target[2].moons}</li>
</ol>
<img src="${target[2].image}">`;
   });
      });
         });
            });

   
  
 