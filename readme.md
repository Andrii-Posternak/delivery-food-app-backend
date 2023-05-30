# Delivery-foods-app-backend

This rest API allows you to use your resources to organize online food delivery from popular fast foods.

This REST API is used as a backend for [delivery-foods-app](delivery-food-app-go.netlify.app) ([github](https://github.com/Andrii-Posternak/delivery-food-app))

## Usage

This REST API uses these endpoints:

Base URL: `https://delivery-foods-app-backend.onrender.com/api`

- **GET** `/shops` - get a list of all shops
- **GET** `/foods` - get a list of all food from all shops
- **POST** `/orders` - save order to database

To run on localhost use the following commands:

- `npm start` - start server in production mode
- `npm run start:dev` - start server in development mode
- `npm run lint` - run a code check execution with eslint
- `npm run lint:fix` - run a code check run with eslint with automatic fixes for simple errors

## Created with

:white_check_mark: Node.js  
:white_check_mark: Mongo DB  
:white_check_mark: Express
