export interface ADD_VALUE {
  firstName: string;
  lastName: string;
  password: string;
}

export interface ADD_ADDRESS {
  user: ADD_VALUE;
  address: string;
  zipCode: string;
}
