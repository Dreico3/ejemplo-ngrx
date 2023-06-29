import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/interfacez/item.interface';

export const loadItem = createAction('[Load items] cargando items');

export const addItem = createAction(
  '[Add Item] aniadiendo item',
  props<{ item: Item }>()
);
