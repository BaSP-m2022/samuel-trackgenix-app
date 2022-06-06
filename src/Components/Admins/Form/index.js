import styles from './form.module.css';
import { useState, useEffect } from 'react';
import Button from '../../Shared/Button';

function Form() {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [birthDateValue, setBirthDateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [zipValue, setZipValue] = useState('');
  const [activeValue, setActiveValue] = useState('');

  const onChangeNameInput = (event) => {
    setNameValue(event.target.value);
  };
  const onChangeLastNameInput = (event) => {
    setLastNameValue(event.target.value);
  };
  const onChangeEmailInput = (event) => {
    setEmailValue(event.target.value);
  };
  const onChangePasswordInput = (event) => {
    setPasswordValue(event.target.value);
  };
  const onChangePhoneInput = (event) => {
    setPhoneValue(event.target.value);
  };
  const onChangeGenderInput = (event) => {
    setGenderValue(event.target.value);
  };
  const onChangeBirthDateInput = (event) => {
    setBirthDateValue(event.target.value);
  };
  const onChangeCityInput = (event) => {
    setCityValue(event.target.value);
  };
  const onChangeZipInput = (event) => {
    setZipValue(event.target.value);
  };
  const onChangeActiveInput = (event) => {
    setActiveValue(event.target.value);
  };

  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);
  const adminId = params.get('adminId');
  const title = adminId ? `${nameValue} ${lastNameValue}` : 'Add admin';
  const options = {
    method: adminId ? 'PUT' : 'POST',
    url: `${process.env.REACT_APP_API_URL}/admins/${adminId ? adminId : ''}`,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: nameValue,
      lastName: lastNameValue,
      email: emailValue,
      password: passwordValue,
      gender: genderValue,
      phone: phoneValue,
      dateBirth: birthDateValue,
      city: cityValue,
      zip: zipValue,
      active: activeValue
    })
  };
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    if (adminId) {
      fetch(`${URL}/admins/${adminId}`)
        .then((res) => res.json())
        .then((data) => {
          setNameValue(data.data.name);
          setLastNameValue(data.data.lastName);
          setEmailValue(data.data.email);
          setPasswordValue(data.data.password);
          setCityValue(data.data.city);
          setBirthDateValue(data.data.dateBirth);
          setGenderValue(data.data.gender);
          setPhoneValue(data.data.phone);
          setZipValue(data.data.zip);
          setActiveValue(data.data.active);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch(options.url, options);
      const data = await res.json();
      if (data.status == 201 || data.status == 200) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const dayInput = birthDateValue.substring(5, 7);
  const monthInput = birthDateValue.substring(8, 10);
  const yearInput = birthDateValue.substring(0, 4);
  const dateFormat = `${yearInput}-${monthInput}-${dayInput}`;

  return (
    <div className={styles.adminForm}>
      <h2>{title}</h2>
      <form onSubmit={onSubmit} className={styles.container}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={nameValue} onChange={onChangeNameInput} required />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={onChangeLastNameInput}
            required
          />
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" value={emailValue} onChange={onChangeEmailInput} required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={onChangePasswordInput}
            required
          />
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={genderValue} onChange={onChangeGenderInput} required>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Male">Male</option>
            <option value="" disabled defaultValue={genderValue} hidden>
              Choose gender
            </option>
          </select>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" value={phoneValue} onChange={onChangePhoneInput} required />
          <label htmlFor="dateBirth">Date of Birth</label>
          <input
            type="date"
            id="dateBirth"
            value={dateFormat}
            onChange={onChangeBirthDateInput}
            required
          />
          <label htmlFor="city">City</label>
          <input type="text" id="city" value={cityValue} onChange={onChangeCityInput} required />
          <label htmlFor="zip">Postal Code</label>
          <input type="text" id="zip" value={zipValue} onChange={onChangeZipInput} required />
          <label htmlFor="active">Status</label>
          <select id="active" value={activeValue} onChange={onChangeActiveInput} required>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
            <option value="" disabled defaultValue={activeValue} hidden>
              Is active?
            </option>
          </select>
        </fieldset>
      </form>
      <Button type="submit" label="Submit" />
    </div>
  );
}

export default Form;
