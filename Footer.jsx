import { EnvironmentOutlined, EnvironmentTwoTone, FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, PinterestOutlined, TwitterOutlined } from "@ant-design/icons"
import { IconMap } from "antd/es/result"
import styled from "styled-components"
import { mobile } from "../Responsive"

const Container=styled.div`
    display:flex;
${mobile({flexDirection:"column"})};

`
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo=styled.h1``
const Desc=styled.p`
    margin:20px 0px;
`
const SocialContainer=styled.div`
    display:flex;
`
const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`


const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};

`
const Title=styled.h3`
    margin-bottom:30px;
`
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItems=styled.li`
    width:50%;
    margin-bottom:10px;
`


const Right=styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})};

`
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align:items:center;
`
const Payment=styled.img`
    width:50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SCart</Logo>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eveniet
                 porro nam quibusdam veritatis at modi placeat
                 perspiciatis a magni, illum aperiam expedita omnis eligendi voluptatem ea neque excepturi itaque?
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookOutlined/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramOutlined/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterOutlined/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestOutlined/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Women Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>WishList</ListItems>
                <ListItems>Terms</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <EnvironmentOutlined style={{marginRight:"10px"}} />
                {/* <EnvironmentTwoTone style={{marginRight:"10px"}}/> */}
                622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <PhoneOutlined style={{marginRight:"10px"}}/>
                +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight:"10px"}}/>
                contact@scart.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
