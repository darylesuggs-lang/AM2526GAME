function loadBackground(sceneId) {
  fetch("backgrounds.json")
    .then(response => response.json())
    .then(data => {
      const backgrounds = data.scenes;
      backgrounds.forEach(background => {
        if (background.scene === sceneId) {
          document.body.style.backgroundImage = `url(${background.background})`;
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundSize = "contain";
          document.body.style.backgroundPosition = "center";
        }
      })
    })
};

function loadCharacters(sceneId) {
  fetch("../characters.json")
    .then(response => response.json())
    .then(data => {
      const characters = data.characters;
        characters.forEach(character => {
          character.scenes.forEach((scene, index) => {
            if (scene == sceneId) {
              const position = character.positions[index];
              document.getElementById(`position${position}`).style.backgroundImage = `url(${character.image})`;
              document.getElementById(`position${position}`).style.backgroundRepeat = "no-repeat";
              document.getElementById(`position${position}`).style.backgroundSize = "contain";
              document.getElementById(`position${position}`).style.backgroundPosition = "center";
            }})
        })
    })
}

fetch("scenes.json")
  .then(response => response.json())
  .then(data => {
    const scenes = data.scenes;

    const dialogueBox = document.getElementById("dialougeBox");
    const optionBox = document.getElementById("optionBox");

    function loadScene(sceneId) {
      const scene = scenes.find(s => s.id === sceneId);

      // clear old text
      dialogueBox.innerHTML = "";

      // clear old options
      optionBox.innerHTML = "";

      // clear old characters
      for (let i = 0; i < 5; i++) {
        document.getElementById(`position${i}`).style.backgroundImage = "";
      }

      // load background and characters
      loadBackground(sceneId);
      loadCharacters(sceneId);

      // create text
      const textElement = document.createElement("p");

      textElement.innerHTML = scene.text.join("<br><br>");

      // make text fit better
      textElement.style.width = "90%";
      textElement.style.maxHeight = "90%";
      textElement.style.overflowY = "auto";

      dialogueBox.appendChild(textElement);

      // create buttons
      scene.options.forEach(option => {
        const button = document.createElement("div");

        button.classList.add("option");

        const buttonText = document.createElement("p");
        buttonText.textContent = option.text;

        button.appendChild(buttonText);

        // when clicked go to next scene
        button.addEventListener("click", () => {
          loadScene(option.nextScene);
        });

        optionBox.appendChild(button);
      });
    }

    // start game at first scene
    loadScene("1");
  });