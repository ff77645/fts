import minimist from 'minimist';
import { server } from './server.js';

const argv = minimist(process.argv.slice(2))


console.log(argv);


server(argv)