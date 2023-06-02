# Elastic Query Creator

The `elastic-query-creator` package is a TypeScript library that provides a convenient way to construct complex queries for Elasticsearch.

## Installation

You can install the `elastic-query-creator` package using npm:

```shell
npm i elastic-query-creator
```

## Usage

To use the **elastic-query-creator** library, follow the steps below:

1. Import the **QueryBuilder** class from the library:

```typescript
import { QueryBuilder } from 'elastic-query-creator';
```

2. Create an instance of the **QueryBuilder** class:

```typescript
const queryBuilder = new QueryBuilder();
```

3. Use the various methods provided by the **QueryBuilder** class to construct your Elasticsearch query:

```typescript
queryBuilder
  .must({ term: { field: 'value' } })
  .filter({ range: { field: { gte: 10, lte: 20 } } })
  .sort('field', 'asc')
  .size(10);
```

4. Call the **build** method to retrieve the final query object:

```typescript
const query = queryBuilder.build();
```

The **query** object can now be used in your Elasticsearch operations.

## Examples

Here are some examples to demonstrate the usage of the **elastic-query-creator** library:

```typescript
import { QueryBuilder } from 'elastic-query-creator';

const queryBuilder = new QueryBuilder();

// Example 1: Simple term query
queryBuilder.must({ term: { field: 'value' } });

// Example 2: Range query
queryBuilder.filter({ range: { field: { gte: 10, lte: 20 } } });

// Example 3: Sorting
queryBuilder.sort('field', 'asc');

// Example 4: Setting the result size
queryBuilder.size(10);

const query = queryBuilder.build();
```

```typescript
import { QueryBuilder } from 'elastic-query-creator';

// Create an instance of the QueryBuilder class
const queryBuilder = new QueryBuilder();

// Add query conditions
queryBuilder
  .must({ term: { field1: 'value1' } })
  .filter({ range: { field2: { gte: 10, lte: 20 } } })
  .should({ match: { field3: 'value3' } })
  .mustNot({ exists: { field4: true } })
  .term('field5', 'value5')
  .range('field6', { gte: 30, lte: 40 })
  .match('field7', 'value7')
  .matchPhrase('field8', 'value8')
  .exists('field9')
  .sort('field10', 'asc')
  .from(0)
  .size(10);

// Build the query object
const query = queryBuilder.build();
```



## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.