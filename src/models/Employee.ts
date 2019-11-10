export interface Employee {
  employeeId?: string; // not necessary
  firstname: string;
  lastname: string;
  nic: string;
  gender: string;
  email: string;
  password: string;
  contactNo: number;
  address: string;
  status: string;
  img?: any;
  unblocked: boolean;
}
