import React from "react";
import LogIn from "../../components/LogInForm/LogInForm";
import { getImgUrl } from "../../app/getImage";
import "./LogInPage.css";

const LogInPage = () => {
  // Начальные данные в localStorage для тестирования
  React.useEffect(() => {
    const defaultUsers = [
      { username: "harrypotter", password: "the_chosen_one" },
      { username: "user", password: "password" },
    ];
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  return (
    <>
      <div
        className="login-page-container"
        style={{
            backgroundImage: `url(${getImgUrl("login_background.png")})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
      >
        <LogIn />
      </div>
    </>
  );
};

export default LogInPage;
