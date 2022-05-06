import { Negociacao } from "../models/negociacao.js";
export class NegociacaoService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(re => re.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map