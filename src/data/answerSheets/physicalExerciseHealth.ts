import { AnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const {
    PHYSICAL_EXERCISE_HEALTH_KEY : {
        CONTENT_CATEGORY_KEYS : {
            POSITIVE_RECOGNITION_KEY,
            BASIC_ATHLETIC_ABILITY_KEY,
            HAVE_FUN_KEY,
            HEALTHY_LIFESTYLE_KEY,
            SAFE_LIFESTYLE_KEY
        },
        DETAIL_KEYS : {
            GROW_AND_UTILIZE_KEY,
            RECOGNIZE_AND_UTILIZE_KEY,
            ADJUST_YOUR_BODY_KEY,
            BASIC_EXERCISES_KEY,
            VOLUNTARILY_PARTICIPATE_KEY,
            PHYSICAL_ACTIVITY_OUTSIDE_KEY,
            USING_INSTRUMENT_KEY,
            CLEANSE_THE_BODY_KEY,
            RIGHT_EATING_KEY,
            HEALTHY_DAILY_LIFE_KEY,
            DISEASE_PREVENTION_KEY,
            PLAY_SAFELY_KEY,
            TRAFFIC_SAFETY_RULES_KEY,
            TAKE_CARE_EMERGENCY_KEY
        }
    }
} = keys;

const {
    PHYSICAL_EXERCISE_HEALTH_NAME : {
        AREA_TARGET,
        CONTENT_CATEGORY_GOALS : {
            POSITIVE_RECOGNITION_NAME,
            BASIC_ATHLETIC_ABILITY_NAME,
            HAVE_FUN_NAME,
            HEALTHY_LIFESTYLE_NAME,
            SAFE_LIFESTYLE_NAME
        },
        CONTENT_CATEGORIES : {
            BODY_RECOGNITION_NAME,
            BODY_ADJUSTMENT_AND_BASIC_EXERCISE_NAME,
            PARTICIPATE_IN_PHYSICAL_ACTIVITY_NAME,
            LIVING_HEALTHY_NAME,
            LIVING_SAFELY_NAME
        },
        DETAIL_CONTENTS : {
            GROW_AND_UTILIZE_NAME,
            RECOGNIZE_AND_UTILIZE_NAME,
            ADJUST_YOUR_BODY_NAME,
            BASIC_EXERCISES_NAME,
            VOLUNTARILY_PARTICIPATE_NAME,
            PHYSICAL_ACTIVITY_OUTSIDE_NAME,
            USING_INSTRUMENT_NAME,
            CLEANSE_THE_BODY_NAME,
            RIGHT_EATING_NAME,
            HEALTHY_DAILY_LIFE_NAME,
            DISEASE_PREVENTION_NAME,
            PLAY_SAFELY_NAME,
            TRAFFIC_SAFETY_RULES_NAME,
            TAKE_CARE_EMERGENCY_NAME
        }
    }
} = names;

const PHYSICAL_EXERCISE_HEALTH_ANSWER : AnswerSheetType = {
    areaTarget : AREA_TARGET,
    contentCategories : [
        {
            key : POSITIVE_RECOGNITION_KEY,
            contentCategoryGoal : POSITIVE_RECOGNITION_NAME,
            contentCategory : {
                title : BODY_RECOGNITION_NAME,
                details : [
                    {
                        key : GROW_AND_UTILIZE_KEY,
                        name : GROW_AND_UTILIZE_NAME,
                        detailSheets : [
                            {
                                three : '감각적 차이를 경험한다.',
                                four : '감각적 차이를 구분한다.',
                                five : '감각으로 대상이나 사물의 특성과 차이를 구분한다.'
                            },
                            {
                                three : '감각기관을 인식하고, 활용해 본다.',
                                four : '여러 감각기관을 협응하여 활용한다.',
                                five : '여러 감각기관을 협응하여 활용한다.'
                            }
                        ]
                    },
                    {
                        key : RECOGNIZE_AND_UTILIZE_KEY,
                        name : RECOGNIZE_AND_UTILIZE_NAME,
                        detailSheets : [
                            {
                                three : '신체 각 부분의 명칭을 알고, 움직임에 관심을 갖는다.',
                                four : '신체 각 부분의 특성을 이해하고 활용하여 움직인다.',
                                five : '신체 각 부분의 특성을 이해하고 활용하여 움직인다.'
                            },
                            {
                                three : '자신의 신체를 긍정적으로 인식하고 움직인다.',
                                four : '자신의 신체를 긍정적으로 인식하고 움직인다.',
                                five : '자신의 신체를 긍정적으로 인식하고 움직인다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : BASIC_ATHLETIC_ABILITY_KEY,
            contentCategoryGoal : BASIC_ATHLETIC_ABILITY_NAME,
            contentCategory : {
                title : BODY_ADJUSTMENT_AND_BASIC_EXERCISE_NAME,
                details : [
                    {
                        key : ADJUST_YOUR_BODY_KEY,
                        name : ADJUST_YOUR_BODY_NAME,
                        detailSheets : [
                            {
                                three : '신체 균형을 유지해본다.',
                                four : '다양한 자세와 움직임에서 신체균형을 유지한다.',
                                five : '다양한 자세와 움직임에서 신체균형을 유지한다.'
                            },
                            {
                                three : '공간, 힘, 시간 등의 움직임 요소를 경험한다.',
                                four : '공간, 힘, 시간 등의 움직임 요소를 활용하여 움직인다.',
                                five : '공간, 힘, 시간 등의 움직임 요소를 활용하여 움직인다.'
                            },
                            {
                                three : '신체 각 부분의 움직임을 조절해 본다.',
                                four : '신체 각 부분을 협응하여 움직임을 조절한다.',
                                five : '신체 각 부분을 협응하여 움직임을 조절한다.'
                            },
                            {
                                three : '눈과 손을 협응하여 소근육을 조절해 본다.',
                                four : '눈과 손을 협응하여 소근육을 조절해 본다.',
                                five : '눈과 손을 협응하여 소근육을 조절해 본다.'
                            },
                            {
                                five : '도구를 활용하여 여러 가지 조작운동을 한다.'
                            }
                        ]
                    },
                    {
                        key : BASIC_EXERCISES_KEY,
                        name : BASIC_EXERCISES_NAME,
                        detailSheets : [
                            {
                                three : '걷기, 달리기 등 이동운동을 한다.',
                                four : '걷기, 달리기, 뛰기 등 다양한 이동운동을 한다.',
                                five : '걷기, 달리기, 뛰기 등 다양한 이동운동을 한다.'
                            },
                            {
                                three : '제자리에서 몸을 움직여 본다.',
                                four : '제자리에서 몸을 다양하게 움직인다.',
                                five : '제자리에서 몸을 다양하게 움직인다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : HAVE_FUN_KEY,
            contentCategoryGoal : HAVE_FUN_NAME,
            contentCategory : {
                title : PARTICIPATE_IN_PHYSICAL_ACTIVITY_NAME,
                details : [
                    {
                        key : VOLUNTARILY_PARTICIPATE_KEY,
                        name : VOLUNTARILY_PARTICIPATE_NAME,
                        detailSheets : [
                            {
                                three : '신체 활동에 자발적으로 참여한다.',
                                four : '신체 활동에 자발적이고 지속적으로 참여한다.',
                                five : '신체 활동에 자발적이고 지속적으로 참여한다.'
                            },
                            {
                                three : '다른 사람과 함께 하는 신체 활동에 참여한다.',
                                four : '다른 사람과 함께 하는 신체 활동에 참여한다.',
                                five : '다른 사람과 함께 하는 신체 활동에 참여한다.'
                            },
                            {
                                four : '자신과 다른 사람의 운동 능력의 차이에 관심을 갖는다.',
                                five : '자신과 다른 사람의 운동 능력의 차이를 이해한다.'
                            }
                        ]
                    },
                    {
                        key : PHYSICAL_ACTIVITY_OUTSIDE_KEY,
                        name : PHYSICAL_ACTIVITY_OUTSIDE_NAME,
                        detailSheets : [
                            {
                                three : '규칙적으로 바깥에서 신체 활동을 한다.',
                                four : '규칙적으로 바깥에서 신체 활동을 한다.',
                                five : '규칙적으로 바깥에서 신체 활동을 한다.'
                            }
                        ]
                    },
                    {
                        key : USING_INSTRUMENT_KEY,
                        name : USING_INSTRUMENT_NAME,
                        detailSheets : [
                            {
                                three : '여러 가지 기구를 이용하여 신체 활동을 한다.',
                                four : '여러 가지 기구를 이용하여 신체 활동을 한다.',
                                five : '여러 가지 기구를 이용하여 신체 활동을 한다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : HEALTHY_LIFESTYLE_KEY,
            contentCategoryGoal : HEALTHY_LIFESTYLE_NAME,
            contentCategory : {
                title : LIVING_HEALTHY_NAME,
                details : [
                    {
                        key : CLEANSE_THE_BODY_KEY,
                        name : CLEANSE_THE_BODY_NAME,
                        detailSheets : [
                            {
                                three : '손과 이를 깨끗이 하는 방법을 알고 실천한다.',
                                four : '손과 이를 깨끗이 하는 방법을 알고 실천한다.',
                                five : '스스로 몸을 깨끗이 하는 습관을 기른다.'
                            },
                            {
                                three : '주변을 깨끗이 한다.',
                                four : '주변을 깨끗이 하는 습관을 기른다.',
                                five : '주변을 깨끗이 하는 습관을 기른다.'
                            }
                        ]
                    },
                    {
                        key : RIGHT_EATING_KEY,
                        name : RIGHT_EATING_NAME,
                        detailSheets : [
                            {
                                three : '음식을 골고루 먹는다.',
                                four : '음식을 골고루 먹는다.',
                                five : '적당량의 음식을 골고루 먹는다.'
                            },
                            {
                                three : '몸에 좋은 음식에 관심을 갖는다.',
                                four : '몸에 좋은 음식을 알아본다.',
                                five : '몸에 좋은 음식을 선택할 수 있다.'
                            },
                            {
                                three : '바른 태도로 식사한다.',
                                four : '음식을 소중히 여기고 식사예절을 지킨다.',
                                five : '음식을 소중히 여기고 식사예절을 지킨다.'
                            }
                        ]
                    },
                    {
                        key : HEALTHY_DAILY_LIFE_KEY,
                        name : HEALTHY_DAILY_LIFE_NAME,
                        detailSheets : [
                            {
                                three : '규칙적으로 잠을 자고, 적당한 휴식을 취한다.',
                                four : '규칙적으로 잠을 자고, 적당한 휴식을 취한다.',
                                five : '규칙적으로 잠을 자고, 적당한 휴식을 취한다.'
                            },
                            {
                                three : '하루 일과에 즐겁게 참여한다.',
                                four : '하루 일과에 즐겁게 참여한다.',
                                five : '하루 일과에 즐겁게 참여한다.'
                            },
                            {
                                three : '스스로 화장실에서 배변한다.',
                                four : '바른 배변습관을 가진다.',
                                five : '규칙적인 배변습관을 가진다.'
                            }
                        ]
                    },
                    {
                        key : DISEASE_PREVENTION_KEY,
                        name : DISEASE_PREVENTION_NAME,
                        detailSheets : [
                            {
                                three : '질병의 위험을 알고 주의한다.',
                                four : '질병을 예방하는 방법을 알고 실천한다.',
                                five : '질병을 예방하는 방법을 알고 실천한다.'
                            },
                            {
                                three : '날씨에 맞게 옷을 입는다.',
                                four : '날씨와 상황에 알맞게 옷을 입는다.',
                                five : '날씨와 상황에 알맞게 옷을 입는다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : SAFE_LIFESTYLE_KEY,
            contentCategoryGoal : SAFE_LIFESTYLE_NAME,
            contentCategory : {
                title : LIVING_SAFELY_NAME,
                details : [
                    {
                        key : PLAY_SAFELY_KEY,
                        name : PLAY_SAFELY_NAME,
                        detailSheets : [
                            {
                                three : '놀이기구나 놀잇감, 도구를 안전하게 사용한다.',
                                four : '놀이기구나 놀잇감, 도구를 안전하게 사용한다.',
                                five : '놀이기구나 놀잇감, 도구의 바른 사용법을 알고 안전하게 사용한다.'
                            },
                            {
                                three : '안전한 놀이장소를 안다.',
                                four : '안전한 장소를 알고 안전하게 놀이한다.',
                                five : '안전한 장소를 알고 안전하게 놀이한다.'
                            },
                            {
                                three : 'TV, 인터넷, 통신기기 등을 바르게 사용한다.',
                                four : 'TV, 인터넷, 통신기기 등의 위해성을 알고, 바르게 사용한다.'
                            }
                        ]
                    },
                    {
                        key : TRAFFIC_SAFETY_RULES_KEY,
                        name : TRAFFIC_SAFETY_RULES_NAME,
                        detailSheets : [
                            {
                                three : '교통안전 규칙을 안다.',
                                four : '교통안전 규칙을 알고 지킨다.',
                                five : '교통안전 규칙을 알고 지킨다.'
                            },
                            {
                                three : '교통수단을 안전하게 이용한다.',
                                four : '교통수단을 안전하게 이용한다.',
                                five : '교통수단을 안전하게 이용한다.'
                            }
                        ]
                    },
                    {
                        key : TAKE_CARE_EMERGENCY_KEY,
                        name : TAKE_CARE_EMERGENCY_NAME,
                        detailSheets : [
                            {
                                three : '학대, 성폭력, 실종, 유괴상황을 알고 도움을 요청한다.',
                                four : '학대, 성폭력, 실종, 유괴상황 시 도움을 요청하는 방법을 알고 행동한다.',
                                five : '학대, 성폭력, 실종, 유괴상황 시 도움을 요청하는 방법을 알고 행동한다.'
                            },
                            {
                                three : '재난 및 사고 등 비상 시 적절하게 대처하는 방법을 안다.',
                                four : '재난 및 사고 등 비상 시 적절하게 대처하는 방법을 알고 행동한다.'
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

export default PHYSICAL_EXERCISE_HEALTH_ANSWER;