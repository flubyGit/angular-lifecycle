import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emmiterItemToEdit = new EventEmitter<Item>()
  @Output() emmiterItemToDelete = new EventEmitter<number | string>()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy() {
    console.log('Se destruye el componente item')
  }

  emmiterEditItem() {
    this.emmiterItemToEdit.emit(this.item)
  }

  checkItem(item: Item) {
    item.comprado = !item.comprado
  }

  emmiterDeleteItem() {
    this.emmiterItemToDelete.emit(this.item.id)
  }
}
