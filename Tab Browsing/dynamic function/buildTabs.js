const buildTabs = links => {
    
    let num = links.length, i = 0;
    const tabContainer = document.createElement('div');
    tabContainer.className = 'tab-links';

    while (num > 0) {
        let tab = document.createElement('div');
        tab.classList.add('tab-link', `${links[i].slice(0,-2) + links[i][-1]}`);
        tab.textContent = `${links[i]}`;
        tab.setAttribute(`data-tab`, `${i+1}`);
        tabContainer.append(tab);
        tab.addEventListener('click', (e) => {
            let data = e.target.dataset.tab;           
            document.querySelector(`.tab-content[data-tab="${data}"]`).classList.toggle('show');
        });
        i++;
        num--;
    }
  
    return tabContainer;
};

export {buildTabs};