export class User{
    constructor(
        public uid: string,
        public email: string,
        public password?: string,
        public displayName?: string,
        public updatedBy?: string,
        public updatedDate?: number 
    ){}
}