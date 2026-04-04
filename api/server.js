import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

const router = jsonServer.router(path.join(__dirname, '../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);


server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);

// server.listen(3000, () => { 
//   console.log('JSON Server is running on port 3000');
// });

export default server;




// import jsonServer from 'json-server';
// import path from 'path';

// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();

// // Use the global process object explicitly
// const rootDir = global.process ? global.process.cwd() : './';
// const dbPath = path.join(rootDir, 'db.json');

// const router = jsonServer.router(dbPath);

// server.use(middlewares);

// // Rewriter for Vercel
// server.use(jsonServer.rewriter({
//   '/api/*': '/$1'
// }));

// server.use(router);

// export default server;


// import jsonServer from 'json-server';

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// server.use(middlewares);
// server.use(jsonServer.rewriter({
//   '/api/*': '/$1'
// }));
// server.use(router);
// server.listen(3000, () => { 
//   console.log('JSON Server is running on port 3000');
// });

// export default server;