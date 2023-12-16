import { useSelector, useDispatch } from 'react-redux';
import { increment} from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');


  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}

export default Counter;