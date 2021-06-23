import { Connection } from 'mongoose';
import { PostsSchema } from './Schema/posts.schema';


export const PostProviders = [
  {
    provide: 'COMMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('comment', PostsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];