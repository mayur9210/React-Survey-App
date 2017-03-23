import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
const Button = 'button';

const style = {
    margin: '20px 10px 40px',
};

const Survey = ({ question, options, currActive, id, nextQue, prevQue, activeOption }) => (
  (currActive === id)
  ? <div className="container">
    <div  className="row">
        <h3 className=".col-xs-12 .col-md-8" >{question}</h3>
        <center>
            {Object.keys(options).map((key, index) => (
                <button key={key} style={style}
                        className={(activeOption === index) ? 'btn btn-warning :hover' : 'btn'}
                        onClick={nextQue.bind(null, index, id)}>
                    {options[key]}
                    </button>
            ))}
        </center>
      {
        currActive !== 0
          ? <Button style={style}
                    className="btn btn-lg btn-primary con"
                    onClick={prevQue}>Back</Button>
          : <Button style={style}
                    className="btn btn-lg btn-primary"
                    onClick={prevQue}
                    disabled>Back</Button>
      }

      {
        activeOption > -1
        ? <Button style={style}
                  className="btn btn-lg btn-primary"
                  onClick={nextQue}>Next</Button>
        : <Button style={style}
                  className="btn btn-lg btn-primary"
                  onClick={nextQue} disabled>Next</Button>
      }
    </div>

  </div>
  : null
);

Survey.propTypes = {
  question: React.PropTypes.string.isRequired,
  options: React.PropTypes.objectOf(
    React.PropTypes.string.isRequired,
  ).isRequired,
  currActive: React.PropTypes.number.isRequired,
  id: React.PropTypes.number.isRequired,
  nextQue: React.PropTypes.func.isRequired,
  prevQue: React.PropTypes.func.isRequired,
  activeOption: React.PropTypes.number,
};


export default Survey;
