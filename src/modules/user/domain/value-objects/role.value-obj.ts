import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

import { UserRole } from '../interfaces/user-role';

export class RoleValueObj extends ValueObject<UserRole> {
  readonly value = this._value;

  update(value: UserRole) {
    throw new ValueObjectException(
      'user',
      ERROR_CODES.valueObject.role.update,
      'role',
      value,
    );
  }
}
