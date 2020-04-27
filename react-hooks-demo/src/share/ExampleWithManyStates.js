
import React, { useState } from 'react';


// function ExampleWithManyStates() {
//     // 初始值可接收 数组/对象等
//     const [age, setAge] = useState(42);
//     const [fruit, setFruit] = useState('banana');
//     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

//     // //第一次渲染
//     // useState(42);  //将age初始化为42
//     // useState('banana');  //将fruit初始化为banana
//     // useState([{ text: 'Learn Hooks' }]); //...

//     // //第二次渲染
//     // useState(42);  //读取状态变量age的值（这时候传的参数42直接被忽略）
//     // useState('banana');  //读取状态变量fruit的值（这时候传的参数banana直接被忽略）
//     // useState([{ text: 'Learn Hooks' }]); //...
//     console.log(1, todos);
//     return (
//         <div>
//             <p>age {age} <button onClick={() => setAge(144)}> setAge</button></p>
//             <p>fruit {fruit} <button onClick={() => setFruit('apple')}> setFruit</button></p>
//             <div>
//                 <ul>
//                     {
//                         todos && todos.length > 0 && todos.map((item, index) => {
//                             return <li key={item.text}>{item.text}</li>;
//                         })
//                     }
//                 </ul>
//                 <button onClick={() => setTodos([{ text: 'Learn Hooks01' }, { text: 'Learn Hooks02' }, { text: 'Learn Hooks03' }, { text: 'Learn Hooks04' }])}>setTodos </button>
//             </div>
//         </div>
//     );


// }

let showFruit = true;
function ExampleWithManyStates() {
    const [age, setAge] = useState(42);

    if (showFruit) {
        const [fruit, setFruit] = useState('banana');
        showFruit = false;
        console.log('fruit', fruit);
    }

    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    console.log('age', age);
    console.log('todos', todos);
    //    //第一次渲染
    //   useState(42);  //将age初始化为42
    //   useState('banana');  //将fruit初始化为banana
    //   useState([{ text: 'Learn Hooks' }]); //...

    //   //第二次渲染
    //   useState(42);  //读取状态变量age的值（这时候传的参数42直接被忽略）
    //   // useState('banana');  
    //   useState([{ text: 'Learn Hooks' }]); //读取到的却是状态变量fruit的值，导致报错

    return (
        <div>
            <p>age {age} <button onClick={() => setAge(144)}> setAge</button></p>
            {/* <p>fruit {fruit} <button onClick={() => setFruit('apple')}> setFruit</button></p> */}
            <div>
                <ul>
                    {
                        todos && todos.length > 0 && todos.map((item, index) => {
                            return <li key={item.text}>{item.text}</li>;
                        })
                    }
                </ul>
                <button onClick={() => setTodos([{ text: 'Learn Hooks01' }, { text: 'Learn Hooks02' }, { text: 'Learn Hooks03' }, { text: 'Learn Hooks04' }])}>setTodos </button>
            </div>
        </div>
    );
}
export default ExampleWithManyStates;