import { DomainError } from './domain.error';

import { ErrorPayload } from '../interfaces/error-payload.interface';

export class ValueObjectException extends DomainError {
  constructor(
    domain: string,
    errorPayload: ErrorPayload,
    public readonly voName: string,
    public readonly voValue: unknown,
  ) {
    const { code, message } = errorPayload;
    super(domain, code, message);
  }
}
