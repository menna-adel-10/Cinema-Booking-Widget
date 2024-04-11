import { Component, OnInit } from '@angular/core';
import { Product } from '../../../assets/data';

interface Page {
  rows: number;
}
interface Column {
    field: string;
    header: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit{
  data = Product;
  pages: Page[] | undefined;
  cols!: Column[];

  selectedPage: Page | undefined;

  ngOnInit() {
    this.pages = [
      {rows: 5},
      {rows: 10},
      {rows: 20}
    ]
  }
}
