import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as sectionActions from '../../actions/sectionActions';
import SectionForm from './SectionForm';

class CreateSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: {
        id: '',
        template: '',
        name: '',
        content: '',
      },
    };
    this.saveSection = this.saveSection.bind(this);
    this.updateSectionState = this.updateSectionState.bind(this);
  }

  updateSectionState(event) {
    const { section } = this.state;
    
    if (event.target) {
      const field = event.target.name;
      section[field] = event.target.value;
    } else {
      section.content = event;
    }
    
    return this.setState({ section });
  }

  saveSection(event) {
    event.preventDefault();
    this.props.actions.createSection(this.state.section);
  }

  render() {
    return (
      <div>
        <h1>new section</h1>
        <SectionForm
          section={this.state.section}
          sections={this.props.checkBoxSections}
          onSave={this.saveSection}
          onChange={this.updateSectionState}
          onSectionChange={this.updateSectionSections}
          location={this.props.location}
        />
      </div>
    );
  }
}


CreateSection.propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    location: state.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sectionActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateSection);
