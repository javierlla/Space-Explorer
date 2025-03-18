export { Article, Event, Astronaut, Image, Launches, ImageOfTheDay }

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
}

class Launches {

}

class Event {

}

class Astronaut {

}

class Image{

}

class ImageOfTheDay{
    constructor(date, explanation, title, url) {
        this.date = date
        this.explanation = explanation
        this.title = title
        this.url = url
    }
}