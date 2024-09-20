import React, { useState, useEffect } from "react";

const sampleText = "This is a sample text for the typing test.";
const TIME_LIMIT = 60; // 60 seconds time limit for the test

const TypingTest: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0); // Time passed in seconds
  const [testComplete, setTestComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT); // Time left

  // Start the timer when the user starts typing
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (userInput && !startTime) {
      setStartTime(Date.now());
    }

    // If typing starts, run the timer
    if (startTime && !testComplete) {
      timer = setInterval(() => {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000; // Time elapsed in seconds
        setTimeElapsed(elapsed);
        setTimeRemaining(Math.max(TIME_LIMIT - elapsed, 0)); // Time left

        // Complete test if time is up
        if (elapsed >= TIME_LIMIT || userInput === sampleText) {
          setTestComplete(true);
          clearInterval(timer);
        }
      }, 100); // Update every 100ms for smooth display
    }

    // Cleanup interval when component unmounts or test completes
    return () => clearInterval(timer);
  }, [userInput, startTime, testComplete]);

  // Handle typing input
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // Reset the test
  const resetTest = () => {
    setUserInput("");
    setStartTime(null);
    setTimeElapsed(0);
    setTimeRemaining(TIME_LIMIT);
    setTestComplete(false);
  };

  // Calculate Words Per Minute
  const calculateWPM = () => {
    const wordsTyped = userInput.length / 5; // Assume avg 5 chars per word
    const minutes = timeElapsed / 60;
    return Math.round(wordsTyped / minutes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Typing Test</h1>

      {/* Display Sample Text */}
      <p className="text-xl mb-4">{sampleText}</p>

      {/* Timer */}
      <div className="text-lg mb-2">
        Time Elapsed: {timeElapsed.toFixed(1)}s / {TIME_LIMIT}s
      </div>
      <div className="text-lg mb-2">
        Time Remaining: {timeRemaining.toFixed(1)}s
      </div>

      {/* Typing Input */}
      <input
        className="border p-2 w-full"
        value={userInput}
        onChange={handleTyping}
        disabled={testComplete || timeRemaining <= 0}
        placeholder="Start typing..."
      />

      {/* Display Test Results */}
      {testComplete && (
        <div className="mt-4">
          <p>Time Elapsed: {timeElapsed.toFixed(2)} seconds</p>
          <p>WPM: {calculateWPM()}</p>
        </div>
      )}

      {/* Reset Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={resetTest}
      >
        Start Over
      </button>
    </div>
  );
};

export default TypingTest;
