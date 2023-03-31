import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/products.service";
import { Location } from "@angular/common";

@Component({
  selector: "interns-product-edit-price",
  templateUrl: "./product-edit-price.component.html",
  styleUrls: ["./product-edit-price.component.scss"],
})
export class ProductEditPriceComponent {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      price: ["", Validators.required],
    });
  }

  onClickBack() {
    this.location.back();
  }

  onSubmit() {
    return this.productsService
      .editPrice(this.activatedRoute.snapshot.params["id"], this.form.value)
      .subscribe(() => {
        this.router.navigateByUrl("/products");
      });
  }
}
