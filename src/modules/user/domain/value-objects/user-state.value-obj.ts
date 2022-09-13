import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { DomainError } from '@shared/domain/errors/domain.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

import { UserState } from '../interfaces/user-state';

export class UserStateValueObj extends ValueObject<UserState> {
  update() {
    const error = ERROR_CODES.businessRule.userStatus.changeByValueObject;
    throw new DomainError('user', error.code, error.message);
  }
}
