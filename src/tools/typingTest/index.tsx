import React, { useState, useEffect } from "react";

const sampleText = `At first the professor scowled with concern. But then he said, that's all right. Run to my house.`;
const TIME_LIMIT = 60; 
const TypingTest: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0); 
  const [testComplete, setTestComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT); 
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (userInput && !startTime) {
      setStartTime(Date.now());
    }
    if (startTime && !testComplete) {
      timer = setInterval(() => {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000; 
        setTimeElapsed(elapsed);
        setTimeRemaining(Math.max(TIME_LIMIT - elapsed, 0));
        if (elapsed >= TIME_LIMIT || userInput === sampleText) {
          setTestComplete(true);
          clearInterval(timer);
        }
      }, 100); 
    }
    return () => clearInterval(timer);
  }, [userInput, startTime, testComplete]);

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const resetTest = () => {
    setUserInput("");
    setStartTime(null);
    setTimeElapsed(0);
    setTimeRemaining(TIME_LIMIT);
    setTestComplete(false);
  };

  const calculateWPM = () => {
    const wordsTyped = userInput.length / 5; 
    const minutes = timeElapsed / 60;
    return Math.round(wordsTyped / minutes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Typing Test</h1>
      <p className="text-xl mb-4 bg-blue-400 px-4 text-center font-bold font-sans">{sampleText}</p>
      <div className="text-lg mb-2">  Time Elapsed: {timeElapsed.toFixed(1)}s / {TIME_LIMIT}s </div>
      <div className="text-lg mb-2">
        Time Remaining: {timeRemaining.toFixed(1)}s
      </div>
      <input className="border p-2 w-full" value={userInput} onChange={handleTyping} disabled={testComplete || timeRemaining <= 0} placeholder="Start typing..." />

      {testComplete && (
        <div className="mt-4">
          <p>Time Elapsed: {timeElapsed.toFixed(2)} seconds</p>
          <p>WPM: {calculateWPM()}</p>
        </div>
      )}
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={resetTest}> Start Over </button>
    </div>
  );
};
export default TypingTest;
