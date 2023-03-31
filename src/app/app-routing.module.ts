import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductCreateItemComponent } from "./products/productdetails/product-create-item/product-create-item.component";
import { ProductEditPriceComponent } from "./products/productdetails/product-edit-price/product-edit-price.component";
import { ProductEditStockComponent } from "./products/productdetails/product-edit-stock/product-edit-stock.component";
import { ProductdetailsComponent } from "./products/productdetails/productdetails.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "create",
    component: ProductCreateItemComponent,
  },
  {
    path: "products/:id",
    component: ProductdetailsComponent,
  },
  {
    path: "products/:id/stock",
    component: ProductEditStockComponent,
  },
  {
    path: "products/:id/price",
    component: ProductEditPriceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
