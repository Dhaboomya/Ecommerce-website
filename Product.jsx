import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import styled from "styled-components"

const Info=styled.div`
opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`
const Icon=styled.div`

    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin :10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1);
    }
`

const Container=styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }
`
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
    
`
const Image=styled.img`
    height:75%;
    z-index:2;
`





const Product = ({items}) => {
  return (
    <Container>
        <Circle/>
        <Image src={items.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <HeartOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
