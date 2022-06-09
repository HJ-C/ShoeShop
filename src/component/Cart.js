import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeAge, changeCount } from '../store'

function Cart(){


    let state = useSelector((state)=>{ return state })
    //useDispatch : store.js로 요청 보내주는 함수
    let dispatch = useDispatch()


    return (
    <>
    {state.user.name} {state.user.age}의 장바구니
    <button onClick={()=>{dispatch(changeAge(1))}}>버튼</button>
    <Table>
        <thead>
            <tr>
            <th>#</th>
            <th></th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </thead>
        <tbody>
            {
                state.cart.map((a,i)=>
                    <tr>
                        <td>1</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td>
                        <td>
                            <button onClick={()=>{
                            dispatch(changeCount(state.cart[i].id))
                            }}>+</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </Table> 
    </>
    )
}

export default Cart