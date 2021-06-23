import { Connection } from 'mongoose';
import { Comment } from './entities/comment.entity';
import { CommentSchema } from './schema/comments.schema';

export const CommentProviders = [
  {
    provide: 'COMMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('comment', CommentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];