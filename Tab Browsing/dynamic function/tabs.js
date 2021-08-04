const buildTabs = num => {
    
    if (num > 14) return `Error. No more than 14 tabs are allowed`;

    const tabContainer = document.createElement('div');
    tabContainer.className = 'tabContainer';

    const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
    let i = 0

    while (num > 0) {
        let tab = document.createElement('div');
        tab.classList.add('tabLink', `${classes[i]}`);
        tab.textContent = `Tab${i+1}`;
        console.log(tab);
        tab.setAttribute(`data-tab`, `${i+1}`);
        tab.addEventListener('click', () => console.log('clicker'));
        tabContainer.append(tab);
        i++;
        num--;
    }
  
    console.log(tabContainer)
    return tabContainer;
}

export {buildTabs};



    // // Element Creation
    // const tabLinks = document.createElement('div');
    // const tabLink1 = document.createElement('div');
    // const tabLink2 = document.createElement('div');
    // const tabLink3 = document.createElement('div');
    // const tabLink4 = document.createElement('div');
    // // Assign Class
    // tabLinks.classList.add('tabLinks');
    // tabLink1.classList.add('tabLink','one');
    // tabLink2.classList.add('tabLink', 'two');
    // tabLink3.classList.add('tabLink', 'three');
    // tabLink4.classList.add('tabLink', 'four');
    // // Assign Data Attributes
    // tabLink1.dataset.tab = '1'
    // tabLink2.dataset.tab = '2'
    // tabLink3.dataset.tab = '3'
    // tabLink4.dataset.tab = '4'
    // // Text Content
    // tabLink1.textContent = 'Tab 1'
    // tabLink2.textContent = 'Tab 2'
    // tabLink3.textContent = 'Tab 3'
    // tabLink4.textContent = 'Tab 4'
    // // Assemble and Return
    // tabLinks.append(tabLink1,tabLink2,tabLink3,tabLink4);
    // return tabLinks;
// }
