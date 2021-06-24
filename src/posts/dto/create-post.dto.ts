export class CreatePostDto {
    readonly title: Text;
    readonly content: Text;
     readonly author: Text;
     readonly createdTime: Date;
     readonly lastUpdatedTime: Date;
}
