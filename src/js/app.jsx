import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brandy: '' };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/brandy')
      .then((response) => {
        this.setState({ brandy: response.data })
      });
  }

  render() {
    if (!this.state.brandy) {
      return (
        <div>
          One moment..
        </div>
      );
    }

    return (
      <ul>
        { this.state.brandy.map((item, index) => (
            <li key={index}>
              <div>
                Page Name: {item.pageName}
              </div>
              <div>
                Content: {item.world}
              </div>
              <div>
                Tempalte: {item.template}
              </div>
            </li>
          )
        )}
      </ul>
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
