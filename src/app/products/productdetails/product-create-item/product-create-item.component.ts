import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "interns-product-create-item",
  templateUrl: "./product-create-item.component.html",
  styleUrls: ["./product-create-item.component.scss"],
})
export class ProductCreateItemComponent implements OnInit {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      stock: ["", Validators.required],
    });
  }

  onSubmit = () => {
    this.productsService.createProduct(this.form.value).subscribe(() => {
      this.router.navigateByUrl("/products");
    });
  };

  ngOnInit(): void {}
}
