import { gql, useMutation } from "@apollo/client";

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
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $의 역할을 해줌
        writer: "훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기 </button>;
}
