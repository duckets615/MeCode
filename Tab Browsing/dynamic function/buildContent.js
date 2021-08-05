const buildContent = para => {

    let num = para.length, i = 0;
    const paraContainer = document.createElement('div');
    paraContainer.className = '';

    while (num > 0) {
        let content = document.createElement('div');
        content.classList.add('tab-content');
        content.textContent = para[i];
        content.setAttribute('data-tab', `${i+1}`);
        paraContainer.append(content)
        i++;
        num--;
    }
    return paraContainer;
}

export {buildContent};