import { Connection } from 'mongoose';
import { UsersSchema } from './Schema/users.schema';


export const UserProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('users', UsersSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];