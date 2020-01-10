import React, { useState } from "react";
import styled from "styled-components";

import { IoIosArrowDropright } from "react-icons/io";

const FaqContainer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 100px auto 0;
    box-sixing: border-box;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    text-align: center;
`;

const QandAContainer = styled.section`
    width: 90%;
    margin: 0 auto;
    height: ${props => (props.isAnswerOpen ? "200px" : "70px")};
    transition: height 0.4s ease-in-out;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
`;

const Arrow = styled(IoIosArrowDropright)`
    font-size: 1.75rem;
    align-self: center;
    cursor: pointer;
    transform: ${props =>
        props.isAnswerOpen ? "rotate(90deg)" : "rotate(0deg)"};
    transition: all 0.4s ease-in-out;
`;

const Question = styled.h2`
    margin-left: 0.75rem;
`;

const AnswerContainer = styled.div`
    max-height: ${props => (props.isAnswerOpen ? "130px" : "0")};
    overflow: ${props => (props.isAnswerOpen ? "auto" : "hidden")};
    transition: all 0.4s ease-in-out;
    margin-bottom: ${props => (props.isAnswerOpen ? "1rem" : "0")};
    margin-left: calc(28px + 0.75rem);
`;

const QandA = ({ question, answer }) => {
    const [isAnswerOpen, setIsAnswerOpen] = useState(false);

    return (
        <QandAContainer isAnswerOpen={isAnswerOpen}>
            <QuestionContainer>
                <Arrow
                    onClick={() => setIsAnswerOpen(!isAnswerOpen)}
                    isAnswerOpen={isAnswerOpen}
                />
                <Question>{question}</Question>
            </QuestionContainer>

            <AnswerContainer isAnswerOpen={isAnswerOpen}>
                <p>{answer}</p>
            </AnswerContainer>
        </QandAContainer>
    );
};

export default () => {
    return (
        <FaqContainer>
            <Title>Frequently Asked Questions</Title>
            <QandA
                question={"What is Farm Fresh Produce?"}
                answer={
                    "Fresh Farm Produce is our multi-farm farmers' market subscription service. It provides an important outlet for economic opportunity to our farmers and food producers, and provides a convenient alternative for consumers who wish to access seasonal, locally-grown, fresh foods."
                }
            />

            <QandA
                question={"Why should I use Farm Fresh Produce?"}
                answer={
                    "Fresh Farm Produce helps connect farmers who have produce that would otherwise be wasted with those who want to buy locally-grown, fresh foods but don't know where to get them. Farm Fresh helps you reduce waste, eat healthily, and support local farmers!"
                }
            />

            <QandA
                question={"How much does it cost to use Farm Fresh Produce?"}
                answer={
                    "Nothing! Farm Fresh Produce is currently free to use and we hope to keep it that way. Going green shouldn't mean you have to spend any green."
                }
            />
        </FaqContainer>
    );
};
