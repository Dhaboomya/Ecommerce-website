import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

const Container=styled.div``
const Wrapper=styled.div`
    padding:20px;
`
const Title=styled.h1`
    font-weight:300;
    text-align:center;
`
const Top=styled.div`
    display:flex;
    aign-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopButton=styled.button`
    padding:10px;
    // align-items:center;
    // justify-content:center;
    cursor:pointer;
    font-weight:600;
    border: ${(props)=> props.type === "filled" && "none"};
    background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=> props.type === "filled" && "white"};

`
const TopTexts=styled.div``

const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`

const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
`
const Info=styled.div`
    flex:3;
`
const Product=styled.div`
    display:flex;
    justify-content:space-between;
`
const ProductDetail=styled.div`
    flex:2;
    display:flex;
`
const Image=styled.img`
    width:200px;
`
const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductSize=styled.span``
const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${(props)=> props.color};
`
const PriceDetail=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const ProductAmountcontainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
const ProductAmount=styled.div`
    font-size:24px;
    margin:5px;
`
const ProductPrice=styled.div`
    font-size:30px;
    font-weight:200;
`
const Hr=styled.hr`
   background-color:#eee;
    border:none;
    height:1px;
`

const Summary=styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`
const SummaryTitle=styled.h1`
    font-weight:200;
`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==="total" && "500"};
    font-size:${props=>props.type==="total" && "24px"};

`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button` 
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`




const Cart = () => {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src=""/>
                        <Details>
                            <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                            <ProductId><b>Id:</b>9574839755 </ProductId>
                            <ProductColor color="grey"/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountcontainer>
                            <PlusOutlined/>
                            <ProductAmount>1</ProductAmount>
                            <MinusOutlined/>
                        </ProductAmountcontainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src=""/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>Id:</b>9574839755 </ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>37.5 </ProductSize>
                        </Details>
                    </ProductDetail>
                    
                    <PriceDetail>
                        <ProductAmountcontainer>
                            <PlusOutlined/>
                            <ProductAmount>2</ProductAmount>
                            <MinusOutlined/>
                        </ProductAmountcontainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT</Button>
            </Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
   </Container>
  )
}

export default Cart
