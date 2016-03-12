import {name as listsServiceName} from './todo_lists.service';

class TodoList {
  constructor(listsService) {
    this.listsService = listsService;
  }

  $routerOnActivate(next) {
    const id = Number(next.params.id);
    this.todos = this.listsService.getTodoList(id);
  }
}

TodoList.$inject = [listsServiceName];

const component = {
  template: `
    <div ng-if="$ctrl.todos.length != 0">
      <ul>
        <li ng-repeat="todo in $ctrl.todos">{{todo}}</li>
      </ul>
    </div>
  `,
  controller: TodoList
};

export default component;
export const name = 'todoList';
