import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem, loadItem } from './state/actions/items.actions';
import { EMPTY, Observable, lastValueFrom } from 'rxjs';
import { Item } from './interfacez/item.interface';
import { selectListaItems } from './state/selectors/items.selector';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'redux--app';
  nombre: string = '';
  precio: number = 0;
  listaItems$: Observable<Item[]> = EMPTY;

  constructor(private store: Store<AppState>) {}
  isOn: boolean = false;
  ngOnInit(): void {
    this.cargarItems(this.store);
    this.listaItems$ = this.recuperarListaItems(this.store);
  }
  cargarItems(store: Store<AppState>) {
    store.dispatch(loadItem());
  }
  recuperarListaItems(store: Store<AppState>) {
    return store.select(selectListaItems);
  }
  agregar() {
    this.dispatchAddItem(this.nombre, this.precio);
    this.isOn = !this.isOn;
  }

  dispatchAddItem(nombre: string, precio: number) {
    this.store.dispatch(addItem({ item: { nombre: nombre, precio: precio } }));
  }
  get message() {
    return `mira como se apaga y se prende : ${this.isOn ? 'On' : 'Off'}`;
  }
}
