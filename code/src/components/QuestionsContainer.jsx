import QuestionsList from './QuestionsList';

const QuestionsContainer = ({
	quizItem,
	setAnswerChosen,
	answerChosen,
	unansweredQuestionId,
	setUnansweredQuestionId,
}) => {
	//console.log(quizItem);
	return (
		<>
			<h2 id={quizItem.id} className="question-title">
				{quizItem.text}
			</h2>
			<div className="questionsContainer" key={quizItem.id}>
				{quizItem.questions.map((question) => (
					<QuestionsList
						question={question}
						setAnswerChosen={setAnswerChosen}
						answerChosen={answerChosen}
						unansweredQuestionId={unansweredQuestionId}
						setUnansweredQuestionId={setUnansweredQuestionId}
						quizItemId={quizItem.id}
					/>
				))}
			</div>
		</>
	);
};

export default QuestionsContainer;
