import { ActionReducerMap } from "@ngrx/store";
import { InicialState } from "../interfacez/inicialState.interface";
import { cargarItems } from "./reducers/items.reducer";

export interface AppState{
    tienda:InicialState
}
export const ROOT_REDUCERS:ActionReducerMap<AppState>={
    //Aqui estamos ejecutando el primer reducer para q haga  la carga de el estado inicial
    //este ROOT_REDUCERS es el que se le pasa al app module -> StoreModule.forRoot(ROOT_REDUCERS),
    tienda:cargarItems
}