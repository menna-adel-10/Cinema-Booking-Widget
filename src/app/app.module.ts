import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgxApexchartsModule } from 'ngx-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    SearchInputComponent,
    TicketCardComponent,
    SearchBarComponent,
    HeadBarComponent,
    ChartCardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    QRCodeModule,
    ReactiveFormsModule,
    PaginatorModule,
    DropdownModule,
    StyleClassModule,
    ButtonModule,
    NgxApexchartsModule,
    InputSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
