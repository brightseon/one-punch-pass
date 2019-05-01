import { SectionType } from '../../types/types';
import keys from '../keys';
import names from '../names';
import { SUMMARY_PATH, PHYSICAL_EXERCISE_HEALTH_PATH, COMMUNICATION_PATH, SOCIAL_RELATIONS_PATH, ART_EXPERIENCE_PATH, NATURE_INQUIRY_PATH } from '../../utils/paths';

const { GOSIMOON_KEY : { SUMMARY_KEY, PHYSICAL_EXERCISE_HEALTH_KEY, COMMUNICATION_KEY, SOCIAL_RELATIONS_KEY, ART_EXPERIENCE_KEY, NATURE_INQUIRY_KEY } } = keys;
const { GOSIMOON_NAME : { SUMMARY_NAME, PHYSICAL_EXERCISE_HEALTH_NAME, COMMUNICATION_NAME, SOCIAL_RELATIONS_NAME, ART_EXPERIENCE_NAME, NATURE_INQUIRY_NAME } } = names;

const GOSIMOON_SECTION : SectionType[] = [
    {
        key : SUMMARY_KEY,
        sectionName : SUMMARY_NAME,
        sectionPath : SUMMARY_PATH
    },
    {
        key : PHYSICAL_EXERCISE_HEALTH_KEY,
        sectionName : PHYSICAL_EXERCISE_HEALTH_NAME,
        sectionPath : PHYSICAL_EXERCISE_HEALTH_PATH
    },
    {
        key : COMMUNICATION_KEY,
        sectionName : COMMUNICATION_NAME,
        sectionPath : COMMUNICATION_PATH
    },
    {
        key : SOCIAL_RELATIONS_KEY,
        sectionName : SOCIAL_RELATIONS_NAME,
        sectionPath : SOCIAL_RELATIONS_PATH
    },
    {
        key : ART_EXPERIENCE_KEY,
        sectionName : ART_EXPERIENCE_NAME,
        sectionPath : ART_EXPERIENCE_PATH
    },
    {
        key : NATURE_INQUIRY_KEY,
        sectionName : NATURE_INQUIRY_NAME,
        sectionPath : NATURE_INQUIRY_PATH
    }
];

export default GOSIMOON_SECTION;