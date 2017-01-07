# Product frontend

Simple frontend app, consume [Product API](https://github.com/duykhoa/product-api).

# Installation

1. Clone the code
2. `bower install && npm install`
3. `grunt serve`. It'll open an http port at `9000`

# Features

- View all products
- View information of a product
- Edit a product
- Remove a product
- Create product with uploading image

# Screenshot

## Homepage

![s1](https://cloud.githubusercontent.com/assets/2004218/21741088/057fa778-d507-11e6-9053-0004e9d47442.png)

## Hover on product

![](https://cloud.githubusercontent.com/assets/2004218/21741101/6e7554bc-d507-11e6-861e-7de9e57dafe6.png)

## View product info

![](https://cloud.githubusercontent.com/assets/2004218/21741113/a85b56e0-d507-11e6-82d3-564ac00d11ef.png)

## Create new product (with upload image)

- Click on (`+`) button

![](https://cloud.githubusercontent.com/assets/2004218/21741135/4cf67b44-d508-11e6-9846-32f0f8b31fc8.png)

- Fill in name, description and price

![](https://cloud.githubusercontent.com/assets/2004218/21741142/765072e2-d508-11e6-8c35-02fb9c1cc4a3.png)

- Upload image(s)

![](https://cloud.githubusercontent.com/assets/2004218/21741164/e3948776-d508-11e6-9c28-e9ff4e4f81aa.png)

- Create product, new product is appeared on homepage

![](https://cloud.githubusercontent.com/assets/2004218/21741170/18ecd130-d509-11e6-9a31-ced7090a41a7.png)

## Delete product

![](https://cloud.githubusercontent.com/assets/2004218/21741178/63c328b2-d509-11e6-8cc9-95428df25a39.png)

## Validation

![](https://cloud.githubusercontent.com/assets/2004218/21741238/73a13016-d50a-11e6-88a2-755a34e0d100.png)


# TODO

1. Add validation when create/update product.
- Allow user to remove images(s) of a product or upload new images when editing.
- Make website responsive
- Accept images only
- Token exchange and refresh
- Custom style for Create/edit/delete modal
- Add favicon
- Create logo
- Refactor main ctrl (apply directives and services)

===

This Project is powered by Yeoman and Angular JS.
