import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { LOGOUT } from '../constants/actionType';

const Appbar = ({navitems, handleSubmit}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    // console.log(article);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) );

    const logout=()=>{
        dispatch({type:LOGOUT});
        history.push('/login');
    }

useEffect(()=>{

setUser(JSON.parse(localStorage.getItem('user')));

},[location,user?.token])


    return (
        <Wrapper>
            <LeftNav>
                <NavLink to="/" >
                    <strong> FATMUG |</strong> Greetings {user?user.name:"Guest"}
                </NavLink>
            </LeftNav>
            <RightNav>
                <form  > 
                    <ButtonContainer>
                            <Button onClick={navitems.item1.type==='submit'?handleSubmit:()=>{}} > 
                        <NavLink to='/new'  > 
                                {navitems.item1.text}
                        </NavLink>
                            </Button>
                            <Button  > 
                        <NavLink to='/articles' > 
                            {navitems.item2.text}
                        </NavLink >
                            </Button>
                            <Button >
                        <NavLink to='/login' onClick={logout} >
                            {navitems.item3.text}
                        </NavLink>
                            </Button>
                    </ButtonContainer>
                </form>
            </RightNav>
        </Wrapper>
    )
}

export default Appbar

const Wrapper = styled.div`
/* display:grid; */
grid-template-columns: 65% 35%;
margin:20px 10px;
padding: 10px;
`
const LeftNav = styled.div`
a{
    text-decoration:none;
    color:inherit;
}
`
const RightNav = styled.div`

`
const ButtonContainer = styled.div`
a{
    text-decoration:none;
}
display:flex;
justify-content: flex-end;
.active{
    background:#a7a6a6e0;
    color:white;
    outline:none;
    border:none;
    border-radius:5px;
    padding: 0px 5px;
}
`
const Button = styled.button`
text-decoration:none;
outline:none;
border:none;
border-radius:5px;
margin: 0px 5px;
background: #e0e0e0;
border: 1px solid black;
a{
padding: 0px 5px;
color:inherit;
}
`