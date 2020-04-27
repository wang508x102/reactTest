/**
 * render Props
*/
import Cat from 'components/cat';
class DataProvider extends React.Component {
    constructor(props){
        super(props);
        this.state={target: 'Zac'};
    }
    render(){
        return(
            <div>
            {this.props.render(this.state)}
            </div>
        )
    }
}

<DataProvider render={data=>(
    <Cat target={data.target} />    
)}/>  

// // 习惯写法 
// <DataProvider>
//     {data=>(
//         <Cat target={data.target} />
//     )}
// </DataProvider>

/***
 * HOC 
*/

const withUser = WrappedComponent =>{
    const user = sessionStorage.getItem("user");
    return props => <WrappedComponent user={user} {...props} />;
}
const UserPage = props =>(
    <div class="user-container">
        <p>name is {props.user}</p>
    </div>
);
export default withUser(UserPage);

