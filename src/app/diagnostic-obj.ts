export class DiagnosticObj {
    constructor(
        public resourceType:string,
        public code:{
            coding:{
                system:string,
                code:string,
                display:string
            }[]
        },
        public subject:{
            reference:string
        },
        public performer:{
            actor:{
                reference:string
            }
        }[],
        public conclusion:string,
        public issued:Date
    ){}
}
