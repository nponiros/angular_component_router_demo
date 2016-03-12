import {default as ShoppingListComponent, name as shoppingListComponentName} from './shopping_list.component';

import {default as ListService, name as listServiceName} from './shopping_list.service.js';

const moduleName = 'app.shoppingList';
angular.module(moduleName, [])
    .service(listServiceName, ListService)
    .component(shoppingListComponentName, ShoppingListComponent);

export default moduleName;