// calculates the actual width of the figure after loading and sets heigth equal to it

window.addEventListener('load', () => {
let about_preview = document.querySelector('.preview_about figure');
let actual_width = about_preview.getBoundingClientRect().width;
// console.log(actual_width);
about_preview.style.height = `${actual_width}px`;
});

// sets heigth equal to width on resize

window.addEventListener('resize', () => {
    let about_preview = document.querySelector('.preview_about figure');
    let actual_width = about_preview.getBoundingClientRect().width;
    // console.log(actual_width);
    about_preview.style.height = `${actual_width}px`;
});

// add  incremental animation-delay to span

let letters = document.querySelectorAll('button span');
let letters_array = Array.from(letters);
console.log(letters_array);
let delay = 0;
letters_array.forEach((e) => {
    e.style.animationDelay = `${delay}s`;
    delay = delay + 0.05;
});

let letters_2 = document.querySelectorAll('li span');
let letters_array_2 = Array.from(letters_2);
console.log(letters_array_2);
let delay_2 = 0;
letters_array_2.forEach((e) => {
    e.style.animationDelay = `${delay_2}s`;
    delay_2 = delay_2 + 0.05;
});