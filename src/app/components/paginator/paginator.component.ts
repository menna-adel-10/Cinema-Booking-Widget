import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {

    currentPage: number = 1;
    totalPages: number = 5;
  pageNumbers: number[] = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  constructor(private router: Router) {}

    setCurrentPage(page: number): void {
      this.currentPage = page;
  }

    navigateToPreviousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.router.navigate(['/page', this.currentPage]);
      }
    }

    navigateToNextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.router.navigate(['/page', this.currentPage]);
      }
    }
}
