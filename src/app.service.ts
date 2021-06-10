import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Env test take 1 WEB_URL: ${process.env.WEB_URL}`;
  }
}
