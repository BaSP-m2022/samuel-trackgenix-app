import React, { useEffect, useState } from 'react';
import styles from '../admins.module.css';
import Table from '../../Shared/Table';
import Modal from '../../Shared/Modal';
import DeleteMessage from '../../Shared/DeleteMessage';
import FeedbackMessage from '../../Shared/FeedbackMessage';

const AdminsTable = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [admins, setAdmins] = useState([]);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const [infoForDelete, setInfoForDelete] = useState('');
  const [infoForFeedback, setInfoForFeedback] = useState({});
  const editData = (id) => {
    window.location = `/admins/form/${id}`;
  };
  useEffect(() => {
    fetch(`${URL}/admins`)
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const deleteAdmin = (string) => {
    const options = {
      method: 'DELETE',
      url: `${URL}/admins/${string}`
    };
    fetch(options.url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.error === true) {
          setInfoForFeedback({
            title: 'Something went wrong',
            description: response.message
          });
          setShowFeedbackMessage(true);
        } else {
          setInfoForFeedback({
            title: 'Request done!',
            description: response.message
          });
          setAdmins(admins.filter((admin) => string !== admin._id));
          setShowFeedbackMessage(true);
        }
      })
      .catch((error) => console.log(error));
  };
  const adminData = admins.map((admin) => {
    return {
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      password: admin.password,
      role: admin.role,
      ...admin,
      active: admin.active ? 'Active' : 'Inactive'
    };
  });
  return (
    <section className={styles.container}>
      <Table
        data={adminData}
        headersName={['Name', 'Last Name', 'Phone', 'E-mail', 'Status', 'More information']}
        headers={['name', 'lastName', 'phone', 'email', 'active', 'moreInfo']}
        deleteAdmin={deleteAdmin}
        editData={editData}
        setShowModal={setShowDeleteMessage}
        setInfoForDelete={setInfoForDelete}
      />
      <Modal
        isOpen={showDeleteMessage}
        handleClose={() => {
          setShowDeleteMessage(false);
        }}
      >
        <DeleteMessage
          handleClose={() => {
            setShowDeleteMessage(false);
          }}
          infoForDelete={infoForDelete}
          deleteItem={deleteAdmin}
          setShowModal={setShowDeleteMessage}
        />
      </Modal>
      <Modal
        isOpen={showFeedbackMessage}
        handleClose={() => {
          setShowFeedbackMessage(false);
        }}
      >
        <FeedbackMessage infoForFeedback={infoForFeedback} />
      </Modal>
    </section>
  );
};

export default AdminsTable;
