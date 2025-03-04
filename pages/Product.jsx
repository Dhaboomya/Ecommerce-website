import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"

const Container=styled.div``
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
    height:90vh;
    width:100%;
    object-fit:cover;
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
`
const Title=styled.h1`
    font-weight:200;
`
const Desc=styled.p`
    margin:20px 0px;
`
const Price=styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    display:flex;
    align-items:center;

`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    
    background-color: ${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left=10px;
    padding:5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    // font-weight:700;
`
const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }
`




const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis 
                    esse corporis sed, temporibus expedita harum! Praesentium aliquam nulla quisquam, ipsa laudantium aliquid dolor 
                    possimus eligendi repellendus aperiam aut provident quidem.</Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="Black"/>
                        <FilterColor color="DarkBlue"/>
                        <FilterColor color="Grey"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                            <FilterSizeOption>XXXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <MinusOutlined/>
                    <Amount>1</Amount>
                    <PlusOutlined/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product
