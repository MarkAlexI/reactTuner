type StringsStore = {
  [key: string]: {
    [key: string]: string[];
  }
};

type SelectOption = {
  label: string;
  value: string;
};

type TuneOptions = {
  guitar: SelectOption[];
  ukulele: SelectOption[];
};