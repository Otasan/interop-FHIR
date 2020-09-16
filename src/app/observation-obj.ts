export class ObservationObj {
    constructor(
        public id: string,
        public status:string,
        public code: {
            text: string
        },
        public subject: {
            reference:string
        },
        public valueString: string
        ) {}
}
