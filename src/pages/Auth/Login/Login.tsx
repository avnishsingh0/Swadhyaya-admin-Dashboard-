import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// internal imports
import style from "./Login.module.css";
import logo from "../../../resources/swadhyaya-logo.png";

// import from mui
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsSubmitting(false);
    navigate("/dashboard");
  };

  return (
    <section className={style.loginContainer}>
      <div className={style.leftContainer}>
        <div className={style.logoContainer}>
          <img src={logo} alt="logo" className={style.swadhyayaLogo} />
        </div>
        <div className={style.formBoxContainer}>
          <form onSubmit={handleSubmit}>
            <div className={style.formTop}>
              <h4 className={style.formHeading}>Sign in to Swadhyaya</h4>
            </div>
            <div className={style.formBottom}>
              <TextField
                name="email"
                label="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g fill="currentColor">
                              <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></path>
                              <path
                                fill-rule="evenodd"
                                d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20c4.182 0 7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12Zm10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z"
                                clip-rule="evenodd"
                              ></path>
                            </g>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001c0-.001 0 0 0 0l.003.009l.021.045c.02.042.051.108.094.194c.086.172.219.424.4.729a13.37 13.37 0 0 0 1.67 2.237a11.966 11.966 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.706 8.706 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13.053 13.053 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14.045 14.045 0 0 1-.741 1.348a15.368 15.368 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a11.81 11.81 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.406 15.406 0 0 1-1.87-2.519a13.457 13.457 0 0 1-.591-1.107a5.418 5.418 0 0 1-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Link to={"/forget-password"} className={style.forgotLink}>
                Forgot password?
              </Link>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                className={style.submitBtn}
              >
                Login
                <span className={style.btnIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g id="iconifyReact825">
                      <g id="iconifyReact826">
                        <path
                          id="iconifyReact827"
                          fill="currentColor"
                          d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
      <div className={style.rightContainer}>
        <img
          src="https://minimals.cc/assets/background/overlay_3.jpg"
          alt="swadhyaya-img"
          className={style.rightContainerImg}
        />
      </div>
    </section>
  );
};
