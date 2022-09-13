import { ValueObject } from './value-object';

import { ERROR_CODES } from '../constants/error-codes';
import { ValueObjectException } from '../errors/value-object-exception.error';

export class IdentityValueObj extends ValueObject<string> {
  readonly value = this._value;

  validate(value: string): void {
    if (!value) {
      throw new ValueObjectException(
        'shared',
        ERROR_CODES.identity.empty,
        'IdentityValueObj',
        value,
      );
    }
  }
}
