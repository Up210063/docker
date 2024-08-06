import { useState } from "react"

export const useForm = function() {

  const [formState, setFormState] = useState({});

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [ name ]:  value})
  }

  return  {
    formState,
    ...formState,
    onInputChange,
  }

}