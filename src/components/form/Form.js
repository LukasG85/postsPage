import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import Error from "./Error";
import useForm from "../hooks/useForm";

const Form = () => {
  const [
    values,
    handleChange,
    selectAllCheckbox,
    formStatus,
    handleSubmit,
    errors,
    message
  ] = useForm();

  return (
    <FormWrapper value={values}>
      <div className="container">
        <h2>wypełnij formularz</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={values.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="* Imię i nazwisko"
            className="text-input"
            required
            pattern="([A-Za-zĄąĘęŹźŻżŚśÓóĆćŃńŁł ]+)"
            disabled={formStatus.sendForm}
          />
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="* E-mail"
            className="text-input"
            required
            disabled={formStatus.sendForm}
          />
          <input
            value={values.phone}
            onChange={handleChange}
            type="tel"
            name="phone"
            placeholder="* Nr telefonu"
            className="text-input"
            required
            pattern="[0-9]{9}"
            disabled={formStatus.sendForm}
          />
          <input
            value={values.postcode}
            onChange={handleChange}
            type="text"
            name="postcode"
            placeholder="* Kod pocztowy"
            className="text-input"
            required
            pattern="[0-9]{2}-[0-9]{3}"
            disabled={formStatus.sendForm}
          />
          <input
            value={values.place}
            onChange={handleChange}
            type="text"
            name="place"
            placeholder="* Miejscowość"
            className="text-input"
            required
            pattern="[a-zA-Z0-9]+"
            disabled={formStatus.sendForm}
          />
          <input
            value={values.street}
            onChange={handleChange}
            type="text"
            name="street"
            placeholder="* Ulica"
            className="text-input"
            required
            pattern="[a-zA-Z0-9]+"
            disabled={formStatus.sendForm}
          />
          <input
            value={values.houseNumber}
            onChange={handleChange}
            type="number"
            name="houseNumber"
            placeholder="* Nr domu"
            className="text-input"
            required
            pattern="[0-9]"
            disabled={formStatus.sendForm}
          />
          <input
            value={values.apartmentNumber}
            onChange={handleChange}
            type="number"
            name="apartmentNumber"
            placeholder="Nr lokalu"
            className="text-input"
            pattern="[0-9]"
            disabled={formStatus.sendForm}
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
              value={values.checkbox1}
              onChange={handleChange}
              id="checkbox-1"
              className="checkbox-custom"
              name="checkbox1"
              type="checkbox"
              checked={values.checkbox1}
              disabled={formStatus.sendForm}
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
              value={values.checkbox2}
              onChange={handleChange}
              id="checkbox-2"
              className="checkbox-custom"
              name="checkbox2"
              type="checkbox"
              checked={values.checkbox2}
              disabled={formStatus.sendForm}
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
              value={values.checkbox3}
              onChange={handleChange}
              id="checkbox-3"
              className="checkbox-custom"
              name="checkbox3"
              type="checkbox"
              checked={values.checkbox3}
              disabled={formStatus.sendForm}
            />
            <label htmlFor="checkbox-3" className="checkbox-custom-label">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </label>
          </div>
          <div className="checkbox-container">
            <input
              value={values.checkbox4}
              onChange={selectAllCheckbox}
              id="checkbox-4"
              className="checkbox-custom"
              name="checkbox-4"
              type="checkbox"
              checked={values.checkbox4}
              disabled={formStatus.sendForm}
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
