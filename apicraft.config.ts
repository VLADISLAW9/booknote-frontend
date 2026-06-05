import { apicraft } from '@siberiacancode/apicraft';

export default apicraft([
  {
    input: 'api.yaml',
    output: 'generated/api',
    instance: { name: 'fetches', runtimeInstancePath: './src/utils/api/instance' },
    nameBy: 'path',
    plugins: ['tanstack'],
    groupBy: 'tags'
  }
]);
