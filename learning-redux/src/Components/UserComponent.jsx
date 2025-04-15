import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/userInfo/userSlice';

function UserComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const updateUser = () => {
    dispatch(setUser({ name: 'Jane Smith', role: 'User' }));
  };

  return (
    <div>
      <h2>User Component</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserComponent;
