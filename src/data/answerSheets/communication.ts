import { AnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const {
    COMMUNICATION_KEY : {
        CONTENT_CATEGORY_KEYS : {
            LISTEN_CAREFULLY_KEY,
            SPEECH_KEY,
            RECOGNIZE_CHARACTER_SHAPE_INTERESTED_IN_READING_KEY,
            THOUGHT_FEEL_EXPERIENCE_INTEREST_IN_WRITING_KEY
        },
        DETAIL_KEYS : {
            WORDS_AND_SENTENCES_LISTEN_KEY,
            STORY_LISTEN_KEY,
            SONG_POEM_STORY_LISTEN_KEY,
            RIGHT_ATTITUDE_LISTEN_KEY,
            WORDS_AND_SENTENCES_SPEAK_KEY,
            FEEL_THOUGHT_EXPERIENCE_SPEAK_KEY,
            RIGHT_ATTITUDE_SPEAK_KEY,
            INTERESTED_IN_READING_KEY,
            INTERESTED_IN_READING_BOOKS_KEY,
            INTERESTED_IN_WRITING_KEY,
            USING_WRITING_TOOLS_KEY
        }
    }
} = keys;

const {
    COMMUNICATION_NAME : {
        AREA_TARGET,
        CONTENT_CATEGORY_GOALS : {
            LISTEN_CAREFULLY_NAME,
            SPEECH_NAME,
            RECOGNIZE_CHARACTER_SHAPE_INTERESTED_IN_READING_NAME,
            THOUGHT_FEEL_EXPERIENCE_INTEREST_IN_WRITING_NAME
        },
        CONTENT_CATEGORIES : {
            LISTEN_NAME,
            SPEAK_NAME,
            READ_NAME,
            WRITING_NAME
        },
        DETAIL_CONTENTS : {
            WORDS_AND_SENTENCES_LISTEN_NAME,
            STORY_LISTEN_NAME,
            SONG_POEN_STORY_LISTEN_NAME,
            RIGHT_ATTITUDE_LISTEN_NAME,
            WORDS_AND_SENTENCES_SPEAK_NAME,
            FEEL_THOUGHT_EXPERIENCE_SPEAK_NAME,
            RIGHT_ATTITUDE_SPEAK_NAME,
            INTERESTED_IN_READING_NAME,
            INTERESTED_IN_READING_BOOKS_NAME,
            INTERESTED_IN_WRITING_NAME,
            USING_WRITING_TOOLS_NAME
        }
    }
} = names;

const COMMUNICATION_ANSWER : AnswerSheetType = {
    areaTarget : AREA_TARGET,
    contentCategories : [
        {
            key : LISTEN_CAREFULLY_KEY,
            contentCategoryGoal : LISTEN_CAREFULLY_NAME,
            contentCategory : {
                title : LISTEN_NAME,
                details : [
                    {
                        key : WORDS_AND_SENTENCES_LISTEN_KEY,
                        name : WORDS_AND_SENTENCES_LISTEN_NAME,
                        detailSheets : [
                            {
                                three : '낱말의 발음에 관심을 가지고 듣는다.',
                                four : '낱말의 발음에 관심을 가지고 듣는다.',
                                five : '낱말의 발음에 관심을 가지고 비슷한 발음을 듣고 구별한다.'
                            },
                            {
                                three : '일상생활과 관련된 낱말과 문장을 듣고 뜻을 이해한다.',
                                four : '일상생활과 관련된 낱말과 문장을 듣고 뜻을 이해한다.',
                                five : '다양한 낱말과 문장을 듣고 뜻을 이해한다.'
                            }
                        ]
                    },
                    {
                        key : STORY_LISTEN_KEY,
                        name : STORY_LISTEN_NAME,
                        detailSheets : [
                            {
                                three : '다른 사람의 이야기를 관심 있게 듣는다.',
                                four : '다른 사람의 이야기를 듣고 이해한다.',
                                five : '다른 사람의 이야기를 듣고 이해한다.'
                            },
                            {
                                four : '이야기를 듣고 궁금한 것에 대해 질문한다.',
                                five : '이야기를 듣고 궁금한 것에 대해 질문한다.'
                            }
                        ]
                    },
                    {
                        key : SONG_POEM_STORY_LISTEN_KEY,
                        name : SONG_POEN_STORY_LISTEN_NAME,
                        detailSheets : [
                            {
                                three : '동요, 동시, 동화를 다양한 방법으로 듣고 즐긴다.',
                                four : '동요, 동시, 동화를 다양한 방법으로 듣고 즐긴다.',
                                five : '동요, 동시, 동화를 다양한 방법으로 듣고 이해한다.'
                            },
                            {
                                four : '전래 동요, 동시, 동화를 듣고 우리말의 재미를 느낀다.',
                                five : '전래 동요, 동시, 동화를 듣고 우리말의 재미를 느낀다.'
                            }
                        ]
                    },
                    {
                        key : RIGHT_ATTITUDE_LISTEN_KEY,
                        name : RIGHT_ATTITUDE_LISTEN_NAME,
                        detailSheets : [
                            {
                                three : '말하는 사람을 바라보며 듣는다.',
                                four : '다른 사람의 이야기를 주의 깊게 듣는다.',
                                five : '다른 사람의 이야기를 끝까지 주의 깊게 듣는다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : SPEECH_KEY,
            contentCategoryGoal : SPEECH_NAME,
            contentCategory : {
                title : SPEAK_NAME,
                details : [
                    {
                        key : WORDS_AND_SENTENCES_SPEAK_KEY,
                        name : WORDS_AND_SENTENCES_SPEAK_NAME,
                        detailSheets : [
                            {
                                three : '친숙한 낱말을 발음해 본다.',
                                four : '친숙한 낱말을 정확하게 발음해 본다.',
                                five : '정확한 발음으로 말한다.'
                            },
                            {
                                three : '새로운 낱말에 관심을 가진다.',
                                four : '다양한 낱말을 사용하여 말한다.',
                                five : '다양한 낱말을 사용하여 상황에 맞게 말한다.'
                            },
                            {
                                three : '일상생활에서 일어나는 일들을 간단한 문장으로 말한다.',
                                four : '일상생활에서 일어나는 일들을 간단한 문장으로 말한다.',
                                five : '일상생활에서 일어나는 일들을 다양한 문장으로 말한다.'
                            }
                        ]
                    },
                    {
                        key : FEEL_THOUGHT_EXPERIENCE_SPEAK_KEY,
                        name : FEEL_THOUGHT_EXPERIENCE_SPEAK_NAME,
                        detailSheets : [
                            {
                                three : '자신의 느낌, 생각, 경험을 말해본다.',
                                four : '자신의 느낌, 생각, 경험을 말한다.',
                                five : '자신의 느낌, 생각, 경험을 적절한 낱말과 문장으로 말한다.'
                            },
                            {
                                four : '주제를 정하여 함께 이야기를 나눈다.',
                                five : '주제를 정하여 함께 이야기를 나눈다.'
                            },
                            {
                                four : '이야기를 지어 말한다.',
                                five : '이야기 지어 말하기를 즐긴다.'
                            }
                        ]
                    },
                    {
                        key : RIGHT_ATTITUDE_SPEAK_KEY,
                        name : RIGHT_ATTITUDE_SPEAK_NAME,
                        detailSheets : [
                            {
                                four : '듣는 사람의 생각과 느낌을 고려하여 말한다.',
                                five : '듣는 사람의 생각과 느낌을 고려하여 말한다.'
                            },
                            {
                                three : '상대방을 바라보며 말한다.',
                                four : '차례를 지켜 말한다.',
                                five : '때와 장소, 대상에 알맞게 말한다.'
                            },
                            {
                                three : '바르고 고운 말을 사용한다.',
                                four : '바르고 고운 말을 사용한다.',
                                five : '바르고 고운 말을 사용한다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : RECOGNIZE_CHARACTER_SHAPE_INTERESTED_IN_READING_KEY,
            contentCategoryGoal : RECOGNIZE_CHARACTER_SHAPE_INTERESTED_IN_READING_NAME,
            contentCategory : {
                title : READ_NAME,
                details : [
                    {
                        key : INTERESTED_IN_READING_KEY,
                        name : INTERESTED_IN_READING_NAME,
                        detailSheets : [
                            {
                                three : '주변에서 친숙한 글자를 찾아본다.',
                                four : '주변에서 친숙한 글자를 찾아본다.',
                                five : '주변에서 친숙한 글자를 찾아 읽어 본다.'
                            },
                            {
                                three : '읽어 주는 글의 내용에 관심을 가진다.',
                                four : '읽어 주는 글의 내용에 관심을 가진다.',
                                five : '읽어 주는 글의 내용에 관심을 가지고 읽어 본다.'
                            }
                        ]
                    },
                    {
                        key : INTERESTED_IN_READING_BOOKS_KEY,
                        name : INTERESTED_IN_READING_BOOKS_NAME,
                        detailSheets : [
                            {
                                three : '책에 흥미를 가진다.',
                                four : '책 보는 것을 즐기고 소중하게 다룬다.',
                                five : '책 보는 것을 즐기고 소중하게 다룬다.'
                            },
                            {
                                three : '책의 그림을 단서로 내용을 추측해 본다.',
                                four : '책의 그림을 단서로 내용을 이해한다.',
                                five : '책의 그림을 단서로 내용을 이해한다.'
                            },
                            {
                                four : '궁금한 것을 책에서 찾아본다.',
                                five : '궁금한 것을 책에서 찾아본다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            key : THOUGHT_FEEL_EXPERIENCE_INTEREST_IN_WRITING_KEY,
            contentCategoryGoal : THOUGHT_FEEL_EXPERIENCE_INTEREST_IN_WRITING_NAME,
            contentCategory : {
                title : WRITING_NAME,
                details : [
                    {
                        key : INTERESTED_IN_WRITING_KEY,
                        name : INTERESTED_IN_WRITING_NAME,
                        detailSheets : [
                            {
                                three : '말을 글로 나타내는 것에 관심을 보인다.',
                                four : '말이나 생각을 글로 나타낼 수 있음을 안다.',
                                five : '말이나 생각을 글로 나타낼 수 있음을 안다.'
                            },
                            {
                                three : '자기 이름의 글자에 관심을 가진다.',
                                four : '자기 이름을 써 본다.',
                                five : '자신의 이름과 주변의 친숙한 글자를 써 본다.'
                            },
                            {
                                four : '자신의 느낌, 생각, 경험을 글자와 비슷한 형태로 표현한다.',
                                five : '자신의 느낌, 생각, 경험을 글자와 비슷한 형태나 글자로 표현한다.'
                            }
                        ]
                    },
                    {
                        key : USING_WRITING_TOOLS_KEY,
                        name : USING_WRITING_TOOLS_NAME,
                        detailSheets : [
                            {
                                four : '쓰기 도구에 관심을 가지고 사용해 본다.',
                                five : '쓰기 도구의 바른 사용법을 알고 사용한다.'
                            }
                        ]
                    }
                ]
            }
        }
    ]
}

export default COMMUNICATION_ANSWER;