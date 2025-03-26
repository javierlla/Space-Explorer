import { Rocket, RocketHtml } from './clases/clases.js';

const image_paths = ["../assets/falcon-1.jpg", "../assets/falcon-heavy.jpg", "../assets/falcon9.avif", "../assets/starship.jpg"]
const urlRockets = "https://api.spacexdata.com/v4/rockets"

function rocketsDom(rocketsArray) {
    const rockets = document.getElementById("main-rockets");
    const title = document.createElement("h1");
    title.textContent = "Rockets from SpaceX API";

    const grid = document.createElement("div")
    grid.setAttribute("class", "rockets-grid")


    rocketsArray.forEach((rocket, index) => {
      const card = document.createElement("div");
      card.setAttribute("class", `card card${index + 1}`);
      card.innerHTML = `<h3>${rocket.name}</h3><p>${rocket.explanation}</p><img src=${image_paths[index]} width=200 height=200>`;
      grid.appendChild(card);
    });

    rockets.appendChild(title);
    rockets.appendChild(grid);
}

async function fetchData(url)
{
  try
  {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const dataApi =  await response.json();

    return(dataApi);
  }
  catch (error) {
    console.error("Error:, error");
    return null; 
  }
}

async function getRockets()
{
  const rocketsData = await fetchData(urlRockets);
  if (rocketsData)
  {
    const rocketsArray = rocketsData.map(rocket => 
        new Rocket(
            rocket.name,
            rocket.description,
            rocket.active,
            rocket.cost_per_launch, 
            rocket.first_flight
        )
    );
    return rocketsArray;
  }
}

async function main() {
    const rocketsArray = await getRockets();

    console.log(rocketsArray[0]);

    rocketsDom(rocketsArray);
}

main();

