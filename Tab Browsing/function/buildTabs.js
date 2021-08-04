const buildTabs = num => {
    
    // Element Creation
    const tabLinks = document.createElement('div');
    const tabLink1 = document.createElement('div');
    const tabLink2 = document.createElement('div');
    const tabLink3 = document.createElement('div');
    const tabLink4 = document.createElement('div');
    // Assign Class
    tabLinks.classList.add('tab-links');
    tabLink1.classList.add('tab-link','one');
    tabLink2.classList.add('tab-link', 'two');
    tabLink3.classList.add('tab-link', 'three');
    tabLink4.classList.add('tab-link', 'four');
    // Assign Data Attributes
    tabLink1.setAttribute('data-tab', '1');
    tabLink2.setAttribute('data-tab', '2');
    tabLink3.setAttribute('data-tab', '3');
    tabLink4.setAttribute('data-tab', '4');
    // Text Content
    tabLink1.textContent = 'Tab 1'
    tabLink2.textContent = 'Tab 2'
    tabLink3.textContent = 'Tab 3'
    tabLink4.textContent = 'Tab 4'
    // Assemble and Return
    tabLinks.append(tabLink1,tabLink2,tabLink3,tabLink4);
    return tabLinks;
}

export {buildTabs};


