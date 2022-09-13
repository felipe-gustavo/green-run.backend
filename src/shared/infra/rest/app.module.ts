import { Module } from '@nestjs/common';
import { UserHttpModule } from '@user/infra/http/user.http.module';

@Module({
  imports: [UserHttpModule],
})
export class AppModule {}
