import {name as listsServiceName} from './todo_lists.service.js';

class TodoLists {
  constructor(listsService) {
    this.listsService = listsService;
    this.lists = [];
    this.activeTodoList = [];
  }

  $onInit() {
    this.lists = this.listsService.lists;
  }

  selectTodoList(id) {
    this.activeTodoList = this.listsService.getTodoList(id);
  }
}

TodoLists.$inject = [listsServiceName];

const component = {
  template: `
    <aside>
      <h2>Lists</h2>
      <ul>
        <li ng-repeat="list in $ctrl.lists" ng-click="$ctrl.selectTodoList(list.id)">
          {{list.name}}
        </li>
      </ul>
    </aside>
    <todo-list todos="$ctrl.activeTodoList"></todo-list>
  `,
  controller: TodoLists
};

export default component;
export const name = 'todoLists';