import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteUserInput {
  @Field()
  uuid: string;
}
