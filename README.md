
# 📚 Java CRUD: Book Library Management

Welcome to the **Java CRUD Library Management System**, a full-stack application built with **Java**, **Spring Boot**, and **Angular**. This project is designed to help users **add**, **edit**, **view**, and **delete** books in a digital library.

It follows **clean architecture principles**, utilizes **DTOs**, **service layers**, and **Spring Data JPA** for database interactions. The frontend is powered by Angular, styled with Angular Material components for a responsive user interface.

---

## ✨ Features

<li>📖 Book Management: Add, view, edit, and delete books</li>
<li>🔍 Search & Filter: Search books by name with real-time filtering</li>
<li>📄 Pagination: Navigate through large collections with paginated results</li>
<li>🎨 Material Design: Modern UI using Angular Material components</li>
<li>📱 Responsive Design: Works on desktop and mobile devices</li>
<li>⚡ Real-time Updates: Instant UI updates after operations</li>
<li>🛡️ Error Handling: Comprehensive error handling with user-friendly messages</li>
<li>🔄 Sorting: Sort books by name or genre</li>
<li>✅ Confirmation Dialogs: Safe deletion with confirmation prompts</li>

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
- Maven for dependency management
- H2/MySQL database (configurable)

### Frontend
- Angular
- Angular Material
- TypeScript
- HTML/CSS
- RxJS

### Development Tools
- Docker support
- Angular CLI
- Spring Boot DevTools

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

3. Access the H2 database (if in test profile):
   ```
   http://localhost:8080/h2-console
   ```
   OR

   Access the MySQL database (if in dev profile):

   Manual Docker Steup:
    ```
   docker compose up -d
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

## 🎯 API Endpoints

### Books API

| Method | Endpoint | Description |
|--------|----------|-------------|
| ![GET](https://img.shields.io/badge/GET-blue) | `/api/books` | Get all books (paginated) |
| ![GET](https://img.shields.io/badge/GET-blue) | `/api/books/{id}` | Get book by ID |
| ![POST](https://img.shields.io/badge/POST-green) | `/api/books` | Create new book |
| ![PUT](https://img.shields.io/badge/PUT-orange) | `/api/books/{id}` | Update existing book |
| ![DELETE](https://img.shields.io/badge/DELETE-red) | `/api/books/{id}` | Delete book |
| ![GET](https://img.shields.io/badge/GET-blue) | `/api/books?search={term}` | Search books by name |

Query Parameters
- page: Page number (0-based)
- size: Page size (default: 10)
- search: Search term for filtering
- sortBy: Sort field (name, type)
- sortDirection: Sort direction (asc, desc)
---
## 🚧 Current Status

### ✅ Completed Features
- ![✓](https://img.shields.io/badge/✓-completed-green) Basic CRUD operations
- ![✓](https://img.shields.io/badge/✓-completed-green) Angular Material UI
- ![✓](https://img.shields.io/badge/✓-completed-green) Pagination
- ![✓](https://img.shields.io/badge/✓-completed-green) Search functionality
- ![✓](https://img.shields.io/badge/✓-completed-green) Sorting capabilities
- ![✓](https://img.shields.io/badge/✓-completed-green) Error handling
- ![✓](https://img.shields.io/badge/✓-completed-green) Confirmation dialogs
- ![✓](https://img.shields.io/badge/✓-completed-green) Docker configuration
- ![✓](https://img.shields.io/badge/✓-completed-green) Responsive design
  
## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow Angular style guide
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed
  
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
