export { Article, Event, Image, Launches, ImageOfTheDay }

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

class Event {

}

class Image{
    constructor(url) {
        this.url = url
    }
}

class ImageOfTheDay{
    constructor(date, explanation, title, url) {
        this.date = date
        this.explanation = explanation
        this.title = title
        this.url = url
    }
}