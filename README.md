# Create T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.


##Steps to make it work.
1. Setup postgresql
`docker compose up`

2. Create .env file with this template
`
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres?synchronize=true
NEXTAUTH_SECRET="random"
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID="976824650942-"
GOOGLE_CLIENT_SECRET="GOCSPX-"
`
You might need google client id to make it work with nextauth else you can just work with name login

3. Feed prisma to database
`nano prisma/schema.prisma`
and change the databaseurl or use sqlite 
then run
`npx prisma generate`

4. start nextjs
`yarn dev`

5. to see prisma database rows you can run 
`npx prisma studio`

###start development :) 