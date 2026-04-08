const V1 = '/v1';

export const ENDPOINTS = {
  users: {
    list:  `${V1}/users`,
    byId:  (id: string) => `${V1}/users/${id}`,
  },
  transactions: {
    list:  `${V1}/transactions`,
    byId:  (id: string) => `${V1}/transactions/${id}`,
  },
  accounts: {
    list:  `${V1}/accounts`,
    byId:  (id: string) => `${V1}/accounts/${id}`,
  },
} as const;
