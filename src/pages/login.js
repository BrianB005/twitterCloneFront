import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ALert from "../components/Alert";
import { Link } from "react-router-dom";
import { signin } from "../redux/actions/userActions";
const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSignin);
  const navigate = useNavigate();
  if (userInfo?.userInfor) {
    navigate("/");
  }
  useEffect(() => {
    if (userInfo?.error) {
      setShowAlert(true);
    }
  }, [userInfo.error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <Container>
      <Wrapper>
        {showAlert && <ALert title={userInfo.error} type="danger" />}
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Email or Username</Label>
            <Input
              // type="email"
              placeholder="Enter your email address or username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Buttons>
            <LoginButton type="submit">
              {userInfo?.loading ? "Logging in..." : "Login"}
            </LoginButton>
            <Register>
              Not registered?
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </Register>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: lightgray; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 70vw;
  max-width: 400px;
  background: lightgray;
  padding: 20px;
  position: relative;
  backdrop-filter: blur(13px);
  box-shadow: 5px 9px 18px white;
`;
const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 90%;
  border-radius: 9px;
  border: 1px solid gray;
  &:focus {
    outline: none;
  }
  margin: 0 auto;
  padding: 10px;
`;
const Label = styled.label`
  position: absolute;
  top: -9px;
  left: 20px;
  background: lightgray;
`;

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
`;

const LoginButton = styled(Button)``;
const Register = styled.div`
  /* padding-left: 50%; */
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;
export default Login;
