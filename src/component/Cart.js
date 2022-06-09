import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart(){


    let state = useSelector((state)=>{
        return state
    })

    return (
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
                    </tr>
                )
            }
        </tbody>
    </Table> 
    )
}

export default Cart