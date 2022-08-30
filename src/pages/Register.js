import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  if (!password === confirmPassword) {
    window.alert("Passwords do not match.Enter matching passwords.");
  }
  const userInfo = useSelector((state) => state.userRegister);
  const navigate = useNavigate();
  if (userInfo?.userInfor) {
    navigate("/");
  }

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  useEffect(() => {
    if (userInfo?.error) {
      setShowAlert(true);
    }
  }, [userInfo.error]);

  return (
    <Container>
      <Wrapper>
        {showAlert && <Alert title={userInfo.error} type="danger" />}
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Username</Label>
            <Input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputWrapper>
          <Buttons>
            <RegisterButton type="submit">
              {userInfo?.loading ? "Hold On..." : "Register"}
            </RegisterButton>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
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
  position: relative;
  background: lightgray;
  box-shadow: 4px 6px 18px white;
  padding: 20px;
  backdrop-filter: blur(13px);
`;
const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
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

const Form = styled.form``;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
`;

const RegisterButton = styled(Button)``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Register;
