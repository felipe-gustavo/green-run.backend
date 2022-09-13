import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';
import { IEncryptTool } from '@user/domain/interfaces/encrypt.tool.interface';

export class PasswordValueObj extends ValueObject<string> {
  constructor(
    value: string,
    isHashed: boolean,
    private encryptTool: IEncryptTool,
  ) {
    super(value);
    if (!isHashed) this._treatNonHashedValue(value);
  }

  get value() {
    return this._value;
  }

  private _treatNonHashedValue(value: string) {
    this.validateForNonHashed(value);
    this._value = this.encryptTool.encrypt(value);
  }

  update(value: string): void {
    this._treatNonHashedValue(value);
  }

  validateForNonHashed(value: string) {
    if (!value) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.password.empty,
        'password',
        value,
      );
    }
  }
}
