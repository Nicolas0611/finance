import { Link } from "react-router-dom";
import { authWrapperStyles as cls } from "./AuthWrapper.styles";
interface AuthWrapperProps {
  children: React.ReactNode;
  onSubmit: () => void;
  title: string;
  link: {
    title: string;
    text: string;
    to: string;
  };
}

const AuthWrapper = ({ children, onSubmit, title, link }: AuthWrapperProps) => {
  return (
    <form className={cls.root} onSubmit={onSubmit}>
      <h2 className={cls.title}>{title}</h2>
      {children}
      <p className={cls.description}>
        {link.title}{" "}
        <Link to={link.to} className={cls.link}>
          {link.text}
        </Link>
      </p>
    </form>
  );
};

export default AuthWrapper;
