import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(OmitType(CreateCommentDto,['postID','author','createdTime'] as const)) {
}
