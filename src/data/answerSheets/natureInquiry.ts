import { AnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const {
    NATURE_INQUIRY_KEY : {
        CONTENT_CATEGORY_KEYS : {
            ATTITUDE_OF_INQUIRY_KEY,
            MATHEMATICAL_BASIC_ABILITY_KEY,
            SCIENTIFIC_BASIC_ABILITY_KEY
        },
        DETAIL_KEYS : {
            MAINTAIN_AND_EXPAND_YOUR_CURIOSITY_KEY,
            ENJOY_THE_EXPLORATION_PROCESS_KEY,
            LEVERAGE_EXPLORATION_TECHNOLOGY_KEY,
            BASICS_OF_NUMBERS_AND_OPERATIONS_KEY,
            BASIC_CONCEPTS_OF_SPACE_AND_GEOMETRY_KEY,
            BASIC_MEASUREMENT_KEY,
            UNDERSTANDING_REGULARITY_KEY,
            BASIC_DATA_COLLECTION_AND_RESULTS_KEY,
            LEARN_ABOUT_OBJECTS_AND_SUBSTANCES_KEY,
            LIFE_AND_NATURE_KEY,
            DISCOVER_THE_NATURAL_PHENOMENON_KEY,
            UTILIZING_TOOLS_AND_MACHINES_KEY
        }
    }
} = keys;

const {
    NATURE_INQUIRY_NAME : {
        AREA_TARGET,
        CONTENT_CATEGORY_GOALS : {
            ATTITUDE_OF_INQUIRY_NAME,
            MATHEMATICAL_BASIC_ABILITY_NAME,
            SCIENTIFIC_BASIC_ABILITY_NAME
        },
        CONTENT_CATEGORIES : {
            RAISING_AN_ATTITUDE_OF_INQUIRY_NAME,
            MATHEMATICAL_EXPLORATION_NAME,
            SCIENTIFIC_EXPLORATION_NAME
        },
        DETAIL_CONTENTS : {
            MAINTAIN_AND_EXPAND_YOUR_CURIOSITY_NAME,
            ENJOY_THE_EXPLORATION_PROCESS_NAME,
            LEVERAGE_EXPLORATION_TECHNOLOGY_NAME,
            BASICS_OF_NUMBERS_AND_OPERATIONS_NAME,
            BASIC_CONCEPTS_OF_SPACE_AND_GEOMETRY_NAME,
            BASIC_MEASUREMENT_NAME,
            UNDERSTANDING_REGULARITY_NAME,
            BASIC_DATA_COLLECTION_AND_RESULTS_NAME,
            LEARN_ABOUT_OBJECTS_AND_SUBSTANCES_NAME,
            LIFE_AND_NATURE_NAME,
            DISCOVER_THE_NATURAL_PHENOMENON_NAME,
            UTILIZING_TOOLS_AND_MACHINES_NAME
        }
    }
} = names;

const NATURE_INQUIRY_ANSWER : AnswerSheetType = {
    areaTarget : AREA_TARGET,
    contentCategories : [
        {
            key : ATTITUDE_OF_INQUIRY_KEY,
            contentCategoryGoal : ATTITUDE_OF_INQUIRY_NAME,
            contentCategory : {
                title : RAISING_AN_ATTITUDE_OF_INQUIRY_NAME,
                details : [
                    {
                        key : MAINTAIN_AND_EXPAND_YOUR_CURIOSITY_KEY,
                        name : MAINTAIN_AND_EXPAND_YOUR_CURIOSITY_NAME,
                        detailSheets : [
                            {
                                three : '주변 사물과 자연세계에 대해 호기심을 갖는다.',
                                four : '주변 사물과 자연세계에 대해 지속적으로 호기심을 갖는다.',
                                five : '주변 사물과 자연세계에 대해 지속적으로 호기심을 갖고 알고자 한다.'
                            }
                        ]
                    },
                    {
                        key : ENJOY_THE_EXPLORATION_PROCESS_KEY,
                        name : ENJOY_THE_EXPLORATION_PROCESS_NAME,
                        detailSheets : [
                            {
                                three : '궁금한 점을 알아보는 과정에 흥미를 갖는다.',
                                four : '궁금한 점을 알아보는 탐구과정에 관심을 가지고 참여한다.',
                                five : '궁금한 점을 알아보는 탐구과정에 참여하고 즐긴다.'
                            },
                            {
                                five : '탐구과정에서 서로 다른 생각에 관심을 갖는다.'
                            }
                        ]
                    },
                    {
                        key : LEVERAGE_EXPLORATION_TECHNOLOGY_KEY,
                        name : LEVERAGE_EXPLORATION_TECHNOLOGY_NAME,
                        detailSheets : [
                            {
                                four : '일상생활의 문제를 해결하는 과정에서 탐색, 관찰 등의 방법을 활용해 본다.',
                                five : '일상생활의 문제를 해결하는 과정에서 탐색, 관찰, 비교, 예측 등의 탐구기술을 활용해 본다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : MATHEMATICAL_BASIC_ABILITY_KEY,
            contentCategoryGoal : MATHEMATICAL_BASIC_ABILITY_NAME,
            contentCategory : {
                title : MATHEMATICAL_EXPLORATION_NAME,
                details : [
                    {
                        key : BASICS_OF_NUMBERS_AND_OPERATIONS_KEY,
                        name : BASICS_OF_NUMBERS_AND_OPERATIONS_NAME,
                        detailSheets : [
                            {
                                three : '생활 속에서 수에 관심을 갖는다.',
                                four : '생활 속에서 사용되는 수의 여러 가지 의미를 안다.',
                                five : '생활 속에서 사용되는 수의 여러 가지 의미를 안다.'
                            },
                            {
                                three : '구체물 수량의 많고 적음을 비교한다.',
                                four : `구체물 수량에서 '같다', '더 많다', '더 적다'의 관계를 안다.`,
                                five : '구체물 수량의 부분과 전체 관계를 알아본다.'
                            },
                            {
                                three : '다섯 개 가량의 구체물을 세어보고 수량에 관심을 갖는다.',
                                four : '열 개 가량의 구체물을 세어보고 수량을 알아본다.',
                                five : '스무 개 가량의 구체물을 세어보고 수량을 알아본다.'
                            },
                            {
                                five : '구체물을 가지고 더하고 빼는 경험을 해 본다.'
                            }
                        ]
                    },
                    {
                        key : BASIC_CONCEPTS_OF_SPACE_AND_GEOMETRY_KEY,
                        name : BASIC_CONCEPTS_OF_SPACE_AND_GEOMETRY_NAME,
                        detailSheets : [
                            {
                                three : '나를 중심으로 앞, 뒤, 옆, 위, 아래를 알아본다.',
                                four : '위치와 방향을 여러 가지 방법으로 나타내 본다.',
                                five : '위치와 방향을 여러 가지 방법으로 나타내 본다.'
                            },
                            {
                                five : '여러 방향에서 물체를 보고 그 차이점을 비교해 본다.'
                            },
                            {
                                three : '물체의 모양에 관심을 갖는다.',
                                four : '기본 도형의 특성을 인식한다.',
                                five : '기본 도형의 공통점과 차이점을 알아본다.'
                            },
                            {
                                four : '기본 도형을 사용하여 여러 가지 모양을 구성해 본다.',
                                five : '기본 도형을 사용하여 여러 가지 모양을 구성해 본다.'
                            }
                        ]
                    },
                    {
                        key : BASIC_MEASUREMENT_KEY,
                        name : BASIC_MEASUREMENT_NAME,
                        detailSheets : [
                            {
                                three : '두 물체의 길이, 크기를 비교해 본다.',
                                four : '일상생활에서 길이, 크기, 무게 등을 비교해 본다.',
                                five : '일상생활에서 길이, 크기, 무게, 들이 등의 속성을 비교하고, 순서를 지어본다.'
                            },
                            {
                                five : '임의 측정 단위를 사용하여 길이, 면적, 들이, 무게 등을 재 본다.'
                            }
                        ]
                    },
                    {
                        key : UNDERSTANDING_REGULARITY_KEY,
                        name : UNDERSTANDING_REGULARITY_NAME,
                        detailSheets : [
                            {
                                three : '생활주변에서 반복되는 규칙성에 관심을 갖는다.',
                                four : '생활주변에서 반복되는 규칙성을 알아본다.',
                                five : '생활주변에서 반복되는 규칙성을 알고 다음에 올 것을 예측해 본다.'
                            },
                            {
                                four : '반복되는 규칙성을 인식하고 모방한다.',
                                five : '스스로 규칙성을 만들어 본다.'
                            }
                        ]
                    },
                    {
                        key : BASIC_DATA_COLLECTION_AND_RESULTS_KEY,
                        name : BASIC_DATA_COLLECTION_AND_RESULTS_NAME,
                        detailSheets : [
                            {
                                four : '필요한 정보나 자료를 수집한다.',
                                five : '필요한 정보나 자료를 수집한다.'
                            },
                            {
                                three : '같은 것끼리 짝을 짓는다.',
                                four : '한 가지 기준으로 자료를 분류해 본다.',
                                five : '한 가지 기준으로 분류한 자료를 다른 기준으로 재분류해 본다.'
                            },
                            {
                                five : '그림, 사진, 기호나 숫자를 사용해 그래프로 나타내 본다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : SCIENTIFIC_BASIC_ABILITY_KEY,
            contentCategoryGoal : SCIENTIFIC_BASIC_ABILITY_NAME,
            contentCategory : {
                title : SCIENTIFIC_EXPLORATION_NAME,
                details : [
                    {
                        key : LEARN_ABOUT_OBJECTS_AND_SUBSTANCES_KEY,
                        name : LEARN_ABOUT_OBJECTS_AND_SUBSTANCES_NAME,
                        detailSheets : [
                            {
                                three : '친숙한 물체와 물질의 특성에 관심을 갖는다.',
                                four : '친숙한 물체와 물질의 특성을 알아본다.',
                                five : '주변의 여러 가지 물체와 물질의 기본 특성을 알아본다.'
                            },
                            {
                                four : '물체와 물질을 여러 가지 방법으로 변화시켜 본다.',
                                five : '물체와 물질을 여러 가지 방법으로 변화시켜 본다.'
                            }
                        ]
                    },
                    {
                        key : LIFE_AND_NATURE_KEY,
                        name : LIFE_AND_NATURE_NAME,
                        detailSheets : [
                            {
                                three : '나의 출생과 성장에 대해 관심을 갖는다.',
                                four : '나의 출생과 성장에 대해 관심을 갖는다.',
                                five : '나와 다른 사람의 출생과 성장에 대해 알아본다.'
                            },
                            {
                                three : '주변의 동식물에 관심을 가진다.',
                                four : '관심 있는 동식물의 특성을 알아본다.',
                                five : '관심 있는 동식물의 특성과 성장 과정을 알아본다.'
                            },
                            {
                                three : '생명체를 소중히 여기는 마음을 갖는다.',
                                four : '생명체를 소중히 여기는 마음을 갖는다.',
                                five : '생명체를 소중히 여기는 마음을 갖는다.'
                            },
                            {
                                four : '생명체가 살기 좋은 환경에 대해 관심을 갖는다.',
                                five : '생명체가 살기 좋은 환경과 녹색환경에 대해 알아본다.'
                            }
                        ]
                    },
                    {
                        key : DISCOVER_THE_NATURAL_PHENOMENON_KEY,
                        name : DISCOVER_THE_NATURAL_PHENOMENON_NAME,
                        detailSheets : [
                            {
                                three : '돌, 물, 흙 등 자연물에 관심을 갖는다.',
                                four : '돌, 물, 흙 등 자연물의 특성과 변화를 알아본다.',
                                five : '돌, 물, 흙 등 자연물의 특성과 변화를 알아본다.'
                            },
                            {
                                five : '낮과 밤, 계절의 변화와 규칙성을 알아본다.'
                            },
                            {
                                three : '날씨에 관심을 갖는다.',
                                four : '날씨와 기후변화에 관심을 갖는다.',
                                five : '날씨와 기후변화 등 자연현상에 대해 관심을 갖는다.'
                            }
                        ]
                    },
                    {
                        key : UTILIZING_TOOLS_AND_MACHINES_KEY,
                        name : UTILIZING_TOOLS_AND_MACHINES_NAME,
                        detailSheets : [
                            {
                                three : '생활 속에서 간단한 도구와 기계에 관심을 갖는다.',
                                four : '생활 속에서 간단한 도구와 기계를 활용한다.',
                                five : '생활 속에서 간단한 도구와 기계를 활용한다.'
                            },
                            {
                                three : '도구와 기계의 편리함에 관심을 갖는다.',
                                four : '도구와 기계의 편리함에 관심을 갖는다.',
                                five : '변화하는 새로운 도구와 기계에 관심을 갖고 장단점을 안다.'
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

export default NATURE_INQUIRY_ANSWER;