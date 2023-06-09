export interface Query {
  query: {
    bool: {
      must?: any[];
      filter?: any[];
      should?: any[];
      must_not?: any[];
      [key: string]: any;
    };
  };
  from?: number;
  sort?: Sort[];
  size?: number;
}

interface Sort {
  [field: string]: {
    order: 'asc' | 'desc';
  };
}
