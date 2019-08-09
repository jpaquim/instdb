import { read } from 'node-yaml';
import { viewData } from './main';

async function main() {
  try {
    const data = await read('../data.yaml');
    viewData(data);
  } catch (error) {
    console.error(error);
  }
}

main();
