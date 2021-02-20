# Checking the database

Start the app in development mode
```bash
docker-compose up
docker-compose up --build // if there are any changes
```

## Login to the PostgreSQL Database

Start the database bash and enter the databse command line
```bash
docker exec -it snippetsly-postgres_db_1 bash
psql -U postgres
```

Check the existence of the database and tables
eg
```bash
\l                 # list database.
\c snippetsly-db   # select `snippetsly-db` database.
\dt                # list all tables.
\d snippet         # Show `snippet` table definition.
```