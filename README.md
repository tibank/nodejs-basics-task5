# Graphql Service

This application is using Apollo Server for serving request to Musicify microservices.

## Installation

1. Clone git repository
2. You should install node modules by:

   npm i

3. To run app:

   in development mode:
   npm run start:dev

   in production mode:
   npm run start:prod

4. For testing app you should use Postman

   You should import two files in postman from root directory

   1. Queries collection
      GraphQL.postman_collection.json
   2. Enviroments collection
      Graphql.postman_environment.json

You can change server port (default value: 4000) in the .env file. After that you should change
port in postman's environment variable apollo_url

For testing in Apollo Explore you can try to use shared query collection
https://studio.apollographql.com/graph/RS-School-home-task/explorer?collectionId=c1d170e1-1631-4cbd-be73-f5eb059dfc28&focusCollectionId=c1d170e1-1631-4cbd-be73-f5eb059dfc28&overlay=view-collection-details&variant=current
