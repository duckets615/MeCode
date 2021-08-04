const buildContent = () => {

    const contentContainer = document.createElement('div'),
          tabContent1 = document.createElement('div'),
          tabContent2 = document.createElement('div'),
          tabContent3 = document.createElement('div'),
          tabContent4 = document.createElement('div');

    contentContainer.classList.add('contentContainer');
    tabContent1.classList.add('tabContent', 'c-one');
    tabContent2.classList.add('tabContent', 'c-two');
    tabContent3.classList.add('tabContent', 'c-three');
    tabContent4.classList.add('tabContent', 'c-four');

    tabContent1.setAttribute('data-tab', '1');
    tabContent2.setAttribute('data-tab', '2');
    tabContent3.setAttribute('data-tab', '3');
    tabContent4.setAttribute('data-tab', '4');

    tabContent1.textContent = 'Curiously enough, the only thing that went through the mind of the bowl of petunias as it fell was Oh no, not again. Many people have speculated that if we knew exactly why the bowl of petunias had thought that we would know a lot more about the nature of the Universe than we do now'
    tabContent2.textContent = 'It is known that there are an infinite number of worlds, simply because there is an infinite amount of space for them to be in. However, not every one of them is inhabited. Therefore, there must be a finite number of inhabited worlds. Any finite number divided by infinity is as near to nothing as makes no odds, so the average population of all the planets in the Universe can be said to be zero. From this it follows that the population of the whole Universe is also zero, and that any people you may meet from time to time are merely the products of a deranged imagination.'
    tabContent3.textContent = 'There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.'
    tabContent4.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus nibh, gravida nec felis quis, facilisis facilisis lectus. Nulla ac orci pretium, condimentum orci quis, accumsan nisi. Aliquam erat volutpat. Curabitur cursus mattis libero, at viverra risus hendrerit quis.'

    contentContainer.append(tabContent1, tabContent2, tabContent3, tabContent4);
    return contentContainer;
}

export {buildContent};