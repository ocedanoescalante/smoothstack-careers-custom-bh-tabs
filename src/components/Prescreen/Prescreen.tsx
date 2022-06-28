import React, { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import { QuestionItem, precreenQuestionOrder } from "./prescreen.constant";
import { Button, Spinner } from "react-bootstrap";
import "./prescreen.css";
import { PrescreenQuestion } from "./PrescreenQuestion";
import {
  getCandidatePrescreenData,
  savePrescreenForm,
} from "./prescreenHelper";

export const Prescreen: React.FC = () => {
  const [prescreenData, setPrescreenData] =
    useState<Map<string, QuestionItem>>();
  const [isLoadingData, setLoadingData] = useState<boolean>(false);
  const [isSavingData, setSavingData] = useState<boolean>(false);
  const [candidateId, setCandidateId] = useState<string>("");

  const updateAnser = (questionId: string, answer: string | string[]) => {
    const updatedDate = cloneDeep(prescreenData);
    let question = cloneDeep(prescreenData?.get(questionId) || undefined);
    if (updatedDate && question) {
      question.answer = answer;
      updatedDate.set(question.questionId, question);
      setPrescreenData(updatedDate);
    }
  };

  const loadPrescreenForm = async () => {
    setLoadingData(true);
    const queryParams = new URLSearchParams(window.location.search);
    const candidateId = queryParams.get("EntityID") || "24833"; // TODO: for testing purpose
    setCandidateId(candidateId);
    const prescreenData = await getCandidatePrescreenData(candidateId);
    setPrescreenData(prescreenData);
    setLoadingData(false);
  };

  useEffect(() => {
    loadPrescreenForm();
  }, []);

  const savePrescreen = async () => {
    if (!prescreenData) return;
    setSavingData(true);
    await savePrescreenForm(prescreenData);
    setSavingData(false);
    loadPrescreenForm();
  };

  if (isLoadingData) return <Spinner animation="border" variant="primary" />;
  return (
    <React.Fragment>
      <h4>Prescreen for candidate #{candidateId}</h4>
      {prescreenData &&
        precreenQuestionOrder?.map((questionId: string, index) => {
          const item = prescreenData.get(questionId);
          if (item)
            return (
              <div key={`question-${index}`}>
                <label>{`${index + 1}. ${item.question}`}</label>
                <PrescreenQuestion
                  index={index}
                  question={item}
                  updateAnser={updateAnser}
                ></PrescreenQuestion>
                <br />
              </div>
            );
        })}
      <Button
        variant="outline-primary"
        onClick={savePrescreen}
        disabled={!prescreenData?.get("result")?.answer || isSavingData}
      >
        Save
      </Button>
    </React.Fragment>
  );
};

export default Prescreen;
