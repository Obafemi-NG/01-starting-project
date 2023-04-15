import { useSelector } from "react-redux";
import styles from "./Notification.module.css";

const Notification = () => {
  const { status, message, title } = useSelector(
    (state) => state.ui.notification
  );
  let notificationClasses = "";
  if (status === "failed") {
    notificationClasses = styles.error;
  } else if (status === "success") {
    notificationClasses = styles.success;
  } else if (status === "pending") {
    notificationClasses = styles.pending;
  }
  const specialClasses = `${styles.notification} ${notificationClasses}`;
  return (
    <section className={specialClasses}>
      <h3 className={styles.title}> {title} </h3>
      <p className={styles.message}> {message} </p>
    </section>
  );
};
export default Notification;
