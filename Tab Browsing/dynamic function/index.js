import {buildTabs} from './buildTabs.js';
import {buildContent} from './buildContent.js';
import {para1, para2, para3, para4} from './data.js'

const container = document.querySelector('body');
container.prepend(buildContent([para1,para2,para3,para4]))
container.prepend(buildTabs(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']));
