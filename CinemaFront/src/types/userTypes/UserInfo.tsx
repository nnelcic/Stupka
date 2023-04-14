import { User } from './User';
import { UserDetails } from './UserDetails';
 
export interface UserInfo extends User {
    userDetails: UserDetails;
}