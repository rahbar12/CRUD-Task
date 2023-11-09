# CRUD-Task\

## API Endpoints
GET - /api/book : Get list of all books.\
\
POST - /api/book : Create a new book\
    Body - JSON: {\
        title: string, required,\
        author: string, required,\
        summary: string, required,\
    }\
\
GET - /api/book/:id : Get book details by id. where :id represents the id of the book.\
\
PATCH - /api/book/:id : Update book details by id. where :id represents the id of the book.\
    Body - JSON: {\
        title: string, required,\
        author: string, required,\
        summary: string, required,\
    }\
\
DELETE - /api/book/:id : Delete book by id. where :id represents the id of the book.