let itemText = ["Deep,Earth", "Night,Arcade", "Soccer,Team VR", "The,Grid", "From Up,Above VR", "Pocket,Borealis", "The,Curiosity", "Make It,Fisheye"]
let classText = ["earth", "arcade", "team", "grid", "above", "borealis", "curiosity", "fisheye"]

let element = document.querySelector(".thirdView__grid");

for (let i = 0; i < itemText.length; i++) {
    let child = document.createElement("div");
    child.classList.add(`thirdView__grid__item`);
    child.classList.add(`thirdView__grid__item--${classText[i]}`);
    let myList = itemText[i].split(",");
    child.append(myList[0]);
    child.append(document.createElement("br"));
    child.append(myList[1]);
    element.append(child);
}
