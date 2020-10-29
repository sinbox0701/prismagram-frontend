//state, data, hook을 여기에 coding
import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQuries";

export default () => {
    const [action,setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const [requestSecret] = useMutation(LOG_IN,{
        variables:{email:email.value}
    });

    const onLogin = (e) =>{
        e.preventDefault();
        if(email !== ""){
            requestSecret();
        }
    };//Login버튼 누를시 Submit 방지 & email로 비밀번호 전송

    return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}  
    />
    );
};