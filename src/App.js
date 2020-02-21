import React from 'react';
import Table from './Table'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      path: '',
      type: '1',
      data: [{ 'no data': 'no data' }]
    }
  }
  setinputtype(e) {
    this.setState({type:e.target.value})
  }
  nextgetdata() {
    if (this.state.path !== '') {
      if (this.state.type === '1'){
        axios.get(this.state.path)
          .then(Response => Response)
          .then(Response => this.setState({ data: Response.data.data }))
          .catch(error => console.log(error))
      }
      else if (this.state.type === '2') {
        axios.get(this.state.path)
          .then(Response => Response)
          .then(Response => this.setState({ data: Response.data }))
          .catch(error => console.log(error))
      }
    } else {
      this.setState({ data: [{ 'no data': 'enter inputtype first' }] })
    }
  }
  render() {
    return (
      <div className="center wrapper">
        <select onChange={(e) => this.setinputtype(e)}>
          <option value="1">api return data</option>
          <option value="2">api return json</option>
        </select>
        <input style={{ width: "400px" }} type="text" onChange={(e) => this.setState({ path: e.target.value })}></input>
        <button onClick={() => this.nextgetdata()}>test</button>
        <Table data={this.state.data} />
      </div>
    )
  }
}
export default App;