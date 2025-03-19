

class ImageOfTheDay{
    constructor(date, explination, hdurl, title, url)
    {
        this.date = date;
        this.title = title;
        this.explination = explination;
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

class Rockets{
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

class Astronauts{
    constructor(){

    }

}

class Launches{

}

export{ ImageOfTheDay, Rockets, Astronauts, Launches}