export class Todo {
    constructor(
        public id?: string,
        public name?: string, 
        public description?: string, 
        public isCompleted?: number,
        public updatedOn?: number,
        public createdOn?: number) { }
}