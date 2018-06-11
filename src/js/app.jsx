import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:1337/brandy')
      .then((response) => {
        this.setState({ brandy: response.data })
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderSquare(element) {
    return <div>{{ element }}</div>;
  }

  render() {
    let html = '';
    if (this.state.brandy) {
      this.state.brandy.forEach((element) => {
        html += this.renderSquare(element);
        console.log(html)
      });
    }
    

    return (
      <div>
        {{ html }}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { store: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: state => dispatch({
      type: 'LOGIN',
      value: state.value,
    }),
    handleLogout: () => dispatch({
      type: 'LOGOUT',
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
