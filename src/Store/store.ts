import { makeAutoObservable } from 'mobx';

class StoreClass {
  public items: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  public addItem(item: string): void {
    const tempItems = [...this.items];
    tempItems.push(item);
    this.items = tempItems;
  }
}

const Store = new StoreClass();

export default Store;
