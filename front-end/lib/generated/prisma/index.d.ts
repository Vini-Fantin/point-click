
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model items
 * 
 */
export type items = $Result.DefaultSelection<Prisma.$itemsPayload>
/**
 * Model leaderboard
 * 
 */
export type leaderboard = $Result.DefaultSelection<Prisma.$leaderboardPayload>
/**
 * Model places
 * 
 */
export type places = $Result.DefaultSelection<Prisma.$placesPayload>
/**
 * Model rooms
 * 
 */
export type rooms = $Result.DefaultSelection<Prisma.$roomsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.items.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.items.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.items`: Exposes CRUD operations for the **items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboard`: Exposes CRUD operations for the **leaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaderboards
    * const leaderboards = await prisma.leaderboard.findMany()
    * ```
    */
  get leaderboard(): Prisma.leaderboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.places`: Exposes CRUD operations for the **places** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.places.findMany()
    * ```
    */
  get places(): Prisma.placesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.roomsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    items: 'items',
    leaderboard: 'leaderboard',
    places: 'places',
    rooms: 'rooms'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "items" | "leaderboard" | "places" | "rooms"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      items: {
        payload: Prisma.$itemsPayload<ExtArgs>
        fields: Prisma.itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findFirst: {
            args: Prisma.itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findMany: {
            args: Prisma.itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          create: {
            args: Prisma.itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          createMany: {
            args: Prisma.itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          update: {
            args: Prisma.itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          deleteMany: {
            args: Prisma.itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      leaderboard: {
        payload: Prisma.$leaderboardPayload<ExtArgs>
        fields: Prisma.leaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>
          }
          findFirst: {
            args: Prisma.leaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>
          }
          findMany: {
            args: Prisma.leaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>[]
          }
          create: {
            args: Prisma.leaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>
          }
          createMany: {
            args: Prisma.leaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.leaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>
          }
          update: {
            args: Prisma.leaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>
          }
          deleteMany: {
            args: Prisma.leaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.leaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaderboardPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboard>
          }
          groupBy: {
            args: Prisma.leaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.leaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardCountAggregateOutputType> | number
          }
        }
      }
      places: {
        payload: Prisma.$placesPayload<ExtArgs>
        fields: Prisma.placesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.placesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.placesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          findFirst: {
            args: Prisma.placesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.placesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          findMany: {
            args: Prisma.placesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>[]
          }
          create: {
            args: Prisma.placesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          createMany: {
            args: Prisma.placesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.placesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          update: {
            args: Prisma.placesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          deleteMany: {
            args: Prisma.placesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.placesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.placesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          aggregate: {
            args: Prisma.PlacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaces>
          }
          groupBy: {
            args: Prisma.placesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.placesCountArgs<ExtArgs>
            result: $Utils.Optional<PlacesCountAggregateOutputType> | number
          }
        }
      }
      rooms: {
        payload: Prisma.$roomsPayload<ExtArgs>
        fields: Prisma.roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findFirst: {
            args: Prisma.roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findMany: {
            args: Prisma.roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          create: {
            args: Prisma.roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          createMany: {
            args: Prisma.roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          update: {
            args: Prisma.roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          deleteMany: {
            args: Prisma.roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    items?: itemsOmit
    leaderboard?: leaderboardOmit
    places?: placesOmit
    rooms?: roomsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlacesCountOutputType
   */

  export type PlacesCountOutputType = {
    items: number
  }

  export type PlacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PlacesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacesCountOutputType
     */
    select?: PlacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    places: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | RoomsCountOutputTypeCountPlacesArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: placesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    id: number | null
    score: number | null
    place_id: number | null
  }

  export type ItemsSumAggregateOutputType = {
    id: number | null
    score: number | null
    place_id: number | null
  }

  export type ItemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    score: number | null
    place_id: number | null
  }

  export type ItemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    score: number | null
    place_id: number | null
  }

  export type ItemsCountAggregateOutputType = {
    id: number
    name: number
    score: number
    place_id: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    id?: true
    score?: true
    place_id?: true
  }

  export type ItemsSumAggregateInputType = {
    id?: true
    score?: true
    place_id?: true
  }

  export type ItemsMinAggregateInputType = {
    id?: true
    name?: true
    score?: true
    place_id?: true
  }

  export type ItemsMaxAggregateInputType = {
    id?: true
    name?: true
    score?: true
    place_id?: true
  }

  export type ItemsCountAggregateInputType = {
    id?: true
    name?: true
    score?: true
    place_id?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to aggregate.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithAggregationInput | itemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    id: number
    name: string
    score: number
    place_id: number
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    score?: boolean
    place_id?: boolean
    places?: boolean | placesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>



  export type itemsSelectScalar = {
    id?: boolean
    name?: boolean
    score?: boolean
    place_id?: boolean
  }

  export type itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "score" | "place_id", ExtArgs["result"]["items"]>
  export type itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | placesDefaultArgs<ExtArgs>
  }

  export type $itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items"
    objects: {
      places: Prisma.$placesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      score: number
      place_id: number
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type itemsGetPayload<S extends boolean | null | undefined | itemsDefaultArgs> = $Result.GetResult<Prisma.$itemsPayload, S>

  type itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items'], meta: { name: 'items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {itemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemsFindUniqueArgs>(args: SelectSubset<T, itemsFindUniqueArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemsFindFirstArgs>(args?: SelectSubset<T, itemsFindFirstArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemsWithIdOnly = await prisma.items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itemsFindManyArgs>(args?: SelectSubset<T, itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items.
     * @param {itemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends itemsCreateArgs>(args: SelectSubset<T, itemsCreateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemsCreateManyArgs>(args?: SelectSubset<T, itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Items.
     * @param {itemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends itemsDeleteArgs>(args: SelectSubset<T, itemsDeleteArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items.
     * @param {itemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemsUpdateArgs>(args: SelectSubset<T, itemsUpdateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemsDeleteManyArgs>(args?: SelectSubset<T, itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemsUpdateManyArgs>(args: SelectSubset<T, itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {itemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends itemsUpsertArgs>(args: SelectSubset<T, itemsUpsertArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemsCountArgs>(
      args?: Subset<T, itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemsGroupByArgs['orderBy'] }
        : { orderBy?: itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items model
   */
  readonly fields: itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    places<T extends placesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, placesDefaultArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the items model
   */
  interface itemsFieldRefs {
    readonly id: FieldRef<"items", 'Int'>
    readonly name: FieldRef<"items", 'String'>
    readonly score: FieldRef<"items", 'Int'>
    readonly place_id: FieldRef<"items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * items findUnique
   */
  export type itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findUniqueOrThrow
   */
  export type itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findFirst
   */
  export type itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findFirstOrThrow
   */
  export type itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findMany
   */
  export type itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items create
   */
  export type itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a items.
     */
    data: XOR<itemsCreateInput, itemsUncheckedCreateInput>
  }

  /**
   * items createMany
   */
  export type itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items update
   */
  export type itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a items.
     */
    data: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
    /**
     * Choose, which items to update.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items updateMany
   */
  export type itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * items upsert
   */
  export type itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the items to update in case it exists.
     */
    where: itemsWhereUniqueInput
    /**
     * In case the items found by the `where` argument doesn't exist, create a new items with this data.
     */
    create: XOR<itemsCreateInput, itemsUncheckedCreateInput>
    /**
     * In case the items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
  }

  /**
   * items delete
   */
  export type itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter which items to delete.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items deleteMany
   */
  export type itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * items without action
   */
  export type itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
  }


  /**
   * Model leaderboard
   */

  export type AggregateLeaderboard = {
    _count: LeaderboardCountAggregateOutputType | null
    _avg: LeaderboardAvgAggregateOutputType | null
    _sum: LeaderboardSumAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  export type LeaderboardAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type LeaderboardSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type LeaderboardMinAggregateOutputType = {
    id: number | null
    name: string | null
    score: number | null
  }

  export type LeaderboardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    score: number | null
  }

  export type LeaderboardCountAggregateOutputType = {
    id: number
    name: number
    score: number
    _all: number
  }


  export type LeaderboardAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type LeaderboardSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type LeaderboardMinAggregateInputType = {
    id?: true
    name?: true
    score?: true
  }

  export type LeaderboardMaxAggregateInputType = {
    id?: true
    name?: true
    score?: true
  }

  export type LeaderboardCountAggregateInputType = {
    id?: true
    name?: true
    score?: true
    _all?: true
  }

  export type LeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leaderboard to aggregate.
     */
    where?: leaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboards to fetch.
     */
    orderBy?: leaderboardOrderByWithRelationInput | leaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leaderboards
    **/
    _count?: true | LeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardMaxAggregateInputType
  }

  export type GetLeaderboardAggregateType<T extends LeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboard[P]>
      : GetScalarType<T[P], AggregateLeaderboard[P]>
  }




  export type leaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leaderboardWhereInput
    orderBy?: leaderboardOrderByWithAggregationInput | leaderboardOrderByWithAggregationInput[]
    by: LeaderboardScalarFieldEnum[] | LeaderboardScalarFieldEnum
    having?: leaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardCountAggregateInputType | true
    _avg?: LeaderboardAvgAggregateInputType
    _sum?: LeaderboardSumAggregateInputType
    _min?: LeaderboardMinAggregateInputType
    _max?: LeaderboardMaxAggregateInputType
  }

  export type LeaderboardGroupByOutputType = {
    id: number
    name: string
    score: number
    _count: LeaderboardCountAggregateOutputType | null
    _avg: LeaderboardAvgAggregateOutputType | null
    _sum: LeaderboardSumAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  type GetLeaderboardGroupByPayload<T extends leaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type leaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    score?: boolean
  }, ExtArgs["result"]["leaderboard"]>



  export type leaderboardSelectScalar = {
    id?: boolean
    name?: boolean
    score?: boolean
  }

  export type leaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "score", ExtArgs["result"]["leaderboard"]>

  export type $leaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leaderboard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      score: number
    }, ExtArgs["result"]["leaderboard"]>
    composites: {}
  }

  type leaderboardGetPayload<S extends boolean | null | undefined | leaderboardDefaultArgs> = $Result.GetResult<Prisma.$leaderboardPayload, S>

  type leaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardCountAggregateInputType | true
    }

  export interface leaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leaderboard'], meta: { name: 'leaderboard' } }
    /**
     * Find zero or one Leaderboard that matches the filter.
     * @param {leaderboardFindUniqueArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leaderboardFindUniqueArgs>(args: SelectSubset<T, leaderboardFindUniqueArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leaderboardFindUniqueOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, leaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboardFindFirstArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leaderboardFindFirstArgs>(args?: SelectSubset<T, leaderboardFindFirstArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboardFindFirstOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, leaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany()
     * 
     * // Get first 10 Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leaderboardFindManyArgs>(args?: SelectSubset<T, leaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leaderboard.
     * @param {leaderboardCreateArgs} args - Arguments to create a Leaderboard.
     * @example
     * // Create one Leaderboard
     * const Leaderboard = await prisma.leaderboard.create({
     *   data: {
     *     // ... data to create a Leaderboard
     *   }
     * })
     * 
     */
    create<T extends leaderboardCreateArgs>(args: SelectSubset<T, leaderboardCreateArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaderboards.
     * @param {leaderboardCreateManyArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leaderboardCreateManyArgs>(args?: SelectSubset<T, leaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Leaderboard.
     * @param {leaderboardDeleteArgs} args - Arguments to delete one Leaderboard.
     * @example
     * // Delete one Leaderboard
     * const Leaderboard = await prisma.leaderboard.delete({
     *   where: {
     *     // ... filter to delete one Leaderboard
     *   }
     * })
     * 
     */
    delete<T extends leaderboardDeleteArgs>(args: SelectSubset<T, leaderboardDeleteArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leaderboard.
     * @param {leaderboardUpdateArgs} args - Arguments to update one Leaderboard.
     * @example
     * // Update one Leaderboard
     * const leaderboard = await prisma.leaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leaderboardUpdateArgs>(args: SelectSubset<T, leaderboardUpdateArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaderboards.
     * @param {leaderboardDeleteManyArgs} args - Arguments to filter Leaderboards to delete.
     * @example
     * // Delete a few Leaderboards
     * const { count } = await prisma.leaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leaderboardDeleteManyArgs>(args?: SelectSubset<T, leaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leaderboardUpdateManyArgs>(args: SelectSubset<T, leaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Leaderboard.
     * @param {leaderboardUpsertArgs} args - Arguments to update or create a Leaderboard.
     * @example
     * // Update or create a Leaderboard
     * const leaderboard = await prisma.leaderboard.upsert({
     *   create: {
     *     // ... data to create a Leaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaderboard we want to update
     *   }
     * })
     */
    upsert<T extends leaderboardUpsertArgs>(args: SelectSubset<T, leaderboardUpsertArgs<ExtArgs>>): Prisma__leaderboardClient<$Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboardCountArgs} args - Arguments to filter Leaderboards to count.
     * @example
     * // Count the number of Leaderboards
     * const count = await prisma.leaderboard.count({
     *   where: {
     *     // ... the filter for the Leaderboards we want to count
     *   }
     * })
    **/
    count<T extends leaderboardCountArgs>(
      args?: Subset<T, leaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderboardAggregateArgs>(args: Subset<T, LeaderboardAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardAggregateType<T>>

    /**
     * Group by Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leaderboardGroupByArgs['orderBy'] }
        : { orderBy?: leaderboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leaderboard model
   */
  readonly fields: leaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leaderboard model
   */
  interface leaderboardFieldRefs {
    readonly id: FieldRef<"leaderboard", 'Int'>
    readonly name: FieldRef<"leaderboard", 'String'>
    readonly score: FieldRef<"leaderboard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * leaderboard findUnique
   */
  export type leaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * Filter, which leaderboard to fetch.
     */
    where: leaderboardWhereUniqueInput
  }

  /**
   * leaderboard findUniqueOrThrow
   */
  export type leaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * Filter, which leaderboard to fetch.
     */
    where: leaderboardWhereUniqueInput
  }

  /**
   * leaderboard findFirst
   */
  export type leaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * Filter, which leaderboard to fetch.
     */
    where?: leaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboards to fetch.
     */
    orderBy?: leaderboardOrderByWithRelationInput | leaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leaderboards.
     */
    cursor?: leaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * leaderboard findFirstOrThrow
   */
  export type leaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * Filter, which leaderboard to fetch.
     */
    where?: leaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboards to fetch.
     */
    orderBy?: leaderboardOrderByWithRelationInput | leaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leaderboards.
     */
    cursor?: leaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * leaderboard findMany
   */
  export type leaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * Filter, which leaderboards to fetch.
     */
    where?: leaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboards to fetch.
     */
    orderBy?: leaderboardOrderByWithRelationInput | leaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leaderboards.
     */
    cursor?: leaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboards.
     */
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * leaderboard create
   */
  export type leaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * The data needed to create a leaderboard.
     */
    data: XOR<leaderboardCreateInput, leaderboardUncheckedCreateInput>
  }

  /**
   * leaderboard createMany
   */
  export type leaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leaderboards.
     */
    data: leaderboardCreateManyInput | leaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leaderboard update
   */
  export type leaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * The data needed to update a leaderboard.
     */
    data: XOR<leaderboardUpdateInput, leaderboardUncheckedUpdateInput>
    /**
     * Choose, which leaderboard to update.
     */
    where: leaderboardWhereUniqueInput
  }

  /**
   * leaderboard updateMany
   */
  export type leaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leaderboards.
     */
    data: XOR<leaderboardUpdateManyMutationInput, leaderboardUncheckedUpdateManyInput>
    /**
     * Filter which leaderboards to update
     */
    where?: leaderboardWhereInput
    /**
     * Limit how many leaderboards to update.
     */
    limit?: number
  }

  /**
   * leaderboard upsert
   */
  export type leaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * The filter to search for the leaderboard to update in case it exists.
     */
    where: leaderboardWhereUniqueInput
    /**
     * In case the leaderboard found by the `where` argument doesn't exist, create a new leaderboard with this data.
     */
    create: XOR<leaderboardCreateInput, leaderboardUncheckedCreateInput>
    /**
     * In case the leaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leaderboardUpdateInput, leaderboardUncheckedUpdateInput>
  }

  /**
   * leaderboard delete
   */
  export type leaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
    /**
     * Filter which leaderboard to delete.
     */
    where: leaderboardWhereUniqueInput
  }

  /**
   * leaderboard deleteMany
   */
  export type leaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leaderboards to delete
     */
    where?: leaderboardWhereInput
    /**
     * Limit how many leaderboards to delete.
     */
    limit?: number
  }

  /**
   * leaderboard without action
   */
  export type leaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leaderboard
     */
    select?: leaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leaderboard
     */
    omit?: leaderboardOmit<ExtArgs> | null
  }


  /**
   * Model places
   */

  export type AggregatePlaces = {
    _count: PlacesCountAggregateOutputType | null
    _avg: PlacesAvgAggregateOutputType | null
    _sum: PlacesSumAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  export type PlacesAvgAggregateOutputType = {
    id: number | null
    room_id: number | null
  }

  export type PlacesSumAggregateOutputType = {
    id: number | null
    room_id: number | null
  }

  export type PlacesMinAggregateOutputType = {
    id: number | null
    name: string | null
    room_id: number | null
  }

  export type PlacesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    room_id: number | null
  }

  export type PlacesCountAggregateOutputType = {
    id: number
    name: number
    room_id: number
    _all: number
  }


  export type PlacesAvgAggregateInputType = {
    id?: true
    room_id?: true
  }

  export type PlacesSumAggregateInputType = {
    id?: true
    room_id?: true
  }

  export type PlacesMinAggregateInputType = {
    id?: true
    name?: true
    room_id?: true
  }

  export type PlacesMaxAggregateInputType = {
    id?: true
    name?: true
    room_id?: true
  }

  export type PlacesCountAggregateInputType = {
    id?: true
    name?: true
    room_id?: true
    _all?: true
  }

  export type PlacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which places to aggregate.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned places
    **/
    _count?: true | PlacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacesMaxAggregateInputType
  }

  export type GetPlacesAggregateType<T extends PlacesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaces[P]>
      : GetScalarType<T[P], AggregatePlaces[P]>
  }




  export type placesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: placesWhereInput
    orderBy?: placesOrderByWithAggregationInput | placesOrderByWithAggregationInput[]
    by: PlacesScalarFieldEnum[] | PlacesScalarFieldEnum
    having?: placesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacesCountAggregateInputType | true
    _avg?: PlacesAvgAggregateInputType
    _sum?: PlacesSumAggregateInputType
    _min?: PlacesMinAggregateInputType
    _max?: PlacesMaxAggregateInputType
  }

  export type PlacesGroupByOutputType = {
    id: number
    name: string
    room_id: number
    _count: PlacesCountAggregateOutputType | null
    _avg: PlacesAvgAggregateOutputType | null
    _sum: PlacesSumAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  type GetPlacesGroupByPayload<T extends placesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacesGroupByOutputType[P]>
            : GetScalarType<T[P], PlacesGroupByOutputType[P]>
        }
      >
    >


  export type placesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    room_id?: boolean
    items?: boolean | places$itemsArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    _count?: boolean | PlacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>



  export type placesSelectScalar = {
    id?: boolean
    name?: boolean
    room_id?: boolean
  }

  export type placesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "room_id", ExtArgs["result"]["places"]>
  export type placesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | places$itemsArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    _count?: boolean | PlacesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $placesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "places"
    objects: {
      items: Prisma.$itemsPayload<ExtArgs>[]
      rooms: Prisma.$roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      room_id: number
    }, ExtArgs["result"]["places"]>
    composites: {}
  }

  type placesGetPayload<S extends boolean | null | undefined | placesDefaultArgs> = $Result.GetResult<Prisma.$placesPayload, S>

  type placesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<placesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacesCountAggregateInputType | true
    }

  export interface placesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['places'], meta: { name: 'places' } }
    /**
     * Find zero or one Places that matches the filter.
     * @param {placesFindUniqueArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends placesFindUniqueArgs>(args: SelectSubset<T, placesFindUniqueArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Places that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {placesFindUniqueOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends placesFindUniqueOrThrowArgs>(args: SelectSubset<T, placesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesFindFirstArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends placesFindFirstArgs>(args?: SelectSubset<T, placesFindFirstArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Places that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesFindFirstOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends placesFindFirstOrThrowArgs>(args?: SelectSubset<T, placesFindFirstOrThrowArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.places.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.places.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placesWithIdOnly = await prisma.places.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends placesFindManyArgs>(args?: SelectSubset<T, placesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Places.
     * @param {placesCreateArgs} args - Arguments to create a Places.
     * @example
     * // Create one Places
     * const Places = await prisma.places.create({
     *   data: {
     *     // ... data to create a Places
     *   }
     * })
     * 
     */
    create<T extends placesCreateArgs>(args: SelectSubset<T, placesCreateArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {placesCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends placesCreateManyArgs>(args?: SelectSubset<T, placesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Places.
     * @param {placesDeleteArgs} args - Arguments to delete one Places.
     * @example
     * // Delete one Places
     * const Places = await prisma.places.delete({
     *   where: {
     *     // ... filter to delete one Places
     *   }
     * })
     * 
     */
    delete<T extends placesDeleteArgs>(args: SelectSubset<T, placesDeleteArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Places.
     * @param {placesUpdateArgs} args - Arguments to update one Places.
     * @example
     * // Update one Places
     * const places = await prisma.places.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends placesUpdateArgs>(args: SelectSubset<T, placesUpdateArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {placesDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.places.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends placesDeleteManyArgs>(args?: SelectSubset<T, placesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const places = await prisma.places.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends placesUpdateManyArgs>(args: SelectSubset<T, placesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Places.
     * @param {placesUpsertArgs} args - Arguments to update or create a Places.
     * @example
     * // Update or create a Places
     * const places = await prisma.places.upsert({
     *   create: {
     *     // ... data to create a Places
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Places we want to update
     *   }
     * })
     */
    upsert<T extends placesUpsertArgs>(args: SelectSubset<T, placesUpsertArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.places.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends placesCountArgs>(
      args?: Subset<T, placesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlacesAggregateArgs>(args: Subset<T, PlacesAggregateArgs>): Prisma.PrismaPromise<GetPlacesAggregateType<T>>

    /**
     * Group by Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends placesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: placesGroupByArgs['orderBy'] }
        : { orderBy?: placesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, placesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the places model
   */
  readonly fields: placesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for places.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__placesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends places$itemsArgs<ExtArgs> = {}>(args?: Subset<T, places$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the places model
   */
  interface placesFieldRefs {
    readonly id: FieldRef<"places", 'Int'>
    readonly name: FieldRef<"places", 'String'>
    readonly room_id: FieldRef<"places", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * places findUnique
   */
  export type placesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places findUniqueOrThrow
   */
  export type placesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places findFirst
   */
  export type placesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for places.
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * places findFirstOrThrow
   */
  export type placesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for places.
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * places findMany
   */
  export type placesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing places.
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * places create
   */
  export type placesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * The data needed to create a places.
     */
    data: XOR<placesCreateInput, placesUncheckedCreateInput>
  }

  /**
   * places createMany
   */
  export type placesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many places.
     */
    data: placesCreateManyInput | placesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * places update
   */
  export type placesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * The data needed to update a places.
     */
    data: XOR<placesUpdateInput, placesUncheckedUpdateInput>
    /**
     * Choose, which places to update.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places updateMany
   */
  export type placesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update places.
     */
    data: XOR<placesUpdateManyMutationInput, placesUncheckedUpdateManyInput>
    /**
     * Filter which places to update
     */
    where?: placesWhereInput
    /**
     * Limit how many places to update.
     */
    limit?: number
  }

  /**
   * places upsert
   */
  export type placesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * The filter to search for the places to update in case it exists.
     */
    where: placesWhereUniqueInput
    /**
     * In case the places found by the `where` argument doesn't exist, create a new places with this data.
     */
    create: XOR<placesCreateInput, placesUncheckedCreateInput>
    /**
     * In case the places was found with the provided `where` argument, update it with this data.
     */
    update: XOR<placesUpdateInput, placesUncheckedUpdateInput>
  }

  /**
   * places delete
   */
  export type placesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter which places to delete.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places deleteMany
   */
  export type placesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which places to delete
     */
    where?: placesWhereInput
    /**
     * Limit how many places to delete.
     */
    limit?: number
  }

  /**
   * places.items
   */
  export type places$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    cursor?: itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * places without action
   */
  export type placesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
  }


  /**
   * Model rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomsSumAggregateOutputType = {
    id: number | null
  }

  export type RoomsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    id?: true
  }

  export type RoomsSumAggregateInputType = {
    id?: true
  }

  export type RoomsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to aggregate.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomsWhereInput
    orderBy?: roomsOrderByWithAggregationInput | roomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: number
    name: string
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    places?: boolean | rooms$placesArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>



  export type roomsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["rooms"]>
  export type roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | rooms$placesArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rooms"
    objects: {
      places: Prisma.$placesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type roomsGetPayload<S extends boolean | null | undefined | roomsDefaultArgs> = $Result.GetResult<Prisma.$roomsPayload, S>

  type roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rooms'], meta: { name: 'rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {roomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomsFindUniqueArgs>(args: SelectSubset<T, roomsFindUniqueArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomsFindFirstArgs>(args?: SelectSubset<T, roomsFindFirstArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomsFindManyArgs>(args?: SelectSubset<T, roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {roomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends roomsCreateArgs>(args: SelectSubset<T, roomsCreateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomsCreateManyArgs>(args?: SelectSubset<T, roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rooms.
     * @param {roomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends roomsDeleteArgs>(args: SelectSubset<T, roomsDeleteArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {roomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomsUpdateArgs>(args: SelectSubset<T, roomsUpdateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomsDeleteManyArgs>(args?: SelectSubset<T, roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomsUpdateManyArgs>(args: SelectSubset<T, roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rooms.
     * @param {roomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends roomsUpsertArgs>(args: SelectSubset<T, roomsUpsertArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomsCountArgs>(
      args?: Subset<T, roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomsGroupByArgs['orderBy'] }
        : { orderBy?: roomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rooms model
   */
  readonly fields: roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    places<T extends rooms$placesArgs<ExtArgs> = {}>(args?: Subset<T, rooms$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rooms model
   */
  interface roomsFieldRefs {
    readonly id: FieldRef<"rooms", 'Int'>
    readonly name: FieldRef<"rooms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rooms findUnique
   */
  export type roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findUniqueOrThrow
   */
  export type roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findFirst
   */
  export type roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findFirstOrThrow
   */
  export type roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findMany
   */
  export type roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms create
   */
  export type roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a rooms.
     */
    data: XOR<roomsCreateInput, roomsUncheckedCreateInput>
  }

  /**
   * rooms createMany
   */
  export type roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms update
   */
  export type roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a rooms.
     */
    data: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
    /**
     * Choose, which rooms to update.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms updateMany
   */
  export type roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms upsert
   */
  export type roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the rooms to update in case it exists.
     */
    where: roomsWhereUniqueInput
    /**
     * In case the rooms found by the `where` argument doesn't exist, create a new rooms with this data.
     */
    create: XOR<roomsCreateInput, roomsUncheckedCreateInput>
    /**
     * In case the rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
  }

  /**
   * rooms delete
   */
  export type roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter which rooms to delete.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms deleteMany
   */
  export type roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * rooms.places
   */
  export type rooms$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    where?: placesWhereInput
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    cursor?: placesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * rooms without action
   */
  export type roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    score: 'score',
    place_id: 'place_id'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const LeaderboardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    score: 'score'
  };

  export type LeaderboardScalarFieldEnum = (typeof LeaderboardScalarFieldEnum)[keyof typeof LeaderboardScalarFieldEnum]


  export const PlacesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    room_id: 'room_id'
  };

  export type PlacesScalarFieldEnum = (typeof PlacesScalarFieldEnum)[keyof typeof PlacesScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const itemsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type itemsOrderByRelevanceFieldEnum = (typeof itemsOrderByRelevanceFieldEnum)[keyof typeof itemsOrderByRelevanceFieldEnum]


  export const leaderboardOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type leaderboardOrderByRelevanceFieldEnum = (typeof leaderboardOrderByRelevanceFieldEnum)[keyof typeof leaderboardOrderByRelevanceFieldEnum]


  export const placesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type placesOrderByRelevanceFieldEnum = (typeof placesOrderByRelevanceFieldEnum)[keyof typeof placesOrderByRelevanceFieldEnum]


  export const roomsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type roomsOrderByRelevanceFieldEnum = (typeof roomsOrderByRelevanceFieldEnum)[keyof typeof roomsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type itemsWhereInput = {
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    id?: IntFilter<"items"> | number
    name?: StringFilter<"items"> | string
    score?: IntFilter<"items"> | number
    place_id?: IntFilter<"items"> | number
    places?: XOR<PlacesScalarRelationFilter, placesWhereInput>
  }

  export type itemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
    places?: placesOrderByWithRelationInput
    _relevance?: itemsOrderByRelevanceInput
  }

  export type itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    name?: StringFilter<"items"> | string
    score?: IntFilter<"items"> | number
    place_id?: IntFilter<"items"> | number
    places?: XOR<PlacesScalarRelationFilter, placesWhereInput>
  }, "id" | "id">

  export type itemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
    _count?: itemsCountOrderByAggregateInput
    _avg?: itemsAvgOrderByAggregateInput
    _max?: itemsMaxOrderByAggregateInput
    _min?: itemsMinOrderByAggregateInput
    _sum?: itemsSumOrderByAggregateInput
  }

  export type itemsScalarWhereWithAggregatesInput = {
    AND?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    OR?: itemsScalarWhereWithAggregatesInput[]
    NOT?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"items"> | number
    name?: StringWithAggregatesFilter<"items"> | string
    score?: IntWithAggregatesFilter<"items"> | number
    place_id?: IntWithAggregatesFilter<"items"> | number
  }

  export type leaderboardWhereInput = {
    AND?: leaderboardWhereInput | leaderboardWhereInput[]
    OR?: leaderboardWhereInput[]
    NOT?: leaderboardWhereInput | leaderboardWhereInput[]
    id?: IntFilter<"leaderboard"> | number
    name?: StringFilter<"leaderboard"> | string
    score?: IntFilter<"leaderboard"> | number
  }

  export type leaderboardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    _relevance?: leaderboardOrderByRelevanceInput
  }

  export type leaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leaderboardWhereInput | leaderboardWhereInput[]
    OR?: leaderboardWhereInput[]
    NOT?: leaderboardWhereInput | leaderboardWhereInput[]
    name?: StringFilter<"leaderboard"> | string
    score?: IntFilter<"leaderboard"> | number
  }, "id" | "id">

  export type leaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    _count?: leaderboardCountOrderByAggregateInput
    _avg?: leaderboardAvgOrderByAggregateInput
    _max?: leaderboardMaxOrderByAggregateInput
    _min?: leaderboardMinOrderByAggregateInput
    _sum?: leaderboardSumOrderByAggregateInput
  }

  export type leaderboardScalarWhereWithAggregatesInput = {
    AND?: leaderboardScalarWhereWithAggregatesInput | leaderboardScalarWhereWithAggregatesInput[]
    OR?: leaderboardScalarWhereWithAggregatesInput[]
    NOT?: leaderboardScalarWhereWithAggregatesInput | leaderboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leaderboard"> | number
    name?: StringWithAggregatesFilter<"leaderboard"> | string
    score?: IntWithAggregatesFilter<"leaderboard"> | number
  }

  export type placesWhereInput = {
    AND?: placesWhereInput | placesWhereInput[]
    OR?: placesWhereInput[]
    NOT?: placesWhereInput | placesWhereInput[]
    id?: IntFilter<"places"> | number
    name?: StringFilter<"places"> | string
    room_id?: IntFilter<"places"> | number
    items?: ItemsListRelationFilter
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }

  export type placesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
    items?: itemsOrderByRelationAggregateInput
    rooms?: roomsOrderByWithRelationInput
    _relevance?: placesOrderByRelevanceInput
  }

  export type placesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: placesWhereInput | placesWhereInput[]
    OR?: placesWhereInput[]
    NOT?: placesWhereInput | placesWhereInput[]
    name?: StringFilter<"places"> | string
    room_id?: IntFilter<"places"> | number
    items?: ItemsListRelationFilter
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }, "id" | "id">

  export type placesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
    _count?: placesCountOrderByAggregateInput
    _avg?: placesAvgOrderByAggregateInput
    _max?: placesMaxOrderByAggregateInput
    _min?: placesMinOrderByAggregateInput
    _sum?: placesSumOrderByAggregateInput
  }

  export type placesScalarWhereWithAggregatesInput = {
    AND?: placesScalarWhereWithAggregatesInput | placesScalarWhereWithAggregatesInput[]
    OR?: placesScalarWhereWithAggregatesInput[]
    NOT?: placesScalarWhereWithAggregatesInput | placesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"places"> | number
    name?: StringWithAggregatesFilter<"places"> | string
    room_id?: IntWithAggregatesFilter<"places"> | number
  }

  export type roomsWhereInput = {
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    id?: IntFilter<"rooms"> | number
    name?: StringFilter<"rooms"> | string
    places?: PlacesListRelationFilter
  }

  export type roomsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    places?: placesOrderByRelationAggregateInput
    _relevance?: roomsOrderByRelevanceInput
  }

  export type roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    name?: StringFilter<"rooms"> | string
    places?: PlacesListRelationFilter
  }, "id" | "id">

  export type roomsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: roomsCountOrderByAggregateInput
    _avg?: roomsAvgOrderByAggregateInput
    _max?: roomsMaxOrderByAggregateInput
    _min?: roomsMinOrderByAggregateInput
    _sum?: roomsSumOrderByAggregateInput
  }

  export type roomsScalarWhereWithAggregatesInput = {
    AND?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    OR?: roomsScalarWhereWithAggregatesInput[]
    NOT?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rooms"> | number
    name?: StringWithAggregatesFilter<"rooms"> | string
  }

  export type itemsCreateInput = {
    name: string
    score: number
    places: placesCreateNestedOneWithoutItemsInput
  }

  export type itemsUncheckedCreateInput = {
    id?: number
    name: string
    score: number
    place_id: number
  }

  export type itemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    places?: placesUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsCreateManyInput = {
    id?: number
    name: string
    score: number
    place_id: number
  }

  export type itemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
  }

  export type leaderboardCreateInput = {
    name: string
    score: number
  }

  export type leaderboardUncheckedCreateInput = {
    id?: number
    name: string
    score: number
  }

  export type leaderboardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type leaderboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type leaderboardCreateManyInput = {
    id?: number
    name: string
    score: number
  }

  export type leaderboardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type leaderboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type placesCreateInput = {
    name: string
    items?: itemsCreateNestedManyWithoutPlacesInput
    rooms: roomsCreateNestedOneWithoutPlacesInput
  }

  export type placesUncheckedCreateInput = {
    id?: number
    name: string
    room_id: number
    items?: itemsUncheckedCreateNestedManyWithoutPlacesInput
  }

  export type placesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    items?: itemsUpdateManyWithoutPlacesNestedInput
    rooms?: roomsUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type placesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    room_id?: IntFieldUpdateOperationsInput | number
    items?: itemsUncheckedUpdateManyWithoutPlacesNestedInput
  }

  export type placesCreateManyInput = {
    id?: number
    name: string
    room_id: number
  }

  export type placesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type placesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    room_id?: IntFieldUpdateOperationsInput | number
  }

  export type roomsCreateInput = {
    name: string
    places?: placesCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateInput = {
    id?: number
    name: string
    places?: placesUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type roomsCreateManyInput = {
    id?: number
    name: string
  }

  export type roomsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PlacesScalarRelationFilter = {
    is?: placesWhereInput
    isNot?: placesWhereInput
  }

  export type itemsOrderByRelevanceInput = {
    fields: itemsOrderByRelevanceFieldEnum | itemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type itemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
  }

  export type itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
  }

  export type itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
  }

  export type itemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
  }

  export type itemsSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    place_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type leaderboardOrderByRelevanceInput = {
    fields: leaderboardOrderByRelevanceFieldEnum | leaderboardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type leaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
  }

  export type leaderboardAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type leaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
  }

  export type leaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
  }

  export type leaderboardSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ItemsListRelationFilter = {
    every?: itemsWhereInput
    some?: itemsWhereInput
    none?: itemsWhereInput
  }

  export type RoomsScalarRelationFilter = {
    is?: roomsWhereInput
    isNot?: roomsWhereInput
  }

  export type itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type placesOrderByRelevanceInput = {
    fields: placesOrderByRelevanceFieldEnum | placesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type placesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
  }

  export type placesAvgOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
  }

  export type placesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
  }

  export type placesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
  }

  export type placesSumOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
  }

  export type PlacesListRelationFilter = {
    every?: placesWhereInput
    some?: placesWhereInput
    none?: placesWhereInput
  }

  export type placesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomsOrderByRelevanceInput = {
    fields: roomsOrderByRelevanceFieldEnum | roomsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type roomsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roomsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roomsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roomsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roomsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type placesCreateNestedOneWithoutItemsInput = {
    create?: XOR<placesCreateWithoutItemsInput, placesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: placesCreateOrConnectWithoutItemsInput
    connect?: placesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type placesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<placesCreateWithoutItemsInput, placesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: placesCreateOrConnectWithoutItemsInput
    upsert?: placesUpsertWithoutItemsInput
    connect?: placesWhereUniqueInput
    update?: XOR<XOR<placesUpdateToOneWithWhereWithoutItemsInput, placesUpdateWithoutItemsInput>, placesUncheckedUpdateWithoutItemsInput>
  }

  export type itemsCreateNestedManyWithoutPlacesInput = {
    create?: XOR<itemsCreateWithoutPlacesInput, itemsUncheckedCreateWithoutPlacesInput> | itemsCreateWithoutPlacesInput[] | itemsUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutPlacesInput | itemsCreateOrConnectWithoutPlacesInput[]
    createMany?: itemsCreateManyPlacesInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type roomsCreateNestedOneWithoutPlacesInput = {
    create?: XOR<roomsCreateWithoutPlacesInput, roomsUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutPlacesInput
    connect?: roomsWhereUniqueInput
  }

  export type itemsUncheckedCreateNestedManyWithoutPlacesInput = {
    create?: XOR<itemsCreateWithoutPlacesInput, itemsUncheckedCreateWithoutPlacesInput> | itemsCreateWithoutPlacesInput[] | itemsUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutPlacesInput | itemsCreateOrConnectWithoutPlacesInput[]
    createMany?: itemsCreateManyPlacesInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type itemsUpdateManyWithoutPlacesNestedInput = {
    create?: XOR<itemsCreateWithoutPlacesInput, itemsUncheckedCreateWithoutPlacesInput> | itemsCreateWithoutPlacesInput[] | itemsUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutPlacesInput | itemsCreateOrConnectWithoutPlacesInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutPlacesInput | itemsUpsertWithWhereUniqueWithoutPlacesInput[]
    createMany?: itemsCreateManyPlacesInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutPlacesInput | itemsUpdateWithWhereUniqueWithoutPlacesInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutPlacesInput | itemsUpdateManyWithWhereWithoutPlacesInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type roomsUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<roomsCreateWithoutPlacesInput, roomsUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutPlacesInput
    upsert?: roomsUpsertWithoutPlacesInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutPlacesInput, roomsUpdateWithoutPlacesInput>, roomsUncheckedUpdateWithoutPlacesInput>
  }

  export type itemsUncheckedUpdateManyWithoutPlacesNestedInput = {
    create?: XOR<itemsCreateWithoutPlacesInput, itemsUncheckedCreateWithoutPlacesInput> | itemsCreateWithoutPlacesInput[] | itemsUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutPlacesInput | itemsCreateOrConnectWithoutPlacesInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutPlacesInput | itemsUpsertWithWhereUniqueWithoutPlacesInput[]
    createMany?: itemsCreateManyPlacesInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutPlacesInput | itemsUpdateWithWhereUniqueWithoutPlacesInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutPlacesInput | itemsUpdateManyWithWhereWithoutPlacesInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type placesCreateNestedManyWithoutRoomsInput = {
    create?: XOR<placesCreateWithoutRoomsInput, placesUncheckedCreateWithoutRoomsInput> | placesCreateWithoutRoomsInput[] | placesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: placesCreateOrConnectWithoutRoomsInput | placesCreateOrConnectWithoutRoomsInput[]
    createMany?: placesCreateManyRoomsInputEnvelope
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
  }

  export type placesUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<placesCreateWithoutRoomsInput, placesUncheckedCreateWithoutRoomsInput> | placesCreateWithoutRoomsInput[] | placesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: placesCreateOrConnectWithoutRoomsInput | placesCreateOrConnectWithoutRoomsInput[]
    createMany?: placesCreateManyRoomsInputEnvelope
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
  }

  export type placesUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<placesCreateWithoutRoomsInput, placesUncheckedCreateWithoutRoomsInput> | placesCreateWithoutRoomsInput[] | placesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: placesCreateOrConnectWithoutRoomsInput | placesCreateOrConnectWithoutRoomsInput[]
    upsert?: placesUpsertWithWhereUniqueWithoutRoomsInput | placesUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: placesCreateManyRoomsInputEnvelope
    set?: placesWhereUniqueInput | placesWhereUniqueInput[]
    disconnect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    delete?: placesWhereUniqueInput | placesWhereUniqueInput[]
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    update?: placesUpdateWithWhereUniqueWithoutRoomsInput | placesUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: placesUpdateManyWithWhereWithoutRoomsInput | placesUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: placesScalarWhereInput | placesScalarWhereInput[]
  }

  export type placesUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<placesCreateWithoutRoomsInput, placesUncheckedCreateWithoutRoomsInput> | placesCreateWithoutRoomsInput[] | placesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: placesCreateOrConnectWithoutRoomsInput | placesCreateOrConnectWithoutRoomsInput[]
    upsert?: placesUpsertWithWhereUniqueWithoutRoomsInput | placesUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: placesCreateManyRoomsInputEnvelope
    set?: placesWhereUniqueInput | placesWhereUniqueInput[]
    disconnect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    delete?: placesWhereUniqueInput | placesWhereUniqueInput[]
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    update?: placesUpdateWithWhereUniqueWithoutRoomsInput | placesUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: placesUpdateManyWithWhereWithoutRoomsInput | placesUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: placesScalarWhereInput | placesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type placesCreateWithoutItemsInput = {
    name: string
    rooms: roomsCreateNestedOneWithoutPlacesInput
  }

  export type placesUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    room_id: number
  }

  export type placesCreateOrConnectWithoutItemsInput = {
    where: placesWhereUniqueInput
    create: XOR<placesCreateWithoutItemsInput, placesUncheckedCreateWithoutItemsInput>
  }

  export type placesUpsertWithoutItemsInput = {
    update: XOR<placesUpdateWithoutItemsInput, placesUncheckedUpdateWithoutItemsInput>
    create: XOR<placesCreateWithoutItemsInput, placesUncheckedCreateWithoutItemsInput>
    where?: placesWhereInput
  }

  export type placesUpdateToOneWithWhereWithoutItemsInput = {
    where?: placesWhereInput
    data: XOR<placesUpdateWithoutItemsInput, placesUncheckedUpdateWithoutItemsInput>
  }

  export type placesUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms?: roomsUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type placesUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    room_id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsCreateWithoutPlacesInput = {
    name: string
    score: number
  }

  export type itemsUncheckedCreateWithoutPlacesInput = {
    id?: number
    name: string
    score: number
  }

  export type itemsCreateOrConnectWithoutPlacesInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutPlacesInput, itemsUncheckedCreateWithoutPlacesInput>
  }

  export type itemsCreateManyPlacesInputEnvelope = {
    data: itemsCreateManyPlacesInput | itemsCreateManyPlacesInput[]
    skipDuplicates?: boolean
  }

  export type roomsCreateWithoutPlacesInput = {
    name: string
  }

  export type roomsUncheckedCreateWithoutPlacesInput = {
    id?: number
    name: string
  }

  export type roomsCreateOrConnectWithoutPlacesInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutPlacesInput, roomsUncheckedCreateWithoutPlacesInput>
  }

  export type itemsUpsertWithWhereUniqueWithoutPlacesInput = {
    where: itemsWhereUniqueInput
    update: XOR<itemsUpdateWithoutPlacesInput, itemsUncheckedUpdateWithoutPlacesInput>
    create: XOR<itemsCreateWithoutPlacesInput, itemsUncheckedCreateWithoutPlacesInput>
  }

  export type itemsUpdateWithWhereUniqueWithoutPlacesInput = {
    where: itemsWhereUniqueInput
    data: XOR<itemsUpdateWithoutPlacesInput, itemsUncheckedUpdateWithoutPlacesInput>
  }

  export type itemsUpdateManyWithWhereWithoutPlacesInput = {
    where: itemsScalarWhereInput
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyWithoutPlacesInput>
  }

  export type itemsScalarWhereInput = {
    AND?: itemsScalarWhereInput | itemsScalarWhereInput[]
    OR?: itemsScalarWhereInput[]
    NOT?: itemsScalarWhereInput | itemsScalarWhereInput[]
    id?: IntFilter<"items"> | number
    name?: StringFilter<"items"> | string
    score?: IntFilter<"items"> | number
    place_id?: IntFilter<"items"> | number
  }

  export type roomsUpsertWithoutPlacesInput = {
    update: XOR<roomsUpdateWithoutPlacesInput, roomsUncheckedUpdateWithoutPlacesInput>
    create: XOR<roomsCreateWithoutPlacesInput, roomsUncheckedCreateWithoutPlacesInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutPlacesInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutPlacesInput, roomsUncheckedUpdateWithoutPlacesInput>
  }

  export type roomsUpdateWithoutPlacesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roomsUncheckedUpdateWithoutPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type placesCreateWithoutRoomsInput = {
    name: string
    items?: itemsCreateNestedManyWithoutPlacesInput
  }

  export type placesUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    items?: itemsUncheckedCreateNestedManyWithoutPlacesInput
  }

  export type placesCreateOrConnectWithoutRoomsInput = {
    where: placesWhereUniqueInput
    create: XOR<placesCreateWithoutRoomsInput, placesUncheckedCreateWithoutRoomsInput>
  }

  export type placesCreateManyRoomsInputEnvelope = {
    data: placesCreateManyRoomsInput | placesCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type placesUpsertWithWhereUniqueWithoutRoomsInput = {
    where: placesWhereUniqueInput
    update: XOR<placesUpdateWithoutRoomsInput, placesUncheckedUpdateWithoutRoomsInput>
    create: XOR<placesCreateWithoutRoomsInput, placesUncheckedCreateWithoutRoomsInput>
  }

  export type placesUpdateWithWhereUniqueWithoutRoomsInput = {
    where: placesWhereUniqueInput
    data: XOR<placesUpdateWithoutRoomsInput, placesUncheckedUpdateWithoutRoomsInput>
  }

  export type placesUpdateManyWithWhereWithoutRoomsInput = {
    where: placesScalarWhereInput
    data: XOR<placesUpdateManyMutationInput, placesUncheckedUpdateManyWithoutRoomsInput>
  }

  export type placesScalarWhereInput = {
    AND?: placesScalarWhereInput | placesScalarWhereInput[]
    OR?: placesScalarWhereInput[]
    NOT?: placesScalarWhereInput | placesScalarWhereInput[]
    id?: IntFilter<"places"> | number
    name?: StringFilter<"places"> | string
    room_id?: IntFilter<"places"> | number
  }

  export type itemsCreateManyPlacesInput = {
    id?: number
    name: string
    score: number
  }

  export type itemsUpdateWithoutPlacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type itemsUncheckedUpdateWithoutPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type itemsUncheckedUpdateManyWithoutPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type placesCreateManyRoomsInput = {
    id?: number
    name: string
  }

  export type placesUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    items?: itemsUpdateManyWithoutPlacesNestedInput
  }

  export type placesUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    items?: itemsUncheckedUpdateManyWithoutPlacesNestedInput
  }

  export type placesUncheckedUpdateManyWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}