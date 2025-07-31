
# 📚 Java CRUD: Book Library Management

Welcome to the **Java CRUD Library Management System**, a full-stack application built with **Java**, **Spring Boot**, and **Angular**. This project is designed to help users **add**, **edit**, **view**, and **delete** books in a digital library.

It follows **clean architecture principles**, utilizes **DTOs**, **service layers**, and **Spring Data JPA** for database interactions. The frontend is powered by Angular, styled with Angular Material components for a responsive user interface.

> 🚧 This project is still a work in progress — ongoing improvements are being made to features, performance, and design.

---

## ✨ Features

- Full CRUD functionality for managing books
- DTO implementation for clean API contracts
- RESTful API architecture with Spring Boot
- Data persistence using **Spring Data JPA** with H2 (development) or PostgreSQL (future support)
- Enum persistence with **JPA converters**
- Soft delete implementation using **Hibernate annotations**
- Responsive UI built with **Angular + Angular Material**
- Form validations on both frontend and backend
- GitHub commits documented to show each development step

---

## 🛠️ Tech Stack

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- H2 Database (development)
- Lombok
- Hibernate
- Maven

### Frontend
- Angular
- Angular Material
- TypeScript
- HTML/CSS

---

## 📦 How to Run

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Cozzolindo/java-crud.git
   ```

2. Run the Spring Boot application using your IDE or:
   ```bash
   ./mvnw spring-boot:run
   ```

3. Access the H2 database (if configured):
   ```
   http://localhost:8080/h2-console
   ```

---

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd java-crud/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Visit the application:
   ```
   http://localhost:4200
   ```

---

## 🧪 Next Steps & TODO

- ✅ Soft delete implementation
- ✅ Enum conversion using JPA Converter
- ✅ DTO mapping and separation of concerns
- ⏳ Switch to PostgreSQL for production
- ⏳ Add authentication and user roles
- ⏳ Implement pagination and filtering
- ⏳ Improve unit and integration test coverage
- ⏳ Write detailed API documentation with Swagger/OpenAPI
- ⏳ Add responsive design enhancements

---

## 🤝 Contributing

While this project is part of a personal learning journey, contributions, suggestions, and code reviews are welcome. Feel free to open issues or submit pull requests.

---

## 🧑‍💻 Author

Developed by [Carlos Cozzolino](https://github.com/Cozzolindo)  
Back-End Developer | Passionate about clean code, design patterns, and full-stack engineering.

---

## 📫 Contact

- GitHub: [@Cozzolindo](https://github.com/Cozzolindo)
- LinkedIn: [linkedin.com/in/carloscozzolino](https://linkedin.com/in/carloscozzolino)

---

## ⭐️ If you like this project

Give it a star ⭐ on GitHub to show support and follow for more updates!
