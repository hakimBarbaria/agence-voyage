const searchInput = document.querySelector(".search-input");
    const articlesContainer = document.getElementById("articlesContainer");
    const allArticles = Array.from(articlesContainer.querySelectorAll(".post-card"));

    // Live search filtering
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        // Filter articles based on query
        const matchedArticles = allArticles.filter(article => {
            const title = article.querySelector(".post-title").textContent.toLowerCase();
            const excerpt = article.querySelector(".post-excerpt").textContent.toLowerCase();
            return title.includes(query) || excerpt.includes(query);
        });

        // First hide all articles
        allArticles.forEach(article => {
            article.style.display = "none";
        });

        // Show only matched ones
        matchedArticles.forEach(article => {
            article.style.display = "block";
        });
    });