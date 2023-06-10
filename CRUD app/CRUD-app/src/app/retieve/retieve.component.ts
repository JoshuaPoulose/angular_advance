import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-retieve',
  templateUrl:'./retieve.component.html',
  styleUrls: ['./retieve.component.css']
})
export class RetrieveComponent  implements OnInit {
  constructor(private service:ProductService)
  {
    
  }
  products: Product[]=[];
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products = products;
  });

  }

}
