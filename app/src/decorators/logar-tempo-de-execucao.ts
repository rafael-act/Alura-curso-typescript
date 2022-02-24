export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,//se o metodo e estatico é a funcao construturoa da classee senão retorna o prototype
        propertyKey: string, //retorna o nome do metodo como string que foi decorado
        descriptor: PropertyDescriptor //tem uma referencia para o metodo original
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            let divisor=1;
            let unidade='milisegundos';
            if (emSegundos) {
                divisor=1000;
                unidade='segundos';
            }
            const t1 = performance.now();
            //chmamar o metodo original
            const retorno = metodoOriginal.apply(this, args);//permite passar um contexto e um array de parametros
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao: ${(t2 - t1) / divisor} ${unidade}`)
            retorno
        };
        return descriptor;
    }

}