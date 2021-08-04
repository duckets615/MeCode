import {buildTabs} from './buildTabs.js'
import {buildContent} from './buildContent.js';

const container = document.querySelector('body');
// container.prepend(buildTabs());
container.prepend(buildTabs(), buildContent());
