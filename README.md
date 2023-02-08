# E-Commerce Back End
This is a UTA Web Development Bootcamp challenge for unit 13, meant to deepen my understanding of Object-Relational Mapping.

## Description
This is a back-end application that allows for a company to manage their e-commerce database.

This application allows the user to:  
1. View category, product, and tag data along with their interrelations.
2. Create new category, product, and tag data.
3. Update and delete category, product, and tag data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage) 
- [Demo](#demo)
- [License](#license)
- [Questions](#questions)

## Installation
The following steps should be taken for installation:

1. Have node.js installed to your computer, then install the dependencies within the package.json file by running the `npm install` command in your terminal.

2. Have MySQL installed to your computer. Then to set up the database on your computer, open a terminal from the 'db' folder and input `mysql -u root -p` to login. Once logged in, input `SOURCE schema.sql;` to create the new database.

3. Create a '.env' folder containing the lines `DB_NAME='ecommerce_db'`, `DB_USER='<your_mysql_user>'`, and `DB_PASSWORD='<your_mysql_password>'`, replacing the angle brackets with your own mysql user and password values.

4. *Optional:* If you wish to add premade data to the database tables to test with, open a terminal from the package.json file and run the command `npm run seed`.

> NOTE: If you get an error when sourcing the schema.sql saying that the database already exists, you can do either of the following: 
> 1. Change the database name in the schema.sql as well as in the .env to create the database under a different name.
>
> 2. If you wish to replace your already existing database along with everything inside of it **permanently**, run `DROP DATABASE IF EXISTS ecommerce_db;` in your mysql terminal before sourcing the schema.sql.

## Usage
Once installation is complete, open a terminal from the package.json file and enter the command `npm start` to start the application. Once the app is listening, the following api routes can be utilized.

### Category routes
To use category routes, follow the url of the port or a connected application with `/api/categories/`, from here you can use:  
- A GET fetch to recieve an array containing all category objects as well as associated products.
- A PUT fetch, sent with a body object containing a "`category_name:`" key/value pair, to create a new category object.

With the route `/api/categories/:id`, you can use:
- A GET fetch to recieve a single category object by its id, along with any associated products.
- A PUT fetch, sent with a body object containing the key/value pair to be updated, to update a category object by its id.
- A DELETE fetch to permanently delete a category object by its id, along with its associated products.

### Product routes
To use product routes, follow the url of the port or a connected application with `/api/products/`, from here you can use:  
- A GET fetch to recieve an array containing all poduct objects as well as associated categories and tags.
- A PUT fetch, sent with a body object containing the key/value pairs "`product_name:`", "`price:`", "`stock:`", and optionally "`category_name:`", "`tagIds:`", to create a new product object.

With the route `/api/products/:id`, you can use:
- A GET fetch to recieve a single product object by its id, along with any associated categories and tags.
- A PUT fetch, sent with a body object containing the key/value pair to be updated, to update a product object by its id.
- A DELETE fetch to permanently delete a product object by its id, as well as any associated product_tags.

### Tag routes
To use tag routes, follow the url of the port or a connected application with `/api/tags/`, from here you can use:  
- A GET fetch to recieve an array containing all tag objects as well as associated products.
- A PUT fetch, sent with a body object containing a "`tag_name:`" key/value pair, to create a new tag object.

With the route `/api/tags/:id`, you can use:
- A GET fetch to recieve a single tag object by its id, along with any associated products.
- A PUT fetch, sent with a body object containing the key/value pair to be updated, to update a tag object by its id.
- A DELETE fetch to permanently delete a tag object by its id, as well as any associated product_tags.

## Demo


## License 
MIT License

Copyright (c) 2023 Re-Gi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Questions
Contact by email with any additional questions.

Visit my GitHub: [re-gi](https://github.com/re-gi)  
Send me an email: r.l.girndt@gmail.com