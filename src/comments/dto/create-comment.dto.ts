
export class CreateCommentDto {
   readonly postID: Text;
   readonly content: Text;
   readonly author: Text;
   readonly createdTime: Date;
   readonly lastUpdatedTime: Date;
}
