import { useEffect, useState } from "react";

export const CustomSearch = ({
  placeholder,
  classes,
  searchTerm,
  setSerachTerm,
}) => {
  return (
    <>
      <div className={`search-box ${classes}`}>
        <input
          type="search"
          placeholder={`${placeholder}`}
          value={searchTerm}
          onChange={(e) => setSerachTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export const useDebounce = (value,delay) => {
    const [debounced,setDebounced] = useState(value)
    console.log("I am render in debounced")
    useEffect(() => {
        const handler = setTimeout(() => {setDebounced(value)},delay||500)

        return(() =>{
            clearTimeout(handler)
        })
    },[value,delay])

    return debounced
}