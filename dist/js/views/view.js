export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //abstract template(model: T): string 
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
