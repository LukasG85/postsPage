import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import Error from "./Error";

let message = "";
let errors = [];

const Form = () => {
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

  const handleChange = (e, fieldName, checkbox) => {
    setValue({
      ...value,
      [fieldName]: checkbox ? e.target.checked : e.target.value
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

    if (value.houseNumber === "" && value.apartmentNumber === "") {
      errors.push("Podaj numer domu lub lokalu");
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

  return (
    <FormWrapper value={value}>
      <div className="container">
        <h2>wypełnij formularz</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            value={value.name}
            onChange={e => handleChange(e, "name")}
            type="text"
            name="name"
            placeholder="* Imię i nazwisko"
            className="text-input"
            required
            pattern="([A-Za-zĄąĘęŹźŻżŚśÓóĆćŃńŁł ]+)"
          />
          <input
            value={value.email}
            onChange={e => handleChange(e, "email")}
            type="email"
            name="email"
            placeholder="* E-mail"
            className="text-input"
            required
          />
          <input
            value={value.phone}
            onChange={e => handleChange(e, "phone")}
            type="number"
            name="phone"
            placeholder="* Nr telefonu"
            className="text-input"
            required
            pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
          />
          <input
            value={value.postcode}
            onChange={e => handleChange(e, "postcode")}
            type="text"
            name="postcode"
            placeholder="* Kod pocztowy"
            className="text-input"
            required
            pattern="[0-9]{2}-[0-9]{3}"
          />
          <input
            value={value.place}
            onChange={e => handleChange(e, "place")}
            type="text"
            name="place"
            placeholder="* Miejscowość"
            className="text-input"
            required
            pattern="[a-zA-Z0-9]+"
          />
          <input
            value={value.street}
            onChange={e => handleChange(e, "street")}
            type="text"
            name="street"
            placeholder="* Ulica"
            className="text-input"
            required
            pattern="[a-zA-Z0-9]+"
          />
          <input
            value={value.houseNumber}
            onChange={e => handleChange(e, "houseNumber")}
            type="number"
            name="houseNumber"
            placeholder="* Nr domu"
            className="text-input"
            pattern="[0-9]"
          />
          <input
            value={value.apartmentNumber}
            onChange={e => handleChange(e, "apartmentNumber")}
            type="number"
            name="apartmentNumber"
            placeholder="* Nr lokalu"
            className="text-input"
            pattern="[0-9]"
          />

          {errors.length > 0 ? <Error errors={errors} /> : null}
          <p>
            <span>* pola wymagane</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </p>

          <div className="checkbox-container">
            <input
              value={value.checkbox1}
              onChange={e => handleChange(e, "checkbox1", "checkbox")}
              id="checkbox-1"
              className="checkbox-custom"
              name="checkbox1"
              type="checkbox"
              checked={value.checkbox1}
            />
            <label htmlFor="checkbox-1" className="checkbox-custom-label">
              <span>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </span>
            </label>
          </div>

          <div className="checkbox-container">
            <input
              value={value.checkbox2}
              onChange={e => handleChange(e, "checkbox2", "checkbox")}
              id="checkbox-2"
              className="checkbox-custom"
              name="checkbox-2"
              type="checkbox"
              checked={value.checkbox2}
            />
            <label htmlFor="checkbox-2" className="checkbox-custom-label">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim venia
            </label>
          </div>

          <div className="checkbox-container">
            <input
              value={value.checkbox3}
              onChange={e => handleChange(e, "checkbox3", "checkbox")}
              id="checkbox-3"
              className="checkbox-custom"
              name="checkbox-3"
              type="checkbox"
              checked={value.checkbox3}
            />
            <label htmlFor="checkbox-3" className="checkbox-custom-label">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </label>
          </div>
          <div className="checkbox-container">
            <input
              value={value.checkbox4}
              onChange={e => selectAllCheckbox(e)}
              id="checkbox-4"
              className="checkbox-custom"
              name="checkbox-4"
              type="checkbox"
              checked={value.checkbox4}
            />
            <label htmlFor="checkbox-4" className="checkbox-custom-label">
              Zaznacz wszystko
            </label>
          </div>

          {<p className="message">{message}</p>}

          <button type="submit">
            wyślij formularz <IoIosArrowForward className="arrow" />
          </button>
        </form>
      </div>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.section`
  padding-top: 60px;
  padding-bottom: 100px;
  min-height: 785px;
  background-color: #e0d9c9;
  font-family: Roboto sans-serif;
  h2 {
    margin-bottom: 60px;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    @media (min-width: 540px) {
      font-size: 30px;
    }
    @media (min-width: 768px) {
      font-size: 38px;
    }
    @media (min-width: 992px) {
      text-align: left;
    }
  }
  .text-input {
    height: 65px;
    width: 100%;

    margin-bottom: 10px;
    padding-left: 20px;
    &:nth-child(7),
    &:nth-child(8) {
      width: calc(50% - 5px);
    }
    &:nth-child(7) {
      margin-right: 10px;
    }
    &::placeholder {
      color: #676767;
      font-size: 14px;
    }
    @media (min-width: 768px) {
      width: 335px;
      margin-right: 10px;
      &:nth-child(7),
      &:nth-child(8) {
        width: 335px;
      }
    }
    @media (min-width: 992px) {
      &:nth-child(1),
      &:nth-child(2) {
        width: 320px;
      }
      &:nth-child(3),
      &:nth-child(4) {
        width: 220px;
      }
      &:nth-child(5) {
        width: 210px;
      }
      &:nth-child(6) {
        width: 310px;
      }
      &:nth-child(7),
      &:nth-child(8) {
        width: 110px;
      }
    }
    @media (min-width: 1200px) {
      &:nth-child(4),
      &:nth-child(8) {
        margin-right: 0;
      }

      &:nth-child(5) {
        width: 200px;
      }
    }
  }
  p {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 10px;
    color: #938b7a;
    span {
      margin-bottom: 15px;
      display: block;
    }
  }

  .message {
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
    color: #725a46;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 255px;
    margin: 0 auto;
    background-color: #725a46;
    color: white;
    border: none;
    text-transform: capitalize;
    font-size: 18px;
    transition: background-color 0.3s ease-in-out;
    @media (min-width: 768px) {
      margin: 0 0 0 auto;
    }
    &:hover {
      background-color: #4a392c;
    }
    .arrow {
      margin-left: 10px;
    }
  }
`;
