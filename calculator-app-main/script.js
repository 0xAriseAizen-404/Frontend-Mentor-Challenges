const screenDisplay = document.querySelector("#result-screen");
const buttons = document.querySelectorAll("button");
let accumulativeCalculation = "";

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;
    if (value == "RESET") {
      accumulativeCalculation = "";
      screenDisplay.textContent = "0";
    } else if (value == "=") {
      try {
        const result = eval(accumulativeCalculation);
        screenDisplay.textContent = result;
        accumulativeCalculation = String(result);
      } catch (err) {
        screenDisplay.textContent = "Invalid Expression";
      }
    } else if (value == "DEL") {
      accumulativeCalculation = accumulativeCalculation.slice(0, -1);
      screenDisplay.textContent = accumulativeCalculation;
    } else {
      accumulativeCalculation += value;
      screenDisplay.textContent = accumulativeCalculation;
    }
  })
);

const themes = [
  {
    bodyBg: "hsl(222, 26%, 31%)",
    toggleKeypadBg: " hsl(223, 31%, 20%)",
    screenBg: "hsl(224, 26%, 15%)",
    keysBg: "hsl(30, 25%, 89%)",
    keysHoverBg: "hsl(30, 25%, 100%)",
    keysShadow: "hsl(28, 16%, 65%)",
    primaryKeyToggleBg: "hsl(6, 63%, 50%)",
    primaryKeyToggleHoverBg: "hsl(6, 70%, 60%)",
    primaryKeyToggleShadow: "hsl(6, 70%, 34%)",
    secondayKeysBg: "hsl(225, 21%, 49%)",
    secondayKeysHoverBg: "hsl(225, 28%, 59%)",
    secondaryKeysShadow: "hsl(224, 28%, 35%)",
    primaryText: "hsl(221, 14%, 31%)",
    secondaryText: "hsl(0, 0%, 100%)",
    bodyText: "hsl(0, 0%, 100%)",
  },
  {
    bodyBg: "hsl(0, 0%, 90%)",
    toggleKeypadBg: " hsl(0, 5%, 81%)",
    screenBg: "hsl(0, 0%, 93%)",
    keysBg: "hsl(45, 7%, 89%)",
    keysHoverBg: "hsl(45,  10%, 98%)",
    keysShadow: "hsl(35, 11%, 61%)",
    primaryKeyToggleBg: "hsl(25, 98%, 40%)",
    primaryKeyToggleHoverBg: "hsl(25,  98%, 50%)",
    primaryKeyToggleShadow: "hsl(25, 99%, 27%)",
    secondayKeysBg: "hsl(185, 42%, 37%)",
    secondayKeysHoverBg: "hsl(185,  49%, 49%)",
    secondaryKeysShadow: "hsl(185, 58%, 25%)",
    primaryText: "hsl(60, 10%, 19%)",
    secondaryText: "hsl(0, 0%, 100%)",
    bodyText: "hsl(60, 10%, 19%)",
  },
  {
    bodyBg: "hsl(268, 75%, 9%)",
    toggleKeypadBg: " hsl(268, 71%, 12%)",
    screenBg: "hsl(268, 71%, 12%)",
    keysBg: "hsl(268, 47%, 21%)",
    keysHoverBg: "hsl(268,  47%, 31%)",
    keysShadow: "hsl(290, 70%, 36%)",
    primaryKeyToggleBg: "hsl(176, 100%, 44%)",
    primaryKeyToggleHoverBg: "hsl(176,  95%, 55%)",
    primaryKeyToggleShadow: "hsl(177, 92%, 70%)",
    secondayKeysBg: "hsl(281, 89%, 26%)",
    secondayKeysHoverBg: "hsl(281,  96%, 36%)",
    secondaryKeysShadow: "hsl(281, 91%, 52%)",
    primaryText: "hsl(52, 100%, 62%)",
    secondaryText: "hsl(0, 0%, 100%)",
    bodyText: "hsl(52, 100%, 62%)",
  },
];

let themeCount = 0;

function setTheme(themeCount) {
  let x = themes[themeCount];
  const rootElement = document.documentElement;
  rootElement.style.setProperty("--body-bg", x.bodyBg);
  rootElement.style.setProperty("--toggle-keypad-bg", x.toggleKeypadBg);
  rootElement.style.setProperty("--screen-bg", x.screenBg);
  rootElement.style.setProperty("--keys-bg", x.keysBg);
  rootElement.style.setProperty("--keys-hover-bg", x.keysHoverBg);
  rootElement.style.setProperty("--keys-shadow", x.keysShadow);
  rootElement.style.setProperty(
    "--primary-key-toggle-bg",
    x.primaryKeyToggleBg
  );
  rootElement.style.setProperty(
    "--primary-key-toggle-hover-bg",
    x.primaryKeyToggleHoverBg
  );
  rootElement.style.setProperty(
    "--primary-key-toggle-shadow",
    x.primaryKeyToggleShadow
  );
  rootElement.style.setProperty("--secondary-keys-bg", x.secondayKeysBg);
  rootElement.style.setProperty(
    "--secondary-keys-hover-bg",
    x.secondayKeysHoverBg
  );
  rootElement.style.setProperty(
    "--secondary-keys-shadow",
    x.secondaryKeysShadow
  );
  rootElement.style.setProperty("--primary-text", x.primaryText);
  rootElement.style.setProperty("--secondary-text", x.secondaryText);
  rootElement.style.setProperty("--body-text", x.bodyText);
}

const toggleTheme = document.querySelector(".theme-container .toggle-slider");
toggleTheme.addEventListener("click", (e) => {
  themeCount = (themeCount + 1) % themes.length;
  setTheme(themeCount);
  console.log(toggleTheme);
  toggleTheme.style.justifyContent =
    themeCount == 0 ? "start" : themeCount == 1 ? "center" : "end";
});
