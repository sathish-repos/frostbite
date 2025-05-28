import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private productsService: ProductsService) {
    this.productsService.getProducts(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    this.productsService.getReviews(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
