import { useState, useEffect } from 'react';
import { /*useParams,*/ useHistory } from 'react-router-dom';
import SharedForm from '../../Shared/Form';
import Input from '../../Shared/Input/InputText';
import FeedbackMessage from '../../Shared/FeedbackMessage';
import Modal from '../../Shared/Modal';
import styles from './form.module.css';
import Loader from '../../Shared/Preloader';
import { useSelector, useDispatch } from 'react-redux';
import { showFeedbackMessage } from '../../../redux/employees/actions';
import { editEmployee, postEmployee } from '../../../redux/employees/thunks';

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
  const dispatch = useDispatch();
  const isPending = useSelector((state) => state.employees.pending);
  const feedbackInfo = useSelector((state) => state.employees.infoForFeedback);
  const showFeedback = useSelector((state) => state.employees.showFeedbackMessage);
  const employeeSelected = useSelector((state) => state.employees.employeeSelected);
  const isEmployeeSelected = Object.keys(employeeSelected).length;
  const URL = process.env.REACT_APP_API_URL;
  // const employee = useParams();
  const history = useHistory();

  const title = isEmployeeSelected ? `Update ${nameValue} ${lastNameValue}'s data` : 'Add Employee';

  useEffect(() => {
    if (isEmployeeSelected) {
      setNameValue(employeeSelected.firstName);
      setLastNameValue(employeeSelected.lastName);
      setEmailValue(employeeSelected.email);
      setPasswordValue(employeeSelected.password);
      setCityValue(employeeSelected.city);
      setBirthdayValue(employeeSelected.birthDate);
      setPhotoValue(employeeSelected.photo);
      setTelephoneValue(employeeSelected.phone);
      setZipValue(employeeSelected.zip);
      setCountryValue(employeeSelected.country);
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: isEmployeeSelected ? 'PUT' : 'POST',
      url: isEmployeeSelected ? `${URL}/employees/${employeeSelected._id}` : `${URL}/employees`,
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
    isEmployeeSelected ? dispatch(editEmployee(options)) : dispatch(postEmployee(options));
  };

  const dayInput = birthdayValue.substring(5, 7);
  const monthInput = birthdayValue.substring(8, 10);
  const yearInput = birthdayValue.substring(0, 4);
  const dateFormat = `${yearInput}-${monthInput}-${dayInput}`;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <SharedForm onSubmit={onSubmit}>
        <Input
          className={styles.input}
          id="first-name"
          label="First Name"
          name="first-name"
          type="text"
          placeholder="Write your name."
          value={nameValue}
          onChange={onChangeNameValue}
          required
        />
        <Input
          label="Last Name"
          name="last-name"
          id="last-name"
          type="text"
          placeholder="Write your last name."
          value={lastNameValue}
          onChange={onChangeLastNameValue}
          required
        />
        <Input
          label="E-mail"
          name="email"
          id="email"
          type="email"
          placeholder="Write your email."
          value={emailValue}
          onChange={onChangeEmailValue}
          required
        />
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Write your password."
          value={passwordValue}
          onChange={onChangePasswordValue}
          required
        />
        <Input
          label="Date of birth"
          name="birthday"
          id="birthday"
          type="date"
          placeholder="Write your birthday on format dd/mm/yyyy"
          value={dateFormat}
          onChange={onChangeBirthdayValue}
          required
        />
        <Input
          label="Phone"
          name="phone"
          id="phone"
          type="tel"
          placeholder="Write your telephone."
          value={telephoneValue}
          onChange={onChangeTelephoneValue}
          required
        />
        <Input
          label="Country"
          name="country"
          id="country"
          type="text"
          placeholder="Write your country."
          value={countryValue}
          onChange={onChangeCountryValue}
          required
        />
        <Input
          label="City"
          name="city"
          id="city"
          type="text"
          placeholder="Write your city."
          value={cityValue}
          onChange={onChangeCityValue}
          required
        />
        <Input
          label="Postal Code"
          name="ZIP"
          id="ZIP"
          type="text"
          placeholder="Write your postal code."
          value={zipValue}
          onChange={onChangeZipValue}
          required
        />
        <Input
          label="Profile picture"
          name="profile-picture"
          id="profile-picture"
          type="text"
          placeholder="Write your profile picture url."
          value={photoValue}
          onChange={onChangePhotoValue}
          required
        />
      </SharedForm>
      <Modal
        isOpen={showFeedback}
        handleClose={() => {
          dispatch(showFeedbackMessage(!showFeedback));
          history.goBack();
        }}
      >
        <FeedbackMessage infoForFeedback={feedbackInfo} />
      </Modal>
      {isPending && <Loader />}
    </div>
  );
};

export default Form;
