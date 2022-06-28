import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import styles from './registerForm.module.css';
// import Loader from 'Components/Shared/Preloader';
import SharedForm from 'Components/Shared/Form';
import Input from 'Components/Shared/Input/InputText';
import Modal from 'Components/Shared/Modal';
import FeedbackMessage from 'Components/Shared/FeedbackMessage';
import { showFeedbackMessage } from 'redux/employees/actions';
import { postEmployee } from 'redux/employees/thunks';
import employeesValidation from 'validations/employees';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const feedbackInfo = useSelector((state) => state.employees.infoForFeedback);
  const showFeedback = useSelector((state) => state.employees.showFeedbackMessage);
  const URL = process.env.REACT_APP_API_URL;
  //   const history = useHistory();

  const onSubmit = (data) => {
    const options = {
      method: 'POST',
      url: `${URL}/employees`,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        country: data.country,
        city: data.city,
        zip: data.zip,
        phone: data.phone,
        birthDate: data.birthDate,
        photo: data.photo,
        password: data.password,
        active: true
      })
    };
    dispatch(postEmployee(options));
  };

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: joiResolver(employeesValidation)
  });

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <SharedForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles.input}
          id="firstName"
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Write your name."
          register={register}
          error={errors.firstName?.message}
          required
        />
        <Input
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Write your last name."
          register={register}
          error={errors.lastName?.message}
          required
        />
        <Input
          label="E-mail"
          name="email"
          id="email"
          type="email"
          placeholder="Write your email."
          register={register}
          error={errors.email?.message}
          required
        />
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Write your password."
          register={register}
          error={errors.password?.message}
          required
        />
        <Input
          label="Date of birth"
          name="birthDate"
          id="birthDate"
          type="date"
          placeholder="Write your birthday on format dd/mm/yyyy"
          register={register}
          error={errors.birthDate?.message}
          required
        />
        <Input
          label="Phone"
          name="phone"
          id="phone"
          type="tel"
          placeholder="Write your telephone."
          register={register}
          error={errors.phone?.message}
          required
        />
        <Input
          label="Country"
          name="country"
          id="country"
          type="text"
          placeholder="Write your country."
          register={register}
          error={errors.country?.message}
          required
        />
        <Input
          label="City"
          name="city"
          id="city"
          type="text"
          placeholder="Write your city."
          register={register}
          error={errors.city?.message}
          required
        />
        <Input
          label="Postal Code"
          name="zip"
          id="zip"
          type="text"
          placeholder="Write your postal code."
          register={register}
          error={errors.zip?.message}
          required
        />
        <Input
          label="Profile picture"
          name="photo"
          id="photo"
          type="text"
          placeholder="Write your profile picture url."
          register={register}
          error={errors.photo?.message}
          required
        />
      </SharedForm>
      <Modal
        isOpen={showFeedback}
        handleClose={() => {
          dispatch(showFeedbackMessage(!showFeedback));
          //   if (!infoForFeedback.error) {
          //     history.goBack();
          //   }
        }}
      >
        <FeedbackMessage infoForFeedback={feedbackInfo} />
      </Modal>
      {/* {isPending && <Loader />} */}
    </div>
  );
};

export default RegisterForm;
