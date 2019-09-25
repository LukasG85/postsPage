import { useState } from "react";

let message = "";
let errors = [];

const useForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    place: "",
    street: "",
    houseNumber: "",
    apartmentNumber: "",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    sendForm: false
  });

  const handleChange = e => {
    e.persist();
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckbox = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.checked
    });
  };

  const selectAllCheckbox = e => {
    setValue({
      ...value,
      checkbox1: e.target.checked,
      checkbox2: e.target.checked,
      checkbox3: e.target.checked,
      checkbox4: e.target.checked
    });
  };

  const formValidate = value => {
    if (!value.name.includes(" ")) {
      errors.push("Podaj imię i nazwisko");
      return false;
    }
    errors = [];

    if (errors.length <= 0) {
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setValue({ ...value, sendForm: true });

    if (formValidate(value)) {
      formValidate(value);
      setValue({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        place: "",
        street: "",
        houseNumber: "",
        apartmentNumber: "",
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        sendForm: false
      });
      message = "Fromularz Wysłany";
    } else {
      return errors;
    }
  };

  return [
    value,
    handleChange,
    selectAllCheckbox,
    handleCheckbox,
    handleSubmit,
    errors,
    message
  ];
};

export default useForm;
