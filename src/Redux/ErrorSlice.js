import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
    name:'error',
    initialState:{
        value:'',
    },
    reducers:{
        setError:(state)=>{
            console.log(state)
            state.value = 'Error'
        },
        deleteError:(state)=>{
            state = ''
        }
    }
})
export const {setError, deleteError} = ErrorSlice.actions
export default ErrorSlice.reducer