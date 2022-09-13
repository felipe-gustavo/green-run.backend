import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/infra/database/services';

import { UserRepositoryProvider } from './user.repository.provider';

@Module({
  providers: [PrismaService, UserRepositoryProvider],
  exports: [UserRepositoryProvider],
})
export class UserRepositoryModule {}
