import { Aggregate } from '@shared/domain/aggregate';
import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { IdentityValueObj } from '@shared/domain/value-objects/identity.vo';

import { UserState } from './interfaces/user-state';
import { BirthDateValueObj } from './value-objects/birthdate.value-obj';
import { CreatedAtValueObj } from './value-objects/created-at.value-obj copy 2';
import { DeletedAtValueObj } from './value-objects/deleted-at.value-obj copy 3';
import { DeletedValueObj } from './value-objects/deleted.value-obj';
import { DocumentIdValueObj } from './value-objects/document-id.value-obj';
import { EmailValueObj } from './value-objects/email.value-obj';

import { NameValueObj } from './value-objects/name.value-obj';
import { PasswordValueObj } from './value-objects/password.value-obj';
import { PhoneValueObj } from './value-objects/phone.value-obj';
import { RoleValueObj } from './value-objects/role.value-obj';
import { UserStateValueObj } from './value-objects/user-state.value-obj';

export interface UserAggregateValue {
  id: IdentityValueObj;
  name: NameValueObj;
  role: RoleValueObj;
  phone: PhoneValueObj;
  email: EmailValueObj;
  password: PasswordValueObj;
  birthDate: BirthDateValueObj;
  documentId: DocumentIdValueObj;
  userState: UserStateValueObj;
  createdAt: CreatedAtValueObj;
  deleted: DeletedValueObj;
  deletedAt: DeletedAtValueObj;
}

export class UserAggregate
  extends Aggregate<UserAggregateValue>
  implements UserAggregateValue
{
  readonly id: IdentityValueObj;
  readonly name: NameValueObj;
  readonly role: RoleValueObj;
  readonly phone: PhoneValueObj;
  readonly email: EmailValueObj;
  readonly password: PasswordValueObj;
  readonly birthDate: BirthDateValueObj;
  readonly documentId: DocumentIdValueObj;
  readonly userState: UserStateValueObj;
  readonly createdAt: CreatedAtValueObj;
  readonly updatedAt: CreatedAtValueObj;
  readonly deleted: DeletedValueObj;
  readonly deletedAt: DeletedAtValueObj;

  changeUserStatus(newState: UserState) {
    if (this.role.value === 'ADMIN' && newState === 'blocked') {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.userStatus.changeAdminState,
        'userState',
        newState,
      );
    }
  }
}
