// Example properties
const properties = [
    { name: "Luxury Apartment", price: "$1,200,000", type: "apartment", location: "Downtown" },
    { name: "Cozy House", price: "$750,000", type: "house", location: "Suburbs" },
    { name: "Commercial Space", price: "$500,000", type: "commercial", location: "City Center" }
];

// Load properties dynamically
const propertyListings = document.getElementById("property-listings");
properties.forEach((property) => {
    const div = document.createElement("div");
    div.className = "property-card";
    div.innerHTML = `
        <h3>${property.name}</h3>
        <p>${property.price}</p>
        <p>${property.location}</p>
    `;
    propertyListings.appendChild(div);
});

// Chatbot functionality
const chatHeader = document.getElementById("chat-header");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

chatHeader.addEventListener("click", () => {
    chatBody.style.display = chatBody.style.display === "none" ? "block" : "none";
});

chatSend.addEventListener("click", () => {
    const userMessage = chatInput.value;
    if (userMessage.trim()) {
        const userDiv = document.createElement("div");
        userDiv.textContent = `You: ${userMessage}`;
        chatMessages.appendChild(userDiv);

        // Simulate bot reply
        const botDiv = document.createElement("div");
        botDiv.textContent = "Bot: Thanks for reaching out! How can I help?";
        chatMessages.appendChild(botDiv);

        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

// Search functionality
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");

searchBtn.addEventListener("click", () => {
    const location = document.getElementById("location").value.toLowerCase();
    const priceRange = document.getElementById("price-range").value;
    const propertyType = document.getElementById("property-type").value;

    const results = properties.filter(property =>
        property.location.toLowerCase().includes(location) &&
        property.type === propertyType
    );

    searchResults.innerHTML = results.length
        ? results.map(r => `<p>${r.name} - ${r.price} - ${r.location}</p>`).join("")
        : "<p>No results found.</p>";
});
