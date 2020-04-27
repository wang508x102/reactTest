/*
 * useEffect  demo  
 * desc: react更DOM后设置一个页面标题 
 */

import React, { useState, useEffect } from 'react';
/*
 * useEffect  demo  
 * desc: react更DOM后设置一个页面标题 
 */

function EffectDemo() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  // 与 componentDidMount 或 componentDidUpdate 不同，
  // 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。
  // 大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div style={{padding: 40,  borderWidth: 1, borderColor:'#000'}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
/**
 *
 * @class EffectDemo
 * @extends {React.Component}
 * @description 
 */
// class EffectDemo extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     componentDidMount() {
//       document.title = `You clicked ${this.state.count} times`;
//     }
//     componentDidUpdate() {
//       document.title = `You clicked ${this.state.count} times`;
//     }
  
//     render() {
//       return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Click me
//           </button>
//         </div>
//       );
//     }
// }


export default EffectDemo;

