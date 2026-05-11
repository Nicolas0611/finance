import { authImageStyles as cls } from "./AuthImage.styles";

const AuthImage = () => {
  return (
    <aside className={cls.root}>
      <div className={cls.card}>
        <img
          src="/Illustration.svg"
          alt=""
          aria-hidden="true"
          className={cls.illustration}
        />
        <div className={cls.content}>
          <img src="/Logo.svg" alt="Finance" className={cls.logo} />
          <div className={cls.textBlock}>
            <p className={cls.heading}>
              Keep track of your money and save for your future
            </p>
            <p className={cls.body}>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AuthImage;
