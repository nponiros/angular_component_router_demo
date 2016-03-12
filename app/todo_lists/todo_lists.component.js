import {name as listsServiceName} from './todo_lists.service.js';
import {name as todoListComponentName} from './todo_list.component';
import {name as selectListComponentName} from './select_list.component';

class TodoLists {
  constructor(listsService) {
    this.listsService = listsService;
    this.lists = [];
  }

  $onInit() {
    this.lists = this.listsService.lists;
  }
}

TodoLists.$inject = [listsServiceName];

const component = {
  template: `
    <aside>
      <h2>Lists</h2>
      <ul>
        <li ng-repeat="list in $ctrl.lists" ng-link="['TodoList', {id: list.id}]">
          {{list.name}}
        </li>
      </ul>
    </aside>
    <ng-outlet></ng-outlet>
  `,
  controller: TodoLists,
  $routeConfig: [
    {path: '/', name: 'Select', component: selectListComponentName, useAsDefault: true},
    {path: '/:id', name: 'TodoList', component: todoListComponentName}
  ]
};

export default component;
export const name = 'todoLists';