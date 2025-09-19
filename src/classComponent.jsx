import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
         super();
         this.state={
            count :5
         }
         
    }; 
    clickHandler= () =>
    {
        this.setState({count:this.state.count+1})
    }

  render() {
     
    const { name } = this.props;
    const { count } = this.state;
    
   

    return (
      <>
        <h1>name as    {name}</h1>
        <h2>count as   {count}</h2>
        <button onClick={this.clickHandler}>click me</button>
     
      </>
     
    )
}
componentDidMount(){
    console.log("component did mount")
  
}
componentDidUpdate(){
    console.log("component did update")             
}
shouldComponentUpdate(...props){
    console.log("should component update",props)
    return true;                    
}  
componentWillUnmount(){
    console.log("component will unmount")    

}
}
