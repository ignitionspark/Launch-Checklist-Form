

// Write your JavaScript code here!
window.addEventListener("load", function () {
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


if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || massInput.value === "") {
    alert("Entry missing. Check that proper launch data is ready");
  }
       
    if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value) || isNaN(fuelInput.value) || isNaN(massInput.value)) {
                alert("You data does meet requirements. Please enter valid response");
     }
       
        if (isNaN(pilot.value) && isNaN(copilot.value) && !isNaN(fuel.value) && !isNaN(cargo.value)) {
            pilotStatus.innerHTML = `Pilot: ${pilotInput.value} is ready for launch!`;
            copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch!`;
       
            if (fuelInput.value < 10000) {
                faultyItems.style.visibility = "visible";
                launchStatus.style.color = "red";
                launchStatus.innerHTML = "Shuttle not ready for launch!";
                fuelStatus.innerHTML = "Fuel is too low for takeoff";
                } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch!";
                }
       
                if (massInput.value > 10000) {
                   faultyItems.style.visibility = "visible";
                   launchStatus.style.color = "red";
                   launchStatus.innerHTML = "Shuttle not ready for launch!";
                   cargoStatus.innerHTML = "Too much mass to lift off. Please use the jettison method.";
                } else {
                   cargoStatus.innerHTML = "Cargo mass low enough for launch!";
                }
       
                    if (fuelInput.value >= 10000 && massInput.value <= 10000) {
                    faultyItems.style.visibility = "visible";
                    launchStatus.style.color = "green";
                    launchStatus.innerHTML = "Shuttle is ready for launch!!";
                }
    
                
             };
            });
        });
    });

    