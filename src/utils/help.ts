type Item = {
  name: string;
};

export const refactorData = <T extends Item>(data: T[]): Item[] =>
  data.map((item) => ({
    name: item.name
  }));
