(function () {
  const documentRoot = document.querySelector("[data-source]");
  const source = documentRoot.dataset.source;
  const language = new URLSearchParams(window.location.search).get("lang") || "all";
  const allowedLanguages = new Set(["all", "en", "tw", "zh"]);

  document.body.dataset.viewLanguage = allowedLanguages.has(language) ? language : "all";

  document.querySelectorAll("[data-language]").forEach((link) => {
    if (link.dataset.language === document.body.dataset.viewLanguage) {
      link.setAttribute("aria-current", "page");
    }
  });

  fetch(source)
    .then((response) => {
      if (!response.ok) throw new Error("Unable to load legal document.");
      return response.text();
    })
    .then((markdown) => {
      const content = markdown
        .replace(/^<style>[\s\S]*?<\/style>\s*/i, "")
        .replace(/^<div class="pp-doc">\s*/i, "")
        .replace(/<\/div>\s*$/, "")
        .replace(/^## (.+)$/gm, "<h2>$1</h2>");
      const template = document.createElement("template");
      template.innerHTML = content;

      template.content.querySelectorAll(".lang").forEach((section) => {
        section.innerHTML = section.innerHTML
          .replace(/(^|\n)\s*&gt;\s?/g, "$1")
          .replace(/(^|\n)\s*>\s?/g, "$1")
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      });

      documentRoot.replaceChildren(template.content);
    })
    .catch(() => {
      documentRoot.innerHTML = `<p class="load-error">This document could not be loaded. <a href="${source}">Open the source document</a>.</p>`;
    });
}());
