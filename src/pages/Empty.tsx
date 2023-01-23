import React from "react";
import Container from "../components/Container/Container";
import Button from "../components/scrollBtn/ScrollBtn";

const Empty = () => {
  return (
    <Container
      styles={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={require("../assets/illustration-empty.svg")} alt="empty" />
      <Button type="link" to="/" text="GO BACK" />
    </Container>
  );
};

export default Empty;
