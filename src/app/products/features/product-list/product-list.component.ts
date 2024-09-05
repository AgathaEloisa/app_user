import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../data-access/products-state.services';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductListComponent {
  productsState = inject(ProductStateService);
}
