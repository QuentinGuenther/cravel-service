import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Food = {
  __typename?: 'Food';
  ingredientInfo?: Maybe<Array<IngredientInfo>>;
  metaInfo?: Maybe<Array<MetaInfo>>;
  nutrientInfo?: Maybe<Array<NutrientInfo>>;
};

export type Greeting = {
  __typename?: 'Greeting';
  response: Scalars['String'];
};

export type IngredientInfo = {
  __typename?: 'IngredientInfo';
  ingredients: Scalars['String'];
};

export type MetaInfo = {
  __typename?: 'MetaInfo';
  brand: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  upc: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
};

export type Nutrient = {
  __typename?: 'Nutrient';
  nutrientName: Scalars['String'];
  unitName: Scalars['String'];
  value: Scalars['Float'];
};

export type NutrientInfo = {
  __typename?: 'NutrientInfo';
  nutrients: Array<Nutrient>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  food: Food;
  helloWorld: Greeting;
};


export type QueryFoodArgs = {
  food: Scalars['String'];
};


export type QueryHelloWorldArgs = {
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Food: ResolverTypeWrapper<Food>;
  Greeting: ResolverTypeWrapper<Greeting>;
  IngredientInfo: ResolverTypeWrapper<IngredientInfo>;
  MetaInfo: ResolverTypeWrapper<MetaInfo>;
  Mutation: ResolverTypeWrapper<{}>;
  Nutrient: ResolverTypeWrapper<Nutrient>;
  NutrientInfo: ResolverTypeWrapper<NutrientInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Food: Food;
  Greeting: Greeting;
  IngredientInfo: IngredientInfo;
  MetaInfo: MetaInfo;
  Mutation: {};
  Nutrient: Nutrient;
  NutrientInfo: NutrientInfo;
  Query: {};
  String: Scalars['String'];
};

export type FoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Food'] = ResolversParentTypes['Food']> = {
  ingredientInfo?: Resolver<Maybe<Array<ResolversTypes['IngredientInfo']>>, ParentType, ContextType>;
  metaInfo?: Resolver<Maybe<Array<ResolversTypes['MetaInfo']>>, ParentType, ContextType>;
  nutrientInfo?: Resolver<Maybe<Array<ResolversTypes['NutrientInfo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GreetingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Greeting'] = ResolversParentTypes['Greeting']> = {
  response?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IngredientInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['IngredientInfo'] = ResolversParentTypes['IngredientInfo']> = {
  ingredients?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetaInfo'] = ResolversParentTypes['MetaInfo']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  upc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NutrientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Nutrient'] = ResolversParentTypes['Nutrient']> = {
  nutrientName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NutrientInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['NutrientInfo'] = ResolversParentTypes['NutrientInfo']> = {
  nutrients?: Resolver<Array<ResolversTypes['Nutrient']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food?: Resolver<ResolversTypes['Food'], ParentType, ContextType, RequireFields<QueryFoodArgs, 'food'>>;
  helloWorld?: Resolver<ResolversTypes['Greeting'], ParentType, ContextType, RequireFields<QueryHelloWorldArgs, 'name'>>;
};

export type Resolvers<ContextType = any> = {
  Food?: FoodResolvers<ContextType>;
  Greeting?: GreetingResolvers<ContextType>;
  IngredientInfo?: IngredientInfoResolvers<ContextType>;
  MetaInfo?: MetaInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Nutrient?: NutrientResolvers<ContextType>;
  NutrientInfo?: NutrientInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

