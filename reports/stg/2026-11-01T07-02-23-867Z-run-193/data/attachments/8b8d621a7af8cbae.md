# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/home.smoke.spec.ts >> Smoke checks @allure.label.epic:Platform @allure.label.feature:Smoke >> staging root is reachable @allure.label.story:RootReachability @allure.label.severity:critical @allure.label.tag:smoke
- Location: tests/smoke/home.smoke.spec.ts:4:7

# Error details

```
Error: apiRequestContext.get: certificate has expired
Call log:
  - → GET https://stg.radiopharma.miriontest.net/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | import { APIRequestContext } from '@playwright/test';
  2  | 
  3  | export class HealthClient {
  4  |   constructor(private readonly request: APIRequestContext) {}
  5  | 
  6  |   async getHomeStatus(): Promise<number> {
> 7  |     const response = await this.request.get('/');
     |                                         ^ Error: apiRequestContext.get: certificate has expired
  8  |     return response.status();
  9  |   }
  10 | }
  11 | 
```