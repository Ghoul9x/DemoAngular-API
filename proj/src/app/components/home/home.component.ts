import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Array<any> = [];
  constructor(private prodSrv: ProductService) { }

  ngOnInit(): void {
    this.prodSrv.getList().subscribe(data => {this.products = data;})
  }

}
