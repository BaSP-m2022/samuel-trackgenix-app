import styles from './header.module.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'helper/firebase';

function Header() {
  const userLogged = useSelector((state) => state.auth.authenticated.data);
  const HeaderTitle = {
    '/employee/home': `Welcome ${userLogged?.firstName} ${userLogged?.lastName}!`,
    '/employee/profile': 'Edit Profile',
    '/employee/projects': 'Projects',
    '/employee/timesheet': 'Personal Timesheet',
    '/superadmin/home': `Welcome ${userLogged?.firstName} ${userLogged?.lastName}!`,
    '/superadmin/admins': 'Admins',
    '/superadmin/addAdmin': 'Admins',
    '/admin/home': `Welcome ${userLogged?.firstName} ${userLogged?.lastName}!`,
    '/admin/employees': 'Employees',
    '/admin/projects': 'Projects'
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
