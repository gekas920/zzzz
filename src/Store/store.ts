import { makeAutoObservable } from 'mobx';

class StoreClass {
  private readonly hasItems = localStorage.getItem('items');
  public items: string[] = this.hasItems ? JSON.parse(this.hasItems) : [];
  constructor() {
    makeAutoObservable(this);
  }

  public addItem(item: string): void {
    const tempItems = [...this.items];
    tempItems.push(item);
    this.items = tempItems;
    localStorage.setItem('items',JSON.stringify(tempItems));
  }

  public removeItem(item:string):void{
    const tempItems = [...this.items].filter(tempItem=>tempItem!==item);
    this.items = tempItems;
    localStorage.setItem('items',JSON.stringify(tempItems));
  }
}

const Store = new StoreClass();

export default Store;
