import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $의 역할을 해줌
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "정말 좋은 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기 </button>
    </>
  );
}
