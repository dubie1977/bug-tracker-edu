export class Bug{
    constructor(
        public id: string,
        public title: string,
        public status: number,
        public severity: number,
        public description: string,
        public createdBy: string,
        public createdDate: number,
        public updatedBy?: string,
        public updatedDate?: number 
    ){}

    public clone(bug: Bug){
        const newBug = new Bug(
                bug.id,
                bug.title,
                bug.status,
                bug.severity,
                bug.description,
                bug.createdBy,
                bug.createdDate,
                bug.updatedBy,
                bug.updatedDate
            );
            return newBug;
    }

    
}