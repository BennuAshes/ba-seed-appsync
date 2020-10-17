export class UpdateTodoInput {
    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        public isCompleted?: boolean) { }
}