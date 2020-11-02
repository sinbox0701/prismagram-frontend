import React from "react";
import {withRouter} from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import {useQuery} from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";


export default withRouter(({location:{search}}) => {
    const searchTerm = search.split("=")[1];
    const {data, loading} = useQuery(SEARCH,{
        skip:searchTerm === undefined,
        variables:{
            term:decodeURI(searchTerm)//한글패치
        }
    });//useQuery를 사용하기 싫은 조건 + 사용에 필요한 변수 
    
    return <SearchPresenter searchTerm={searchTerm} loading={loading} data={data}/>;
});