import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: [ './cart.component.css' ]
})
export class CartComponent implements OnInit {
	cartItems: any = [
		// { id: 1, productId: 1, productName: 'Test 1', qty: 8, price: 100 },
		// { id: 2, productId: 2, productName: 'Test 2', qty: 6, price: 100 },
		// { id: 3, productId: 3, productName: 'Test 3', qty: 4, price: 150 },
		// { id: 4, productId: 4, productName: 'Test 4', qty: 5, price: 200 }
	];

	cartTotal = 0;
	constructor(private msg: MessengerService) {}

	ngOnInit() {
		this.msg.getMsg().subscribe((product: any) => {
			console.log(product);
			if (product) {
				let data = {
					id: product.id,
					productName: product.name,
					qty: 1,
					price: product.price
				};
				this.cartItems.push(data);
				// this.cartItems.push({
				// 	id: product.id,
				// 	productName: product.name,
				// 	qty: 1,
				// 	price: product.price
				// });
			}

			this.cartTotal = 0;
			this.cartItems.forEach((item: any) => {
				this.cartTotal += item.qty * item.price;
			});
		});

		// this.addProductToCart(product)
	}

	// addProductToCart(product: Product) {

	// 	this.cartItems.push({
	// 		productIt: product.id,
	// 		productName: product.name,
	// 		qty: 1,
	// 		price: product.price
	// 	})

	// });
}
