export default {
  type: 'postgresql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  entities: ['./dist/entities/**/*.ts'],
  entitiesTs: ['./src/entities/**/*.ts'],
  autoLoadEntities: true,
  migrations: {
    tableName: 'migration',
    path: 'src/database/migrations', // path to your migrations directory
    pattern: /^[\w-]+\d+\.ts$/, // migration files pattern,
    transactional: true,
    allOrNothing: true,
    emit: 'ts'
  }
};
