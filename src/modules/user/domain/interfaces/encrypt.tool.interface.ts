export interface IEncryptTool {
  encrypt(value: string): string;
  compare(value: string, hash: string): boolean;
}
