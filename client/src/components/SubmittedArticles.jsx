import React,{useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import EditIcon from '@material-ui/icons/Edit';
import {LinearProgress } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import {deleteArt, getUserArt} from '../actions/articles';
import {Link} from 'react-router-dom';

const SubmittedArticles = ({props}) => {

    const {setCurrentId, setNavitems} = props;
    const dispatch = useDispatch();
    const userId = JSON.parse(localStorage.getItem("user")).userid;
    const articles = useSelector((state)=> state.articles.userArt);
            
    useEffect(()=>{
        setNavitems((navitems)=>({...navitems,item1:{...navitems.item1,text:'Write',type:''} }));
        dispatch(getUserArt(userId));
    },[setNavitems,dispatch,userId ])
   
    const containerVariants={
        visible:{
            y:0, opacity:1,
            transition:{staggerChildren: 0.1,}
        }
    }
    const itemVariants ={
        hidden:{ y:40 },
        visible:{ y:0,
        transition:{ duration:0.3,ease:"easeInOut"}}
    }
  
    return (
        <Wrapper>
        {!articles?<LinearProgress />:
            <>
            <Heading>
                <p>Your submitted articles</p>
            </Heading>
                <motion.div variants={containerVariants} initial="hidden" animate="visible"  >
                    { articles.map((art)=>(
                        <Articles key={art._id} variants={itemVariants}  >
                            <ImageWrapper>
                                <img src={art.selectedFile} alt=""/>
                            </ImageWrapper>
                            <TextArea>
                                <h3>{art.title}</h3>
                                <p>{art.description} </p>
                            </TextArea>
                            <IconArea>
                                <Link to='/new' > 
                                    <EditIcon fontSize='large' color='disabled' onClick={()=>setCurrentId(art._id)} />
                                </Link>
                                <DeleteOutlineIcon fontSize='large' color='disabled' onClick={()=> dispatch(deleteArt(art._id))} />
                            </IconArea>
                        </Articles>
                        
                    )) }
                </motion.div>
                </>
                }
                
        </Wrapper> 
    )
}

export default SubmittedArticles

const Wrapper = styled.div`
width:80%;
margin:auto;
`
const Heading = styled.div`
text-transform:uppercase;
border-bottom:2px solid black;
border-top:2px solid black;
font-weight: 600;
font-size: 24px;
line-height: 45px;
letter-spacing: 0.21em;
`
const Articles = styled(motion.div)`
padding:10px 0;
display:grid;
grid-template-columns: 20% 70% 10%;
align-items:center;
border-bottom:2px solid black;
@media (max-width: 760px) {
    display:block
  }
`
const ImageWrapper = styled.div`
img{
    width:100%;
    height:150px;
    object-fit:cover;
}
`
const TextArea = styled.div`
padding:0px 8px;
overflow:hidden;
max-height: 150px;
`
const IconArea = styled.div`
a{
    text-decoration:none;
    color:inherit;
}
`