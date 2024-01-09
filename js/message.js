import { getCurrentDateTime, clearInput } from "./utils.js";

export const createRecipientMessage = (message) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    h3.innerText = "Jamie";
    p.innerText = message;
    span.innerText = getCurrentDateTime();
    div.classList.add("recipient-chatbox-container");

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);

    chatContainer.appendChild(div);
}

export const createSenderMessage = (message) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    h3.innerText = "You";
    p.innerText = message;
    span.innerText = getCurrentDateTime();
    div.classList.add("sender-chatbox-container");

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);

    chatContainer.appendChild(div);
    clearInput();
}