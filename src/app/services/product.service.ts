import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
	providedIn: 'root'
})
export class ProductService {
	products: Product[] = [
		new Product(1, 'Product 1', 'This is the product 1', 100),
		new Product(2, 'Product 2', 'This is the product 2', 200),
		new Product(3, 'Product 3', 'This is the product 3', 300),
		new Product(4, 'Product 4', 'This is the product 4', 400),
		new Product(5, 'Product 5', 'This is the product 5', 500),
		new Product(6, 'Product 6', 'This is the product 6', 600)
	];
	constructor() {}

	getProducts(): Product[] {
		// TODO: Populate products from an API and return an Observable
		return this.products;
	}
}
