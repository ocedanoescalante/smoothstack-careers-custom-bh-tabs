export enum AnswerType {
  "TEXT" = "TEXT",
  "SINGLE" = "SINGLE",
  "MULTIPLE" = "MULTIPLE",
  "DATE" = "DATE",
}

export type QuestionItem = {
  question: string;
  options?: AnswerItem[];
  questionId: string;
  answer?: string | string[];
  answerType: AnswerType;
  isDisabled?: boolean;
};

export type AnswerItem = {
  key: string;
  value: string;
};

export const newRelocationOptions: AnswerItem[] = [
  { key: "yes", value: "Yes" },
  { key: "no", value: "No" },
  { key: "undecided", value: "Undecided" },
];

export const expectedDegreeOptions: AnswerItem[] = [
  { key: "highSchool", value: "High School" },
  { key: "associate", value: "Associate's" },
  { key: "bachelor", value: "Bachelor's" },
  { key: "master", value: "Master's" },
  { key: "phd", value: "PhD" },
];

export const highestDegreeOptions = [
  { key: "none", value: "None" },
  { key: "ged", value: "GED" },
  { key: "highSchool", value: "High School" },
  { key: "associate", value: "Associate's" },
  { key: "bachelor", value: "Bachelor's" },
  { key: "master", value: "Master's" },
  { key: "phd", value: "PhD" },
];

export const monthsOfExperienceOptions: AnswerItem[] = [
  { key: "belowTwenty", value: "<20" },
  { key: "atLeastTwenty", value: ">=20" },
];

export const programmingLanguagesOptions: AnswerItem[] = [
  { key: "java", value: "Java" },
  { key: "c", value: "C" },
  { key: "cPlus", value: "C++" },
  { key: "cSharp", value: "C#" },
  { key: "javascript", value: "JavaScript" },
  { key: "python", value: "Python" },
  { key: "ruby", value: "Ruby" },
  { key: "html", value: "HTML" },
  { key: "css", value: "CSS" },
  { key: "react", value: "React" },
  { key: "sql", value: "SQL" },
  { key: "other", value: "Other" },
];

export const commitmentOptions: AnswerItem[] = [
  { key: "true", value: "Can Commit" },
  { key: "false", value: "Will be a Challenge" },
];

export const opportunityRankOptions: AnswerItem[] = [
  { key: "topChoice", value: "Top Choice" },
  { key: "middleChoice", value: "Middle Choice" },
  { key: "bottomChoice", value: "Bottom Choice" },
  { key: "lastResort", value: "Last Resort" },
];

export const workAuthorizationOptions: AnswerItem[] = [
  { key: "citizen", value: "US Citizen" },
  { key: "permanentResident", value: "Permanent Resident" },
  { key: "daca", value: "DACA" },
  { key: "h1b", value: "H-1B" },
  { key: "opt", value: "OPT/EAD" },
  { key: "ead", value: "EAD" },
  { key: "h4", value: "H-4/EAD" },
  { key: "other", value: "Other" },
  { key: "notAuthorized", value: "Not authorized" },
];

export const isVaccinatedOptions: AnswerItem[] = [
  { key: "booster", value: "Booster" },
  { key: "full", value: "Full" },
  { key: "partial", value: "Partial" },
  { key: "no", value: "No" },
  { key: "undisclosed", value: "Undisclosed" },
];

export const willVaccinateOptions: AnswerItem[] = [
  { key: "yes", value: "Yes" },
  { key: "no", value: "No" },
  { key: "undisclosed", value: "undisclosed" },
];

export const canCommitOptions: AnswerItem[] = [
  { key: "yes", value: "Yes" },
  { key: "no", value: "No" },
  { key: "undisclosed", value: "undisclosed" },
];

export const communicationSkillsOptions: AnswerItem[] = [
  { key: "0", value: "0-Poor" },
  { key: "1", value: "1-Satisfactory" },
  { key: "2", value: "2-Good" },
  { key: "3", value: "3-Excellent" },
];

export const resultOptions: AnswerItem[] = [
  { key: "Pass", value: "Pass" },
  { key: "Reject-Relocation", value: "Reject-Relocation" },
  { key: "Snooze-Relocation", value: "Snooze-Relocation" },
];

export const precreenQuestionOrder: string[] = [
  "candidateName",
  "candidateEmail",
  "relocation",
  "newRelocation",
  "aboutYourself",
  "otherApplications",
  "expectedDegree",
  "expectedGraduationDate",
  "highestDegree",
  "graduationDate",
  "projects",
  "monthsOfExperience",
  "programmingLanguages",
  "goodFit",
  "referral",
  "commitment",
  "abilityToLearn",
  "challengingSituation",
  "opportunityRank",
  "customText4",
  "backgroundCheck",
  "drugScreen",
  "isVaccinated",
  "willVaccinate",
  "vaccinationNotes",
  "githubLink",
  "linkedinLink",
  "canCommit",
  "address1",
  "address2",
  "city",
  "state",
  "zip",
  "county",
  "questions",
  "referFriend",
  "communicationSkills",
  "result",
];

export const prescreenFieldQuestions: Map<string, QuestionItem> = new Map([
  [
    "candidateName",
    {
      questionId: "candidateName",
      question: "Candidate Name",
      answerType: AnswerType.TEXT,
      isDisabled: false,
    },
  ],
  [
    "candidateEmail",
    {
      questionId: "candidateEmail",
      question: "Candidate Email",
      answerType: AnswerType.TEXT,
      isDisabled: false,
    },
  ],
  [
    "relocation",
    {
      questionId: "relocation",
      question: "Willingness to Relocate",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "newRelocation",
    {
      questionId: "newRelocation",
      question:
        "To get to this point in the interview process, you have previously indicated your willingness to relocate. Once things open up, post COVID, our clients will expect our employees to be back on the client site. Are you actually prepared to relocate?",
      options: newRelocationOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "aboutYourself",
    {
      questionId: "aboutYourself",
      question:
        "Tell me about yourself and what influenced you to pursue a career in IT.",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "otherApplications",
    {
      questionId: "otherApplications",
      question:
        "Where else have you applied & what roadblocks, if any, have you been experiencing?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "expectedDegree",
    {
      questionId: "expectedDegree",
      question: "If you are currently a student, what degree are you pursuing?",
      options: expectedDegreeOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "expectedGraduationDate",
    {
      questionId: "expectedGraduationDate",
      question: "If you are a student, what is your expected graduation date?",
      answerType: AnswerType.DATE,
    },
  ],
  [
    "highestDegree",
    {
      questionId: "highestDegree",
      question: "What is your highest level of education?",
      options: highestDegreeOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "graduationDate",
    {
      questionId: "graduationDate",
      question: "What was your Graduation Date?",
      answerType: AnswerType.DATE,
    },
  ],
  [
    "projects",
    {
      questionId: "projects",
      question:
        "Any internships? Personal projects? School related projects? Boot Camps? Professional experience (Note: included date ranges)",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "monthsOfExperience",
    {
      questionId: "monthsOfExperience",
      question:
        "Recruiter: # of Months of Experience (Recruiter will determine this based on previous answer)",
      options: monthsOfExperienceOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "programmingLanguages",
    {
      questionId: "programmingLanguages",
      question:
        "What is your strongest object oriented language? What programming languages do you feel the most comfortable with? ",
      options: programmingLanguagesOptions,
      answerType: AnswerType.MULTIPLE,
    },
  ],
  [
    "goodFit",
    {
      questionId: "goodFit",
      question: "Why do you feel like you would be a good fit for Smoothstack?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "referral",
    {
      questionId: "referral",
      question: "How did you hear about us?",
      answerType: AnswerType.TEXT, // TODO: options
    },
  ],
  [
    "commitment",
    {
      questionId: "commitment",
      question:
        "Our internal training program is pretty intense. If selected, you are going to learn a lot in a short amount of time. Is this something that you feel like you can commit to or will this be a challenge for you?",
      options: commitmentOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "abilityToLearn",
    {
      questionId: "abilityToLearn",
      question:
        "Can you give me an example of time when you had to learn a lot in a short period of time?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "challengingSituation",
    {
      questionId: "challengingSituation",
      question:
        "Tell me about a challenging situation that you have found yourself in?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "opportunityRank",
    {
      questionId: "opportunityRank",
      question:
        "Where does Smoothstack rate compared to other companies that you are interested in?",
      options: opportunityRankOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "customText4",
    {
      questionId: "customText4",
      question:
        "Are you authorized to work in the US for any employer? Do you require sponsorship now or in the future? ",
      options: workAuthorizationOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "backgroundCheck",
    {
      questionId: "backgroundCheck",
      question: "Do you have any concerns about passing a background check?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "drugScreen",
    {
      questionId: "drugScreen",
      question:
        "Our clients require drug screening, do you have any concerns passing a drug screen even if certain drugs are legal in your state?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "isVaccinated",
    {
      questionId: "isVaccinated",
      question: "Are you currently vaccinated?",
      options: isVaccinatedOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "willVaccinate",
    {
      questionId: "willVaccinate",
      question: "Vaccination Notes",
      options: willVaccinateOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "vaccinationNotes",
    {
      questionId: "vaccinationNotes",
      question: "Vaccination Notes",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "githubLink",
    {
      questionId: "githubLink",
      question: "GitHub Link",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "linkedinLink",
    {
      questionId: "linkedinLink",
      question: "LinkedIn Link",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "canCommit",
    {
      questionId: "canCommit",
      question:
        "To clarify the opportunity, this is a (2) year commitment. We invest a lot of time and money into our new-hires so that our employees may gain valuable on-the-job work experience working on real projects with real clients. Are you prepared to commit to 2 years as an investment in your future?",
      options: canCommitOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "address1",
    {
      questionId: "address1",
      question: "Address Line 1",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "address2",
    {
      questionId: "address2",
      question: "Address Line 2 (Optional)",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "city",
    {
      questionId: "city",
      question: "City",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "state",
    {
      questionId: "state",
      question: "State",
      answerType: AnswerType.TEXT, // TODO: change to list
    },
  ],
  [
    "zip",
    {
      questionId: "zip",
      question: "Zip Code",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "county",
    {
      questionId: "county",
      question: "What county do you live in?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "questions",
    {
      questionId: "questions",
      question:
        "Do you have any outstanding questions regarding this opportunity that I may help clarify?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "referFriend",
    {
      questionId: "referFriend",
      question:
        "Is there anyone you can think of that would be a good fit for this program?",
      answerType: AnswerType.TEXT,
    },
  ],
  [
    "communicationSkills",
    {
      questionId: "communicationSkills",
      question: "Recruiter: Please rank candidates communication skills.",
      options: communicationSkillsOptions,
      answerType: AnswerType.SINGLE,
    },
  ],
  [
    "result",
    {
      questionId: "result",
      question: "Recruiter: Please select pre-screen result below.",
      options: resultOptions,
      answerType: AnswerType.SINGLE, // TODO: options
    },
  ],
]);
