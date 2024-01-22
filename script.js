/* document.addEventListener("DOMContentLoaded", function () {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const spaceDive = document.createElement("div");

        data.forEach((character, index) => {
          // Create a unique identifier for each carousel
          const carouselId = `carouselExample-${index}`;

          // Create a div for each character
          const characterDiv = document.createElement("div");

          // Add content to the characterDiv (example: character name)
          characterDiv.innerHTML = `
            <div id="${carouselId}" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${character.img_url}" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>`;

          // Append the characterDiv to the spaceDive
          spaceDive.appendChild(characterDiv);
        });

        // Append the spaceDive to the body or any other element in your HTML
        document.body.appendChild(spaceDive);
      });
});
 */

document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


document.addEventListener("DOMContentLoaded", function () {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const spaceDive = document.createElement("div");

        data.forEach((character, index) => {
          // Create a unique identifier for each carousel
          const carouselId = `carouselExample-${index}`;

          // Create a div for each character
          const characterDiv = document.createElement("div");

          // Add content to the characterDiv (example: character name)
          characterDiv.innerHTML = `
            <div id="${carouselId}" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${character.img_url}" class="d-block w-100" alt="...">
                  <h2>${character.name}</h2>
                  <h3>${character.alias}</h3>
                </div>
              </div>
              
            </div>`;

          // Append the characterDiv to the spaceDive
          spaceDive.appendChild(characterDiv);
        });

        // Append the spaceDive to the body or any other element in your HTML
        document.body.appendChild(spaceDive);
      });
});
