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