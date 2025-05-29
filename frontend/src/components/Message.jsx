import styles from "./Message.module.css";

function Message({ message, handleCloseModel }) {
  return (
    <>
      <div className={styles.messageBg}>
        <section className={styles.messageContainer}>
          <h3>{message}</h3>
          <button onClick={() => handleCloseModel(false)}>OK!</button>
        </section>
      </div>
    </>
  );
}

export default Message;
