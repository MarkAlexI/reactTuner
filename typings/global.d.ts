type StringParameters = {
  text: string;
  span: string;
  frequency: number;
};

type StringsStore = {
  [key: string]: {
    [key: string]: StringParameters[];
  }
};