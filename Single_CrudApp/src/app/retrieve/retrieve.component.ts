import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {

  constructor(private productService:ServiceService, private router:Router){}

  products: Product[]=[];
  ngOnInit(): void {
    this.getProductall();
  }
  private getProductall(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  updateProducted(id:number){
    this.router.navigate(['update', id]);
  }
  deleteProducted(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProductall();
    })
  }
}