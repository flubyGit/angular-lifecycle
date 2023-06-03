import {Component, OnChanges, OnInit} from '@angular/core';
import {Item} from "./interfaces/iItem";
import {ListaDeCompraService} from "./service/lista-de-compra.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  purchaseList!: Item[]
  itemToEdit!: Item
  constructor(private purchaseListService: ListaDeCompraService) { }

  ngOnInit() {
    this.purchaseList = this.purchaseListService.getListaDeCompra();
  }

  editItem(item: Item) {
    this.itemToEdit = item
  }
}
