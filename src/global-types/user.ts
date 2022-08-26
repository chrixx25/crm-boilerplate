export interface Decoded {
  result?: {
    id: string;
    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNo: string;
  };
  iat?: number;
  exp?: number;
}
