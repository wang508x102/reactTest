// 为什么每次更新的时候都要运行 Effect
/** 
 * class 实现方式
 * 但是当组件已经显示在屏幕上时，friend prop 发生变化时会发生什么？
 * 我们的组件将继续展示原来的好友状态。这是一个 bug。而且我们还会因为取消订阅时使用错误的好友 ID 导致内存泄露或崩溃的问题。
*/
// class FriendStatusWithUpdate extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0, isOnline: null };
//       this.handleStatusChange = this.handleStatusChange.bind(this);
//     }

//     componentDidMount() {
//       document.title = `You clicked ${this.state.count} times`;
//       ChatAPI.subscribeToFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       );
//     }
// // friend props 发生变化
// componentDidUpdate(prevProps) {
//   // 取消订阅之前的 friend.id
//   ChatAPI.unsubscribeFromFriendStatus(
//     prevProps.friend.id,
//     this.handleStatusChange
//   );
//   // 订阅新的 friend.id
//   ChatAPI.subscribeToFriendStatus(
//     this.props.friend.id,
//     this.handleStatusChange
//   );
// }

/** 
 * 通过跳过Effect进行性能优化
*/
// componentDidUpdate(prevProps, prevState) {
//   if (prevState.count !== this.state.count) {
//     document.title = `You clicked ${this.state.count} times`;
//   }
// }


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
//     // ...
// }

/**
 * hook 形式、
 */

import React, { useState, useEffect } from 'react';
function FriendStatusWithUpdate(props) {
  const [count, setCount] = useState(0);
  // 如果某些特定值在两次重渲染之间没有发生变化, 

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新


  // 对于有清除操作的 effect 同样适用
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // }, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅


  //   useEffect(() => {
  //     // ...
  //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //     return () => {
  //       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //     };
  //   });

  // 此默认行为保证了一致性，避免了在 class 组件中因为没有处理更新逻辑而导致常见的 bug。

  // // Mount with { friend: { id: 100 } } props
  // ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // 运行第一个 effect

  // // Update with { friend: { id: 200 } } props
  // ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // 清除上一个 effect
  // ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // 运行下一个 effect

  // // Update with { friend: { id: 300 } } props
  // ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // 清除上一个 effect
  // ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // 运行下一个 effect

  // // Unmount
  // ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // 清除最后一个 effect

}

export default FriendStatusWithUpdate;


