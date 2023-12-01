import React, { useState } from 'react';

const LegalWriting = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpload = () => {
    // Implement your logic here to handle the uploaded legal writing content
    console.log("Legal writing content:", content);
    // You can send 'content' to your server or perform further processing
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Legal Writing</h1>
      <div className="legal-writing-container">
        <p className="lead">
          Write your legal content securely using the form below.
        </p>
        <textarea
          value={content}
          onChange={handleContentChange}
          className="form-control mb-3"
          rows="6"
          placeholder="Type your legal content here..."
        ></textarea>
        <button
          onClick={handleUpload}
          className="btn btn-primary"
          disabled={content.trim() === ''}
        >
          Save
        </button>
        {content.trim() !== '' && (
          <div className="written-content mt-3">
            <h5>Your Written Content:</h5>
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalWriting;
