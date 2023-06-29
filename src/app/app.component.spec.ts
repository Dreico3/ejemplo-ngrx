/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { loadItem } from './state/actions/items.actions';
import { selectListaItems } from './state/selectors/items.selector';

describe('AppComponent', () => {
  let store: Store;
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [StoreModule.forRoot(ROOT_REDUCERS)],
      providers: [selectListaItems],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance; //aqui es donde se crea el componente
    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it('probando un dispatch de una action', () => {
    const action = loadItem(); // Define la acción que quieres enviar
    spyOn(store, 'dispatch'); // Espiar el método de despacho de la tienda

    // Despachar la acción
    appComponent.cargarItems();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, ROOT_REDUCERS } from './state/app.state';
import { loadItem } from './state/actions/items.actions';
import { selectListaItems } from './state/selectors/items.selector';
import { Item } from './interfacez/item.interface';
import { EMPTY, Observable, from, of } from 'rxjs';

describe('AppComponent', () => {
  let store: Store;
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [StoreModule.forRoot(ROOT_REDUCERS)],
      providers: [selectListaItems],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it('probando que el dipatch', () => {
    const action = loadItem(); // Define la acción que quieres enviar
    spyOn(store, 'dispatch'); // Espiar el método de despacho de la tienda

    // Despachar la acción
    appComponent.cargarItems(store as Store<AppState>);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('probando los selectores', () => {
    const items: Item[] = [{ nombre: 'juan', precio: 29 },{ nombre: 'pedro', precio: 49 }];
    // Dispatch una acción para actualizar el estado del store
    appComponent.dispatchAddItem(items[0].nombre, items[0].precio);
    appComponent.dispatchAddItem(items[1].nombre, items[1].precio);
    // Obtener los items seleccionados utilizando el selector
    const selectedItems = appComponent.recuperarListaItems(
      store as Store<AppState>
    );

    // Verificar que los items seleccionados sean los esperados
    selectedItems.subscribe((listaItem) => {
      console.log(listaItem, 'esto es lo que llega de la store');
      expect(listaItem).toEqual(items);
    });
  });
});
