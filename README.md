# E-commerce Website

This is a simple e-commerce website built using Next.js for the front end and Node.js for the backend. The project includes user authentication, product browsing, and CRUD operations for products.

## Important Notes

- The `.env` file is not ignored in this repository to facilitate the setup and running of the application.

## Technologies Used

- Next.js (v14)
- Node.js
- React
- MongoDB
- Express.js
- Mongoose
- JWT (JSON Web Tokens)

## Features

- **Backend Setup**: Node.js server with Express.js.
- **CRUD Operations**: Implemented routes for products.
  - GET all products
  - GET single product by ID
  - POST new product
  - PUT update product
  - DELETE product
- **Database Integration**: Connected to MongoDB using Mongoose with schema/model for products.
- **Frontend Development**: Next.js application with pages for:
  - Home page (displaying featured products)
  - Product listing page (displaying all products)
  - Product detail page (displaying individual product details)
- **User Authentication**: Implemented using JWT.
  - Login page
  - Registration page

## Installation and Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Backend Setup:**
    - Navigate to the backend directory:
        ```bash
        cd backEnd/src
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
   
    - Start the backend server using nodemon:
        ```bash
        nodemon server
        ```

3. **Frontend Setup:**
    - Navigate to the frontend directory:
        ```bash
        cd frontEnd/e-commerce
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
   
 - Start the frontend server:
        ```bash
        npm run dev
        ```

4. **Access the Application:**
    - The application will be accessible at `http://localhost:3000`.

## Admin Credentials

- **Username**: `admin`
- **Password**: `admin123`


If you have any questions or need further assistance, feel free to contact me at evjahfar@gmail.com.

---

Thank you for the opportunity to work on this project. I look forward to your feedback.

Best regards,
Jahfar Ali
