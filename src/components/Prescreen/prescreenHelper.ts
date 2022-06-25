import { getPrescreenData, saveForm } from "../../helpers/api";
import { FormEntry, FORM_TYPE, PrescreenForm } from "../../types/forms";
import {
  AnswerType,
  precreenQuestionOrder,
  prescreenFieldQuestions,
  QuestionItem,
} from "./prescreen.constant";

export const getCandidatePrescreenData = async (candidateId: string) => {
  const data = await getPrescreenData(candidateId);
  const prescreenData = precreenQuestionOrder.reduce((map, questionId) => {
    const question = prescreenFieldQuestions.get(questionId);
    const existingAns = data[questionId];
    if (question) {
      if (existingAns) {
        question.answer = existingAns;
      }
      map.set(questionId, question);
    }
    return map;
  }, new Map());
  return prescreenData as Map<string, QuestionItem>;
};

export const savePrescreenForm = async (
  formItems: Map<string, QuestionItem>
) => {
  const constructedForm = constructPrescreenMessage(formItems);
  const res = await saveForm(FORM_TYPE.PRESCREEN, constructedForm);
  return res;
};

const constructPrescreenMessage = (
  formItems: Map<string, QuestionItem>
): PrescreenForm => {
  let prescreenForm: Record<string, any> = {};
  console.log("FormItems", formItems);
  formItems.forEach((item: QuestionItem) => {
    if (!item.answer) return;

    switch (item.answerType) {
      case AnswerType.MULTIPLE: {
        const ans = Array.isArray(item.answer) ? item.answer.join(",") : "";
        prescreenForm[item.questionId] = {
          question: item.question,
          answer: ans,
        } as FormEntry;
        break;
      }
      default: {
        console.log("single item", item);
        prescreenForm[item.questionId] = {
          question: item.question,
          answer: item.answer as string,
        } as FormEntry;
        break;
      }
    }
  });
  console.log("prescreenForm", prescreenForm);
  return prescreenForm as PrescreenForm;
};
