import { Rocket, RocketHtml } from './clases/clases.js';

const urlRockets = "https://api.spacexdata.com/v4/rockets"

function rocketsDom(rocketsArray) {
    const rockets = document.getElementById("main-rockets");

    const card1 = document.createElement("div");
    card1.setAttribute('class', 'card1')
    card1.textContent = rocketsArray[0].name;
    card1.textContent = rocketsArray[0].explanation;

    console.log(rocketsArray[0]);
    const card2 = document.createElement("div");
    card2.setAttribute('class', 'card2')
    card2.textContent = rocketsArray[1].name;
    card2.textContent = rocketsArray[1].explanation;


    const card3 = document.createElement("div");
    card3.setAttribute('class', 'card3');
    card3.textContent = rocketsArray[2].name;
    card3.textContent = rocketsArray[2].explanation;


    const card4 = document.createElement("div");
    card4.setAttribute('class', 'card4')
    card4.textContent = rocketsArray[3].name;
    card4.textContent = rocketsArray[3].explanation;

    rockets.appendChild(card1)
    rockets.appendChild(card2)
    rockets.appendChild(card3)
    rockets.appendChild(card4)
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

    rocketsDom(rocketsArray);
}

main();

