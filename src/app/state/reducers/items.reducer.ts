import { createReducer, on } from '@ngrx/store';
import { InicialState } from 'src/app/interfacez/inicialState.interface';
import { addItem, loadItem } from '../actions/items.actions';
//tener en cuenta que el reducer es como el trabajador que recive ordenes de las acciones
//aqui se declara en estado inical?
export const estadoInicial: InicialState = {
  listaItems: [{ nombre: 'zapato', precio: 22 }],
  titulo:
    'sin iniciar se supone que este titulo nunca aparece por que se cambia al inicializar la app',
};

//aqui tenemos que configurar nuestros reducer con funciones puras

export const cargarItems = createReducer(
  estadoInicial,
  on(loadItem, (state) => {
    return { ...state, titulo: 'los items fueron cargados' };
  }),

  on(addItem, (state, props) => {
    console.log(props);
    return { ...state, listaItems:[...state.listaItems,props.item] };
  })
);
