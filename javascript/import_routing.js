import {
    router
} from './routes.js';

document.addEventListener("DOMContentLoaded", evt => {
    router();

    window.addEventListener('hashchange', () => {
        router();
    })
})
