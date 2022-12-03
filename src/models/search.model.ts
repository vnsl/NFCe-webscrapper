export interface SearchInputProps{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (text: string) => void;
  searching: boolean;
}