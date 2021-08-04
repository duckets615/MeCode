import {buildTabs} from './tabs.js'

const container = document.querySelector('body');
container.prepend(buildTabs(4));
