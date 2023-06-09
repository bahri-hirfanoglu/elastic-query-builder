import { Query } from './types/index';

class QueryBuilder {
  private query: Query;

  constructor() {
    this.query = {
      query: {
        bool: {},
      },
    };
  }

  private addCondition(type: keyof Query['query']['bool'], condition: any) {
    this.query.query.bool[type] = this.query.query.bool[type] || [];
    this.query.query.bool[type].push(condition);
    return this;
  }

  must(condition: any) {
    return this.addCondition('must', condition);
  }

  filter(condition: any) {
    return this.addCondition('filter', condition);
  }

  should(condition: any) {
    return this.addCondition('should', condition);
  }

  mustNot(condition: any) {
    return this.addCondition('must_not', condition);
  }

  term(field: string, value: any) {
    return this.addCondition('must', { term: { [field]: value } });
  }

  range(field: string, range: any) {
    return this.addCondition('must', { range: { [field]: range } });
  }

  match(field: string, value: any) {
    return this.addCondition('must', { match: { [field]: value } });
  }

  matchPhrase(field: string, phrase: any) {
    return this.addCondition('must', { match_phrase: { [field]: phrase } });
  }

  exists(field: string) {
    return this.addCondition('must', { exists: { field } });
  }

  from(value: number) {
    this.query.from = value;
    return this;
  }

  size(value: number) {
    this.query.size = value;
    return this;
  }

  sort(field: string, order: 'asc' | 'desc') {
    this.query.sort = this.query.sort || [];
    this.query.sort.push({ [field]: { order } });
    return this;
  }

  build() {
    return this.query;
  }
}

export { QueryBuilder };
