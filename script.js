const scenes = [
  {
    id: "hospital",
    text: "You wake up in a hospital.",
    buttons: [
      { text: "Take the job", nextScene: "office", show: true },
      { text: "Refuse the job", nextScene: "bar", show: true }
    ]
  },
  {
    id: "office",
    text: "You are now in the office.",
    buttons: [
      { text: "Go back", nextScene: "hospital", show: true }
    ]
  }
];

const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("my-button");

function loadScene(sceneId) {
  const scene = scenes.find(function(s) {
    return s.id === sceneId;
  });

  storyText.innerText = scene.text;
  choicesDiv.innerHTML = "";

  scene.buttons.forEach(function(btn) {
    const button = document.createElement("button");
    button.textContent = btn.text;

    button.addEventListener("click", function() {
      loadScene(btn.nextScene);
    });

    choicesDiv.appendChild(button);
  });
}

loadScene("hospital");