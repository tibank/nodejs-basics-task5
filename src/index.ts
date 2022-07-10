import { createServer } from './app.server';
import 'dotenv/config';

const PORT: string | number = process.env.PORT || 4000;
const server = createServer();
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at ${url}
      `);
});
