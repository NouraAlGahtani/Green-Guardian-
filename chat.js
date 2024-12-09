document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector(".chat-input input");
    const chatButton = document.querySelector(".chat-input button");
    const chatMessages = document.querySelector(".chat-messages");

    // Mapping of specific keywords or phrases to predefined responses
    const responseMap = {
        "water plant": "It depends on the plant type! Most plants need water when the top inch of soil feels dry.",
        "fertilizer": "Use organic fertilizers for most plants. For specific needs, consult our plant health experts.",
        "sunlight": "Most plants need 6-8 hours of sunlight, but some thrive in partial shade. Check your plant's preferences!",
        "yellow leaves": "Yellow leaves could mean overwatering, underwatering, or a nutrient deficiency. Let's narrow it down!",
        "upload plant scan": "Click the 'Scan Plant' button to upload an image for analysis.",
        "plant care history": "Your plant care history is available under the 'Plant History' tab.",
        "chat with expert": "Yes, click the 'Contact Expert' button to get personalized advice from our plant specialists.",
        "green guardian": "Green Guardian is your smart plant care assistant, helping you maintain healthy, happy plants!",
        "join community": "Head to the 'Community' section to connect with other plant enthusiasts.",
        "eco-scores": "Eco-scores measure your plant care's environmental impact. Higher scores mean more sustainable practices!",
        "fun fact about plants": "Did you know? Plants can communicate with each other using chemical signals!",
        "beginner plant": "Snake plants and pothos are great for beginners—they’re low maintenance and very resilient.",
        "rarest plant": "The rarest plant in the world is the Middlemist Red, with only two known specimens in existence!",
        "improve plant health": "Regular watering, proper sunlight, and occasional fertilizing can go a long way in maintaining plant health.",
        "drooping plant": "Drooping could indicate underwatering, overwatering, or poor soil drainage. Check these factors!",
        "indoor plant soil": "Indoor plants thrive in well-draining potting soil. Adding perlite or sand can improve drainage.",
        "plants without sunlight": "Most plants need some sunlight, but low-light plants like pothos and peace lilies can survive in indirect light.",
        "prevent pests": "Keep leaves clean, avoid overwatering, and use neem oil or insecticidal soap for infestations."
    };

    function addMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }

    chatButton.addEventListener("click", () => {
        const userMessage = chatInput.value.trim().toLowerCase(); // Normalize user input
        if (userMessage) {
            addMessage(chatInput.value.trim(), "user"); // Show user message as typed
            chatInput.value = ""; // Clear input

            // Find a matching response
            const responseKey = Object.keys(responseMap).find(key =>
                userMessage.includes(key)
            );

            const expertResponse = responseKey
                ? responseMap[responseKey]
                : "Thanks for your message. We'll respond shortly.";

            // Add expert response after a short delay
            setTimeout(() => {
                addMessage(expertResponse, "expert");
            }, 1000);
        }
    });

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            chatButton.click();
        }
    });
});
