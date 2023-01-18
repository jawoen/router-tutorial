import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    //setSearchParams는 값을 업데이트 해주고 수정하는 함수이고,
    //SearchParams는 배열의 0번째로 객체형태로 값을 불러오는 함수
    const [ SearchParams, setSearchParams ] = useSearchParams();
    const name = SearchParams.get('name');
    const age = SearchParams.get('age');
    return (
        <div>
           <h2>소개페이지</h2> 
           <p>소개페이지 입니다.</p>
           <p>{location.search}</p>
           <p>name값은 {name}</p>
           <p>age값은 {age}</p>
        </div>
    );
};

export default About;