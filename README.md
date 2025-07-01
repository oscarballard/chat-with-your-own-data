### **Document Management System - RESTful API**

---

### **Description**

This project provides a **RESTful API** for efficient document management, allowing for CRUD operations (Create, Read, Update, and Delete) on documents. It is designed for scalability and security, with PostgreSQL as the database and **TypeORM** for data access. The system integrates **ChromaDB** for document embedding and search capabilities using **LlamaIndex**.

The API is designed to ensure data integrity and availability, providing seamless interactions with a PostgreSQL database and **ChromaDB** for vector-based document search.

---

### **Prerequisites**

Before running the application, make sure you have the following tools installed:

* **Node.js** (LTS version)
* **Yarn** (preferred package manager)
* **Docker** and **Docker Compose** (if you want to run the system in containers)

---

### **Architecture Diagram**

\[Insert architecture diagram here]

---

### **Installation and Usage**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/document-management-system
   cd document-management-system
   ```

2. **Configure environment variables**

   Create a `.env` file in the root directory and configure your environment variables:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=documents_db
   CHROMA_URL=http://localhost:8000
   OPENAI_API_KEY=your_openai_api_key
   ```

3. **Install dependencies**

   Run the following command to install the dependencies:

   ```bash
   yarn install
   ```

4. **Run the application in development mode**

   You can run the application locally using:

   ```bash
   yarn start:dev
   ```

   This will start the NestJS application in development mode.

5. **Access Swagger UI**

   Once the application is running, you can access the Swagger UI to explore and test the API endpoints:

   ```bash
   http://localhost:3000/api
   ```

---

### **Docker Execution**

To bring up the environment with Docker, run the following command:

```bash
docker-compose up -d
```

This will spin up the **NestJS app**, **PostgreSQL**, and **ChromaDB** containers.

---

### **Project Structure**

The project follows a modular and organized architecture:

```
document-management-system/
│── src/
│   ├── modules/
│   │   ├── documents/
│   │   │   ├── application/
│   │   │   │   ├── services/
│   │   │   │   │   ├── document.service.ts
│   │   │   │   │   ├── document-query.service.ts
│   │   │   ├── domain/
│   │   │   │   ├── document.entity.ts
│   │   │   ├── infrastructure/
│   │   │   │   ├── repositories/
│   │   │   │   │   ├── document.repository.ts
│   │   │   │   ├── adapters/
│   │   │   │   │   ├── chroma-document.repository.ts
│   │   │   ├── presentation/
│   │   │   │   ├── controllers/
│   │   │   │   │   ├── document.controller.ts
│   │── .env                 # Environment configuration
│── test/                     # Unit and integration tests
│── docker/
│   ├── Dockerfile            # Docker configuration for NestJS app
│   ├── docker-compose.yml    # Docker Compose configuration for the entire stack
```

---

### **Available Endpoints**

## **Document Management Endpoints**

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| `POST` | `/documents/upload` | Upload a document (PDF, TXT) |
| `GET`  | `/documents`        | Get all documents            |
| `GET`  | `/documents/{id}`   | Get a document by its ID     |

## **Conversation Endpoints**

| Method | Endpoint         | Description                                        |
| ------ | ---------------- | -------------------------------------------------- |
| `POST` | `/conversations` | Ask a question and retrieve context from documents |
| `GET`  | `/conversations` | Get the history of all conversations               |

---

### **Example Requests**

**Using curl**:

```bash
curl -X GET http://localhost:3000/api/documents
```

**Using Postman**:

1. Select the GET method.
2. Enter the URL: `http://localhost:3000/api/documents`.
3. Click **Send** to retrieve all documents.

---

### **Unit Tests**

This project includes unit tests using **Jest**. To run the tests, execute:

```bash
yarn test
```

---

### **Technologies Stack**

This project is built using the following technologies:

* **NestJS** (for the backend framework)
* **Node.js** (runtime)
* **TypeORM** (for PostgreSQL integration)
* **ChromaDB** (for vector database)
* **LlamaIndex** (for document embeddings and search)
* **Swagger** (for API documentation)
* **Docker** and **Docker Compose** (for containerization)
* **Jest** (for unit testing)

---

### **Best Practices Implemented**

This project follows best practices to ensure scalability, maintainability, and clean architecture:

* **Modular Architecture**: The project is structured in a modular way to separate concerns between domain, application, infrastructure, and presentation layers.
* **DTOs**: **Data Transfer Objects (DTOs)** are used to structure data and avoid exposing raw entities.
* **Validation**: Validation is implemented using **class-validator** to ensure data integrity before persistence.
* **Centralized Error Handling**: A global error handler is used to manage exceptions across the application.
* **Scalable Deployment with Docker**: The app is containerized with Docker and Docker Compose to simplify local and production deployment.
* **Testing**: Unit tests are written for business logic using **Jest**.

---

### **Authors**

* **Oscar Ballard** (@oscarballard)

---

### **How to Use the API in Your Projects**

To use this API in your projects, follow the installation and configuration steps provided above, and integrate the **document management** functionality as part of your backend system. You can expand the API to include additional features such as user authentication, advanced search, and more complex document management workflows.

---

