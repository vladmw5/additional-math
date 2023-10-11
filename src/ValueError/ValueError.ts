import { ANY_VALUE_ERROR_CODE, ValueErrorCode } from "./ErrorCodes";

export class ValueError extends Error {
  code: ValueErrorCode = 600;

  constructor(message: string | undefined, code?: ValueErrorCode) {
    super(message);
    this.name = 'ValueError';
    this.code = code ?? ANY_VALUE_ERROR_CODE;
  }
}