import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { HomeComponent } from './views/pages/home/home.component';
import { DetailComponent } from './views/components/detail/detail.component';
import { CreateCarComponent } from './views/modals/create-car/create-car.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemComponent } from './views/components/item/item.component';
import { ListItemsComponent } from './views/components/list-items/list-items.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GoogleMapsModule } from '@angular/google-maps';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from './core/effects/car.effects';
import { DeleteComponent } from './views/components/delete/delete.component';
import { ChartsModule } from 'ng2-charts';
import { MileageChartComponent } from './views/components/mileage-chart/mileage-chart.component';
import { KnobComponent } from './views/components/knob/knob.component';
import { KnobModule } from '@xmlking/ngx-knob';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetailComponent,
    CreateCarComponent,
    ItemComponent,
    ListItemsComponent,
    DeleteComponent,
    MileageChartComponent,
    KnobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([
      CarEffects
    ]),
    ChartsModule,
    KnobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
