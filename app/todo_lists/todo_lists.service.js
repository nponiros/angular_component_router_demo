const lists = [
  {id: 1, name: 'List 1', todos: ['Do this', 'Do that']},
  {id: 2, name: 'List 2', todos: ['Do something about this', 'Do something about that']}
];

class TodoListsService {
  constructor (){
   this.lists = lists;
  }

  getTodoList(id) {
    for (let i = 0; i < this.lists.length; i++) {
      if (this.lists[i].id === id) {
        return this.lists[i].todos;
      }
    }
  }
}

export default TodoListsService;
export const name = 'TodoListService';
