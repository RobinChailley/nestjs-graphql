import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Generated('uuid')
  @Field()
  uuid: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;
}
