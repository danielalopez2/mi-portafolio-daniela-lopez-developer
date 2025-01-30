function animationload() {
    const animations = document.querySelectorAll('.animation-load');
    const windowHeight = window.innerHeight;

    animations.forEach((animation) => {
        const elementTop = animation.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            animation.classList.add("active");
        } else {
            animation.classList.remove("active");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        animationload(); 
    }, 600);   
    window.addEventListener('scroll', () => {
        requestAnimationFrame(animationload); 
    });
});


