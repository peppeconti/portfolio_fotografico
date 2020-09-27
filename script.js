

window.addEventListener('load', () => {

// calculates the actual width of the figure after loading and sets heigth equal to it

let about_preview = document.querySelector('.preview_about figure');
let actual_width = window.getComputedStyle(about_preview).width;
console.log(actual_width);
about_preview.style.height = `${actual_width}`;

// add  incremental animation-delay to span element 

let letters_container = document.querySelectorAll('.bounce');
let letters_container_array = Array.from(letters_container);
console.log(letters_container_array);
letters_container_array.forEach((e) => {
    let letters = e.children;
    let letters_array = Array.from(letters);
    let delay = 0;
    letters_array.forEach((e) => {
        e.style.animationDelay = `${delay}s`;
        delay = delay + 0.05;
    })
});

});

// sets heigth equal to width on resize

window.addEventListener('resize', () => {
    let about_preview = document.querySelector('.preview_about figure');
    let actual_width = window.getComputedStyle(about_preview).width;
    console.log(actual_width);
    about_preview.style.height = `${actual_width}`;
});