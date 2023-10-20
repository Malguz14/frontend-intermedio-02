import Logo from "./Logo";
import Title from "./Title";

import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <Title text="Task manager" small="my task application" />
    </header>
  );
};

export default Header;
