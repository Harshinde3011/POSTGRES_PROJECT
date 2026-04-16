Install ORM, Object-Relational Mapping (ORM) is a programming technique that acts as a bridge between object-oriented code and relational databases, allowing developers to manipulate database data using code objects rather than SQL queries
 - npm install sequelize
 - npm install --save mysql2  (relational database Driver)

Sequelize CLI is a command-line tool used to initialize projects, generate models, and manage database migrations and seeders in Sequelize
  - npx sequelize init
  
`sequelize init` only initializes the project structure by creating folders like models, migrations, seeders, and config. It does not create any database tables until migrations are executed

`📁 migrations/`

# 👉 This is the most important one

Stores migration files
Each file = one database change

Example:

Create table
Add column
Remove column

# Think of it like:
👉 Git for your database schema

`📁 seeders/`
Stores seed files
Used to insert dummy/initial data

Example:

Add admin user
Insert test data

after that just go inside src folder and modify in config/config.json
```
  "development": {
    "username": "admin",
    "password": "your_pass",
    "database": "db_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
```
- To create database 
  ```
  npx sequelize db:create
  ```
- To create Table, it will generate file inside migration and models folder
  ```
  npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer

  npx sequelize db:migrate (this command (from Sequelize CLI) will execute all pending migration files and create/update tables in your PostgreSQL database)
  ```
- Some basics cammands of 
  ```
  psql -U postgres  -- connect to db
  \l          -- list databases
  \c mydb     -- connect to database
  \dt         -- list tables
  \d users    -- describe table
  SELECT * FROM users;
  ```
- cammands in pgAdmin tool
  `To see tables`
  ```
  SELECT tablename 
  FROM pg_tables 
  WHERE schemaname = 'public';
 ```
