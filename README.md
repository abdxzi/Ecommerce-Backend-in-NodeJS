
---

# Ecommerce Backend API
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

The Ecommerce Backend API is a REST API for ecommerce systems. Developed using Node.js along with technologies like Mongoose, MongoDB, and JWT, this API serves as the backbone for managing users, products, blogs, categories, and coupons in an ecommerce platform.

I used this project to learn about the REST API development using node Js

## Technologies Used

- Node.js
- Mongoose
- MongoDB
- JWT (JSON Web Tokens)

## Endpoints

| Endpoint           | Description                               |
|--------------------|-------------------------------------------|
| `/api/user`        | Endpoint for user authentication using JWT tokens.     |
| `/api/product`     | Endpoint for managing products.           |
| `/api/blog`        | Endpoint for managing blog posts.         |
| `/api/category`    | Endpoint for managing product categories. |
| `/api/coupon`      | Endpoint for managing product coupons.    |

## Authentication

Authentication for this API is handled using JWT tokens, providing secure access to various endpoints.

## Usage

To use this Ecommerce Backend API:

1. Ensure Node.js and MongoDB are installed on your system.
2. Clone this repository: `git clone https://github.com/abdxzi/ecommerce-backend-api.git`
3. Navigate to the project directory: `cd ecommerce-backend-api`
4. Install dependencies: `npm install`
5. Set up your MongoDB connection string in a `.env` file.
6. Start the server: `npm start`

## Contribution

This project is not complete. Contributions to enhance and improve this Ecommerce Backend API are welcome! 

## License

This project is licensed under the [MIT License](LICENSE).

---
