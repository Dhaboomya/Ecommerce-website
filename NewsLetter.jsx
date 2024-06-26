import { SendOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { mobile } from "../Responsive"

const Container=styled.div`
    height:60vh;
    background-color:#fcf5f5;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
    // ${mobile({padding:"10px"})};
    
`
const Title=styled.h1`
font-size:60px;
margin-bottom:20px;
// ${mobile({padding:"10px"})};

`
const Desc=styled.div`
font-size:24px;
margin-bottom:20px;
font-weight:300;
${mobile({textAlign:"center"})};
`
const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    border-radius:5px;
${mobile({width:"80%"})};

`
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:10px;
`
const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    border-radius:2px;
`


const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely updates from favourite product...</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <SendOutlined/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
