export type ServiceResponseErrorType = 'INVALID_DATA'
| 'UNAUTHORIZED' | 'NOT_FOUND' | 'UNPROCESSABLE_ENTITY';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T,
};

export type ResponseService<T> = ServiceResponseSuccess<T> | ServiceResponseError;