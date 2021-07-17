import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
    <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header>
          <h2 className={styles.header}>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}></Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
