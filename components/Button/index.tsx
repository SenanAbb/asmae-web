import styles from "./Button.module.scss";

const Button = ({ text, onClick, isLoading, disabled }: any) => {
  return (
    <button style={isLoading || disabled ? {backgroundColor: '#6f6f6f', cursor: 'auto'} : {}} className={styles.button} onClick={onClick} disabled={disabled}>
      {isLoading ? (
        <span className={styles.loader}></span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
