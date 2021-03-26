import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import moment from 'moment';
import {useSelector,useDispatch} from 'react-redux';
import {getOne} from '../actions/articles'


const ViewArticle = ({setNavitems,match}) => {
    const dispatch = useDispatch();
    const view = useSelector((state)=>state.view);
    const id = match.params.id;
    const article = useSelector((state)=>state.articles.allArticles.find((item)=>item._id===id) );
        
    const [art, setArt] = useState(article);
        
    useEffect(()=>{
                setNavitems((navitems)=>({...navitems,item1:{...navitems.item1,text:'Write',type:''} }));
                async function fetchdata() {
                    if(!article) {
                        await dispatch(getOne(id));
                        console.log("article is not available")
                    }
                }
                fetchdata();
    },[setNavitems,dispatch,article,id]);

    useEffect(()=>{
        if(!article) {
            setArt(view);
        }

    },[view,article])


    return (
        <Wrapper>
            <ImageSection>
                <img src={art?.selectedFile} alt="img"/>
            </ImageSection>

            <TextSection>
                <Heading>
                    <h2>{art?.title}</h2>
                    <span> {moment(art?.createdAt).fromNow() } <strong>6 min read </strong> </span>
                </Heading>
                <Text>
                    {art?.description}
                </Text>
                <Info>
                    <PersonOutlineIcon /> By 
                    <strong> ‏‏‎ ‎{art?.creator} </strong>

                </Info>
            </TextSection>
        </Wrapper>
    )
}

export default ViewArticle

const Wrapper = styled.div`
width:80%;
margin:auto;

`
const ImageSection = styled.div`
img{
    width:100%;
    max-height:22rem;
    object-fit:cover;
}
`
const TextSection = styled.div`

`
const Heading = styled.div`
border-bottom:2px solid black;
display:flex;
justify-content:space-between;
align-items:center;
padding:5px 2px;
`
const Text = styled.div`

`
const Info = styled.div`
margin: 2rem 0;
display:flex;
align-items:center;
`