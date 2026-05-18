import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    skipGlobalErrorToast?: boolean
  }
}
