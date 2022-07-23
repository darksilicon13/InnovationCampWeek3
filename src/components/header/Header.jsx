import React from 'react';
import './style.css';

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