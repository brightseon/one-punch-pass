import { SocialRelationsAnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const { 
    SOCIAL_RELATIONS_KEY : {
        AREA_TARGET_KEY,
        CONTENT_CATEGORY_GOAL_KEY,
        RESPECT_KEY,
        CONTROL_KEY,
        CHERISHED_KEY,
        LIVING_TOGETHER_KEY,
        INTEREST_KEY,
        KNOW_ME_AND_CHERISH_KEY,
        YOURSELF_KEY,
        EMOTIONAL_EXPRESSION_KEY,
        EMOTION_REGULATION_KEY,
        RECONCILIATION_KEY,
        COOPERATION_KEY,
        GET_ALONG_WELL_KEY,
        LIVE_IN_PEACE_KEY,
        SOCIAL_VALUE_KEY,
        COMMUNITY_KEY,
        OUR_COUNTRY_KEY,
        WORLD_AND_VARIOUS_CULTURES_KEY
    }
} = keys;

const {
    SOCIAL_RELATIONS_NAME : {
        AREA_TARGET_NAME,
        CONTENT_CATEGORY_GOAL_NAME,
        RESPECT_NAME,
        CONTROL_NAME,
        CHERISHED_NAME,
        LIVING_TOGETHER_NAME,
        INTEREST_NAME,
        KONW_ME_AND_CHERISH_NAME,
        YOURSELF_NAME,
        EMOTIONAL_EXPRESSION_NAME,
        EMOTION_REGULATION_NAME,
        RECONCILIATION_NAME,
        COOPERATION_NAME,
        GET_ALONG_WELL_NAME,
        LIVE_IN_PEACE_NAME,
        SOCIAL_VALUE_NAME,
        COMMUNITY_NAME,
        OUR_COUNTRY_NAME,
        WORLD_AND_VARIOUS_CULTURES_NAME
    }
} = names;

const SOCIAL_RELATIONS_ANSWER : SocialRelationsAnswerSheetType[] = [
    {
        key : AREA_TARGET_KEY,
        answerSheetName : AREA_TARGET_NAME,
        answerSheets : [
            '자신을 존중하고 다른 사람과 더불어 생활하는 능력과 태도를 기른다.'
        ]
    },
    {
        key : CONTENT_CATEGORY_GOAL_KEY,
        answerSheetName : CONTENT_CATEGORY_GOAL_NAME,
        answerSheets : [
            '자신을 소중히 여기며 자율성을 기른다.'
        ]
    },
    {
        key : RESPECT_KEY,
        answerSheetName : RESPECT_NAME,
        detail : [
            {
                detailKey : KNOW_ME_AND_CHERISH_KEY,
                detailName : KONW_ME_AND_CHERISH_NAME,
                detailSheets : [
                    [
                        '나에 대해 관심을 갖는다.',
                        '나에 대해 알아본다.'
                    ],
                    [
                        '나와 다른 사람의 차이에 관심을 갖는다.',
                        '나와 다른 사람의 차이점을 알아본다.',
                        '나와 다른 사람의 신체적, 사회적, 문화적 차이를 존중한다.'
                    ],
                    [
                        '나를 소중하게 여긴다.',
                        '나에 대해 긍정적으로 생각하고 나를 소중하게 여긴다.'
                    ]
                ]
            }
        ]
    }
];

export default SOCIAL_RELATIONS_ANSWER;