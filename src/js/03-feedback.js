import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

let state = {};

function saveFormState(e) {
    state[e.target.name] = e.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadFormState() {
    try {
        const savedState = localStorage.getItem(storageKey);
        if (savedState) {
            state = JSON.parse(savedState);
            Object.entries(state).forEach(([key, val]) => {
                if (form.elements[key]) {
                    form.elements[key].value = val;
                }
            });
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

function handleSubmit(evt) {
    evt.preventDefault();
    console.log(state);
    localStorage.removeItem(storageKey);
    evt.target.reset();
}

form.addEventListener("input", throttle(saveFormState, 500));
form.addEventListener("submit", handleSubmit);
loadFormState();
