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
    checkbox4: false
  });

  const [formStatus, setFormStatus] = useState({
    sendForm: false,
    error: false
  });

  const handleChange = e => {
    e.persist();
    setValue({
      ...value,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
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

    setFormStatus({ ...formStatus, error: true });

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
        checkbox4: false
      });
      setFormStatus({ sendForm: true, error: false });

      message = "Fromularz Wysłany";
    } else {
      return errors;
    }
  };

  return [
    value,
    handleChange,
    selectAllCheckbox,
    formStatus,
    handleSubmit,
    errors,
    message
  ];
};

export default useForm;
