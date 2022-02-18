import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

   // lista(): ReadonlyArray<Negociacao> {
        lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    // lista(): Array<Negociacao> {
    //     return [...this.negociacoes];
    //     //spread operator envia uma outra lista de outra referencia para que a original não seja modificada
    // }
}