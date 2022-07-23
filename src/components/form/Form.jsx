import React from 'react';
import './style.css';


// 클래스 컴포넌트
// class Form extends Component {
//     constructor(props) {
//         super(props);

//         this.title = React.createRef(null);
//         this.desc = React.createRef(null);
//     }

//     componentDidMount() {
//     }

//     addTodoCard = (title, desc) => {
//         this.props.addCard(title, desc);
//         this.title.current.value = '';
//         this.desc.current.value = '';
//     }

//     render() {
//         return (
//             <div className='form'>
//                 <div>
//                     <label htmlFor="title">제목</label>
//                     <input ref={this.title} className="text-input" id="title" type="text" />
//                     <label htmlFor="description">내용</label>
//                     <input ref={this.desc} className="text-input" id="description" type="text" />
//                 </div>
//                 <button className='add-button' onClick={() => { this.addTodoCard(this.title.current.value, this.desc.current.value) }}>추가하기</button>
//             </div>
//         );
//     }
// }

const Form = (props) => {
    const title = React.createRef(null);
    const desc = React.createRef(null);
    
    const addTodoCard = (title_val, desc_val) => {
        props.addCard(title_val, desc_val);
        title.current.value ='';
        desc.current.value = '';
    }

    return (
        <div className='form'>
            <div>
                <label htmlFor="title">제목</label>
                <input ref={title} className="text-input" id="title" type="text" />
                <label htmlFor="description">내용</label>
                <input ref={desc} className="text-input" id="description" type="text" />
            </div>
            <button className='add-button' onClick={() => { addTodoCard(title.current.value, desc.current.value)}}>추가하기</button>
        </div>
    );
}

export default Form;