import React,{useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import InfoIcon from '@material-ui/icons/Info';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {getArt} from '../actions/articles'

const Dashboard = ({setNavitems}) => {
    const articles = useSelector((state)=> state.articles.allArticles );
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        setNavitems((navitems)=>({...navitems,item1:{...navitems.item1,text:'Write',type:''} }));
        dispatch(getArt(history))

    },[setNavitems,history,dispatch])
    return (
        <Wrapper as={motion.div} initial={{scale:0.2}} animate={{scale:1}} transition={{duration:0.3}} >
                <div>
                    {articles.map((art)=>(
                            <PostedArticle key={art._id}>
                                <Link to={`/art/${art._id}`} >
                                        <HeroArticleImage>
                                            <img src={art.selectedFile} alt='heroImage'/>
                                        </HeroArticleImage>
                                        <p><InfoIcon color='disabled' /> {art.creator} </p>
                                        <h3>
                                        {art.title}
                                        </h3>
                                        <div>
                                        {art.description}
                                        </div>
                                </Link>
                    </PostedArticle>

                    )) }
                </div>
               

            
            <TopArticles>
                        <h2>TOP ARTICLES</h2>
                <div>
                        <Article>
                            <ArticleText>
                                <span><InfoIcon color='disabled' fontSize='small' /> </span>
                                <span>Michaell Krasnov</span> in <strong> Better Programming</strong>
                                <h3>10 React Interview Questions for</h3>
                                <span>Jun 10 . 6 min read</span>
                            </ArticleText>
                            <ArticleImage>
                                <img src="https://source.unsplash.com/collection/190727/1600x900" alt=""/>
                            </ArticleImage>
                        </Article>
                </div>
                <div>
                        <Article>
                            <ArticleText>
                                <span><InfoIcon color='disabled' fontSize='small' /> </span>
                                <span>Michaell Krasnov</span> in <strong> Better Programming</strong>
                                <h3>10 React Interview Questions for</h3>
                                <span>Jun 10 . 6 min read</span>
                            </ArticleText>
                            <ArticleImage>
                                <img src="https://source.unsplash.com/collection/190727/1600x900" alt=""/>
                            </ArticleImage>
                        </Article>
                </div>
                <div>
                        <Article>
                            <ArticleText>
                                <span><InfoIcon color='disabled' fontSize='small' /> </span>
                                <span>Michaell Krasnov</span> in <strong> Better Programming</strong>
                                <h3>10 React Interview Questions for</h3>
                                <span>Jun 10 . 6 min read</span>
                            </ArticleText>
                            <ArticleImage>
                                <img src="https://source.unsplash.com/collection/190727/1600x900" alt=""/>
                            </ArticleImage>
                        </Article>
                </div>
                <div>
                        <Article>
                            <ArticleText>
                                <span><InfoIcon color='disabled' fontSize='small' /> </span>
                                <span>Michaell Krasnov</span> in <strong> Better Programming</strong>
                                <h3>10 React Interview Questions for</h3>
                                <span>Jun 10 . 6 min read</span>
                            </ArticleText>
                            <ArticleImage>
                                <img src="https://source.unsplash.com/collection/190727/1600x900" alt=""/>
                            </ArticleImage>
                        </Article>
                </div>

            </TopArticles>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
display:grid;
grid-template-columns: 65% 35%;
margin:0 10px;
@media (max-width: 768px) {
    display:block;
  }
`
const PostedArticle = styled.div`
transition: ease-in-out 0.3s;
padding: 8px 10px;
margin-bottom:15px;
a{
    text-decoration:none;
    color:inherit;
}
p{
    font-size:14px;
    align-items:center;
}
:hover{
    box-shadow: 0 0 8px 0px #c6bfbf;
}
div{
    font-size: 14px;
}
`
const HeroArticleImage = styled.div`
img{
    width:100%;
    height:300px;
    object-fit:cover;
}
`
const TopArticles = styled.div`
padding: 0px 10px;
h2{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}
`
const Article = styled.div`
    margin-top:15px;
    display:grid;
    grid-template-columns:70% 30%;
    @media (max-width: 484px) {
    display:block;
  }
`
const ArticleText = styled.div`
    
`
const ArticleImage = styled.div`
    img{
        width:100%;
        height: 130px;
        object-fit:cover;
    }
`