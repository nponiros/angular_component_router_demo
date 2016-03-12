import {default as TodoListsComponent, name as todoListsComponentName} from './todo_lists.component';
import {default as TodoListComponent, name as todoListComponentName} from './todo_list.component';
import {default as SelectListComponent, name as selectListComponentName} from './select_list.component';

import {default as ListsService, name as listsServiceName} from './todo_lists.service';

const moduleName = 'app.todoLists';

angular.module(moduleName, [])
    .service(listsServiceName, ListsService)
    .component(todoListsComponentName, TodoListsComponent)
    .component(todoListComponentName, TodoListComponent)
    .component(selectListComponentName, SelectListComponent);

export default moduleName;
