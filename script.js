document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");

    // Example news articles
    const articles = [
        {
            title: "England Defeat France in a Thrilling Match",
            image: "https://yourwebsite.com/news1.jpg", // Replace with real image
            content: "England secured a dramatic victory over France in the latest Wheelchair Rugby League showdown...",
            link: "news1.html"
        },
        {
            title: "World Cup 2025: New Teams Announced!",
            image: "https://yourwebsite.com/news2.jpg",
            content: "The 2025 World Cup is set to be the most exciting yet, with new nations joining the competition...",
            link: "news2.html"
        }
    ];

    // Loop through articles and display them
    articles.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("news-item");
        div.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}">
            <p>${article.content}</p>
            <a href="${article.link}" class="read-more">Read More</a>
        `;
        newsContainer.appendChild(div);
    });
});
