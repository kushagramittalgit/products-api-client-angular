import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductdetailsComponent } from "./products/productdetails/productdetails.component";
import { ProductsComponent } from "./products/products.component";
import { ProductCreateItemComponent } from "./products/productdetails/product-create-item/product-create-item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductEditStockComponent } from "./products/productdetails/product-edit-stock/product-edit-stock.component";
import { ProductEditPriceComponent } from "./products/productdetails/product-edit-price/product-edit-price.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductCreateItemComponent,
    ProductEditStockComponent,
    ProductEditPriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
