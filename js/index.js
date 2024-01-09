import { createRecipientMessage, createSenderMessage } from "./message.js";

const handleMessage = () => {
    const message = txtMessage.value;
    createSenderMessage(message);
    if (message.trim()) {
        if (/^Jamie$/i.test(message)) {
            createRecipientMessage("Can I help you?");
            return;
        }
        else {
            const lastTokenIdx = message.length - 1;
            if (/\?+!+|!+\?+$/.test(message)) {
                createRecipientMessage("Please give me some time to resolve the issue.");
                return;
            } else {
                if (message[lastTokenIdx] === "?") {
                    createRecipientMessage("Yes");
                    return;
                } else if (message[lastTokenIdx] === "!") {
                    createRecipientMessage("Please remain calm.");
                    return;
                }
            }
            createRecipientMessage("Sorry, I don't understand");
        }
    } else {
        console.log("Message is empty!!");
    }
};

btnSend.addEventListener('click', handleMessage);

