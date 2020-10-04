document.addEventListener('DOMContentLoaded', () => {
    'use strict'; 

    // place each node of the 'ul' inside the grid relative to the row-structure  

    const container = document.getElementById('hamb_menu');
    let list_els = document.querySelector('#hamb_menu ul').children;
    let array_from_ul = Array.from(list_els);
    console.log(array_from_ul);
    let grid_start = 1;
    let grid_end = 2;
    array_from_ul.forEach(e => {
        e.style.gridRowStart = grid_start;
        e.style.gridRowEnd = grid_end;
        e.style.backgroundColor = 'grey';
        grid_start++;
        grid_end++;
        e.style.transform = `translateX(-110%) skewX(20deg)`;
        e.style.opacity = '0.5';
    })

    document.addEventListener('keydown', (evt) => {
        if (evt.code === 'KeyB') {
            container.style.zIndex = '10';
            let delay = 0.1;
            array_from_ul.forEach(e => {
                e.style.transition = `${delay}s`;
                delay = delay + 0.1;
                e.style.transform = `translateX(0) skewX(0deg)`;
                e.style.opacity = '1';
            })
        }
        if (evt.code ==='KeyC' ) {
            let delay = 0.1;
            array_from_ul.forEach(e => {
                e.style.transition = `${delay}s`;
                delay = delay + 0.1;
                e.style.transform = `translateX(-110%) skewX(20deg)`;
                e.style.opacity = '0.5';
            })
            console.log(delay)
            setTimeout(function(){
                container.style.zIndex = '-2';
            }, delay*1000);
        }
    })
});