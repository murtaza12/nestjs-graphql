import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewUserInput {
    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    lastName: string;

    @Field(() => Int)
    age: number;
}