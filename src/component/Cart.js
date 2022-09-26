import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { countUp,addCount } from '../store';

function Cart(){

    let state = useSelector((state)=> { 
        return state
    })
    let dispatch = useDispatch()

    return (
    <>
    {state.user.name}{state.user.age}의 장바구니
    <button onClick={()=>{dispatch(countUp(10))}}>버튼</button>
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
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td>
                        <td>
                            <button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button>
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