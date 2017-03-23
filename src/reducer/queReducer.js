export default function reducer(surveys = [], action) {
  switch (action.type) {
    case 'PREV':
      return surveys.currActive === 0 ? surveys : Object.assign({}, surveys, {
        currActive: surveys.currActive - 1,
      });
    case 'NEXT': {
      const currentSurvey = Object.assign({}, surveys.surveyData[action.id], {
        activeOption: action.index,
      });
      const surveyData = surveys.surveyData.slice();
      surveyData[action.id] = currentSurvey;
      return Object.assign({}, surveys, {
        currActive: surveys.currActive + 1,
        surveyData
      });
    }
    default: return surveys;
  }
}