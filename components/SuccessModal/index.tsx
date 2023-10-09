import { FiCheckCircle } from "react-icons/fi";
import styles from "./styles.module.scss";
import { Button } from "../Button";

export function SuccessModal({ closeModal }: { closeModal?: any }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Email enviado com sucesso!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
}
