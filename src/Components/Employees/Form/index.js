import { useState, useEffect } from 'react';
import styles from './form.module.css';
import Input from './Input/Text';
import FeedbackModal from '../FeedbackModal';
const Form = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [telephoneValue, setTelephoneValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [zipValue, setZipValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [photoValue, setPhotoValue] = useState('');
  const [birthdayValue, setBirthdayValue] = useState('');
  const [contentFeedbackModal, setContentFeedbackModal] = useState({
    title: '',
    description: ''
  });
  const [title, setTitle] = useState('Add an employee');
  const [idInput, setIdInput] = useState('');
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);
  const paramEmployeeId = params.get('employeeId');
  console.log(paramEmployeeId);
  const options = {
    method: paramEmployeeId ? 'PUT' : 'POST',
    url: paramEmployeeId ? `${URL}/employees/${paramEmployeeId}` : `${URL}/employees`,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      firstName: nameValue,
      lastName: lastNameValue,
      email: emailValue,
      country: countryValue,
      city: cityValue,
      zip: zipValue,
      phone: telephoneValue,
      birthDate: birthdayValue,
      photo: photoValue,
      password: passwordValue,
      active: false
    })
  };
  useEffect(() => {
    if (paramEmployeeId) {
      fetch(`${URL}/employees/${paramEmployeeId}`)
        .then((response) => response.json())
        .then((data) => {
          setNameValue(data.data.firstName);
          setLastNameValue(data.data.lastName);
          setEmailValue(data.data.email);
          setPasswordValue(data.data.password);
          setCityValue(data.data.city);
          setBirthdayValue(data.data.birthDate);
          setPhotoValue(data.data.photo);
          setTelephoneValue(data.data.phone);
          setZipValue(data.data.zip);
          setCountryValue(data.data.country);
          setTitle(`Editing ${nameValue} ${lastNameValue} information.`);
          setIdInput(<Input name="employee-id" type="text" disabled value={paramEmployeeId} />);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    let correctStatus;
    fetch(options.url, options)
      .then((response) => {
        correctStatus = response.status === 201 || response.status === 200;
        return response.json();
      })
      .then((response) => {
        if (correctStatus) {
          setContentFeedbackModal({
            title: 'Request done!',
            description: response.message
          });
          setShowFeedbackModal(true);
        } else {
          setContentFeedbackModal({
            title: 'Something went wrong',
            description: response.message
          });
          setShowFeedbackModal(true);
        }
      })
      .catch((error) => console.log(error));
  };

  const onChangeNameValue = (e) => {
    setNameValue(e.target.value);
  };
  const onChangeLastNameValue = (e) => {
    setLastNameValue(e.target.value);
  };
  const onChangeEmailValue = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangeTelephoneValue = (e) => {
    setTelephoneValue(e.target.value);
  };
  const onChangeCountryValue = (e) => {
    setCountryValue(e.target.value);
  };
  const onChangeCityValue = (e) => {
    setCityValue(e.target.value);
  };
  const onChangeZipValue = (e) => {
    setZipValue(e.target.value);
  };
  const onChangePasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };
  const onChangePhotoValue = (e) => {
    setPhotoValue(e.target.value);
  };
  const onChangeBirthdayValue = (e) => {
    setBirthdayValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        {idInput}
        <Input
          name="first-name"
          type="text"
          placeholder="Write your name."
          value={nameValue}
          onChange={onChangeNameValue}
          required
        />
        <Input
          name="last-name"
          type="text"
          placeholder="Write your last name."
          value={lastNameValue}
          onChange={onChangeLastNameValue}
          required
        />
        <Input
          name="email"
          type="text"
          placeholder="Write your email."
          value={emailValue}
          onChange={onChangeEmailValue}
          required
        />
        <Input
          name="password"
          type="text"
          placeholder="Write your password."
          value={passwordValue}
          onChange={onChangePasswordValue}
          required
        />
        <Input
          name="birthday"
          type="text"
          placeholder="Write your birthday on format dd/mm/yyyy"
          value={birthdayValue}
          onChange={onChangeBirthdayValue}
          required
        />
        <Input
          name="phone"
          type="text"
          placeholder="Write your telephone."
          value={telephoneValue}
          onChange={onChangeTelephoneValue}
          required
        />
        <Input
          name="country"
          type="text"
          placeholder="Write your country."
          value={countryValue}
          onChange={onChangeCountryValue}
          required
        />
        <Input
          name="city"
          type="text"
          placeholder="Write your city."
          value={cityValue}
          onChange={onChangeCityValue}
          required
        />
        <Input
          name="ZIP"
          type="text"
          placeholder="Write your city."
          value={zipValue}
          onChange={onChangeZipValue}
          required
        />
        <Input
          name="profile-picture"
          type="text"
          placeholder="Write your profile picture url."
          value={photoValue}
          onChange={onChangePhotoValue}
          required
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {showFeedbackModal && (
        <FeedbackModal
          feedbackTitle={contentFeedbackModal.title}
          messageContent={contentFeedbackModal.description}
          setShowFeedbackModal={setShowFeedbackModal}
        />
      )}
    </div>
  );
};

export default Form;