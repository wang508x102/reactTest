import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Example from './Example';
import UseStateDemo from './share/UseStateDemo';
import ExampleWithManyStates from './share/ExampleWithManyStates';
import EffectDemo from './hooks/EffectDemo';
import FriendStatusWithCounter from './hooks/FriendStatusWithCounter';
import FriendStatusWithUpdate from './hooks/FriendStatusWithUpdate';
import ContextDemo from './hooks/UseContextDemo';
import Counter from './hooks/ReducerDemo';
import OtherHooksExample from './hooks/OtherHooksExample';
import * as serviceWorker from './serviceWorker';
const style = { flex: 1, borderBottomWidth: 1, padding: 10 }; //borderColor: '#999', borderBottomWidth: 1, borderStyle: 'solid',

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Example /> */}

    {/* 简单入门例子 */}
    {/* <div style={style}>
      <b> useStateDemo:</b>
      <UseStateDemo />
    </div> */}

    {/* 声明多个state变量 */}
    <div style={style}>
      <b> many States Demo:</b>
      <ExampleWithManyStates />
    </div>

    {/**EffectDemo */}
    {/* <div style={style}>
      <b> EffectDemo:</b>
      <EffectDemo />
    </div> */}

    {/** 使用多个 Effect 实现关注点分离 */}
    {/* <div style={style}>
      <b> FriendStatusWithCounter:</b>
      <FriendStatusWithCounter />
    </div> */}

    {/*  为什么每次更新的时候都要运行 Effect */}
    {/* <div style={style}>
      <b> FriendStatusWithUpdate:</b>
      <FriendStatusWithUpdate />
    </div> */}

    {/* context  */}
    {/* <div style={style}>
      <b>context</b>
      <ContextDemo />
    </div> */}

    {/* Reducer  */}
    {/* <div style={style}>
      <p><b>Counter</b></p>
      <Counter />
    </div> */}

    {/* 其他hooks */}
    {/* <div style={style}>
      <b> EffectDemo:</b>
      <OtherHooksExample />
    </div> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
