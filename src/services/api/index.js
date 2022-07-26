import env from '@/env';
import AuthorizedInstance from '@/services/authorized-api';

const ApiService = AuthorizedInstance(env.api.baseUrl.apiService);

export default ApiService;
export * from './auth';
