//export function inspect() {
    export function inspect (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`--- Método ${propertyKey}`);
            console.log(`--- parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);//this é o contexto da nova funcao
            console.log(`--- retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }

        return descriptor;
    }
//}