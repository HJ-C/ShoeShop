import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from "../store";

function Detail(props){

    let {id} = useParams()
    let search = props.shoes.find((x)=>{
        return x.id == id
    })
    let [alert,setAlert] = useState(true)
    let [tap,setTap] = useState(0)
    let dispatch = useDispatch()

    useEffect(()=>{
        let a = setTimeout(()=>{
            setAlert(false)
        },2000)
        return ()=>{
            console.log('useEffect 동작 전에 실행되는 함수 자리,기존 타이머를 제거할 때')
            clearTimeout(a)
        }
    },[])

    return(
        <>
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning"> 5분동안 할인 </div>
                : null
            }

            <input type='text'></input>
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{search.title}</h4>
                <p>{search.content}</p>
                <p>{search.price}</p>
                <button className="btn btn-danger" onClick={()=>{dispatch(addItem({id : 1, name : 'Red Knit', count : 1}))}}>주문하기</button> 
                </div>
            </div>

{/* Tap */}
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link eventKey="버튼1" onClick={()=> {setTap(0)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="버튼2" onClick={()=> {setTap(1)}}>버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="버튼3" onClick={()=> {setTap(2)}}>버튼3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tap={tap}></TabContent>
        </div> 
        </>
    )
}

function TabContent({tap}){

    let [fade, setFade] = useState('')
    useEffect(()=>{
        setTimeout(()=>{
            setFade('end')
        },100)
        return ()=>{
            setFade('')
        }
    },[tap])

    if( tap == 0){
        return <div className={'start ' + fade}>내용1</div>
    }else if( tap == 1){
        return <div>내용2</div>
    }else{
        return <div>내용3</div>
    }
}


export default Detail