import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem, loadItem } from './state/actions/items.actions';
import { EMPTY, Observable } from 'rxjs';
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

  ngOnInit(): void {
    this.listaItems$ = this.store.select(selectListaItems);
    this.store.dispatch(loadItem());
  }
  agregar() {
    console.log('se agrego correctamente o eso creo');
    this.store.dispatch(addItem({item:{nombre:this.nombre,precio:this.precio}}))
  }
}
