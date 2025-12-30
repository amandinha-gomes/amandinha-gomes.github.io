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

    /* estado inicial: mostrar todos */
    cards.forEach(card => card.classList.add("show"));

    filters.forEach(btn => {
        btn.addEventListener("click", () => {

            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const tags = card.dataset.tags.split(" ");

                if (filter === "all" || tags.includes(filter)) {
                    card.classList.add("show");
                    card.classList.remove("hide");
                } else {
                    card.classList.remove("show");
                    card.classList.add("hide");
                }
            });
        });
    });
});

function openCert(path) {
    window.open(path, "_blank");
}

function openCertModal(path) {
    const modal = document.getElementById("certModal");
    const frame = document.getElementById("certFrame");

    frame.src = path;
    modal.classList.add("show");
}

function closeCertModal() {
    const modal = document.getElementById("certModal");
    const frame = document.getElementById("certFrame");

    frame.src = "";
    modal.classList.remove("show");
}

