import AllChacracterDisplay from '../allChacracterDisplay/AllChacracterDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

export default connect(mapStateToProps)(AllChacracterDisplay)
