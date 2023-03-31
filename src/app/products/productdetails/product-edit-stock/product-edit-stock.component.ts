import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "interns-product-edit-stock",
  templateUrl: "./product-edit-stock.component.html",
  styleUrls: ["./product-edit-stock.component.scss"],
})
export class ProductEditStockComponent {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      stock: ["", Validators.required],
    });
  }

  onClickBack() {
    this.location.back();
  }

  onSubmit() {
    return this.productsService
      .editStock(this.activatedRoute.snapshot.params["id"], this.form.value)
      .subscribe(() => {
        this.router.navigateByUrl("/products");
      });
  }
}
