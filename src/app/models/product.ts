export class Product {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;

	constructor(
		id: any,
		name: string,
		description: string,
		price: number,
		imageUrl = 'https://giveuselife.org/wp-content/uploads/2017/10/real-mobile-2x-1400x770.png'
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imageUrl = imageUrl;
	}
}
