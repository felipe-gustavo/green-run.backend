import { compareSync, genSaltSync, hashSync } from 'bcrypt';

export class Hash {
  static encrypt(value: string) {
    const salt = genSaltSync();
    return hashSync(value, salt);
  }

  static compare(rawValue: string, hash: string) {
    return compareSync(rawValue, hash);
  }
}
