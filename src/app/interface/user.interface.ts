import { IBaseAudit } from './common.interface';

export interface IUser extends IBaseAudit {
  first_name: string;
  last_name: string;
  email: string;
  full_name?: string;
}
