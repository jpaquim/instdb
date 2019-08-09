import { writeFileSync } from 'fs';

export function viewData(data) {
  console.log(data.samplers);
  writeFileSync('data.json', JSON.stringify(data, null, 2));
  console.log('wrote data')
}
