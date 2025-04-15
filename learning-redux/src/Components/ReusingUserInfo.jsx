import { useDispatch, useSelector } from 'react-redux';


const ReUsingUserInfo = () =>{

    const user = useSelector((state) => state.user);


    return(
        <div>
            <br></br>
            from ReusingUserInfo: hi <b>{user.name} </b>
            
        </div>
    )

}

export default ReUsingUserInfo;