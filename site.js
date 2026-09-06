(function () {
  var storageKey = "ingenium-lang";
  function apply(lang) {
    lang = lang === "it" ? "it" : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach(function (el) {
      var text = el.getAttribute(lang === "it" ? "data-it" : "data-en");
      if (text != null) el.textContent = text;
    });
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.classList.toggle("on", btn.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(storageKey, lang); } catch (e) {}
  }
  var start = "en";
  try { start = localStorage.getItem(storageKey) || start; } catch (e) {}
  apply(start);
  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });
})();
