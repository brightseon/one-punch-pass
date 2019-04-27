import { SectionType } from "./types";
import { SUMMARY_PATH, PHYSICAL_EXERCISE_HEALTH_PATH, COMMUNICATION_PATH, SOCIAL_RELATIONS_PATH, ART_EXPERIENCE_PATH, NATURE_INQUIRY_PATH } from './paths';
import keys from './keys';

const { 
    GOSIMOON_KEY : { 
        summary, physicalExerciseHealth, communication,
        socialRelations, artExperience, natureInquiry
    }
} = keys;

export const sections : SectionType[] = [
    {
        key : summary,
        sectionName : '총론',
        sectionPath : SUMMARY_PATH
    },
    {
        key : physicalExerciseHealth,
        sectionName : '신체운동·건강',
        sectionPath : PHYSICAL_EXERCISE_HEALTH_PATH
    },
    {
        key :  communication,
        sectionName : '의사소통',
        sectionPath : COMMUNICATION_PATH
    },
    {
        key : socialRelations,
        sectionName : '사회관계',
        sectionPath : SOCIAL_RELATIONS_PATH
    },
    {
        key : artExperience,
        sectionName : '예술경험',
        sectionPath : ART_EXPERIENCE_PATH
    },
    {
        key : natureInquiry,
        sectionName : '자연탐구',
        sectionPath : NATURE_INQUIRY_PATH
    }
];