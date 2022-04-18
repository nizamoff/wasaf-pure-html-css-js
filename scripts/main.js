const dropdown = document.querySelector(".header__dropdown");
const main = document.querySelector("main")

dropdown.onclick = function () {
    dropdown.classList.toggle('active')
}

main.onclick = function () {
    dropdown.classList.remove('active')
}

function show(anything) {
    document.querySelector(".header__input").value = anything;
}

window.addEventListener("scroll", function () {
  const couters = document.querySelectorAll(".results__number");
  const speed = 100;
  if (this.pageYOffset >= 1300) {
    couters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 100);
        } else {
          count.innerText = target;
        }
      };

      updateCount();
    });
  }
});