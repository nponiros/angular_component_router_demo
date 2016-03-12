import {name as listsServiceName} from './shopping_list.service.js';

class ShoppingList {
  constructor(listService) {
    this.listService = listService;
  }

  $onInit() {
    this.list = this.listService.list;
  }
}

ShoppingList.$inject = [listsServiceName];

const component = {
  template: `
    <h2>Shopping List</h2>
    <ul>
      <li ng-repeat="list in $ctrl.list">{{list.title}}</li>
    </ul>
  `,
  controller: ShoppingList
};

export default component;
export const name = 'shoppingList';
