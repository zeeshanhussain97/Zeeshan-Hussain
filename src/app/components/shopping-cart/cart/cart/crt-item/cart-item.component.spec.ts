import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';

describe('CrtItemComponent', () => {
	let component: CartItemComponent;
	let fixture: ComponentFixture<CartItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CartItemComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CartItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
