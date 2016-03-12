const component = {
  template: `
    <div ng-if="$ctrl.todos.length != 0">
      <ul>
        <li ng-repeat="todo in $ctrl.todos">{{todo}}</li>
      </ul>
    </div>
    <div class="no-todos" ng-if="$ctrl.todos.length == 0">
      Please select a list
    </div>`,
  bindings: {
    todos: '<'
  }
};

export default component;
export const name = 'todoList';
