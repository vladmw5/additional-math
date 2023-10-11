export const ANY_VALUE_ERROR_CODE = 600;
export const VALUE_ERROR_NO_POLYNOMIAL_COEFFICIENTS_PROVIDED_CODE = 601
export const VALUE_ERROR_POLYNOMIAL_LEADING_COEFFICIENT_IS_ZERO_CODE = 602;

export type ValueErrorCode =
  | typeof ANY_VALUE_ERROR_CODE
  | typeof VALUE_ERROR_POLYNOMIAL_LEADING_COEFFICIENT_IS_ZERO_CODE
  | typeof VALUE_ERROR_NO_POLYNOMIAL_COEFFICIENTS_PROVIDED_CODE;
