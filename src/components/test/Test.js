import React from 'react'

class Test extends React.Component {
  state = {
    title: '',
    body: '0'
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      this.setState({
        title: data.title,
        body: data.body
      })
      console.log(data);
    })

  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  //
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  //
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  //
  // componentWillReceiveProps(nextprops, nextstate) {
  //   console.log("componentWillReceiveProps");
  // }
  //
  // static getDerivedStateFromProps(nextprops, prevState) {
  //   return null
  // }
  //
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
      </div>
    )
  }
}

export default Test
