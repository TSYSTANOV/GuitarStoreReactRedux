import { useSelector } from 'react-redux'
import './Error.css'

function Error(){
    const error = useSelector((state)=> state.error.value.length)
    if(error){
    return <div className='error-container'>
        <div className='error-message'>
        <h3>Нет доступа!</h3>
        <p>Попробуйте зайти позже</p>
        </div>
    </div>
    }
}
export {Error}