let mouseX, mouseY;
const customMousePointer = document.getElementById("pointer");

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - customMousePointer.offsetWidth / 2;
    mouseY = e.clientY - customMousePointer.offsetHeight / 2;
    console.log(mouseX, mouseY)
    
    /**
    * Mouse Keyframes
    */
    const mouseKeyframes = {
      transform: `translate(${mouseX}px, ${mouseY}px)`
    }

    customMousePointer.animate(mouseKeyframes, {
        duration: 800,
        fill: "forwards"
      });
 
});