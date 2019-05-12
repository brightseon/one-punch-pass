import { AnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const {
    ART_EXPERIENCE_KEY : {
        CONTENT_CATEGORY_KEYS : {
            SEARCH_WITH_INTEREST_KEY,
            CREATIVE_EXPRESSION_KEY,
            AESTHETIC_ATTITUDE_KEY
        },
        DETAIL_KEYS : {
            EXPLORE_MUSICAL_ELEMENTS_KEY,
            MOVEMENT_AND_DANCE_ELEMENTS_KEY,
            ART_ELEMENT_KEY,
            EXPRESSED_IN_MUSIC_KEY,
            EXPRESSED_MOVEMENT_AND_DANCE_KEY,
            EXPRESSED_IN_ART_ACTIVITIES_KEY,
            EXPRESSED_IN_DRAMATIC_PLAY_KEY,
            EXPRESSED_INTEGRALLY_KEY,
            ENJOY_VARIOUS_ARTS_KEY,
            ENJOYING_TRADITIONAL_ART_KEY
        }
    }
} = keys;

const {
    ART_EXPERIENCE_NAME : {
        AREA_TARGET,
        CONTENT_CATEGORY_GOALS : {
            SEARCH_WITH_INTEREST_NAME,
            CREATIVE_EXPRESSION_NAME,
            AESTHETIC_ATTITUDE_NAME
        },
        CONTENT_CATEGORIES : {
            FIND_BEAUTY_NAME,
            ARTISTIC_EXPRESSION_NAME,
            APPRECIATION_OF_ART_NAME
        },
        DETAIL_CONTENTS : {
            EXPLORE_MUSICAL_ELEMENTS_NAME,
            MOVEMENT_AND_DANCE_ELEMENTS_NAME,
            ART_ELEMENT_NAME,
            EXPRESSED_IN_MUSIC_NAME,
            EXPRESSED_MOVEMENT_AND_DANCE_NAME,
            EXPRESSED_IN_ART_ACTIVITIES_NAME,
            EXPRESSED_IN_DRAMATIC_PLAY_NAME,
            EXPRESSED_INTEGRALLY_NAME,
            ENJOY_VARIOUS_ARTS_NAME,
            ENJOYING_TRADITIONAL_ART_NAME
        }
    }
} = names;

const ART_EXPERIENCE_ANSWER : AnswerSheetType = {
    areaTarget : AREA_TARGET,
    contentCategories : [
        {
            key : SEARCH_WITH_INTEREST_KEY,
            contentCategoryGoal : SEARCH_WITH_INTEREST_NAME,
            contentCategory : {
                title : FIND_BEAUTY_NAME,
                details : [
                    {
                        key : EXPLORE_MUSICAL_ELEMENTS_KEY,
                        name : EXPLORE_MUSICAL_ELEMENTS_NAME,
                        detailSheets : [
                            {
                                three : '다양한 소리, 음악의 셈여림, 빠르기, 리듬 등에 관심을 갖는다.',
                                four : '다양한 소리, 음악의 셈여림, 빠르기, 리듬 등에 관심을 갖는다.',
                                five : '다양한 소리, 악기 등으로 음악의 셈여림, 빠르기, 리듬 등을 탐색한다.'
                            }
                        ]
                    },
                    {
                        key : MOVEMENT_AND_DANCE_ELEMENTS_KEY,
                        name : MOVEMENT_AND_DANCE_ELEMENTS_NAME,
                        detailSheets : [
                            {
                                three : '움직임과 춤의 모양, 힘, 빠르기 등에 관심을 갖는다.',
                                four : '움직임과 춤의 모양, 힘, 빠르기 등에 관심을 갖는다.',
                                five : '움직임과 춤의 모양, 힘, 빠르기, 흐름 등을 탐색한다.'
                            }
                        ]
                    },
                    {
                        key : ART_ELEMENT_KEY,
                        name : ART_ELEMENT_NAME,
                        detailSheets : [
                            {
                                three : '자연과 사물의 색, 모양, 질감 등에 관심을 갖는다.',
                                four : '자연과 사물의 색, 모양, 질감 등에 관심을 갖는다.',
                                five : '자연과 사물에서 색, 모양, 질감, 공간 등을 탐색한다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : CREATIVE_EXPRESSION_KEY,
            contentCategoryGoal : CREATIVE_EXPRESSION_NAME,
            contentCategory : {
                title : ARTISTIC_EXPRESSION_NAME,
                details : [
                    {
                        key : EXPRESSED_IN_MUSIC_KEY,
                        name : EXPRESSED_IN_MUSIC_NAME,
                        detailSheets : [
                            {
                                three : '간단한 노래를 듣고 따라 부른다.',
                                four : '노래로 자신의 생각과 느낌을 표현한다.',
                                five : '노래로 자신의 생각과 느낌을 표현한다.'
                            },
                            {
                                three : '전래동요를 즐겨 부른다.',
                                four : '전래동요를 즐겨 부른다.',
                                five : '전래동요를 즐겨 부른다.'
                            },
                            {
                                three : '리듬악기로 간단한 리듬을 표현해 본다.',
                                four : '리듬악기를 연주해 본다.',
                                five : '리듬악기를 연주해 본다.'
                            },
                            {
                                three : '간단한 리듬과 노래를 즉흥적으로 만들어 본다.',
                                four : '간단한 리듬과 노래를 즉흥적으로 만들어 본다.',
                                five : '리듬과 노래 등을 즉흥적으로 만들어 본다.'
                            }
                        ]
                    },
                    {
                        key : EXPRESSED_MOVEMENT_AND_DANCE_KEY,
                        name : EXPRESSED_MOVEMENT_AND_DANCE_NAME,
                        detailSheets : [
                            {
                                three : '신체를 이용하여 주변의 움직임을 자유롭게 표현한다.',
                                four : '신체를 이용하여 주변의 움직임을 자유롭게 표현한다.',
                                five : '신체를 이용하여 주변의 움직임을 다양하게 표현하며 즐긴다.'
                            },
                            {
                                three : '움직임과 춤으로 자신의 생각과 느낌을 표현한다.',
                                four : '움직임과 춤으로 자신의 생각과 느낌을 표현한다.',
                                five : '움직임과 춤으로 자신의 생각과 느낌을 표현한다.'
                            },
                            {
                                three : '도구를 활용하여 다양한 움직임으로 표현한다.',
                                four : '도구를 활용하여 다양한 움직임으로 표현한다.',
                                five : '다양한 도구를 활용하여 창의적으로 움직인다.'
                            }
                        ]
                    },
                    {
                        key : EXPRESSED_IN_ART_ACTIVITIES_KEY,
                        name : EXPRESSED_IN_ART_ACTIVITIES_NAME,
                        detailSheets : [
                            {
                                three : '다양한 미술활동을 경험해 본다.',
                                four : '다양한 미술활동으로 자신의 생각과 느낌을 표현한다.',
                                five : '다양한 미술활동으로 자신의 생각과 느낌을 표현한다.'
                            },
                            {
                                four : '협동적인 미술활동에 참여한다.',
                                five : '협동적인 미술활동에 참여하여 즐긴다.'
                            },
                            {
                                three : '미술활동에 필요한 재료와 도구에 관심을 가지고 사용한다.',
                                four : '미술활동에 필요한 재료와 도구를 다양하게 사용한다.',
                                five : '미술활동에 필요한 재료와 도구를 다양하게 사용한다.'
                            }
                        ]
                    },
                    {
                        key : EXPRESSED_IN_DRAMATIC_PLAY_KEY,
                        name : EXPRESSED_IN_DRAMATIC_PLAY_NAME,
                        detailSheets : [
                            {
                                three : '일상생활의 경험을 극놀이로 표현한다.',
                                four : '일상생활의 경험이나 간단한 이야기를 극놀이로 표현한다.',
                                five : '경험이나 이야기를 극놀이로 표현한다.'
                            },
                            {
                                four : '소품, 배경, 의상 등을 사용하여 협동적으로 극놀이를 한다.',
                                five : '소품, 배경, 의상 등을 사용하여 협동적으로 극놀이를 한다.'
                            }
                        ]
                    },
                    {
                        key : EXPRESSED_INTEGRALLY_KEY,
                        name : EXPRESSED_INTEGRALLY_NAME,
                        detailSheets : [
                            {
                                four : '음악, 움직임과 춤, 미술, 극놀이 등을 통합하여 표현한다.',
                                five : '음악, 움직임과 춤, 미술, 극놀이 등을 통합하여 표현한다.'
                            },
                            {
                                three : '예술 활동에 참여하여 표현과정을 즐긴다.',
                                four : '예술 활동에 참여하여 표현과정을 즐긴다.',
                                five : '예술 활동에 참여하여 창의적으로 표현하는 과정을 즐긴다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : AESTHETIC_ATTITUDE_KEY,
            contentCategoryGoal : AESTHETIC_ATTITUDE_NAME,
            contentCategory : {
                title : APPRECIATION_OF_ART_NAME,
                details : [
                    {
                        key : ENJOY_VARIOUS_ARTS_KEY,
                        name : ENJOY_VARIOUS_ARTS_NAME,
                        detailSheets : [
                            {
                                three : '다양한 음악, 춤, 미술작품, 극놀이 등을 듣거나 본다.',
                                four : '다양한 음악, 춤, 미술작품, 극놀이 등을 듣거나 보고 즐긴다.',
                                five : '다양한 음악, 춤, 미술작품, 극놀이 등을 듣거나 보고 즐긴다.'
                            },
                            {
                                three : '나와 다른 사람의 예술 표현을 소중히 여긴다.',
                                four : '나와 다른 사람의 예술 표현을 소중히 여긴다.',
                                five : '나와 다른 사람의 예술 표현을 소중히 여긴다.'
                            }
                        ]
                    },
                    {
                        key : ENJOYING_TRADITIONAL_ART_KEY,
                        name : ENJOYING_TRADITIONAL_ART_NAME,
                        detailSheets : [
                            {
                                three : '우리나라의 전통예술에 관심을 갖는다.',
                                four : '우리나라의 전통예술에 관심을 갖는다.',
                                five : '우리나라의 전통예술에 관심을 갖고 친숙해진다.'
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

export default ART_EXPERIENCE_ANSWER;