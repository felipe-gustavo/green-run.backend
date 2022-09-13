import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/infra/database/services/prisma.service';

import { UserAggregate } from '@user/domain/user.aggregate';

import { UserPersistenceToDomainMapper } from '../../mappers/user.persistence-to-domain.mapper';

@Injectable()
export class UserRepository implements UserRepository {
  constructor(readonly prisma: PrismaService) {}

  async create(user: UserAggregate): Promise<UserAggregate> {
    const userPersistence = await this.prisma.user.create({
      data: {
        id: user.id.value,
        firstName: user.name.firstName,
        lastName: user.name.lastName,
        role: user.role.value,
        phone: user.phone.value,
        email: user.email.value,
        password: user.password.value,
        birthDate: user.birthDate.value,
        documentId: user.documentId.value,
        userState: user.userState.value,
      },
    });

    return UserPersistenceToDomainMapper.exec(userPersistence);
  }
}
