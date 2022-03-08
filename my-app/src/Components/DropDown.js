import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class DropDown extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions: [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4')
    const data = res.data['data']

    const options = data.map(park => ({
      "value" : park.id,
      "label" : park.states,
    }))
    

    this.setState({selectOptions: options})
  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
