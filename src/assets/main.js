const API = `https://rickandmortyapi.com/api/character`;
const content = document.getElementById("content");

const fecthData = async (urlApi) => {
  const data = await fetch(urlApi);
  const character = await data.json();
  console.log(character);
  return character;
};

(async () => {
  const characters = await fecthData(API);
  let view = `
    ${characters.results
      .map(
        (character) =>
          `
          <div class="item">
              <img src="${character.image}" alt="${character.name}"/>
              <h2>${character.name}</h2>
          </div>
          `
        ).slice(0,4).join("")}
    `;
  content.innerHTML = view;
})();
