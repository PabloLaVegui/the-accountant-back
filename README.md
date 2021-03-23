# The Accountant 

## Development

### Run app

```
npm run dev
```

### Run infrastructure

```
docker-compose up -d
```

### Migrations

Generate migration:

```
npx sequelize-cli migration:generate --name migration_name
```

Run migrations:

```
npx sequelize-cli db:migrate
```
