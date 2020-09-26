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