
import React from 'react'
import styled ,{ css } from 'styled-components';
import { Badge, Input } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined } from '@ant-design/icons';
import {mobile} from "../Responsive";

// const { Search } = Input;
const Container = styled.div`
    height: 80px;
    ${mobile({height: "70px"})};
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:"10px 0px"})};

`
const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    //justify-content:center;

`
const SearchContainer= styled.div`
    border : 0.5px solid lightgray;
    display:flex;
align-items:center;
margin-left:5px;
padding:5px;
${mobile({width:"90px"})};
`
const Search = styled(Input)`
border: none;

`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})};
`
const Center=styled.div`flex:1`

const Logo=styled.h1`
    font-weight: bold;
    text-align:center;
    ${mobile({fontSize:"21px"})};
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})};
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})};
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                <Search placeholder="Search" prefix={<SearchOutlined />} style={{colour:"gray",fontSize:16}}/>
                    {/* <Search/> */}
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SCart</Logo>
            </Center>
            <Right>
                <MenuItem><Link to='C:\Users\Hp\Desktop\ECOMMERCE-Website\ecommerce\src\pages\Register.jsx'>REGISTER</Link></MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                <Badge count={2} size="small">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    
    </Container>
  )
}

export default Navbar
