import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [];

  constructor(private proSrv: ProductService) { }

  ngOnInit(): void {
    this.proSrv.getList().subscribe(data => {
      this.products = data;
    })
  }

  onDelete(id:number){
    if(confirm('Bạn có muốn xoá không')){
      this.proSrv.delete(id).subscribe(data => {
        this.proSrv.getList().subscribe(data => {
          this.products = data;
        });
      });
    }   
  }

  onEdit(pro:any){

  }
}
