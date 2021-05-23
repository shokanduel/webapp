import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      // ignore environment files in production
      ignoreEnvFile: environment.production
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT') || 5432,
        username: configService.get('DB_USERNAMSE'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [],
        // only sycnronize in dev
        synchronize: !environment.production
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
