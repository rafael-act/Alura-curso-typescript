import { NegociacoesDoDia } from "../interface/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(re => re.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante)
                })
            });
    }
}