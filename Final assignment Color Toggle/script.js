const bodyBackground = document.querySelector(".menuContainer");
const burgerMenu = document.querySelector(".burgerMenu");
const menuList = document.querySelector(".backgroundColorList");

const ChangeBackgroundColorName = document.querySelector(".backgroundColorName");
const homeBackgroundButton = document.querySelector(".homeButton");
const redBackgroundButton = document.querySelector(".redButton");
const orangeBackgroundButton = document.querySelector(".orangeButton");
const purpleBackgroundButton = document.querySelector(".purpleButton");
const greenBackgroundButton = document.querySelector(".greenButton");

// Show and hide menulist with available colors
const makeMenuListVisible = () => {
    menuList.classList.remove("hideListMenu");
    menuList.classList.toggle("showListMenu");
};

burgerMenu.addEventListener("mouseover", makeMenuListVisible);

// Change backgroundcolor by clicking on the desired color in the menulist
const MakeBackgroundHome = () => {
    bodyBackground.classList.remove("makeRed", "makeOrange", "makePurple", "makeGreen");
    bodyBackground.classList.add("makeGrey");
    ChangeBackgroundColorName.innerHTML = "grey.";
    menuList.classList.add("hideListMenu");    
};

homeBackgroundButton.addEventListener("click", MakeBackgroundHome);

const MakeBackgroundRed = () => {
    bodyBackground.classList.remove("makeGrey", "makeOrange", "makePurple", "makeGreen");
    bodyBackground.classList.add("makeRed");
    ChangeBackgroundColorName.innerHTML = "red.";
    menuList.classList.add("hideListMenu");
};

redBackgroundButton.addEventListener("click", MakeBackgroundRed);

const MakeBackgroundOrange = () => {
    bodyBackground.classList.remove("makeGrey", "makeRed","makePurple","makeGreen");
    bodyBackground.classList.add("makeOrange");
    ChangeBackgroundColorName.innerHTML = "orange.";
    menuList.classList.add("hideListMenu");
};

orangeBackgroundButton.addEventListener("click", MakeBackgroundOrange);

const MakeBackgroundPurple = () => {
    bodyBackground.classList.remove("makeGrey", "makeRed", "makeOrange", "makeGreen");
    bodyBackground.classList.add("makePurple");
    ChangeBackgroundColorName.innerHTML = "purple.";
    menuList.classList.add("hideListMenu");
};

purpleBackgroundButton.addEventListener("click", MakeBackgroundPurple);

const MakeBackgroundGreen = () => {
    bodyBackground.classList.remove("makeGrey", "makeRed", "makeOrange", "makePurple");
    bodyBackground.classList.add("makeGreen");
    ChangeBackgroundColorName.innerHTML = "green.";
    menuList.classList.add("hideListMenu");
};

greenBackgroundButton.addEventListener("click", MakeBackgroundGreen);

// choose background color with keyboard digits 1 to 5
document.addEventListener('keydown', (event) => {
    if (event.code === 'Digit1') {
        MakeBackgroundHome()
    } if (event.code === 'Digit2') {
        MakeBackgroundRed()
    } if (event.code === 'Digit3') {
        MakeBackgroundOrange()
    } if (event.code === 'Digit4') {
        MakeBackgroundPurple()
    } if (event.code === 'Digit5') {
        MakeBackgroundGreen()
    } else {
        return;
    }
  });

