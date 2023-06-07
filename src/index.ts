interface Query {
  query: {
    bool: {
      must?: any[]; // Array of must conditions
      filter?: any[]; // Array of filter conditions
      should?: any[]; // Array of should conditions
      must_not?: any[]; // Array of must_not conditions
      [key: string]: any; // Additional properties of any type
    };
  };
  from?: number; // Starting index for search results
  sort?: Sort[]; // Array of sort conditions
  size?: number; // Number of search results to return
}

interface Sort {
  [field: string]: {
    order: 'asc' | 'desc'; // Sort order: ascending or descending
  };
}

class QueryBuilder {
  private query: Query;

  constructor() {
    this.query = {
      query: {
        bool: {}, // Empty bool object to store conditions
      },
    };
  }

  private addCondition(type: keyof Query['query']['bool'], condition: any) {
    this.query.query.bool[type] = this.query.query.bool[type] || []; // Initialize array if not exists
    this.query.query.bool[type].push(condition); // Add condition to the respective array
    return this; // Return current QueryBuilder instance for method chaining
  }

  must(condition: any) {
    return this.addCondition('must', condition); // Add condition to must array
  }

  filter(condition: any) {
    return this.addCondition('filter', condition); // Add condition to filter array
  }

  should(condition: any) {
    return this.addCondition('should', condition); // Add condition to should array
  }

  mustNot(condition: any) {
    return this.addCondition('must_not', condition); // Add condition to must_not array
  }

  term(field: string, value: any) {
    return this.addCondition('must', { term: { [field]: value } }); // Add term condition to must array
  }

  range(field: string, range: any) {
    return this.addCondition('must', { range: { [field]: range } }); // Add range condition to must array
  }

  match(field: string, value: any) {
    return this.addCondition('must', { match: { [field]: value } }); // Add match condition to must array
  }

  matchPhrase(field: string, phrase: any) {
    return this.addCondition('must', { match_phrase: { [field]: phrase } }); // Add match_phrase condition to must array
  }

  exists(field: string) {
    return this.addCondition('must', { exists: { field } }); // Add exists condition to must array
  }

  from(value: number) {
    this.query.from = value; // Set the starting index for search results
    return this; // Return current QueryBuilder instance for method chaining
  }

  size(value: number) {
    this.query.size = value; // Set the number of search results to return
    return this; // Return current QueryBuilder instance for method chaining
  }

  sort(field: string, order: 'asc' | 'desc') {
    this.query.sort = this.query.sort || []; // Initialize sort array if not exists
    this.query.sort.push({ [field]: { order } }); // Add sort condition to the sort array
    return this; // Return current QueryBuilder instance for method chaining
  }

  build() {
    return this.query; // Return the final query object
  }
}

export default { QueryBuilder };
