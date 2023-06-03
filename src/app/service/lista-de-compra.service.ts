import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('purchaseItem') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  createItem(nameItem: string): Item {
    const id = this.listaDeCompra.length + 1;
    return {
      id,
      nome: nameItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
  }

  addItemInPurchaseList(nameItem: string) {
    const item = this.createItem(nameItem);
    this.listaDeCompra.push(item);
  }

  editItemInPurchaseList(oldItem: Item, nameEditingForItem: string) {
    const itemEditing: Item = {
      id: oldItem.id,
      nome: nameEditingForItem,
      data: oldItem.data || new Date().toLocaleString('pt-BR'),
      comprado: oldItem.comprado
    }

    const id = oldItem.id
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditing)
  }
}
