import {default as MainComponent, name as mainComponentName} from './app.component';
import {default as HomeComponent, name as homeComponentName} from './home.component';

import todoLists from './todo_lists/todo_lists.module';
import shoppingList from './shopping_list/shopping_list.module';

angular.module('app', ['ngComponentRouter', todoLists, shoppingList])
    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(false);
    }])
    .value('$routerRootComponent', mainComponentName)
    .component(mainComponentName, MainComponent)
    .component(homeComponentName, HomeComponent);
