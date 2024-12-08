document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector(".chat-input input");
    const chatButton = document.querySelector(".chat-input button");
    const chatMessages = document.querySelector(".chat-messages");

    // Mapping of specific inputs to predefined responses
    const responseMap = {
        "How often should I water my plant?": "It depends on the plant type! Most plants need water when the top inch of soil feels dry.",
        "What fertilizer should I use?": "Use organic fertilizers for most plants. For specific needs, consult our plant health experts.",
        "How much sunlight does my plant need?": "Most plants need 6-8 hours of sunlight, but some thrive in partial shade. Check your plant's preferences!",
        "Why are my plant's leaves turning yellow?": "Yellow leaves could mean overwatering, underwatering, or a nutrient deficiency. Let's narrow it down!",
        "How do I upload a plant scan?": "Click the 'Scan Plant' button to upload an image for analysis.",
        "Where can I find my plant care history?": "Your plant care history is available under the 'Plant History' tab.",
        "Can I chat with an expert?": "Yes, click the 'Contact Expert' button to get personalized advice from our plant specialists.",
        "What is Green Guardian?": "Green Guardian is your smart plant care assistant, helping you maintain healthy, happy plants!",
        "How can I join the community?": "Head to the 'Community' section to connect with other plant enthusiasts.",
        "What are eco-scores?": "Eco-scores measure your plant care's environmental impact. Higher scores mean more sustainable practices!",
        "Tell me a fun fact about plants.": "Did you know? Plants can communicate with each other using chemical signals!",
        "What’s the best beginner plant?": "Snake plants and pothos are great for beginners—they’re low maintenance and very resilient.",
        "What’s the rarest plant?": "The rarest plant in the world is the Middlemist Red, with only two known specimens in existence!",
        "How can I improve my plant's health?": "Regular watering, proper sunlight, and occasional fertilizing can go a long way in maintaining plant health.",
        "Why is my plant drooping?": "Drooping could indicate underwatering, overwatering, or poor soil drainage. Check these factors!",
        "What’s the best soil for indoor plants?": "Indoor plants thrive in well-draining potting soil. Adding perlite or sand can improve drainage.",
        "Can plants survive without sunlight?": "Most plants need some sunlight, but low-light plants like pothos and peace lilies can survive in indirect light.",
        "How do I prevent pests on my plants?": "Keep leaves clean, avoid overwatering, and use neem oil or insecticidal soap for infestations."
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
            addMessage(userMessage, "user");
            chatInput.value = ""; // Clear input

            // Provide predefined response or fallback
            const expertResponse = responseMap[userMessage] || "Thanks for your message. We'll respond shortly.";
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

