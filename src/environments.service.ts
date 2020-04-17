import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class EnvironmentsService {
  private readonly envConfig: Record<string, string>;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(
      fs.readFileSync('./config/environments/local.env')
    );
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
