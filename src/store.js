import { configureStore, createSlice } from '@reduxjs/toolkit';

// createSlice는 useState와 용도가 비슷함
let user = createSlice({
  name : 'user',  //state 이름
  initialState: {name : 'kim', age : 20},  // state 초기값 
  reducers : {
    countUp(state,action){
      state.age+=action.payload
    }
  }
})
export let {countUp} = user.actions;


let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      let index = state.findIndex((a)=>{ return a.id == action.payload })
      state[index].count++
    }
  }
}) 

export let {addCount} = cart.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
})
