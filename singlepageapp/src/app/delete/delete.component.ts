import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: number = 0;
    product: any;
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
  }
 

  deleteProductByid(): void {
    this.productService.deleteProductById(this.productId).subscribe(
      (response) => {
        console.log('Product updated successfully');
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  }

}