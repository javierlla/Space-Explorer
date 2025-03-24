
class ImageOfTheDay{
    constructor(date, title, explanation, hdurl, url)
    {
        this.date = date;
        this.title = title;
        this.explanation = explanation;
        this.hdurl = hdurl;
        this.url = url;
    }
    displayInfo(){
        console.log("The date is:", this.date);
        console.log(`Title: ${this.title}`);
        console.log(`Explanation: ${this.explanation}`);
        console.log(`Image HD: ${this.hdurl}`);
        console.log(`URL: ${this.url}`);
    }
}


/* class Rockets{
    constructor(name, explination, active, costPerLaunch, firstFlight
    ){
        this.name = name;
        this.explanation = explination;
        this.active = active;
        this.costPerLaunch = costPerLaunch;
        this.firstFlight = firstFlight;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Description: ${this.explanation}`);
        console.log(`Active?: ${this.active ? "Sí" : "No"}`);
        console.log(`Cost per launch: $${this.costPerLaunch}`);
        console.log(`First flight: ${this.firstFlight}`);
        console.log("----------------------------------------------------");
    }

}
 */

class Rockets {
    constructor(name, explanation, active, costPerLaunch, firstFlight) {
        this.name = name;
        this.explanation = explanation;
        this.active = active;
        this.costPerLaunch = costPerLaunch;
        this.firstFlight = firstFlight;
    }

    createHTML() {
        return `
            <div class="rocket-card">
                <h2>${this.name}</h2>
                <p>${this.explanation}</p>
                <p><strong>Activo:</strong> ${this.active ? "Sí" : "No"}</p>
                <p><strong>Costo por lanzamiento:</strong> $${this.costPerLaunch}</p>
                <p><strong>Primer vuelo:</strong> ${this.firstFlight}</p>
            </div>
        `;
    }
}

class Launches {
    constructor(flightNumber, name, dateUTC, success) {
        this.flightNumber = flightNumber;
        this.name = name;
        this.dateUTC = dateUTC;
        this.success = success;
    }

    displayInfo() {
        console.log(`Número de vuelo: ${this.flightNumber}`);
        console.log(`Nombre de la misión: ${this.name}`);
        console.log(`Fecha de lanzamiento (UTC): ${this.dateUTC}`);
        console.log(`¿Lanzamiento exitoso?: ${this.success ? "Sí" : "No"}`);
        console.log("----------------------------------------------------");
    }
}

class Astronauts{
    constructor(){

    }

}
export{ ImageOfTheDay, Rockets, Astronauts, Launches}