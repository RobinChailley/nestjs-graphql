import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Generated('uuid')
  @Field()
  uuid: string;

  @Column()
  password: string;

  @Column()
  @Field()
  firstName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName: string;
}
