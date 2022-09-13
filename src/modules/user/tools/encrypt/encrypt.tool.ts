import { Injectable } from '@nestjs/common';
import { IEncryptTool } from '@user/domain/interfaces/encrypt.tool.interface';
import { Hash } from 'src/utils/hash';

@Injectable()
export class EncryptTool implements IEncryptTool {
  encrypt(value: string) {
    return Hash.encrypt(value);
  }

  compare(value: string, hash: string) {
    return Hash.compare(value, hash);
  }
}
