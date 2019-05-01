import { SectionType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const { SUMMARY_KEY : { COMPOSITION_DIRECTION_KEY, PURPOSE_KEY, GOAL_KEY, ORGANIZATION_KEY, OPERATION_KEY, TEACHING_METHOD_KEY, EVALUATION_KEY } } = keys;
const { SUMMARY_NAME : { COMPOSITION_DIRECTION_NAME, PURPOSE_NAME, GOAL_NAME, ORGANIZATION_NAME, OPERATION_NAME, TEACHING_METHOD_NAME, EVALUATION_NAME } } = names;

const SUMMARY_SECTION : SectionType[] = [
    {
        key : COMPOSITION_DIRECTION_KEY,
        sectionName : COMPOSITION_DIRECTION_NAME
    },
    {
        key : PURPOSE_KEY,
        sectionName : PURPOSE_NAME
    },
    {
        key : GOAL_KEY,
        sectionName : GOAL_NAME
    },
    {
        key : ORGANIZATION_KEY,
        sectionName : ORGANIZATION_NAME
    },
    {
        key : OPERATION_KEY,
        sectionName : OPERATION_NAME
    },
    {
        key : TEACHING_METHOD_KEY,
        sectionName : TEACHING_METHOD_NAME
    },
    {
        key : EVALUATION_KEY,
        sectionName : EVALUATION_NAME
    }
];

export default SUMMARY_SECTION;