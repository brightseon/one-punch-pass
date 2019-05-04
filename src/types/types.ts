export interface SectionType {
    key : string;
    sectionName : string;
    sectionPath? : string;
};

export interface SummaryAnswerSheetType {
    key : string;
    answerSheetName : string;
    answerSheet? : string[];
    detail? : SummaryDetailAnswerType[];
};

export interface SummaryDetailAnswerType {
    detailKey : string;
    detailName : string;
    detailSheet : string[];
}

export interface SocialRelationsAnswerSheetType {
    key : string;
    answerSheetName : string;
    answerSheets? : string[];
    detail? : SocialRelationsDetailType[];
};

export interface SocialRelationsDetailType {
    detailKey : string;
    detailName : string;
    detailSheets : string[][];
};