document.addEventListener("DOMContentLoaded", () => {

    /* 🌗 Dark Mode */
    const toggle = document.getElementById("theme-toggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    /* 🎯 Filtro de projetos */
    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".card");

    filters.forEach(btn => {
        btn.addEventListener("click", () => {

            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            let delay = 0;

            cards.forEach(card => {
                const tags = card.dataset.tags.split(" ");

                card.classList.remove("show");
                card.classList.add("hide");

                if (filter === "all" || tags.includes(filter)) {
                    setTimeout(() => {
                        card.classList.remove("hide");
                        card.classList.add("show");
                    }, delay);
                    delay += 120; // efeito stagger
                }
            });
        });
    });

});
