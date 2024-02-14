const cursorCat = document.querySelector("[data-cursor]")

window.addEventListener("mousemove", function (e) {
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorCat.style.left = `${posX}px`;
    cursorCat.style.top = `${posY}px`;
});
