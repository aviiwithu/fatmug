import React,{useEffect} from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';
import { useSelector} from 'react-redux';

const CreateEditArticle = ({currentId, setNavitems,article, setArticle,handleSubmit,clear }) => {

    const checkarticle = useSelector((state)=>currentId?state.articles.allArticles.find((a)=>a._id===currentId):null );
    

    useEffect(()=>{
        setNavitems((navitems)=>({...navitems,item1:{...navitems.item1,text:'Publish',type:'submit'} }));
        if(checkarticle) return setArticle(checkarticle); 
        setName(); // eslint-disable-next-line
    },[setNavitems,setArticle,checkarticle])

    const setName = async()=>{
        const userdata = JSON.parse(localStorage.getItem('user'));
        setArticle({...article,creator:userdata.name,userid:userdata.userid});
    }

    const handleChange = (e)=>{
        setArticle({...article,[e.target.name]:e.target.value});
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} >    
                <Title>
                    <p>Title</p>
                    <input type="text" placeholder='title' value={article.title} name="title" onChange={handleChange} />
                </Title>
                <Description>
                    <p>Description</p>
                    <textarea type="text" placeholder="your article here" value={article.description} name='description' onChange={handleChange} />
                </Description>
                <Upload>
                    <FileBase type='file' multiple={false} onDone={({base64})=> setArticle({...article, selectedFile:base64 }) }/>
                    <img src={article.selectedFile} alt=""/>
                </Upload>
                <ClearBtn type='reset' onClick={clear}>Clear </ClearBtn>
            </form>
            
        </Wrapper>
    )
}

export default CreateEditArticle

const Wrapper = styled.div`
width:70%;
margin:auto;
@media (max-width: 480px) {
    width:90%;
  }
`
const Title = styled.div`
font-weight: 600;
font-size: 20px;
line-height: 37px;
letter-spacing: 0.305em;
text-transform:uppercase;

input{
    width:100%;
    outline:none;
    background:#bcbcbc85;
    border:none;
    border-radius:6px;
    padding: 8px 8px;
}
`
const Description = styled.div`
text-transform:uppercase;
margin-top: 3rem;
font-weight: 600;
font-size: 20px;
line-height: 37px;
letter-spacing: 0.305em;
textarea{
    
    width:100%;
    outline:none;
    background:#bcbcbc85;
    border:none;
    border-radius:6px;
    padding: 15px 15px;
    height: 13rem;
@media (max-width: 480px) {
    height:10rem;
  }
}
`
const Upload = styled.div`
margin-top:1rem;
img{
    width:100%;
    margin: 2rem 0;
    
}
`
const ClearBtn = styled.button`
    border: none;
    background: gray;
    padding: 3px 17px;
    color: white;
    border-radius: 6px;
    font-size: 1rem;
    outline:none;
`