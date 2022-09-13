import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';

import { NonMutableValueObj } from './non-mutable-date.value-obj';

export class BirthDateValueObj extends NonMutableValueObj {
  protected fieldName = 'birthDate';

  validate(value: Date) {
    if (value > new Date()) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.birthDate.invalid,
        'birthDate',
        value,
      );
    }
  }
}
