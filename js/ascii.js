window.onload = initializeAllHandlers;

function animationChange() {
    let textArea = document.getElementById("text-area");
    let animationDropBox = document.getElementById("animation");
    let selected = animationDropBox.value;
    if (selected === 'blank') textArea.innerHTML = '';
    if (selected === 'exercise')textArea.innerHTML = EXERCISE;
    if (selected === 'juggler')textArea.innerHTML = JUGGLER;
    if (selected === 'bike')textArea.innerHTML = BIKE;
    if (selected === 'dive')textArea.innerHTML = DIVE;
}

function initializeAllHandlers() {
    let startButton = document.getElementById("start-button");
    startButton.onclick = startAnimation;

    let stopButton = document.getElementById("stop-button");
    stopButton.onclick = stopAnimation;

    let animationDropBox = document.getElementById("animation");
    animationDropBox.onchange = animationChange;
}
    function showFrame(frame) {
        let textArea = document.getElementById("text-area");
        textArea.innerHTML = frame;
    }

    function startAnimating(exercise) {
        for (let i = 0; i < exercise.length; i++) {
            setTimeout(showFrame, 250 * i, exercise[i]);
        }
    }

    function startAnimation() {
        let textArea = document.getElementById("text-area");

        let selectedAnimation = document.getElementById("animation").value;

        switch (selectedAnimation) {
            case 'blank':
                textArea.innerHTML = "";
                break
            case 'exercise': {
                let exercise = EXERCISE.split("=====\n");
                startAnimating(exercise);
                break;
            }

            case 'juggler':
                let juggler = JUGGLER.split("=====\n");
                startAnimating(juggler);
                break
            case 'bike':
                let bike = BIKE.split("=====\n");
                startAnimating(bike);
                break
            case 'dive':
                let dive = DIVE.split("=====\n");
                startAnimating(dive);
                break
            default:
                textArea.innerHTML = "Custom";
        }
    }

    function stopAnimation() {
        let textArea = document.getElementById("text-area");
        textArea.innerHTML = "";
    }
