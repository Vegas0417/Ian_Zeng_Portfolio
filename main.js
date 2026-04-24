(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var detailButtons = document.querySelectorAll("[data-details]");
  detailButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-details");
      var panel = document.getElementById(id);
      if (!panel) return;

      var isHidden = panel.hasAttribute("hidden");
      document.querySelectorAll(".project-details").forEach(function (p) {
        p.setAttribute("hidden", "");
      });

      if (isHidden) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  });
})();