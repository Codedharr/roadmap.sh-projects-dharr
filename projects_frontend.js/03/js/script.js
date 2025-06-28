const toggle = document.querySelector(".theme-dark");
    const icon = document.querySelector(".theme-icon");
    const root = document.documentElement;

    const sun = `
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" />
                </svg>`

    const moon = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                  </svg>`

    toggle.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";

      // Cambia el tema
      root.setAttribute("data-theme", isDark ? "light" : "dark");

      // Animación del icono
      icon.classList.add("fade-out");
      setTimeout(() => {
        icon.innerHTML = isDark ? moon : sun ;
        icon.classList.remove("fade-out");
        icon.classList.add("fade-in");
      }, 150);
      setTimeout(() => {
        icon.classList.remove("fade-in");
      }, 300);
    });