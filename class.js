

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

class Rocket{
    constructor(name, explanation, active, costPerLaunch, firstFlight
    ){
        this.name = name;
        this.explanation = explanation;
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

class RocketHtml extends Rocket{
    constructor (name, explanation, active, costPerLaunch, firstFlight, flikr_images){
        super(name, explanation, active, costPerLaunch, firstFlight)
        this.flikr_images = flikr_images;
    }

    displayRocketImg() {
        if (this.flikr_images.length === 0) {
            return 'assets/istockphoto-614866496-2048x2048.jpg'; 
        } else {
            return this.flikr_images[0]
        }
    };

/*     Initialize(){
        const sectionRocket = document.createElement("section");
        const AddFavorite = document.createElement("button")
        const RemoveFavorite = document.createElement("button");
    } */

}



export{ ImageOfTheDay, Rockets, Astronauts, Launches, Rocket_image}