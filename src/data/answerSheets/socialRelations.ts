import { AnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const { 
    SOCIAL_RELATIONS_KEY : {
        CONTENT_CATEGORIES_KEYS : {
            AUTONOMY_GOAL_KEY,
            EMOTION_GOAL_KEY,
            RECONCILIATION_GOAL_KEY,
            SOCIAL_VALUE_GOAL_KEY,
            SOCIAL_GOAL_KEY
        },
        DETAIL_KEYS : {
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
    }
} = keys;

const {
    SOCIAL_RELATIONS_NAME : {
        AREA_TARGET,
        CONTENT_CATEGORY_GOALS : {
            AUTONOMY_GOAL,
            EMOTION_GOAL,
            RECONCILIATION_GOAL,
            SOCIAL_VALUE_GOAL,
            SOCIAL_GOAL
        },
        CONTENT_CATEGORIES : {
            RESPECT_CONTENT,
            CONTROL_CONTENT,
            CHERISHED_CONTENT,
            LIVING_TOGETHER_CONTENT,
            INTEREST_CONTENT
        },
        DETAIL_CONTENTS : {
            KNOW_ME_AND_CHERISH,
            YOURSELF,
            EMOTIONAL_EXPRESSION,
            EMOTION_REGULATION,
            RECONCILIATION,
            COOPERATION,
            GET_ALONG_WELL,
            LIVE_IN_PEACE,
            SOCIAL_VALUE,
            COMMUNITY,
            OUR_COUNTRY,
            WORLD_AND_VARIOUS_CULTURES
        }
    }
} = names;

const SOCIAL_RELATIONS_ANSWER : AnswerSheetType = {
    areaTarget : AREA_TARGET,
    contentCategories : [
        {
            key : AUTONOMY_GOAL_KEY,
            contentCategoryGoal : AUTONOMY_GOAL,
            contentCategory : {
                title : RESPECT_CONTENT,
                details : [
                    {
                        key : KNOW_ME_AND_CHERISH_KEY,
                        name : KNOW_ME_AND_CHERISH,
                        detailSheets : [
                            {
                                three : '나에 대해 관심을 갖는다.',
                                four : '나에 대해 알아본다.',
                            },
                            {
                                three : '나와 다른 사람의 차이에 관심을 갖는다.',
                                four : '나와 다른 사람의 차이점을 알아본다.',
                                five : '나와 다른 사람의 신체적, 사회적, 문화적 차이를 존중한다.'
                            },
                            {
                                three : '나를 소중하게 여긴다.',
                                four : '나에 대해 긍정적으로 생각하고 나를 소중하게 여긴다.'
                            }
                        ]
                    },
                    {
                        key : YOURSELF_KEY,
                        name : YOURSELF,
                        detailSheets : [
                            {
                                three : '내가 할 수 있는 일을 알아본다.',
                                four : '내가 할 수 있는 일을 해 본다.',
                                five : '내가 할 수 있는 일을 스스로 한다.'
                            },
                            {
                                three : '내가 하고 싶은 일을 선택해 본다.',
                                four : '하고 싶은 일을 계획하고 해 본다.',
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : EMOTION_GOAL_KEY,
            contentCategoryGoal : EMOTION_GOAL,
            contentCategory : {
                title : CONTROL_CONTENT,
                details : [
                    {
                        key : EMOTIONAL_EXPRESSION_KEY,
                        name : EMOTIONAL_EXPRESSION,
                        detailSheets : [
                            {
                                three : '자신에게 여러 가지 감정이 있음을 안다.',
                                four : '자신의 감정을 알고 표현한다.'
                            },
                            {
                                three : '다른 사람의 감정에 관심을 갖는다.',
                                four : '다른 사람의 감정을 안다.',
                                five : '다른 사람의 감정을 알고 공감한다.'
                            }
                        ]
                    },
                    {
                        key : EMOTION_REGULATION_KEY,
                        name : EMOTION_REGULATION,
                        detailSheets : [
                            {
                                three : '자신의 감정을 조절해본다.',
                                five : '자신의 감정을 상황에 맞게 조절한다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : RECONCILIATION_GOAL_KEY,
            contentCategoryGoal : RECONCILIATION_GOAL,
            contentCategory : {
                title : CHERISHED_CONTENT,
                details : [
                    {
                        key : RECONCILIATION_KEY,
                        name : RECONCILIATION,
                        detailSheets : [
                            {
                                three : '가족의 소중함을 안다.',
                                five : '가족의 의미와 소중함을 안다.'
                            },
                            {
                                five : '가족과 화목하게 지낸다.'
                            }
                        ]
                    },
                    {
                        key : COOPERATION_KEY,
                        name : COOPERATION,
                        detailSheets : [
                            {
                                three : '가족 구성원을 알아본다.',
                                four : '가족 구성원의 역할에 대해 알아본다.',
                                five : '다양한 가족구조에 대해 알아본다.'
                            },
                            {
                                three : '가족을 위하여 내가 할 수 있는 일을 알아본다.',
                                four : '가족을 위하여 내가 할 수 있는 일을 알아보고 실천한다.',
                                five : '가족은 서로 도와야 함을 알고 실천한다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : SOCIAL_VALUE_GOAL_KEY,
            contentCategoryGoal : SOCIAL_VALUE_GOAL,
            contentCategory : {
                title : LIVING_TOGETHER_CONTENT,
                details : [
                    {
                        key : GET_ALONG_WELL_KEY,
                        name : GET_ALONG_WELL,
                        detailSheets : [
                            {
                                four : '친구와 협동하며 놀이한다.'
                            },
                            {
                                three : '나와 친구의 의견에 차이가 있음을 안다.',
                                four : '친구와의 갈등을 긍정적인 방법으로 해결한다.'
                            }
                        ]
                    },
                    {
                        key : LIVE_IN_PEACE_KEY,
                        name : LIVE_IN_PEACE,
                        detailSheets : [
                            {
                                four : '도움이 필요할 때 다른 사람과 도움을 주고 받는다.',
                                five : '다른 사람과 도움을 주고 받고, 서로 협력한다.'
                            },
                            {
                                three : '교사 및 주변 사람과 화목하게 지낸다.'
                            }
                        ]
                    },
                    {
                        key : SOCIAL_VALUE_KEY,
                        name : SOCIAL_VALUE,
                        detailSheets : [
                            {
                                four : '정직하게 말하고 행동한다.'
                            },
                            {
                                three : '다른 사람의 소유물을 존중한다.',
                                four : '다른 사람의 생각, 행동을 존중한다.',
                                five : '다른 사람을 배려하여 행동한다.'
                            },
                            {
                                four : '친구와 어른께 예의 바르게 행동한다.'
                            },
                            {
                                three : '약속과 규칙을 지켜야 함을 안다.',
                                four : '다른 사람과 한 약속이나 공공규칙을 지킨다.'
                            },
                            {
                                four : '자연과 자원을 아끼는 습관을 기른다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : SOCIAL_GOAL_KEY,
            contentCategoryGoal : SOCIAL_GOAL,
            contentCategory : {
                title : INTEREST_CONTENT,
                details : [
                    {
                        key : COMMUNITY_KEY,
                        name : COMMUNITY,
                        detailSheets : [
                            {
                                three : '우리 동네의 이름을 안다.',
                                four : '우리 동네에 대해 알아본다.'
                            },
                            {
                                three : '우리 동네 사람들에 관심을 갖는다.',
                                four : '우리 동네 사람들이 하는 일에 관심을 갖는다.',
                                five : '다양한 직업에 관심을 갖는다.'
                            },
                            {
                                four : '물건을 살 때 돈이 필요함을 안다.',
                                five : '일상생활에서 돈의 쓰임에 대해 안다.'
                            }
                        ]
                    },
                    {
                        key : OUR_COUNTRY_KEY,
                        name : OUR_COUNTRY,
                        detailSheets : [
                            {
                                three : '우리나라를 상징하는 것에 관심을 가진다.',
                                four : '우리나라를 상징하는 것을 안다.',
                                five : '우리나라를 상징하는 것을 알고 예절을 지킨다.'
                            },
                            {
                                three : '우리나라의 전통놀이와 풍습에 관심을 갖는다.',
                                five : '우리나라의 전통, 역사, 문화에 관심을 갖는다.'
                            },
                            {
                                four : '우리나라에 대해 자부심을 갖는다.'
                            }
                        ]
                    },
                    {
                        key : WORLD_AND_VARIOUS_CULTURES_KEY,
                        name : WORLD_AND_VARIOUS_CULTURES,
                        detailSheets : [
                            {
                                four : '세계 여러 나라에 대해 관심을 갖는다.',
                                five : '세계 여러 나라에 대해 관심을 갖고, 서로 협력해야 함을 안다.'
                            },
                            {
                                four : '다양한 인종과 문화에 관심을 갖는다.',
                                five : '다양한 인종과 문화를 알아보고 존중한다.'
                            }
                        ]
                    }
                ]
            }
        }
    ]
}

export default SOCIAL_RELATIONS_ANSWER;