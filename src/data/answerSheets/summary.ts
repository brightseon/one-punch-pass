import { SummaryAnswerSheetType } from '../../types/types';
import keys from '../keys';
import names from '../names';

const { 
    SUMMARY_KEY : { 
        COMPOSITION_DIRECTION_KEY, PURPOSE_KEY, GOAL_KEY, ORGANIZATION_KEY, OPERATION_KEY, 
        TEACHING_METHOD_KEY, EVALUATION_KEY, NURI_COURSE_OPERATION_EVALUATION_KEY, INFANT_RATING_KEY
    }
} = keys;

const { 
    SUMMARY_NAME : { 
        COMPOSITION_DIRECTION_NAME, PURPOSE_NAME, GOAL_NAME, ORGANIZATION_NAME, OPERATION_NAME, 
        TEACHING_METHOD_NAME, EVALUATION_NAME, NURI_COURSE_OPERATION_EVALUATION_NAME, INFANT_RATING_NAME
    }
} = names;

const SUMMARY_ANSWER : SummaryAnswerSheetType[] = [
    {
        key : COMPOSITION_DIRECTION_KEY,
        answerSheetName : COMPOSITION_DIRECTION_NAME,
        answerSheet : [
            '질서, 배려, 협력 등 기본생활습관과 바른 인성을 기르는 데 중점을 두어 구성한다.',
            '자율성과 창의성을 기르는 데 중점을 두고, 전인발달을 이루도록 구성한다.',
            '사람과 자연을 존중하고, 우리 문화를 이해하는 데 중점을 두어 구성한다.',
            '만 3~5세아의 발달 특성을 고려하여 연령별로 구성한다.',
            '신체운동.건강, 의사소통, 사회관계, 예술경험, 자연탐구의 5개 영역을 중심으로 구성한다.',
            '초등학교 교육과정과 0~2세 표준보육과정과의 연계성을 고려하여 구성한다.'
        ]
    },
    {
        key : PURPOSE_KEY,
        answerSheetName : PURPOSE_NAME,
        answerSheet : [
            '누리과정은 만 3~5세 유아의 심신의 건강과 조화로운 발달을 도와 민주 시민의 기초를 형성하는 것을 목적으로 한다.'
        ]
    },
    {
        key : GOAL_KEY,
        answerSheetName : GOAL_NAME,
        answerSheet : [
            '기본 운동 능력과 건강하고 안전한 생활 습관을 기른다.',
            '일상생활에 필요한 의사소통 능력과 바른 언어 사용 습관을 기른다.',
            '자신을 존중하고 다른 사람과 더불어 생활하는 능력과 태도를 기른다.',
            '아름다움에 관심을 가지고 예술 경험을 즐기며, 창의적으로 표현하는 능력을 기른다.',
            '호기심을 가지고 주변 세계를 탐구하며, 일상생활에서 수학적.과학적으로 생각하는 능력과 태도를 기른다.'
        ]
    },
    {
        key : ORGANIZATION_KEY,
        answerSheetName : ORGANIZATION_NAME,
        answerSheet : [
            '1일 4~5시간을 기준으로 편성한다.',
            '5개 영역의 내용을 균형 있게 통합적으로 편성한다.',
            '유아의 발달 특성 및 경험을 고려하여 놀이를 중심으로 편성한다.',
            '반(학급) 특성에 따라 융통성 있게 편성한다.',
            '성별, 종교, 신체적 특성, 가족 및 민족 배경 등으로 인한 편견이 없도록 편성한다.',
            '일과 운영 시간에 따라 심화 확장할 수 있도록 편성한다.'
        ]
    },
    {
        key : OPERATION_KEY,
        answerSheetName : OPERATION_NAME,
        answerSheet : [
            '연간, 월간, 주간, 일일 계획에 의거하여 운영한다.',
            '실내.외 환경을 다양한 흥미 영역으로 구성하여 운영한다.',
            '유아의 능력과 장애정도에 따라 조정하여 운영한다.',
            '부모와 각 기관의 실정에 따라 부모교육을 실시한다.',
            '가정과 지역사회와의 협력과 참여에 기반하여 운영한다.',
            '교사 재교육을 통해서 누리과정 활동이 개선되도록 운영한다.'
        ]
    },
    {
        key : TEACHING_METHOD_KEY,
        answerSheetName : TEACHING_METHOD_NAME,
        answerSheet : [
            '놀이를 중심으로 교수.학습활동이 이루어지도록 한다.',
            '유아의 흥미를 중심으로 활동을 선택하고 지속할 수 있도록 한다.',
            '유아의 생활 속 경험을 소재로 하여 지식, 기능, 태도 및 가치를 습득하도록 한다.',
            '유아와 교사, 유아와 유아, 유아와 환경 간에 능동적인 상호작용이 이루어지도록 한다.',
            '주제를 중심으로 여러 활동이 통합적으로 이루어지도록 한다.',
            '실내.실외활동, 정적.동적활동, 대.소집단활동 및 개별활동, 휴식 등이 균형 있게 이루어지도록 한다.',
            '유아의 관심과 흥미, 발달이나 환경 특성 등을 고려하여 개별 유아에게 적합한 방식으로 학습하도록 한다.'
        ]
    },
    {
        key : EVALUATION_KEY,
        answerSheetName : EVALUATION_NAME,
        detail : [
            {
                detailKey : NURI_COURSE_OPERATION_EVALUATION_KEY,
                detailName : NURI_COURSE_OPERATION_EVALUATION_NAME,
                detailSheet : [
                    '운영 내용이 누리과정의 목표와 내용에 근거하여 편성.운영되었는지 평가한다.',
                    '운영 내용 및 활동이 유아의 발달수준과 흥미.요구에 적합한지를 평가한다.',
                    '교수.학습 방법이 유아의 흥미와 활동의 특성에 적합한지를 평가한다.',
                    '운영 환경이 유아의 발달특성과 활동의 주제, 내용 및 효율성 등을 고려하여 구성되었는지를 평가한다.',
                    '계획안 분석, 수업 참관 및 모니터링, 평가척도 등 다양한 방법을 활용하여 평가한다.',
                    '운영 평가의 결과를 반영하여 운영계획을 수정.보완하거나 이후 누리과정 편성.운영에 활용한다.'
                ]
            },
            {
                detailKey : INFANT_RATING_KEY,
                detailName : INFANT_RATING_NAME,
                detailSheet : [
                    '누리과정 목표와 내용에 근거하여 유아의 특성과 변화 정도를 평가한다.',
                    '유아의 지식, 기능, 태도를 포함하여 평가한다.',
                    '유아의 일상생활과 누리과정 활동 전반에 걸쳐 평가한다.',
                    '관찰, 활동 결과물 분석, 부모면담 등 다양한 방법을 사용하여 종합적으로 평가하고, 그 결과를 기록한다.',
                    '유아평가 결과는 유아에 대한 이해와 누리과정 운영 개선 및 부모 면담 자료로 활용할 수 있다.'
                ]
            }
        ]
    }
];

export default SUMMARY_ANSWER;