const smallCups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => hightlightCups(idx));
});

function hightlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    //nextElementSibling - це властивість DOM-елемента в JavaScript, яка повертає наступний елемент на тому ж рівні дерева DOM.
    idx--; //Якщо обрана чашка повна, і наступна чашка порожня, тоді idx зменшується на одиницю (idx--)
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
