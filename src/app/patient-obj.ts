export class PatientObj {
    constructor(
        public id: string,
        public name: {
            use:string,
            text:string,
            given:string[],
            prefix:string[],
            suffix:string[]
        }[],
        public birthDate: Date,
        public gender: string,
        public generalPractitioner: string
        ) {
    }
}
