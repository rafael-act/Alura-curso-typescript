import { Modelo } from '../interface/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes>{
    constructor(){}
    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes)===JSON.stringify(negociacoes.lista());
    }
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    
    public paraTexto(): string {
        return JSON.stringify(this.negociacoes,null,2);
    }
}
