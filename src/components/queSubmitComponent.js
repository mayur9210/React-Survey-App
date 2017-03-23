import React from 'react';

const SurveySubmit = ({ actions: { prevQue, submitSurvey } }) => (
  <center className="container">
      <div><h2>Do you want to submit?</h2></div>
    <button className="btn btn-lg btn-primary"  onClick={prevQue}>Back</button> <a/> <a/>
    <button className="btn btn-lg btn-primary" onClick={submitSurvey}>submit</button>
  </center>
);

SurveySubmit.propTypes = {
  actions: React.PropTypes.objectOf(
    React.PropTypes.func.isRequired,
  ).isRequired,
};


export default SurveySubmit;
