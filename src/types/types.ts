const PHYSICAL_EXERCISE_HEALTH = 'physicalExerciseHealth';
const COMMUNICATION = 'communication';
const SOCIAL_RELATIONS = 'socialRelations';
const ART_EXPERIENCE = 'artExperience';
const NATURE_INQUIRY = 'natureInquiry';

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
};

export interface AnswerSheetType {
    areaTarget : string;
    contentCategories : ContentCategoriesType[];
};

export interface ContentCategoriesType {
    key : string;
    contentCategoryGoal : string;
    contentCategory : ContentCategoryType;
}

export interface ContentCategoryType {
    title : string;
    details : DetailsType[];
};

export interface DetailsType {
    key : string;
    name : string;
    detailSheets : DetailSheetsTypes[];
};

export interface DetailSheetsTypes {
    three? : string;
    four? : string;
    five? : string;
};

export type ClassType = typeof PHYSICAL_EXERCISE_HEALTH 
                        | typeof COMMUNICATION 
                        | typeof SOCIAL_RELATIONS 
                        | typeof ART_EXPERIENCE 
                        | typeof NATURE_INQUIRY;