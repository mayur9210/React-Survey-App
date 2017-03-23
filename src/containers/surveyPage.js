import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prevQue, nextQue, submitSurvey } from '../actions/queActions';
import SurveyLists from '../components/queListsComponent';
import SurveySubmit from '../components/queSubmitComponent';

const Survey = props => (
  <div>
    {
      props.surveys.currActive === props.surveys.surveyData.length
      ? <SurveySubmit {...props} />
      : <SurveyLists {...props} />
    }
  </div>
);

function mapStateToProps(state) {
    return {
        surveys: state.surveys
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ prevQue, nextQue, submitSurvey }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
