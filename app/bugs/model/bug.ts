export class Bug{
    constructor(
        public id: string,
        public titel: string,
        public status: number,
        public severity: number,
        public description: string,
        public createdBy: string,
        public createdDate: number,
        public updatedBy?: string,
        public updatedDate?: string
    ){}
}