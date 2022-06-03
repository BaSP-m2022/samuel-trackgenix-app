import Header from '../Header/index';
import Footer from '../Footer/index';
import Admins from '../Admins/index';
import AdminsForm from '../Admins/Form';
import SuperAdmins from '../SuperAdmins/index';
import Home from '../Home/index';
import styles from './layout.module.css';
import Employees from '../Employees/index';
import EmployeesForm from '../Employees/Form';
import Projects from '../Projects';
import TimeSheets from '../TimeSheets';
import TimeSheetsForm from '../TimeSheets/Form';
import Tasks from '../Tasks/index';
import TasksForm from '../Tasks/Form';

function Layout() {
  let currentScreen = <Home />;
  switch (window.location.pathname) {
    case '/admins':
      currentScreen = <Admins />;
      break;
    case '/admins/form':
      currentScreen = <AdminsForm />;
      break;
    case '/super-admins':
      currentScreen = <SuperAdmins />;
      break;
    case '/employees':
      currentScreen = <Employees />;
      break;
    case '/employees/form':
      currentScreen = <EmployeesForm />;
      break;
    case '/projects':
      currentScreen = <Projects />;
      break;
    case '/time-sheets':
      currentScreen = <TimeSheets />;
      break;
    case '/time-sheets/form':
      currentScreen = <TimeSheetsForm />;
      break;
    case '/tasks':
      currentScreen = <Tasks />;
      break;
    case '/tasks/form':
      currentScreen = <TasksForm />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <Header />
      {currentScreen}
      <Footer />
    </div>
  );
}

export default Layout;
