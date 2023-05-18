import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Css/AllQuestion.css";

function AllQuestions() {
    return (
        <div className="all-questions">
            <div className="all-questions-container">
                <div className="all-questions-left">
                    <div className="all-potions">
                        <div className="all-option">
                            <p>0</p>
                            <span>Votes</span>
                        </div>
                        <div className="all-option">
                            <p>0</p>
                            <span>Answers</span>
                        </div>
                        <div className="all-option">
                            <small>0 Views</small>
                        </div>
                    </div>
                </div>
                <div className="question-answer">
                    <Link to="/question">Multiple Parameters DOS Command Line, or to use PowerShell?</Link>
                    <div style={{
                        width: "90%"
                    }}>
                        <div>Good morning everyone! I remember there was a way to do this back in the day, but haven't had to use it in so long that I can't remember how. And now that PowerShell is out, maybe it's better to run ...

                        </div>

                    </div>
                    <div style={{
                        display: "flex"
                    }}>
                        <span className="question-tags">react</ span>

                        <span className="question-tags">antd</ span>

                        <span className="question-tags">frontend</span>

                    </div>
                    <div className="author" >
                        <small>Timestamp</small>
                        <div className="author-details">
                            <Avatar />
                            <p>User name</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AllQuestions;



