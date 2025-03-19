
import {ImageOfTheDay, Rockets, Astronauts, Launches} from "./class.js";


const urlNASA = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const urlRockets = "https://api.spacexdata.com/v4/rockets"

async function fetchData(url)
{
  try
  {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const dataApi =  await response.json();
//  console.log(dataApi);
    return(dataApi);
  }
  catch (error) {
    console.error(`Error:`, error);
    return null; 
  }
}




async function getImageOfTheDay() {
  const imageData = await fetchData(urlNASA);
  if (imageData) 
  {
    //console.log("NASA Image of the Day:", imageData);
    const imageOfTheDay = new ImageOfTheDay
    (
      imageData.date,
      imageData.title,
      imageData.explanation,
      imageData.hdurl,
      imageData.url
    );
    imageOfTheDay.displayInfo();
  }
}
 
/* async function  getRockets() {
  const imageData = await fetchData(urlRockets);
  if(imageData)
  {
    const rocketss = new Rockets
    (
      imageData.name,
      imageData.description,
      imageData.active,
      imageData.cost_per_launch,
      imageData.first_flight
    );
    rocketss.displayInfo();
  }
} */

async function getRockets()
{
  const rocketsData = await fetchData(urlRockets);
  if (rocketsData)
  {
    const rocketsArray = rocketsData.map(rocket => 
        new Rockets(
            rocket.name,
            rocket.description,  
            rocket.active,
            rocket.cost_per_launch, 
            rocket.first_flight 
        )
    );
    for (let i = 0; i < rocketsArray.length; i++) {
        rocketsArray[i].displayInfo();
      }
  }
}


getRockets();