export class AddTodoInput {
    constructor(
        public name?: string, 
        public description?: string, 
        public isCompleted?: boolean) { }
}