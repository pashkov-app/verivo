const supportedLanguages = new Set(["uk", "en"]);
const languageControls = document.querySelectorAll("[data-language-control]");
const languageContent = document.querySelectorAll("[data-language]");

function storedLanguage() {
  try {
    return window.localStorage.getItem("verivo-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("verivo-language", language);
  } catch {
    // Language selection still works when storage is unavailable.
  }
}

function setLanguage(language, persist = true) {
  const selectedLanguage = supportedLanguages.has(language) ? language : "uk";

  document.documentElement.lang = selectedLanguage;

  languageContent.forEach((element) => {
    element.hidden = element.dataset.language !== selectedLanguage;
  });

  languageControls.forEach((control) => {
    control.setAttribute(
      "aria-pressed",
      String(control.dataset.languageControl === selectedLanguage),
    );
  });

  if (persist) {
    saveLanguage(selectedLanguage);
  }
}

languageControls.forEach((control) => {
  control.addEventListener("click", () => {
    setLanguage(control.dataset.languageControl);
  });
});

const preferredLanguage = storedLanguage()
  ?? (navigator.language.toLowerCase().startsWith("uk") ? "uk" : "en");

setLanguage(preferredLanguage, false);
