import React from 'react';
import Modal from 'react-modal'
export default class AddLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    }
  }
  onSubmit(e) {
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({url: '', isOpen: false, error: ''})
        } else {
          this.setState({error: err.reason})
        }
      })
      this.refs.url.value = ''
    }

  }

  onChange(e) {
    this.setState({url: e.target.value})

  }

  render() {
    return (<div>
      <button onClick={() => {
          this.setState({isOpen: true})
        }}>
        + Add Link</button>
      <Modal isOpen={this.state.isOpen}
        contentLabel="Add Link"
        onAfterOpen={() => this.refs.url.focus()}>
        <div>
          <h1>Add Link</h1>
          {
            this.state.error
              ? <p>{this.state.error}</p>
              : undefined
          }
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text"
              onChange={this.onChange.bind(this)}
              ref="url"
              placeholder="URL"/>
            <button>add link</button>
          </form>
          <button onClick={() => {
              this.setState({isOpen: false})
            }}>close</button>
        </div>
      </Modal>
    </div>)
  }
}
