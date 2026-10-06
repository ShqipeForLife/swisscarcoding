const fs = require('fs');
let content = fs.readFileSync('artifacts/swiss-car-coding/src/admin/CarPartsTuningPanel.tsx', 'utf8');

// Use a ref for race condition in fetchCatalog
content = content.replace(
  /const fetchCatalog = async \(p: number, s: string, a: string\) => {/,
  `const requestRef = import('react').then(() => null);
  const fetchCatalogRef = import('react').then(() => null); // we will define it properly with hooks
  const fetchCatalog = async (p: number, s: string, a: string) => {`
);

// We need a better approach, let's just rewrite the entire file since there are many interwoven changes.
