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
        title: string, optional,\
        author: string, optional,\
        summary: string, optional,\
    }\
\
DELETE - /api/book/:id : Delete book by id. where :id represents the id of the book.\

## Setup Instructions
Clone the repository using command `git clone https://github.com/rahbar12/CRUD-Task.git`.\
Install the dependencies using command `npm i`.\
Start the server with one of the following command:\
Windows: `npm run api-dev-win`\
Linux: `npm run api-dev`\
Update the .env.local file if there's any issue regarding port or db.\

## Server Deployment
Connect to the server using command `ssh <user>@<host-ip>`, use your user and host ip to connect to the server and enter password.\
Clone your repository using command `git clone <repo-link>`, use your repo link.\
Install the dependencies using command `npm i`.\
Update the .env.local file with live credentials and db details.\
Start the server using pm2 package: `pm2 start "npm run api-dev" -n "<name>"`.\