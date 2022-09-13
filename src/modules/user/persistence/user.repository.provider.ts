import { Provider } from '@nestjs/common';

import { USER_REPO } from '@user/domain/constants';

import { UserRepository } from './user.repository';

export const UserRepositoryProvider: Provider = {
  provide: USER_REPO,
  useClass: UserRepository,
};
