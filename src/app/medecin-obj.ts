export class MedecinObj {
    constructor(
        public id: string,
        public resourceType : string,
        public identifier: {
            use:string,
            text:string,
            system:string[],
            value:string[]
        }[],
        public active: boolean,
        public name :{
            use : string,
            family : string,
            given : string[]
        }[],
        public telecom :{
            system : string,
            value : string,
            use : string,
            rank : number
        }[],
        ) {

        }
    
}

