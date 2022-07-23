import React from 'react';
import './style.css';
import Header from '../header/Header';
import Form from '../form/Form';
import Todo from '../todo/Todo';


// 클래스 컴포넌트
// class Layout extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//             {'title' : '리덕스 공부하기', 
//             'description' : '리덕스 기초를 공부해봅시다', 
//             isDone : false},
//             {'title' : '리액트 공부하기', 
//             'description' : '리액트 기초를 공부해봅시다', 
//             isDone : true},
//         ]
//         }
//     }

//     addCard = (title, description) => {
//         let card = {'title': title, 'description': description, isDone : false};
//         this.setState({
//             list : [...this.state.list, card]
//         });
//     }

//     completeCard = (idx) => {
//         let new_list = [...this.state.list];
//         new_list[idx].isDone = true;
//         this.setState({list : new_list});
//     }

//     cancelCard = (idx) => {
//         let new_list = [...this.state.list];
//         new_list[idx].isDone = false;
//         this.setState({list : new_list});
//     }

//     deleteCard = (idx) => {
//         let new_list = [...this.state.list];
//         new_list.splice(idx, 1);
//         this.setState({list : new_list});
//     }

//     render() { 
//         // console.log(this.state.list);
//         return (
//             <div className='layout'>
//                 <Header/>
//                 <Form addCard={this.addCard}/>
//                 <Todo list={this.state.list} complete={this.completeCard} cancel={this.cancelCard} delete={this.deleteCard}/>
//             </div>
//         );
//     }
// }

const Layout = (props) => {

    const [list, setList] = React.useState([
        {'title' : '리덕스 공부하기', 
        'description' : '리덕스 기초를 공부해봅시다', 
        isDone : false},
        {'title' : '리액트 공부하기', 
        'description' : '리액트 기초를 공부해봅시다', 
        isDone : true},
    ])

    const addCard = (title, description) => {
        let card = {'title': title, 'description': description, isDone : false};
        setList([...list, card]);
    }

    const completeCard = (idx) => {
        let new_list = [...list];
        new_list[idx].isDone = true;
        setList(new_list);
    }

    const cancelCard = (idx) => {
        let new_list = [...list];
        new_list[idx].isDone = false;
        setList(new_list);
    }

    const deleteCard = (idx) => {
        let new_list = [...list];
        new_list.splice(idx, 1);
        setList(new_list);
    }

    return (
        <div className='layout'>
            <Header/>
            <Form addCard={addCard}/>
            <Todo list={list} complete={completeCard} cancel={cancelCard} delete={deleteCard}/>
        </div>
    );
}
 
export default Layout;