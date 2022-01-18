"use strict"
window.onload = initialization;
const elements = {};
elements.animationIndex = 0;
elements.animationArray = [];
elements.currentAnimationText = "";
elements.animationSpeed = 250;

function initialization() {
    elements.startButton = document.getElementById("start-button");
    elements.startButton.onclick = startAnimation;

    elements.stopButton = document.getElementById("stop-button");
    elements.stopButton.onclick = stopAnimation;
    elements.stopButton.disabled = true;

    elements.animationDropBox = document.getElementById("animation");
    elements.animationDropBox.onchange = animationChange;

    elements.sizeDropBox = document.getElementById("size");
    elements.sizeDropBox.onchange = sizeDropBoxChange;

    elements.textArea = document.getElementById("text-area");

    elements.turboCheckBox = document.getElementById("turbo");
    elements.turboCheckBox.onclick = turboChanged;
}

function animationChange(e) {
    let selectedValue = e.currentTarget.value;
    elements.textArea.value = ANIMATIONS[selectedValue];
    elements.currentAnimationText = ANIMATIONS[selectedValue];
}

function sizeDropBoxChange(selectedSize) {
    elements.textArea.style.fontSize = selectedSize.currentTarget.value;
}


function toggleIntractability(startAnimation) {
    elements.startButton.disabled = startAnimation;
    elements.stopButton.disabled = !startAnimation;
    elements.animationDropBox.disabled = startAnimation;
}


function startAnimation() {
    if (elements.animationDropBox.value === 'custom') {
        elements.currentAnimationText = elements.textArea.value;
    }

    elements.animationArray = elements.currentAnimationText.split('=====\n')
    toggleIntractability(true);

    if (elements.timerId) clearInterval(elements.timerId);

    elements.timerId = setInterval(function () {
        if (elements.animationIndex === elements.animationArray.length) {
            elements.animationIndex = 0;
        }
        elements.textArea.value = elements.animationArray[elements.animationIndex];
        elements.animationIndex++;
    }, elements.animationSpeed);
}

function turboChanged() {
    if (elements.turboCheckBox.checked) {
        elements.animationSpeed = 50;
    } else {
        elements.animationSpeed = 250;
    }
    elements.animationArray = elements.currentAnimationText.split('=====\n')
    toggleIntractability(true);

    if (elements.timerId) clearInterval(elements.timerId);

    elements.timerId = setInterval(function () {
        if (elements.animationIndex === elements.animationArray.length) {
            elements.animationIndex = 0;
        }
        elements.textArea.value = elements.animationArray[elements.animationIndex];
        elements.animationIndex++;
    }, elements.animationSpeed);
}

function stopAnimation() {
    toggleIntractability(false);
    clearInterval(elements.timerId);
    elements.textArea.value = elements.currentAnimationText;
}
