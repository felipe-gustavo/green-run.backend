import { Provider } from '@nestjs/common';

import { ENCRYPT_TOOL } from '@user/domain/constants/index';

import { EncryptTool } from './encrypt.tool';

export const EncryptToolProvider: Provider = {
  provide: ENCRYPT_TOOL,
  useClass: EncryptTool,
};
