import { APIRequestContext } from '@playwright/test';

export class HealthClient {
  constructor(private readonly request: APIRequestContext) {}

  async getHomeStatus(): Promise<number> {
    const response = await this.request.get('/');
    return response.status();
  }
}
