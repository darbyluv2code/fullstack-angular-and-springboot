# Display Category Name in Product List Grid

## Question

How can I put a title in each product category grid list?
What I want to learn is how I can put the category title(Books, Coffee Mugs and other thngs ) at the top of product grid list? I know it can be solved by binding but I don't know how to do that? 

## Answer

Good question!

One approach we can take is to update the menu component. We can pass the category name along with the category id in the menu router link. Then in the product-list component, we can read the category name. Then we can bind this in the HTML file. This will give us this output.

![Display Category Name in Product List Grid](images/01-display-category-name-in-product-list-grid.png)

### Development Process
Here is the development process

1. Update route and add parameter
2. Update routeLink to include the category name
3. Update component to read the category name
4. Update the list-grid HTML file to bind to category name

### 1. Update route and add parameter

Edit the file: **app.module.ts**

Replace
```ts
  {path: 'category/:id', component: ProductListComponent},
```

With
```ts
  {path: 'category/:id/:name', component: ProductListComponent},
```

This adds a new `name` parameter to the route. Later on, our code will construct routes using the parameter values.

### 2. Update routeLink to include the category name

Edit the file: **product-category-menu.component.html**

Replace
```html
          <a routerLink="/category/{‌{ tempProductCategory.id }}" routerLinkActive="active-link">
```
With
```html
          <a routerLink="/category/{‌{ tempProductCategory.id }}/{‌{ tempProductCategory.categoryName }}" routerLinkActive="active-link">
```

This adds another parameter, `name`, for the category name.

The final code for [product-category-menu.component.html](code/product-category-menu.component.html) should resemble the one below:


```html
<div class="menu-sidebar-content js-scrollbar1">
    <nav class="navbar-sidebar">
        <ul class="list-unstyled navbar-list">

            <li *ngFor="let tempProductCategory of productCategories">

                <a routerLink="/category/{{ tempProductCategory.id }}/{{ tempProductCategory.categoryName }}" routerLinkActive="active-link">
                    {{ tempProductCategory.categoryName }}
                </a>
                
            </li>

        </ul>
    </nav>
</div>
```


### 3. Update component to read the category name

Edit the file: **product-list.component.ts**

Add a new property
```ts
      currentCategoryName: string;
```

This should appear in the area of defining the `currentCategoryId` property.


In the `listProducts()` method

Replace
```ts
        if (hasCategoryId) {
          // get the "id" param string. convert string to a number using the "+" symbol
          this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
        }
```
With
```ts
        if (hasCategoryId) {
          // get the "id" param string. convert string to a number using the "+" symbol
          this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
     
          // get the "name" param string
          this.currentCategoryName = this.route.snapshot.paramMap.get('name');
        }
```

This reads the `name` parameter that is passed by the router link.


Replace
```ts
        else {
          // not category id available ... default to category id 1
          this.currentCategoryId = 1;
        }
```
With
```ts
        else {
          // not category id available ... default to category id 1
          this.currentCategoryId = 1;
          this.currentCategoryName = 'Books';
        }
```

If no category is provided, this code defaults to category id of 1 and name of "Books"

The final code for [product-list-grid.component.ts](code/product-list-grid.component.ts) should resemble the one below:

```ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;
  currentCategoryName: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    // now get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
```

### 4. Update the list-grid HTML file to bind to category name

Edit file: **product-list-grid.component.html**

Replace
```html
    <div class="main-content">
        <div class="section-content section-content-p30">
            <div class="container-fluid">
                <div class="row">
```
With
```html
    <div class="main-content">
        <div class="section-content section-content-p30">
     
            <h4>Category: {‌{ currentCategoryName }}</h4>
            <hr>
     
            <div class="container-fluid">
                <div class="row">
```

This displays the category name along with a horizontal rule `<hr>`.

The final code for [product-list-grid.component.html](code/product-list-grid.component.html) should resemble the one below:

<div class="main-content">
    <div class="section-content section-content-p30">

        <h4>Category: {{ currentCategoryName }}</h4>
        <hr>

        <div class="container-fluid">
            <div class="row">

                <!-- loop over the collection of products -->
                <div *ngFor="let tempProduct of products" class="col-md-3">

                    <div class="product-box">
                        <img src="{{ tempProduct.imageUrl }}" class="img-responsive">
                        <h1>{{ tempProduct.name }}</h1>
                        <div class="price">{{ tempProduct.unitPrice | currency:'USD' }}</div>
                        <a href="#" class="primary-btn">Add to cart</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

---

Now when you run our application, you will see the category name at the top of the list grid.

![Display Category Name in Product List Grid](images/01-display-category-name-in-product-list-grid.png)


**Congratulations!**