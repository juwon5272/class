import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      // const writer = "qqq" //여기에 있으면 현재 스코프
      const result = await 나의함수({
        variables: {
          // variables 이게 $의 역할을 해줌
          writer: writer, //이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
          title: title,
          contents: contents,
        },
      });
      console.log(result);
      // router.push(
      //   "/05-10-dynamic-routed-board-mutation/" + result.data.createBoard.number
      // );
      router.push(
        `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}` //템플릿 리터럴 방식으로 작성됨
      );
    } catch (error) {
      //try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시!!! 하고 catch가 실행됨
      console.log(error.message);
      alert(error.message);
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기 </button>
    </>
  );
}
