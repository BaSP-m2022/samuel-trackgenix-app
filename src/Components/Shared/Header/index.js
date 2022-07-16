import styles from './header.module.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'helper/firebase';

function Header() {
  const employeeLogged = useSelector((state) => state.employees.employeeLogged);
  const HeaderTitle = {
    '/employee/home': employeeLogged
      ? `Welcome ${employeeLogged?.firstName} ${employeeLogged?.lastName}!`
      : 'Welcome!',
    '/employee/profile': 'Edit Profile',
    '/employee/projects': 'Projects',
    '/employee/timesheet': 'Personal Timesheet'
  };
  const location = useLocation();

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.title}>{HeaderTitle[location.pathname] ?? 'TRACKGENIX'}</div>
        <div
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          <a href="/home" rel="noreferrer">
            Log out
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
