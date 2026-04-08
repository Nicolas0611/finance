export interface UserDTO {
  user_id:    string;
  full_name:  string;
  email:      string;
  role_code:  1 | 2 | 3;
  is_active:  0 | 1;
  created_at: string;
}

export interface CreateUserPayloadDTO {
  full_name: string;
  email:     string;
  role_code: 1 | 2 | 3;
}
