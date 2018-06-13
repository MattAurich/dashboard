import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SectionList from './SectionList';
import * as pageActions from '../../actions/pageActions';
import PageForm from './PageForm';

class Page extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isEditing: false,
      page: this.props.page,
      pageSections: this.props.pageSections,
      checkBoxSections: this.props.checkBoxSections,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updatePageState = this.updatePageState.bind(this);
    this.updatePageSections = this.updatePageSections.bind(this);
    this.savePage = this.savePage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.page.id !== nextProps.page.id) {
      this.setState({ page: nextProps.page });
    }
    if (this.props.checkBoxSections.length < nextProps.checkBoxSections.length) {
      this.setState({
        pageSections: nextProps.pageSections,
        checkBoxSections: nextProps.checkBoxSections,
      });
    }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  updatePageState(event) {
    const field = event.target.name;
    const { page } = this.state;
    page[field] = event.target.value;
    return this.setState({ page });
  }

  updatePageSections(event) {
    const { page } = this.state;
    const sectionId = event.target.value;
    const section = this.state.checkBoxSections
      .filter(sectionInstance => sectionInstance.id === sectionId)[0];
    section.checked = event.target.checked;

    if (section.checked) {
      page.sections.push(section);
    } else {
      const index = page.sections.findIndex(p => p.id === sectionId);
      page.sections.splice(index, 1);
    }

    this.setState({ page });
  }

  savePage(event) {
    event.preventDefault();
    this.props.actions.updatePage(this.state.page);
    this.state.isEditing = false;
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit page</h1>
          <PageForm
            page={this.state.page}
            sections={this.state.checkBoxSections}
            onSave={this.savePage}
            onChange={this.updatePageState}
            onSectionChange={this.updatePageSections}
          />
        </div>);
    }

    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.page.details}</h1>
        <div>{this.props.page.id}</div>
        <SectionList sections={this.props.pageSections} />
        <button onClick={this.toggleEdit}>edit</button>
      </div>);
  }
}

Page.propTypes = {
  // TODO: PropTypes.shape({}) --> https://labnotes.panderalabs.com/shaping-up-your-react-components-with-proptypes-shape-and-selectors-9d1111d0566f
  page: PropTypes.object.isRequired,
  pageSections: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkBoxSections: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired,
};


function sectionsForCheckBoxes(sections, page) {
  return sections.map((section) => {
    const sectionInstance = section;
    if (page.sections &&
        page.sections.filter(pageSection => pageSection.id === sectionInstance.id).length > 0) {
      sectionInstance.checked = true;
    } else {
      sectionInstance.checked = false;
    }

    return sectionInstance;
  });
}

function mapStateToProps(state, ownProps) {
  const stateSections = Object.assign([], state.sections);
  let checkBoxSections = [];
  let page = { sections: [] };
  const pageId = ownProps.match.params.id;

  if (state.pages.length > 0) {
    page = Object.assign({}, state.pages.find(pageInstance => pageInstance.id === pageId));

    checkBoxSections = sectionsForCheckBoxes(stateSections, page);
  }

  return { page, checkBoxSections, pageSections: page.sections };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
