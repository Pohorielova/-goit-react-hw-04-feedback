import { useState, useEffect } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackType = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  const handleChange = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);

        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={feedbackType} onLeaveFeedback={handleChange} />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage().toFixed(0)}
        />
      )}
    </Section>
  );
}

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// countTotalFeedback = () => {
//   const { good, bad, neutral } = this.state;

//   return good + bad + neutral;
// };

// countPositiveFeedbackPercentage = () => {
//   return (this.state.good / this.countTotalFeedback()) * 100;
// };

// handleChange = e => {
//   const { name } = e.currentTarget;

//   this.setState(prevState => {
// return {
//   [name]: prevState[name] + 1,
// };
//   });
// };

//   render() {
//     const { good, bad, neutral } = this.state;

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleChange}
//         />
//         {this.countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage().toFixed(
//               0
//             )}
//           />
//         )}
//       </Section>
//     );
//   }
// }

// // export default App;
