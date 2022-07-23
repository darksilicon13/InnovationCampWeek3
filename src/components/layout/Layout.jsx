import React from 'react';
import './style.css';
import Header from '../header/Header';
import Form from '../form/Form';
import Todo from '../todo/Todo';

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
    const [state, setState]  = React.useState({
        list: [
        {'title' : '리덕스 공부하기', 
        'description' : '리덕스 기초를 공부해봅시다', 
        isDone : false},
        {'title' : '리액트 공부하기', 
        'description' : '리액트 기초를 공부해봅시다', 
        isDone : true},
    ]
    });

    const addCard = (title, description) => {
        let card = {'title': title, 'description': description, isDone : false};
        setState({list : [...state.list, card]});
    }

    const completeCard = (idx) => {
        let new_list = [...state.list];
        new_list[idx].isDone = true;
        setState({list : new_list});
    }

    const cancelCard = (idx) => {
        let new_list = [...state.list];
        new_list[idx].isDone = false;
        setState({list : new_list});
    }

    const deleteCard = (idx) => {
        let new_list = [...state.list];
        new_list.splice(idx, 1);
        setState({list : new_list});
    }

    return (
        <div className='layout'>
            <Header/>
            <Form addCard={addCard}/>
            <Todo list={state.list} complete={completeCard} cancel={cancelCard} delete={deleteCard}/>
        </div>
    );
}
 
export default Layout;