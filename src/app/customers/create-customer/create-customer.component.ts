import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customer = new Customer();
  success = false;

  constructor(private customerService: CustomerService, private router: Router) {
    console.log(this.customer);
   }

  onSubmit() {
    console.log(this.customer);
    this.customerService.createCustomer(this.customer);

    this.success = true;
    this.customer = new Customer();

    this.router.navigate(['/customers']);
  }
}
