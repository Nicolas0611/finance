import { toast } from 'react-toastify'
import { type AppError, getErrorMessage } from './errors'

export const showApiErrorToast = (error: AppError): void => {
  toast.error(getErrorMessage(error))
}
