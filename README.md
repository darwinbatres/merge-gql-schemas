# Merge GraphQL Schemas

> This small package will be helpful if you are working with GraphQL tooling;
> it will allow you to merge all your schemas into one single schema which you can then
> pass to your new ApolloServer as parameter without having to import/require one by one.

## Enhacements done

1. Added option to share type definitions accross multiple schemas, similar to "export/import", when doing so, you'll have to manually import/export them, please take a look at the repo to see an example.

## examples

> Please refer to the following repo to see how it works [repo](https://github.com/darwinbatres/blog-graphql) under [`src/server.js`](https://github.com/darwinbatres/blog-graphql/blob/master/src/server.js)
