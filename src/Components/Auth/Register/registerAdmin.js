import { useSelector, useDispatch } from 'react-redux';
import { showFeedbackMessage } from 'redux/admins/actions';
import { postAdmin } from 'redux/admins/thunks';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import styles from './registerForm.module.css';
import Preloader from 'Components/Shared/Preloader';
import SharedForm from 'Components/Shared/Form';
import Input from 'Components/Shared/Input/InputText';
import Select from 'Components/Shared/Input/InputSelect';
import Modal from 'Components/Shared/Modal';
import FeedbackMessage from 'Components/Shared/FeedbackMessage';
import adminsValidation from 'validations/admins';

const RegisterAdmin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: joiResolver(adminsValidation)
  });

  const dispatch = useDispatch();
  const feedbackInfo = useSelector((state) => state.admins?.infoForFeedback);
  const showFeedback = useSelector((state) => state.admins?.showFeedbackMessage);
  const isPending = useSelector((state) => state.admins?.isPending);

  const arrayToMapGender = [
    { id: 'male', optionContent: 'Male' },
    { id: 'female', optionContent: 'Female' },
    { id: 'other', optionContent: 'Other' }
  ];

  const onSubmit = (data) => {
    const options = {
      method: 'POST',
      url: `http://localhost:4000/register/admin`,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        gender: data.gender,
        phone: data.phone,
        dateBirth: data.dateBirth,
        city: data.city,
        zip: data.zip,
        active: true
      })
    };
    dispatch(postAdmin(options));
  };
  console.log(errors);
  return (
    <div className={styles.container}>
      <h2>Register admin</h2>
      <SharedForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="Enter admin's first name"
          register={register}
          error={errors.name?.message}
          required
        />
        <Input
          label="Last&nbsp;name"
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Enter admin's last name"
          register={register}
          error={errors.lastName?.message}
          required
        />
        <Input
          label="E-mail"
          name="email"
          id="email"
          type="email"
          placeholder="Enter a valid email"
          register={register}
          error={errors.email?.message}
          required
        />
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password?.message}
          required
        />
        <Select
          label="Gender"
          name="gender"
          id="gender"
          arrayToMap={arrayToMapGender}
          placeholder="Enter admin's gender"
          register={register}
          error={errors.gender?.message}
          required
        />
        <Input
          label="Phone"
          name="phone"
          id="phone"
          type="tel"
          placeholder="Enter admin's phone number"
          register={register}
          error={errors.phone?.message}
          required
        />
        <Input
          label="Date&nbsp;of&nbsp;birth"
          name="dateBirth"
          id="dateBirth"
          type="date"
          register={register}
          error={errors.dateBirth?.message}
          required
        />
        <Input
          label="City"
          name="city"
          id="city"
          type="text"
          placeholder="Enter admin's city"
          register={register}
          error={errors.city?.message}
          required
        />
        <Input
          label="Postal&nbsp;code"
          name="zip"
          id="zip"
          type="text"
          placeholder="Enter admin's postal code"
          register={register}
          error={errors.zip?.message}
          required
        />
      </SharedForm>
      <Modal
        isOpen={showFeedback}
        handleClose={() => {
          dispatch(showFeedbackMessage(!showFeedback));
        }}
      >
        <FeedbackMessage infoForFeedback={feedbackInfo} />
      </Modal>
      {isPending && <Preloader />}
    </div>
  );
};

export default RegisterAdmin;
