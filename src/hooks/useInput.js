import { useCallback, useState } from "react";

const useInput = (initialData) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  // console.log(value);
  return [value, handler, setValue];
};

export default useInput;
