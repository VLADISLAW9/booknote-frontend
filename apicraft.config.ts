import { apicraft } from '@siberiacancode/apicraft';

export default apicraft([
  {
    input: 'http://localhost:8000/api/docs-yaml',
    output: 'generated/api',
    instance: { name: 'fetches', runtimeInstancePath: './src/utils/api/instance' },
    nameBy: 'path',
    plugins: ['tanstack'],
    groupBy: 'tags'
  }
]);
