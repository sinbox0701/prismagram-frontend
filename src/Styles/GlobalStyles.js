import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

//css 초기화
export default createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
`;