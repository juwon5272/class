import * as S from "./BoardWrite.styles";
// import qqq, { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //자바스크립트 영역

  //HTML 영역 (return 영역)
  return (
    <>
      작성자 : <S.RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeContents} />
      <br />
      <S.BlueButton onClick={props.onClickSubmit}>
        GRAPHQL-API(동기) 요청하기{" "}
      </S.BlueButton>
    </>
  );
}
