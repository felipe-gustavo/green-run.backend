import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

export abstract class NonMutableValueObj<T = Date> extends ValueObject<T> {
  protected abstract fieldName: string;

  get value() {
    return this._value;
  }

  update(value: T) {
    throw new ValueObjectException(
      'user',
      ERROR_CODES.nonMutableDate.update,
      this.fieldName,
      value,
    );
  }
}
