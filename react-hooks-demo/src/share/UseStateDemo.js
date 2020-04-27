

/** React的函数组件 */

import React, { useState } from 'react';
// function UseStateDemo() {
//   // 声明一个叫 “count” 的 state 变量。
//   const [count, setCount] = useState(0);
//   console.log('UseStateDemo hooks')
//   debugger
//   return (
//     <div style={{padding: 20, borderWidth: 1, borderColor: 'red'}}>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


// 等价的class示例
class UseStateDemo extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0
        };
    }
    
    render() {
    //   debugger
       console.log('UseStateDemo class')
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1})}>
                    Click me
                </button> 
            </div>
        );
    }
}
 
export default UseStateDemo;



