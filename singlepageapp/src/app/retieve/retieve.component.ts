import { Component } from '@angular/core';
import { product } from '../model/product';
import { ProductService } from '../service/product.service';



@Component({
  selector: 'app-retieve',
  templateUrl: './retieve.component.html',
  styleUrls: ['./retieve.component.css']
})
export class RetrieveComponent {
  constructor(private service:ProductService)
  {
    
  }
  products: product[]=[];
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts():any{
    this.service.getProducts().subscribe((products: product[])=>{
    this.products = products;
  });
}

  // updateProducted(id:number){
  //   this.router.navigate(['update', id]);
  // }
  deleteProduct(id: number){
    this.service.deleteProductById(id).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }
  }



