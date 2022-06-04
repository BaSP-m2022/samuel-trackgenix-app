import { useState } from 'react';
import styles from '../admins.module.css';
import Modal from '../../Shared/Modal';

const AdminsTable = ({
  // setShowFeedbackModal,
  // showFeedbackModal,
  admins,
  deleteAdmin,
  showModal,
  setShowModal,
  modalId
}) => {
  const OnClickEdit = (string) => {
    window.location = `/admins/form?adminId=${string}`;
  };
  const [infoForDelete, setInfoForDelete] = useState({
    id: ''
  });
  return (
    <section className={styles.container}>
      <h2>Admins</h2>
      <table>
        <thead>
          <tr>
            <th id="name">Name</th>
            <th id="lastName">Last Name</th>
            <th id="phone">Phone</th>
            <th id="e-mail">E-mail</th>
            <th id="status">Active</th>
            <th id="moreInfo">Show more</th>
            <th id="edit">Edit</th>
            <th id="delete">Delete</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => {
            return (
              <tr key={admin._id}>
                <td>{admin.name}</td>
                <td>{admin.lastName}</td>
                <td>{admin.phone}</td>
                <td>{admin.email}</td>
                <td>{JSON.stringify(admin.active)}</td>
                <td>
                  <input type="button" value="..." />
                </td>
                <td>
                  <button onClick={() => OnClickEdit(admin._id)}>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setShowModal(!showModal);
                      setInfoForDelete({
                        id: admin._id
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {showModal && (
          <Modal
            title={<h1>Delete admins</h1>}
            message={<p>Are you sure you want to delete this admin?</p>}
            extras={
              <button
                type="button"
                className={styles.deletebtn}
                onClick={() => {
                  deleteAdmin(modalId);
                  setShowModal(false);
                }}
              >
                Delete
              </button>
            }
            deleteAdmin={deleteAdmin}
            setInfoFoDelete={setInfoForDelete}
            modalId={infoForDelete.id}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        )}
      </table>
    </section>
  );
};

export default AdminsTable;
