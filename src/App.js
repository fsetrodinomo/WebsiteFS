import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/JJxGpE4NMv20H8JA/scene.splinecode"
      />
      <Content>
        <h1> Hi, my name is Fauve</h1>
        <p>
          I am a junior developer and in my spare time I like to discover new
          languages and new tools. Feel free to ask Marcus for some wisdom. He
          is always willing to share some wisdom
        </p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs({ className: "spline" })`
  font-family: "Noto Serif", serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div.attrs({ className: "spline" })`
  position: absolute;
  top: 30px;

  .h1 {
    font-family: "Noto Serif", serif;
    font-size: 70px;
    font-weight: bold;
    margin: 0;
    max-width: 500px;
  }
  .p {
    font-weight: normal;
    line-height: 150%;
    max-width: 300px;
  }

  h1,
  p {
    margin: 0 30px 0 100px;
  }
`;
