import { makeAutoObservable } from 'mobx';


const getItem = (type:'cats'|'dogs'): string | null=> localStorage.getItem(type);

class StoreClass {
  public cats: string[] = getItem('cats') ? JSON.parse(getItem('cats') as string): []
  public dogs: string[] = getItem('dogs') ? JSON.parse(getItem('dogs') as string): []
  constructor() {
    makeAutoObservable(this);
  }

  public addItem(item: string,type:'cats'|'dogs'): void {
    const tempItems = type === 'cats' ? [...this.cats] : [...this.dogs];
    tempItems.push(item);
    if(type === 'cats'){
      this.cats = tempItems;
    } else {
      this.dogs = tempItems;
    }
    localStorage.setItem(type,JSON.stringify(tempItems));
  }

  public removeItem(item:string,type:'cats'|'dogs'):void{
    const curItem = type === 'cats' ? [...this.cats] : [...this.dogs];
    const tempItems = [...curItem].filter(tempItem=>tempItem!==item);
    if(type === 'cats'){
      this.cats = tempItems;
    } else {
      this.dogs = tempItems;
    }
    localStorage.setItem(type,JSON.stringify(tempItems));
  }
}

const Store = new StoreClass();

export default Store;
