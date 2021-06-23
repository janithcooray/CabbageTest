import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(OmitType(CreateCommentDto,['author','createdDate'] as const)) {
}
