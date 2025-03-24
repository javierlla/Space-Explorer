
import {ImageOfTheDay, Rockets, Astronauts, Launches} from "./class.js";


const urlNASA = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const urlRockets = "https://api.spacexdata.com/v4/rockets";
const urlLaunches = "https://api.spacexdata.com/v4/launches/next";

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
  if (imageData) {
    const imageOfTheDay = new ImageOfTheDay(
      imageData.date,
      imageData.title,
      imageData.explanation,
      imageData.hdurl,
      imageData.url
    );

/*     imageOfTheDay.displayInfo(); */

    document.getElementById('titulo').textContent = imageOfTheDay.title;

    // Actualizar la imagen
    const imageElement = document.getElementById('imagen');
    imageElement.src = imageOfTheDay.url;
    imageElement.alt = imageOfTheDay.title;


    // Actualizar la descripción
    document.getElementById('descripcion').textContent = imageOfTheDay.explination;  // Corregido aquí
  }
}



async function getLaunch() {
  const launchData = await fetchData("https://api.spacexdata.com/v4/launches");
  if (launchData) {
      const launchInfo = launchData.map(launch => 
          new Launches(
              launch.id,
              launch.name || "Nombre no disponible", 
              launch.date_local || "Fecha no disponible", 
              launch.success !== undefined ? launch.success : false 
          )
      );

      launchInfo.forEach(launch => launch.displayInfo());
  }
}

/* async function getRockets()
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
} */

  async function getRockets() {
    const rocketsData = await fetchData(urlRockets);
    const rocketsContainer = document.getElementById("rockets-container");

    if (rocketsData) {
        const rocketsArray = rocketsData.map(rocket => 
            new Rockets(
                rocket.name,
                rocket.description,
                rocket.active,
                rocket.cost_per_launch,
                rocket.first_flight
            )
        );

        rocketsContainer.innerHTML = rocketsArray.map(rocket => rocket.createHTML()).join("");
    }
}

/* getLaunch(); */
/*  getRockets();  */
 getImageOfTheDay();