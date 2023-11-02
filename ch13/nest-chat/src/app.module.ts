import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGeteway, RoomGatewary } from './app.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGeteway, RoomGatewary],
})
export class AppModule {}
