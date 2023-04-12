// *** Generic Classes - How to create generic classes
// *** In the below example, we can have a generic class storage and can store different type of
// *** data such as text, numbers.
// *** In addition to the generic class, we could also have generics in methods of the class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStroage = new DataStorage<string>();
textStroage.addItem('Arsenal');
textStroage.addItem('Everton');
textStroage.addItem('Newcastle');
textStroage.removeItem('Everton');
console.log(textStroage.getItem());

// Note: it does not work well with objects as they are references
// Any removal will only remove the last item
// To include object, we need to input more logic in the getter and setter
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Manu' });
// objStorage.addItem({ name: 'Chelsea' });
// objStorage.removeItem({ name: 'Manu' });
// console.log(objStorage.getItem());
