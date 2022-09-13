import { UserAggregate } from '../user.aggregate';

export interface IUserRepository {
  create(user: UserAggregate): Promise<UserAggregate>;
}
