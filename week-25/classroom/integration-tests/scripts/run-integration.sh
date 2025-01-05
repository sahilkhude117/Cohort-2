sudo docker compose up -d
echo '🟡 - Waiting for database to be ready...'
./scripts/wait-for-it.sh "postgresql://testdb_owner:tAck91qrQJmH@ep-old-rice-a5wh7hu1.us-east-2.aws.neon.tech/testdb?sslmode=require" -- echo '🟢 - Database is ready!'
npx prisma migrate dev --name init
npm run test
docker-compose down