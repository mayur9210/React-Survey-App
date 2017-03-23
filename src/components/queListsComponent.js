import React from 'react';
import Survey from './queComponent';

const SurveyLists = ({ surveys, actions }) => (
  <div>
    {surveys.surveyData.map((survey, index) => (
      <Survey
          id={index}
          key={survey.id}
          question={survey.text}
          options={survey.options}
          currActive={surveys.currActive}
          prevQue={actions.prevQue}
          activeOption={survey.activeOption}
          nextQue={actions.nextQue}
      />
    ))}
  </div>
);

export default SurveyLists;
