import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-course';
  loading = false;
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
