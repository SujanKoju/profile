window.onload = initializeAllHandlers;
function initializeAllHandlers() {
    let startButton = document.getElementById("start-button");
    startButton.onclick = startAnimation;

    let stopButton = document.getElementById("stop-button");
    stopButton.onclick = stopAnimation;
}

function startAnimation() {
    let textArea = document.getElementById("text-area");

    let selectedAnimation = document.getElementById("animation").value;

    switch (selectedAnimation) {
        case 'blank':
            textArea.innerHTML = "";
            break
        case 'exercise':
            textArea.innerHTML = EXERCISE;
            break
        case 'juggler':
            textArea.innerHTML = JUGGLER;
            break
        case 'bike':
            textArea.innerHTML = BIKE;
            break
        case 'dive':
            textArea.innerHTML = DIVE;
            break
        default:
            textArea.innerHTML = "Custom";
    }
}
function stopAnimation() {
    let textArea = document.getElementById("text-area");
    textArea.innerHTML = "";
}
