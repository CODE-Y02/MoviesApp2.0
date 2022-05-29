import {
  // RecoilRoot,
  atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from "recoil";

const movieState = atom({
  key: "movieState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export default movieState;
