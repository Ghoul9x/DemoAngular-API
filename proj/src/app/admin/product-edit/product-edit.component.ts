import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number = 0;
  constructor(private prodSrv: ProductService, private route: ActivatedRoute) { }
  productFormEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    sale_price: new FormControl(),
    image: new FormControl()
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.prodSrv.getOne(this.id).subscribe(data => {
      this.productFormEdit = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        sale_price: new FormControl(data.sale_price),
        image: new FormControl(data.image),
      })
    });
  }

  onUpdate(){
    this.prodSrv.update(this.id, this.productFormEdit.value).subscribe(data => {
      console.log(data);
    });
  }
}
