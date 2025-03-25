document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle Button
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        themeToggleLightIcon.classList.remove("hidden");
        themeToggleDarkIcon.classList.add("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        themeToggleDarkIcon.classList.remove("hidden");
        themeToggleLightIcon.classList.add("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
            console.log("light mode");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
            console.log("dark mode");
        }
    });
});
