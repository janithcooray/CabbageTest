import { Connection } from 'mongoose';
import { PostsSchema } from './Schema/posts.schema';


export const PostProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) => connection.model('post', PostsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];