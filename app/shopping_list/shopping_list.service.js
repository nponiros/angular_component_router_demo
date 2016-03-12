const list = [
  {id: 1, title: 'Chocolate'},
  {id: 2, title: 'Lettuce'},
  {id: 2, title: 'Apples'}
];

class ShoppingListService {
  constructor (){
   this.list = list;
  }
}

export default ShoppingListService;
export const name = 'ShoppingListService';
