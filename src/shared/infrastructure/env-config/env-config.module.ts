import { Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [ConfigService]
})
export class EnvConfigModule {}
