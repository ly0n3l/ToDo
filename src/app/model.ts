
export class Model {
    user;
    items;

    constructor() {
        this.user = 'Mobile Phone';
        this.items = [new TodoItem ('Samsung S10+', false),
                      new TodoItem ('Iphone x', false),
                      new TodoItem('Huawei P10Lite', false),
                      new TodoItem('Samsung N8', false),
                      new TodoItem('Sony Xperia', false),
                      new TodoItem('Nokia Lumia10', false),
                      new TodoItem('Iphone S6+', false),
                      new TodoItem('XiaoMi', false)];
    }
}
export class TodoItem {
    action ;
    done;

    constructor(action, done) {
        this.done = done;
        this.action = action;
    }
}
