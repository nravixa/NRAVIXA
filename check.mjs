import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

try {
  const output = execSync('npx tsc --noEmit', { encoding: 'utf-8', stdio: 'pipe' });
  writeFileSync('ts-errors.txt', output || 'No errors');
} catch (e) {
  writeFileSync('ts-errors.txt', e.stdout || e.message);
}
