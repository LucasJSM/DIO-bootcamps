const body = document.querySelector("body");
const h1 = document.querySelector("h1#page-title");
const button = document.querySelector("button#mode-selector");
const footer = document.querySelector("footer");

const changeText = element => {

  const darkModeString = `Dark Mode`;
  const lightModeString = `White Mode`;

  const elementHasDarkMode = element.classList.contains("dark-mode");

  if(element === button) {
    return elementHasDarkMode ? element.innerHTML = `${lightModeString}` : element.innerHTML = `${darkModeString}`;
  };

  return elementHasDarkMode ? element.innerHTML = `${darkModeString} ON` : element.innerHTML = `${lightModeString} ON`;

};

const toggleMode = () => {
    body.classList.toggle("dark-mode");

    h1.classList.toggle("dark-mode");
      changeText(h1);

    button.classList.toggle("dark-mode");
      changeText(button);

    footer.classList.toggle("dark-mode");
};

button.addEventListener("click", toggleMode);