class ServerExceptions extends Error {
  constructor(m: string) {
    super(m);

    Object.setPrototypeOf(this, ServerExceptions.prototype);
  }
}
