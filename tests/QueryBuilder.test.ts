import { QueryBuilder } from '../src/index';

describe('QueryBuilder', () => {
  it('should generate the correct query object', () => {
    // Test Scenario
    const queryBuilder = new QueryBuilder()
      .must({ term: { field1: 'value1' } })
      .filter({ range: { field2: { gte: 10, lte: 20 } } })
      .should({ match: { field3: 'value3' } })
      .mustNot({ exists: { field4: 'value4' } })
      .from(0)
      .size(10)
      .sort('field1', 'asc')
      .build();

    // Assertions
    expect(queryBuilder).toEqual({
      query: {
        bool: {
          must: [{ term: { field1: 'value1' } }],
          filter: [{ range: { field2: { gte: 10, lte: 20 } } }],
          should: [{ match: { field3: 'value3' } }],
          must_not: [{ exists: { field4: 'value4' } }],
        },
      },
      from: 0,
      size: 10,
      sort: [{ field1: { order: 'asc' } }],
    });
  });
});
