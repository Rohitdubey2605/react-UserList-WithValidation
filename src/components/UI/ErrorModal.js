import { Fragment } from "react";
// import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.cancel}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="cancel" onClick={props.cancel}>
          Close
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  // const OnCancel = () => {
  //   props.cancel();
  // };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop cancel={props.cancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          cancel={props.cancel}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
