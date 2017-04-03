// import React from 'react';
// import Delete from './Delete.js'
//
//
// class DeleteList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       data:[]
//     }
//
//   }
//   componentDidMount(){
//
//     fetch(`${window.location.origin}/api`)
//     .then((res) =>{
//       return res.json();
//     })
//     .then((json) =>{
//       this.setState({
//         data:json
//       });
//     });
//   }
//
//   renderCards(){
//     return this.state.data.map((el, i) => {
//       return(
//        <Delete key={i} articleTitle={el.articleTitle} id={el._id}  />
//       )
//     })
//   }
//
//   render() {
//     let list = this.renderCards();
//     return (
//       <div className=' container d-flex flex-column justify-content-center'>
//           {list}
//       </div>
//     );
//   }
//
// }
//
// export default DeleteList;
