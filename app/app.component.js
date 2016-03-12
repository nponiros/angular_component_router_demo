import {name as shoppingListName} from './shopping_list/shopping_list.component';
import {name as todoListsName} from './todo_lists/todo_lists.component';

class Main {}

const component = {
  template: `
    <header><h1>Angular 1.5.x Component Router Demo</h1>
    <nav>
      <ul>
        <li ng-link="['Home']">Home</li>
        <li ng-link="['ShoppingList']">Shopping List</li>
        <li ng-link="['TodoLists']">Todo Lists</li>
      </ul>
    </nav>
    </header>
    <main>
      <ng-outlet></ng-outlet>
    </main>
  `,
  $routeConfig:[
    {path: '/', name: 'Home', component: 'home', useAsDefault: true},
    {path: '/shopping-list', name: 'ShoppingList', component: shoppingListName},
    {path: '/todo-lists', name: 'TodoLists', component: todoListsName}
  ],
  controller: Main
};

export default component;
export const name = 'myApp';
