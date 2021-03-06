import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  username: Scalars['String'];
  email: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  enrollmentDate: Scalars['String'];
  posts: Scalars['Int'];
};

export type SignUpUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
};

export type EditUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  picture: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  title: Scalars['String'];
  body: Scalars['String'];
  publishDate: Scalars['String'];
  author: User;
};

export type PublishPostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type MutationResult = {
  __typename?: 'MutationResult';
  accepted: Scalars['Boolean'];
  failureReason?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  recentPosts: Array<Maybe<Post>>;
  postsByAuthor: Array<Maybe<Post>>;
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryPostsByAuthorArgs = {
  authorID: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUpUser: MutationResult;
  editUser: MutationResult;
  publishPost: MutationResult;
};


export type MutationSignUpUserArgs = {
  signUpUserInput: SignUpUserInput;
};


export type MutationEditUserArgs = {
  editUserInput: EditUserInput;
};


export type MutationPublishPostArgs = {
  publishPostInput: PublishPostInput;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  SignUpUserInput: SignUpUserInput;
  EditUserInput: EditUserInput;
  Post: ResolverTypeWrapper<Post>;
  PublishPostInput: PublishPostInput;
  MutationResult: ResolverTypeWrapper<MutationResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  User: User;
  String: Scalars['String'];
  Int: Scalars['Int'];
  SignUpUserInput: SignUpUserInput;
  EditUserInput: EditUserInput;
  Post: Post;
  PublishPostInput: PublishPostInput;
  MutationResult: MutationResult;
  Boolean: Scalars['Boolean'];
  Query: {};
  Mutation: {};
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enrollmentDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResult'] = ResolversParentTypes['MutationResult']> = {
  accepted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  failureReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
  recentPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  postsByAuthor?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryPostsByAuthorArgs, 'authorID'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signUpUser?: Resolver<ResolversTypes['MutationResult'], ParentType, ContextType, RequireFields<MutationSignUpUserArgs, 'signUpUserInput'>>;
  editUser?: Resolver<ResolversTypes['MutationResult'], ParentType, ContextType, RequireFields<MutationEditUserArgs, 'editUserInput'>>;
  publishPost?: Resolver<ResolversTypes['MutationResult'], ParentType, ContextType, RequireFields<MutationPublishPostArgs, 'publishPostInput'>>;
};

export type Resolvers<ContextType = any> = {
  User?: UserResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  MutationResult?: MutationResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
