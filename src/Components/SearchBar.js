import React, { useState } from 'react';

const jsonData = {
  "data": [
    // Your data here
  ]
};

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isContainerVisible, setContainerVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    // Extract unique words from questions as suggestions
    const allWords = jsonData.data.reduce((acc, item) => {
      const questionWords = item.question.toLowerCase().split(' ');
      return acc.concat(questionWords);
    }, []);

    const uniqueWords = Array.from(new Set(allWords));
    const suggestionArray = uniqueWords.filter(word => word.includes(value.toLowerCase()));

    setQuestions([]);
    setSelectedWord("");
    setSelectedAnswer("");
    setContainerVisible(false);
    setSuggestions(suggestionArray);
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedWord(suggestion);
    const matchingQuestions = jsonData.data
      .filter(item => item.question.toLowerCase().includes(suggestion.toLowerCase()))
      .map(item => item.question);

    setQuestions(matchingQuestions);
    setContainerVisible(true);
  };

  const handleQuestionClick = (question) => {
    const matchingAnswer = jsonData.data
      .find(item => item.question.toLowerCase() === question.toLowerCase());

    if (matchingAnswer) {
      setContainerVisible(true);
      setSelectedWord(question);
      setSelectedAnswer(matchingAnswer.answer);
    }
  };

  return (
    <div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Anything You Want."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      {isContainerVisible && (
        <div className='container-class' style={{ "backgroundColor": "grey", "borderRadius": "20px" }}>
          {selectedWord && <h4 style={{ "color": "black" }}>Selected Word: {selectedWord}</h4>}
          {selectedAnswer && <h5 style={{ "color": "black" }}>Answer: {selectedAnswer}</h5>}
          {questions.length > 0 ? (
            <ul>
              {questions.map((question, index) => (
                <li key={index} onClick={() => handleQuestionClick(question)}>
                  {question}
                </li>
              ))}
            </ul>
          ) : (
            <h5 style={{ "color": "black" }}>No matching questions found.</h5>
          )}
        </div>
      )}
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
