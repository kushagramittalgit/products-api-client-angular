import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product, ProductsService } from "../products.service";
import { Location } from "@angular/common";
import { tap } from "rxjs";

@Component({
  selector: "interns-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private loaction: Location,
    private activatedRoute: ActivatedRoute
  ) {}
  onClickNext() {
    const pageNumber = this.productsService.nextPage();
  }
  totalProduct: number = 0;
  pagination: number = 1;

  ngOnInit(): void {
    this.productsService.getProducts(this.pagination).subscribe((response) => {
      this.listProduct = response.items;
      this.totalProduct = response.totalItemCount;
      console.log(this.totalProduct);
    });
  }

  listProduct: Product[] = [];

  onClickBack() {
    this.loaction.back();
  }

  onClickDetails(product: { _id: string }) {
    console.log(product);
    this.router.navigate(["/products", product._id]);
  }
  onSubmitCreate() {
    this.router.navigateByUrl("create");
  }

  renderPage(event: number) {
    this.pagination = event;
    this.productsService.getProducts(this.pagination);
  }





}
