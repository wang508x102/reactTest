// 使用多个 Effect 实现关注点分离
/** 
 * class 实现方式
 * @desc 可以发现设置 document.title 的逻辑是如何被分割到 componentDidMount 和 componentDidUpdate 中的，
 * 订阅逻辑又是如何被分割到 componentDidMount 和 componentWillUnmount 中的。
 * 而且 componentDidMount 中同时包含了两个不同功能的代码。
*/
// class FriendStatusWithCounter extends React.Component {
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
  
//     componentDidUpdate() {
//       document.title = `You clicked ${this.state.count} times`;
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
//     // ...
// }

/**
 * hook 形式
 * 按照代码的用途分离他们
 * react将按照effect声明的顺序一次调用组件中的每一个effect
 */
import React, { useState, useEffect } from 'react';
function FriendStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }
  
    //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //   return () => {
    //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    //   };
    });


    // ...
  }

  export default FriendStatusWithCounter;





