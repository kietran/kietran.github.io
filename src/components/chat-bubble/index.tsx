import React, { useState, useEffect } from 'react';
import './chat-bubble.css';

const ChatBubble: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        // Show welcome message after a short delay
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowWelcome(false); // Hide welcome message when chat is opened
    };

    const dismissWelcome = () => {
        setShowWelcome(false);
    };

    return (
        <>
            {/* Chat Container */}
            <div className={`chat-bubble-container ${isOpen ? 'open' : ''}`}>
                {/* Chat Header */}
                <div className="chat-header">
                    <div className="chat-header-content">
                        <div className="chat-avatar">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="chat-title">Career Advisor</h3>
                            <p className="chat-status">
                                <span className="status-dot"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button className="close-button" onClick={toggleChat} aria-label="Close chat">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Chat Body with Gradio Iframe */}
                <div className="chat-body">
                    <iframe
                        src="https://kitk1t-career-conversation.hf.space"
                        title="Career Conversation Chatbot"
                        className="chat-iframe"
                        allow="microphone; camera"
                    ></iframe>
                </div>
            </div>

            {/* Welcome Message Tooltip */}
            <div className={`welcome-message ${showWelcome && !isOpen ? 'visible' : ''}`}>
                <button className="welcome-close" onClick={dismissWelcome} aria-label="Dismiss message">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <p className="welcome-text">
                    Got any questions? Ask me about my resume! 👋
                </p>
            </div>

            {/* Floating Chat Button */}
            <button
                className={`chat-button ${isOpen ? 'hidden' : ''}`}
                onClick={toggleChat}
                aria-label="Open chat"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="chat-icon"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="notification-badge">1</span>
            </button>
        </>
    );
};

export default ChatBubble;
