import React from 'react';
import './style.css';

// class Todo extends Component {
//     render() {
//         return (
//             <div className='todo-container'>
//                 <h2 className='working-title'>Working..🛠</h2>
//                 <div className='working-list'>

//                     {this.props.list.map((v, i) => {
//                         if (!v.isDone) {
//                             return (
//                                 <div key={i} className='working-card'>
//                                     <h2 className='card-title'>{v.title}</h2>
//                                     <p>{v.description}</p>
//                                     <div className='buttons'>
//                                         <button className="delete-btn" onClick={() => { this.props.delete(i) }}>삭제하기</button>
//                                         <button className="complete-btn" onClick={() => { this.props.complete(i) }}>완료</button>
//                                     </div>
//                                 </div>
//                             )
//                         }
//                         return null;
//                     })}

//                 </div>
//                 <h2 className="done-title">Done..!🎉</h2>
//                 <div className='done-list'>
//                     {this.props.list.map((v, i) => {
//                         if (v.isDone) {
//                             return (
//                                 <div key={i} className='working-card'>
//                                     <h2 className='card-title'>{v.title}</h2>
//                                     <p>{v.description}</p>
//                                     <div className='buttons'>
//                                         <button className="delete-btn" onClick={() => { this.props.delete(i) }}>삭제하기</button>
//                                         <button className="cancel-btn" onClick={() => { this.props.cancel(i) }}>취소</button>
//                                     </div>
//                                 </div>
//                             )
//                         }
//                         return null;
//                     })}
//                 </div>
//             </div>);
//     }
// }

const Todo = (props) => {
    return (
        <div className='todo-container'>
            <h2 className='working-title'>Working..🛠</h2>
            <div className='working-list'>

                {props.list.map((v, i) => {
                    if (!v.isDone) {
                        return (
                            <div key={i} className='working-card'>
                                <h2 className='card-title'>{v.title}</h2>
                                <p>{v.description}</p>
                                <div className='buttons'>
                                    <button className="delete-btn" onClick={() => { props.delete(i) }}>삭제하기</button>
                                    <button className="complete-btn" onClick={() => { props.complete(i) }}>완료</button>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}

            </div>
            <h2 className="done-title">Done..!🎉</h2>
            <div className='done-list'>
                {props.list.map((v, i) => {
                    if (v.isDone) {
                        return (
                            <div key={i} className='working-card'>
                                <h2 className='card-title'>{v.title}</h2>
                                <p>{v.description}</p>
                                <div className='buttons'>
                                    <button className="delete-btn" onClick={() => { props.delete(i) }}>삭제하기</button>
                                    <button className="cancel-btn" onClick={() => { props.cancel(i) }}>취소</button>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>);
}

export default Todo;