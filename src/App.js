import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/JJxGpE4NMv20H8JA/scene.splinecode"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs({ className: "df" })`
  font-family: "Noto Serif", serif;
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
