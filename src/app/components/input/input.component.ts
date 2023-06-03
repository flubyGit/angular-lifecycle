import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ListaDeCompraService} from "../../service/lista-de-compra.service";
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemToEdit!: Item;
  itemValue!: string;
  editing = false
  textBtn = 'Salvar item'

  constructor(private purchaseListService: ListaDeCompraService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemToEdit'].firstChange) {
      this.editing = true
      this.textBtn = 'Editar item'
      this.itemValue = this.itemToEdit.nome
    }
  }

  editingItem() {
    this.purchaseListService.editItemInPurchaseList(this.itemToEdit, this.itemValue);
    this.clearField()
    this.editing = false
    this.textBtn = 'Salvar item'
  }

  addItem() {
    this.purchaseListService.addItemInPurchaseList(this.itemValue);
    this.clearField()
  }

  private clearField() {
    this.itemValue = '';
  }
}
