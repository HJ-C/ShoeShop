import {Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import data from './db/data'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './component/detail';


function App(){

  const [shoes, setShoes] = useState(data)
  let navigate = useNavigate()

  return (
    <>
    <div>
{/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to='/' onClick={()=>{ navigate('/')}}>홈</Nav.Link>
          <Nav.Link to='/detail' onClick={()=> {navigate('/detail')}}>디테일</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

{/*메인 Bg */}
      <div className ="main-bg"></div>

{/* 상품 화면 */}
      <Routes>
        <Route path='/' element={
          <>
          <div className="container">
            <div className="row">
              {shoes.map((a,i)=>{
                return (
                  <Card shoes={shoes} i={i}></Card>        
                )
            })}
          </div>
        </div>
          </>
        } />

      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}> </Route>
      <Route path="*" element={<div>없는페이지</div>}></Route>

      <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>멤버</div>}></Route>
        <Route path='location' element={<div>위치</div>}></Route>
      </Route>
      
      </Routes>


    </div>
    </>
  )
} 

function Card(props){
  return (
    <>
      <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content} & {props.shoes[props.i].price}</p>
      </div>
    </>
  )
}

function About(){
  return (
    <div>
      <h4>About Page</h4>
      <Outlet></Outlet>
    </div>

  )
}
export default App;
