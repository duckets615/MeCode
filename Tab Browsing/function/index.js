import {buildTabs} from './buildTabs.js'
import {buildContent} from './buildContent.js';

const container = document.querySelector('body');
container.prepend(buildTabs(), buildContent());

document.querySelectorAll('.tab-link').forEach(link => link.addEventListener('click', (e) => {
    let num = e.target.dataset.tab;
    document.querySelector(`.tab-content[data-tab='${num}']`).classList.toggle('show');
    e.target.classList.toggle('selected')
    })
);