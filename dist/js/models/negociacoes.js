export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
        // lista(): Array<Negociacao> {
        //     return [...this.negociacoes];
        //     //spread operator envia uma outra lista de outra referencia para que a original não seja modificada
        // }
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    lista() {
        return this.negociacoes;
    }
}
