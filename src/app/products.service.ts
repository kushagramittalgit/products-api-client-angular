import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { environment } from "../environments/environment";

export interface Product {
  _id: string;
  name: string;
  stock: number;
  price: number;
}

export interface ProductPage {
  pageNumber: number;
  pageSize: number;
  pageItemCount: number;
  totalItemCount: number;
  items: Array<Product>;
}

export interface NewProduct {
  name: string;
  stock: number;
  price: number;
}
export interface EditStock {
  stock: number;
}

export interface EditPrice {
  price: number;
}
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  response: any;
  constructor(private httpClient: HttpClient) {}

  public productPage$ = new BehaviorSubject<ProductPage | null>(null);
  public nextPage$ = new BehaviorSubject<boolean>(false);
  public previosPage$ = new BehaviorSubject<boolean>(false);
  private currentPage$ = new BehaviorSubject<number>(1);
  private pageSize = 10;

  public dialog$ = new BehaviorSubject<boolean>(true);

  public get productPage() {
    return this.productPage$.value;
  }

  public get currentPage() {
    return this.currentPage$.value;
  }

  public set currentPage(nextPage) {
    this.currentPage$.getValue();
  }

  public set productPage(value) {
    this.productPage$.next(value);
  }

  nextPage = () => {
    if (this.nextPage$) {
      return this.getProducts(this.currentPage + 1);
    } else {
      return this.productPage;
    }
  };

  // getProducts(pageNumber: number): Observable<ProductPage> {
  //   return this.httpClient.get<ProductPage>(
  //     `${environment.baseURL}/products?page=${this.currentPage}&size=${this.pageSize}`
  //   );
  // }
  getProducts = (pageNumber: number) => {
    this.currentPage = pageNumber;
    return this.httpClient
      .get<ProductPage>(
        `${environment.baseURL}/products?page=${this.currentPage}&size=${this.pageSize}`
      )
      .pipe(map((response: any) => (this.productPage = response)));
  };

  getProductsById = (id: string) => {
    return this.httpClient
      .get<ProductPage>(`${environment.baseURL}/products/${id}`)
      .pipe(map((response: any) => (this.productPage = response)));
  };

  createProduct = (details: NewProduct | null) => {
    return this.httpClient.post(`${environment.baseURL}/products`, details);
  };

  editStock = (id: string, stock: EditStock) => {
    return this.httpClient.put(
      `${environment.baseURL}/products/${id}/stock`,
      stock
    );
  };

  editPrice = (id: string, price: EditPrice) => {
    return this.httpClient.put(
      `${environment.baseURL}/products/${id}/price`,
      price
    );
  };

  deleteProduct = (id: string) => {
    return this.httpClient.delete(`${environment.baseURL}/products/${id}`);
  };

  open = () => {
    this.dialog$.next(true);
  };

  // close =() => {
  //   this.dialog$.next(false);
  //   console.log("close callled")
  // }

  close = () => {
    this.dialog$.next(false);
  };
}
