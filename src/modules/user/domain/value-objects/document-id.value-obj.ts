import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

export class DocumentIdValueObj extends ValueObject<string> {
  validate(value: string) {
    if (!value) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.documentId.empty,
        'documentId',
        value,
      );
    }
  }
}
