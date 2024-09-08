# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About This Project
###### Name: Alpha
###### version: 1.0.0
###### Author: kanika sharma
###### Description: This App is creating Add to Cart, Add product, Login , Logout features.

> ### React + Redux codebase containing real world examples (CRUD, auth etc) that adheres to the [RealWorld](https://github.com/kanika11677/Cartproject/tree/CartProjectReact) spec and API.


## Getting started

You can view demo in local machine by taking a clone of this project repository : http://localhost:3000/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use port 4100 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.
 
Alternatively, you can add `.env` file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details. Also, please remove setting variable via script section of `package.json` - `dotenv` never override variables if they are already set.  

### Making requests to the backend API

For convenience, To get product dummy list and during login to get dummy user credentials we are using open source API service 'https://dummyjson.com/' for the application to make requests against.

Sample user credentails for login (User refrence - https://dummyjson.com/users):
username: emilys
password: emilyspass

## Functionality overview

The example application is a Add to cart site called "Alpha". We are intialy making API request to third party API to get user credetials and Product list and then to avoid making multiple request to server every time we switch pages or component demounts we store product list in reddux store and also storing cart added data in redux store so that entire application can re-use both product list and cart added items data. 
we have also saved Logged in user data in localstorage and reading from local storage.

**General functionality:**

- Authenticate users via making API request to client with valid user details (login pages + logout button on dashboard page)
- Product GET(Fetching) data from API and display Product list, Add Product, Delete Product
- Cart Page with Cart items List, Adding Product to cart, Removing Product from Cart
- Search Products From product list by name in dashboard page 

## Project Overview

![alt text](https://github.com/kanika11677/Cartproject/blob/CartProjectReact/snapshot/login.png)

![alt text](https://github.com/kanika11677/Cartproject/blob/CartProjectReact/snapshot/dashboard.png)

![alt text](https://github.com/kanika11677/Cartproject/blob/CartProjectReact/snapshot/addproduct.png)

![alt text](https://github.com/kanika11677/Cartproject/blob/CartProjectReact/snapshot/cart.png)
