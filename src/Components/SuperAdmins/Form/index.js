import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import styles from './form.module.css';
import Preloader from 'Components/Shared/Preloader';
import SharedForm from 'Components/Shared/Form';
import Input from 'Components/Shared/Input/InputText';
import Select from 'Components/Shared/Input/InputSelect';
import Modal from 'Components/Shared/Modal';
import FeedbackMessage from 'Components/Shared/FeedbackMessage';
import { editSuperAdmin, postSuperAdmin } from 'redux/superadmin/thunks';
import { showFeedbackMessage } from 'redux/superadmin/actions';
import superadminsValidation from 'validations/superadmins';

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isPending = useSelector((state) => state.superadmins.isPending);
  const infoForFeedback = useSelector((state) => state.superadmins.infoForFeedback);
  const showFeedback = useSelector((state) => state.superadmins.showFeedbackMessage);
  const selectedSuperadmin = useSelector((state) => state.superadmins.selectedSuperadmin);
  const isSuperadminSelected = Boolean(Object.keys(selectedSuperadmin).length);
  const URL = process.env.REACT_APP_API_URL;
  const title = isSuperadminSelected ? 'Update Super Admin' : 'Add Super Admin';

  const arrayToMapStatus = [
    { id: true, optionContent: 'Active' },
    { id: false, optionContent: 'Inactive' }
  ];

  const onSubmit = (data) => {
    const options = {
      method: isSuperadminSelected ? 'PUT' : 'POST',
      url: isSuperadminSelected
        ? `${URL}/super-admin/${selectedSuperadmin._id}`
        : `${URL}/super-admin`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        active: data.active
      })
    };
    isSuperadminSelected ? dispatch(editSuperAdmin(options)) : dispatch(postSuperAdmin(options));
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange',
    resolver: joiResolver(superadminsValidation)
  });

  useEffect(() => {
    if (isSuperadminSelected)
      reset({
        firstName: selectedSuperadmin.firstName,
        lastName: selectedSuperadmin.lastName,
        email: selectedSuperadmin.email,
        active: selectedSuperadmin.active
      });
  }, [selectedSuperadmin]);

  return (
    <div className={styles.container}>
      {isPending && <Preloader />}
      <SharedForm onSubmit={handleSubmit(onSubmit)} header={title}>
        <Input
          label="Name"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Write your first name"
          register={register}
          error={errors.firstName?.message}
          required
        />
        <Input
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Write your last name"
          register={register}
          error={errors.lastName?.message}
          required
        />
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          placeholder="Write your email"
          register={register}
          error={errors.email?.message}
          required
        />
        <Select
          label="Active"
          id="active"
          name="active"
          placeholder="Choose Status"
          arrayToMap={arrayToMapStatus}
          register={register}
          error={errors.active?.message}
          required
        />
      </SharedForm>
      <Modal
        isOpen={showFeedback}
        handleClose={() => {
          dispatch(showFeedbackMessage(!showFeedback));
          if (infoForFeedback.title !== 'Something went wrong') {
            history.goBack();
          }
        }}
      >
        <FeedbackMessage infoForFeedback={infoForFeedback} />
      </Modal>
    </div>
  );
};

export default Form;
