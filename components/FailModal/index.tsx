import { FiXSquare } from "react-icons/fi";
import styles from "./styles.module.scss";
import { Button } from "../Button";

export const FailModal = ({ closeModal }: { closeModal?: any }) => {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiXSquare />
        <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
};
