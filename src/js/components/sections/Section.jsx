import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sectionActions from '../../actions/sectionActions';
import SectionForm from './SectionForm';
import ChangeLocation from '../common/ChangeLocation';

class Section extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isEditing: false,
      section: this.props.section,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateSectionState = this.updateSectionState.bind(this);
    this.saveSection = this.saveSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.section.id !== nextProps.section.id) {
      this.setState({ section: nextProps.section });
    }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  updateSectionState(event) {
    const field = event.target.name;
    const { section } = this.state;
    section[field] = event.target.value;
    return this.setState({ section });
  }


  saveSection(event) {
    event.preventDefault();
    this.props.actions.updateSection(this.state.section);
    this.state.isEditing = false;
  }

  deleteSection() {
    this.props.actions.deleteSection(this.state.section);
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit section</h1>
          <SectionForm
            section={this.state.section}
            onSave={this.saveSection}
            onChange={this.updateSectionState}
            location={this.props.location}
          />
        </div>);
    }

    return (
      <div>
        <ChangeLocation
          location={this.props.location}
        />
        <h1>{this.props.section.name}</h1>
        <div>{this.props.section.id}</div>
        <button className="btn btn-primary" onClick={this.toggleEdit}>edit</button>
        <button onClick={this.deleteSection} className="btn btn-default">delete</button>
      </div>);
  }
}

Section.propTypes = {
  section: PropTypes.shape({
  }).isRequired,
  actions: PropTypes.shape({
    updateSection: PropTypes.func.isRequired,
    deleteSection: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
  }).isRequired,
};

function mapStateToProps(state, ownProps) {
  const sectionId = ownProps.match.params.id;
  let section = {};

  if (state.sections.length > 0) {
    const currentSection = state.sections.find(sectionInstance => sectionInstance.id === sectionId);
    section = Object.assign(
      {},
      Object.is(currentSection, undefined) ? section : currentSection,
    );
  }

  return {
    section,
    location: state.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sectionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
