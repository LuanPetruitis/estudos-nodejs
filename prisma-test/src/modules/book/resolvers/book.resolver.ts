import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query(() => String)
  books() {
    return 'Hello World!';
  }

  @Query(() => String)
  specificBook() {
    return 'Hello World 2!';
  }
}
