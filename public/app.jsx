var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
        <div>
          <h1>Howdy {name}!</h1>
          <p>{message}!!</p>
        </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var nameRef = this.refs.name;
    var messageRef = this.refs.message;
    var name = nameRef.value;
    var message = messageRef.value;

    if (name.length > 0) {
      nameRef.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      messageRef.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function() {
    return (
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter name"/>
          </div>
          <div>
            <textarea ref="message" placeholder="Enter message"></textarea>
          </div>
          <div>
            <button>SUBMIT</button>
          </div>
        </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is a default message and ReactJS is awesome!'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

var firstName = "Visitor";

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
