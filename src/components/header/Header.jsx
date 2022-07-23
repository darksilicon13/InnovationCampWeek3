import React from 'react';
import './style.css';

// 클래스 컴포넌트
// class Header extends Component {
//     render() { 
//         return (
//             <div className='header'>
//                 <p>My Todo List</p>
//                 <p>React</p>
//             </div>
//         );
//     }
// }
 
const Header = (props) => {
    return (
        <div className='header'>
            <p>My Todo List</p>
            <p>React</p>
        </div>
    );
}
export default Header;