import React, { Component } from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:5000/api/document/upload'

class NewFileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      selectedFile: null,
    }
  }

  handleSelectedFile = (e) => {
    e.preventDefault()
    this.setState({
      description: e.target.value,
      selectedFile: e.target.files[0],
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUpload = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    data.append('file', this.state.selectedFile, this.state.description)

    axios
      .post(endpoint, data)
      .then(() => {
        this.props.history.push('/')
      })
      .catch((error) => {
        alert('Oops some error happened, please try again')
      })
  }

  render() {
    const { description, selectedFile } = this.state

    return (
      <div>
        <div>
          <div xs="4">
            <div>
              <div className="p-2 mb-2 bg-primary text-white">
                Upload a new Document
              </div>
              <div>
                <div>
                  <form onSubmit={this.handleUpload}>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        onChange={this.onChange}
                        placeholder="Description"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="file"
                        name=""
                        id=""
                        onChange={this.handleSelectedFile}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewFileUpload
