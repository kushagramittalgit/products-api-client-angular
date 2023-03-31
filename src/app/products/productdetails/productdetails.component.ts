import { Component, Input } from "@angular/core";
import { ActivatedRoute, OutletContext, Route, Router } from "@angular/router";
import {
  Product,
  ProductPage,
  ProductsService,
} from "src/app/products.service";
import { Location } from "@angular/common";

@Component({
  selector: "interns-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.scss"],
})
export class ProductdetailsComponent {
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private loaction: Location,
    private router: Router,
  ) {}

  onClickNext() {
    const pageNumber = this.productsService.nextPage();
  }

  public productId: any
  // data: any;

  data: Product|null = null;

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProductsById();
  }

  getProductsById() {
    this.productsService.getProductsById(this.productId).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  onClickBack() {
    this.loaction.back();
  }

  onClickStock() {
    this.router.navigate(['/products',this.productId,'stock'])
  }
  onClickPrice() {
    this.router.navigate(['/products',this.productId,'price'])
  }
  onClickDelete() {
    return this.productsService.deleteProduct(this.productId).subscribe(() => {
        this.router.navigateByUrl('/products')
    })
  }

  onSubmit() {}
}

