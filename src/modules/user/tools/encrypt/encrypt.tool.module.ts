import { Module } from '@nestjs/common';

import { EncryptToolProvider } from './encrypt.tool.provider';

@Module({
  providers: [EncryptToolProvider],
  exports: [EncryptToolProvider],
})
export class EncryptToolModule {}
