import React,{useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import moment from 'moment';
import {useSelector,useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'
import {getOne} from '../actions/articles';
import readingTime from 'reading-time';


const ViewArticle = ({props}) => {
    const {id} = useParams();
    const {setNavitems} = props;
    
    const dispatch = useDispatch();
    const art = useSelector((state)=>state.view.article);
   
    
    useEffect(()=>{
                setNavitems((navitems)=>({...navitems,item1:{...navitems.item1,text:'Write',type:''} }));
                dispatch(getOne(id));
                
            },[setNavitems,dispatch,id]);         
               
    return (
        <Wrapper  >
            {!art?<h1>Loading...</h1> :(
            <>
                <ImageSection>
                    <motion.img src={art?.selectedFile} alt="img" initial={{scale:0.7}} animate={{scale:1}} transition={{duration:0.5}} />
                </ImageSection>

                <TextSection initial={{y:'30vh'}} animate={{y:0}} transition={{duration:0.6}} >
                    <Heading>
                        <h2>{art?.title}</h2>
                        <span> {moment(art?.createdAt).fromNow() } <strong> {readingTime(art?.description).text}  </strong> </span>
                    </Heading>
                    <Text>
                        {art?.description}
                    </Text>
                    <Info>
                        <PersonOutlineIcon /> By 
                        <strong> ‏‏‎ ‎{art?.creator} </strong>

                    </Info>
                </TextSection>
            </> )
                }
        </Wrapper>
    )
}

export default ViewArticle

const Wrapper = styled(motion.div)`
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
const TextSection = styled(motion.div)`

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