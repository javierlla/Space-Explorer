export { Article, Image, Launches, ImageOfTheDay, Rocket, RocketHtml }

class Article {
    constructor(id, title, authors, url ,image_url, news_site, summary, published_at) {
        this.id = id
        this.title = title
        this.authors = authors
        this.url = url
        this.image_url = image_url
        this.news_site = news_site
        this.summary = summary
        this.published_at = published_at
    }

    print_everything()
    {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Authors: ${this.authors || "N/A"}`);
        console.log(`URL: ${this.url}`);
        console.log(`Image URL: ${this.image_url}`);
    }
}

class Launches {

}

class Image {
    constructor(url) {
        this.url = url
    }
}

class ImageOfTheDay {
    constructor(date, explanation, title, url) {
        this.date = date
        this.explanation = explanation
        this.title = title
        this.url = url
    }
}

class Rocket {
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
        console.log(`Active?: ${this.active ? "SÃ" : "No"}`);
        console.log(`Cost per launch: $${this.costPerLaunch}`);
        console.log(`First flight: ${this.firstFlight}`);
        console.log("----------------------------------------------------");
    }

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
}
