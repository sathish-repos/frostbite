import { Component } from '@angular/core';
import { Product } from '../../models/products.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  environment = environment;

  cartItems: Product[] = [
    {
      key: '68_hd',
      name: 'Whiskey Hazelnut Latte Ice Cream',
      description:
        'This new spiked latte inspired treat is a delicious whiskey infused coffee ice cream blended with ribbons of hazelnut fudge and chocolate espresso flakes.\n*Contains Less Than 0.5% Alcohol by Volume',
      rating: 4.5,
      rating_count: 11,
      ingredients:
        'CREAM, SKIM MILK, SUGAR, EGG YOLKS, BROWN SUGAR, COFFEE, MOLASSES, NATURAL FLAVOR, CORN STARCH, POWDERED SUGAR, SOYBEAN OIL, COCOA PROCESSED WITH ALKALI, COCOA BUTTER, SOY LECITHIN, CHOCOLATE, CANE SUGAR, CHOCOLATE, COCOA BUTTER, MILKFAT, SOY LECITHIN, VANILLA EXTRACT, COCONUT OIL, COFFEE',
      price: 60,
    },
    {
      key: '69_hd',
      name: 'White Chocolate Raspberry Ice Cream Bar',
      description:
        'Inspired by a familiar favorite, this bar of smooth white chocolate ice cream with swirls of tart raspberry is dipped in milk chocolate and then sprinkled with dark chocolate. Perfect for getting carried away.',
      rating: 3.9,
      rating_count: 11,
      ingredients:
        'WHITE CHOCOLATE ICE CREAM, CREAM, SKIM MILK, SUGAR, EGG YOLKS, COCOA BUTTER, NATURAL FLAVOR, MILK CHOCOLATE AND VEGETABLE OIL COATING, MILK CHOCOLATE, SUGAR, WHOLE MILK POWDER, CHOCOLATE, COCOA BUTTER, SOY LECITHIN, VANILLA EXTRACT, COCONUT OIL, RASPBERRY SWIRL, RASPBERRY PUREE, SUGAR, WATER, LEMON JUICE CONCENTRATE, PECTIN, NATURAL FLAVOR, DARK CHOCOLATE, SUGAR, CHOCOLATE, SOY LECITHIN, VANILLA EXTRACT, COCONUT OIL, SOYBEAN OIL',
      price: 90,
    },
  ];

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
