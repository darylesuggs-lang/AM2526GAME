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