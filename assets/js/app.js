const soatEl = document.querySelector(".soat")
// const nuqta = document.querySelector(".nuqta")
const minutEl = document.querySelector(".minut")
const secundEl = document.querySelector(".secund")

function time() {
    let data = new Date()

    let soat = data.getHours();
    let minut = data.getMinutes();
    let sekund = data.getSeconds();

    soatEl.innerHTML = `${soat}`.padStart(2,"0");
    minutEl.innerHTML = `${minut}`.padStart(2,"0");
    secundEl.innerHTML = `${sekund}`.padStart(2,"0");

    setTimeout(time, 1);
}

time();