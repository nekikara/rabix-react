import React, {ChangeEvent, useState} from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchFieldBox, Icon, InputBox, Input } from "./style";

export const SearchField: React.FC = () => {
  const placeholder = "Search..."
  const [searchWord, setSearchWord] = useState("")
  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  return (
    <SearchFieldBox>
      <Icon   icon={faSearch} fixedWidth />
      <InputBox>
        <Input className="form-control"
               placeholder={placeholder}
               value={searchWord}
               onChange={handleSearchWord}
        />
      </InputBox>
    </SearchFieldBox>
  );
}
