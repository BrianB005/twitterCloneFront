import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiFillVideoCamera, AiOutlineGif } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { createTweet } from "../redux/actions/tweetActions";
import ALert from "./Alert";

const CreateTweet = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [file, setFile] = useState(null);
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.createTweet);
  // console.log(tweet);
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      setTweet("");
      window.location.reload();
    }
  }, [success]);
  const handleChange = (e) => {
    setTweet(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const fileName = Date.now();
      data.append("file", file);
      data.append("name", fileName);
      try {
        await axios.post("http://localhost:5000/api/v1/upload", data);
      } catch (error) {
        console.log(error);
      }
      dispatch(createTweet({ title: tweet, image: fileName }));
    } else {
      dispatch(createTweet({ title: tweet }));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        autoFocus
        placeholder="What's on your mind?"
        onChange={handleChange}
        value={tweet}
      />
      {file && (
        <ImagePreview>
          <Image src={URL.createObjectURL(file)} />
          <Cancel>Cancel</Cancel>
        </ImagePreview>
      )}
      <FileInputs>
        {showAlert && <ALert title={error} type="danger" />}
        <Label htmlFor="photo">
          <Input
            type="file"
            id="photo"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Icon id="photo">
            <HiPhotograph />
          </Icon>
          <Text>Photo</Text>
        </Label>
        <Label>
          <Input type="file" id="gif" />
          <Icon id="gif">
            <AiOutlineGif />
          </Icon>
          <Text>Gif</Text>
        </Label>
        <Label>
          <Input type="file" id="video" />
          <Icon id="video">
            <AiFillVideoCamera />
          </Icon>
          <Text>Video</Text>
        </Label>
        <Button type="submit">{loading ? "Hold On.." : "Tweet"}</Button>
      </FileInputs>
    </Form>
  );
};
const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 14px 30px;
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
`;
const FileInputs = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 40px;
`;
const Text = styled.h6`
  position: absolute;
  left: -3px;
  top: 23px;
  transition: all 0.5s linear;
  display: none;
`;
const Label = styled.label`
  cursor: pointer;
  margin-right: 30px;
  position: relative;
  &:hover {
    ${Text} {
      display: block;
    }
  }
`;
const Input = styled.input`
  display: none;
`;
const TextInput = styled.input`
  border: none;
  padding: 10px 20px;
  outline: none;
  background: inherit;
`;

const Icon = styled.div`
  color: rgb(28, 240, 231);
`;
const Button = styled.button`
  border-radius: 15px;
  background: cyan;
  cursor: pointer;
  padding: 6px 15px;
  border: none;
  display: flex;

  margin-left: 30px;

  &:hover {
    opacity: 0.8;
  }
`;

const ImagePreview = styled.div`
  padding: 0 20px 10px 20px;
  position: relative;
  width: 100px;
  height: 140px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Cancel = styled.button`
  position: absolute;
  left: 50%;
  top: 70%;
  padding: 2px 3px;
  transform: translateX(-50%);
  border: 1px solid red;
`;

export default CreateTweet;
