import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private purchaseItems: Item[] = []

  constructor() {
    this.purchaseItems = JSON.parse(localStorage.getItem('purchaseItem') || '[]')
  }

  getListaDeCompra(){
    return this.purchaseItems;
  }

  createItem(nameItem: string): Item {
    const id = this.purchaseItems.length + 1;
    return {
      id,
      nome: nameItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
  }

  addItemInPurchaseList(nameItem: string) {
    const item = this.createItem(nameItem);
    this.purchaseItems.push(item);
    // this.updateItems()
  }

  editItemInPurchaseList(oldItem: Item, nameEditingForItem: string) {
    const itemEditing: Item = {
      id: oldItem.id,
      nome: nameEditingForItem,
      data: oldItem.data || new Date().toLocaleString('pt-BR'),
      comprado: oldItem.comprado
    }

    const id = oldItem.id
    this.purchaseItems.splice(Number(id) - 1, 1, itemEditing)
    // this.updateItems()
  }

  updateItems(){
    localStorage.setItem('purchaseItem', JSON.stringify(this.purchaseItems))
  }

  deleteItem(idItem: number | string) {
    const indexToDeleteItem = this.purchaseItems.findIndex((item, index) => item.id === idItem)
    this.purchaseItems.splice(indexToDeleteItem, 1)
  }

}
