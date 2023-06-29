import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { InicialState } from "src/app/interfacez/inicialState.interface";

//en este select item seleccionas toda la tienda
export const selectItems = (state:AppState) => state.tienda

export const selectListaItems = createSelector(
    selectItems,
    (state:InicialState) => state.listaItems
)

export const selectTituloItems = createSelector(
    selectItems,
    (state:InicialState) => state.titulo
)