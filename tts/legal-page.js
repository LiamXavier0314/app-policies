(function () {
  const language = new URLSearchParams(window.location.search).get("lang") || "all";
  const allowedLanguages = new Set(["all", "en", "tw", "zh"]);
  document.body.dataset.viewLanguage = allowedLanguages.has(language) ? language : "all";
  document.querySelectorAll("[data-language]").forEach((link) => {
    if (link.dataset.language === document.body.dataset.viewLanguage) {
      link.setAttribute("aria-current", "page");
    }
  });
}());
