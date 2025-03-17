// fetch("https://api.spaceflightnewsapi.net/v4/articles/")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error fetching data:", error));


fetch("https://api.nasa.gov/planetary/apod?api_key=iHU6CXT2jGDVr9hMpRdhV1Bgn7BJiShISxKrqBGv")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));