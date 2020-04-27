
/**
 *
 * @class FriendStatus
 * @extends {React.Component}
 * @desc 使用class 订阅和显示状态
 */
// class FriendStatus extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { isOnline: null };
//       this.handleStatusChange = this.handleStatusChange.bind(this);
//     }
//     componentDidMount 和 componentWillUnmount 之间相互对应。使用生命周期函数迫使我们拆分这些逻辑代码，即使这两部分代码都作用于相同的副作用。
//     componentDidMount() {
//       ChatAPI.subscribeToFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       );
//     }
//     componentWillUnmount() {
//       ChatAPI.unsubscribeFromFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       );
//     }
//     handleStatusChange(status) {
//       this.setState({
//         isOnline: status.isOnline
//       });
//     }
  
//     render() {
//       if (this.state.isOnline === null) {
//         return 'Loading...';
//       }
//       return this.state.isOnline ? 'Online' : 'Offline';
//     }
//   }

/*
 * useEffect 清除订阅外部数据源  demo  
 * desc: 副作用函数通过返回一个函数来指定如何清除副作用
 * React 会在组件销毁时取消对 ChatAPI 的订阅，然后在后续渲染时重新执行副作用函数。（如果传给 ChatAPI 的 props.friend.id 没有变化，你也可以告诉 React 跳过重新订阅。）
 */
 
import React, { useState, useEffect } from 'react';
// ChatAPI模块: 允许订阅好友的在线状态
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


/*
 * 多次使用 useEffect 
 * desc: 副作用函数通过返回一个函数来指定如何清除副作用
 */
// function FriendStatusWithCounter(props) {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       document.title = `You clicked ${count} times`;
//     });
  
//     const [isOnline, setIsOnline] = useState(null);
//     useEffect(() => {
//       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//       };
//     });
  
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//     // ....
// }


/*
 * 自定义Hook
 * desc: 组件之间重用一些状态逻辑. 可以在不增加组件的情况下达到与高阶组件和render Props的同样的目的
 */

// import React, {useState, useEffect} from 'react';
// // 参考上例中FriendStatus的组件, 抽取自定义组件
// // 将 friendID作为参数,并返回好友是否在线
// function useFriendStatus(friednID){
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//     }

//     useEffect(()=>{
//         ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//         };
//     });

//     return isOnline;
// }
// //在多个组件中使用它useFriendStatus 
// function FriendStatus(props){
//     const isOnline = useFriendStatus(props.friend.id);
//     if(isOnline === null){
//         return 'Loading...';
//     }
//     return  isOnline? 'Online' : 'Offline';
// }

// function FriendListItem(props){
//     const isOnline = useFriendStatus(props.friend.id);
//     return (
//         <li style={{color: isOnline? 'green': 'black'}}>
//             {props.friend.name}
//         </li>
//     );
// }




//export default Example;

