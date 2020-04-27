import React, { useContext } from 'react';
/** 
 * 不使用context方式 层层传递props;
 */
// class App extends React.Component {
//   render() {
//     return <Toolbar theme="dark" />;
//   }
// }

// function Toolbar(props) {
//   // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
//   // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
//   // 因为必须将这个值层层传递所有组件。
//   return (
//     <div>
//       <ThemedButton theme={props.theme} />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   render() {
//     return <button theme={this.props.theme} />;
//   }
// }

/*** 
 * 使用context方式
*/

// // Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// // 为当前的 theme 创建一个 context（“light”为默认值）。
// const ThemeContext = React.createContext('light');
// class ContextDemo extends React.Component {
//   render() {
//     // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
//     // 无论多深，任何组件都能读取这个值。
//     // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
//     // return (
//     //     <Toolbar />
//     // );
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;
//   render() {
//     console.log('this.context', this.context); 
//   return <><p>this.context {this.context}</p><button theme={this.context} >context</button></>
//   }
// }


/**
 *  使用UseContextDemo
 *  调用了 useContext 的组件总会在 context 值变化时重新渲染.
 */

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function ContextDemo() {
  // return (
  //     <Toolbar />
  // );
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
  // 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。 
  // 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。
  // 即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。
  // useContext的参数必须是context对象本身.如果重渲染组件的开销较大,使用memoization来优化.
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default ContextDemo;