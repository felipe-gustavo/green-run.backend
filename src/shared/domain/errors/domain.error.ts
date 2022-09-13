export class DomainError extends Error {
  constructor(
    public readonly domain: string,
    public readonly errorCode: string,
    message: string,
  ) {
    super(message);
  }
}
