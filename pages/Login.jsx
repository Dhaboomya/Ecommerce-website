import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height:100vh;
    background : linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)
    )url("https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

    display:flex;
    align-items :center;
    justify-content :center;
    background-size:cover;
`
const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;

`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px ;
    padding:10px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background:teal;
    color:white;
    margin-bottom:10px;
`
const Link = styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
    
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
               
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DON'T YOU REMEMBER PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
