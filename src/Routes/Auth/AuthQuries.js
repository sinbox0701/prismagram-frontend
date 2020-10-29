//query를 여기에 coding
import {gql} from "apollo-boost";

export const LOG_IN = gql`
    mutation requestSecret($email: String!){
        requestSecret(email:$email)
    }
`;