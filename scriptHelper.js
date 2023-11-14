// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

        const missionTarget = document.getElementById("missionTarget");
    
        missionTarget.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star} </li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`


        // missionTarget.innerHTML += missionDistination; 
}
 
 function validateInput(testInput) {

    if(testInput === ""){
        return `Empty`
    } else if ((!isNaN(testInput))) {
        return `Is a Number`
    } else if ((isNaN(testInput))){
        return `Not a Number`
    }
}

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatus = document.getElementById("launchStatus");

    if (pilot === "" || copilot=== "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
    }

    if (validateInput(fuelLevel) === `Not a Number` || validateInput(cargoLevel) === `Not a Number`) {
        alert("Number required.");
    } else if (validateInput(pilot) === `Is a Number` || validateInput(copilot) === `Is a Number`) {
        alert('Please do not enter numbers for name of pilot or co-pilot');
    } else {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch.`
    }

    if (Number(fuelLevel) < 10000){
    
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
        launchStatus.innerHTML = `Shuttle Not Ready for Launch` 
        launchStatus.style.color = "red";
    } else {
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
    }

    if (Number(cargoLevel) > 10000){
        
        list.style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`
        launchStatus.innerHTML = `Shuttle Not Ready for Launch` 
        launchStatus.style.color = "red";
    }
    
    if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000){
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`
        launchStatus.innerHTML = `Shuttle is Ready for Launch` 
        launchStatus.style.color = "green";
    }
    

}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()});
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;