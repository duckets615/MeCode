class TabLink {
    constructor(link) {
        this.link = link;
        this.linkData = this.link.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab="${this.linkData}"]`);
        
        this.link.addEventListener('click', () => this.linkSelect())
    }
    linkSelect() {
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('selected'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('show'));

        this.link.classList.add('selected');
        this.content.classList.add('show');
    }
}

document.querySelectorAll('.tab-link').forEach(link => new TabLink(link));
