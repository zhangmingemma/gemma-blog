import { DATA_VISUAL_TYPE } from '@/config/const';
import * as EVALUATION_DATA from '@/assets/data/evaluation';

export const ZH = {
    // logo
    'logo.name.first': '书生',
    'logo.name.last': 'NLP大模型',

    // 首页
    'home.title': '千亿基座模型+对话模型',
    'home.desc':
        '在超过万亿token规模的数据上进行了预训练双语千亿基座模型，通过合理数据配比，让基座模型在中文、英文以及代码场景下都能有出色的表现。在基座模型基础上，我们使用高质量的人类标注对话数据结合RLHF等技术，使得{浦语}大模型可以在与人类对话时响应复杂指令，并且表现出符合人类道德与价值观的行为。',

    // 模型亮点
    'model.feature.title': '模型亮点',
    'model.feature.list': [
        {
            title: '',
            desc: '千亿规模双语模型，在中文、英文和代码的各种客观评测上都强于社区开源模型',
        },
        {
            title: '结构化输出能力',
            desc: '对话模型在多轮对话、代码生成以及结构化输出都有着出色的表现',
        },
        {
            title: '续写代码',
            desc: '在各项中文考试中获得了超越GPT4的分数',
        },
    ],

    // 模型介绍
    'model.intro.title': '模型介绍',
    'model.intro.list': [
        {
            title: '中文评测',
            desc: '',
            data: {
                type: DATA_VISUAL_TYPE.TABLE,
                columns: ['数据集名称', 'GLM-130B', 'Pervious SOTA', 'Ours'],
                data: EVALUATION_DATA.ZH_EVALUATION,
            },
        },
        {
            title: '英文评测',
            desc: '',
            data: {
                type: DATA_VISUAL_TYPE.TABLE,
                columns: ['数据集名称', 'LLaMA', 'GLM-130B', 'Ours'],
                data: EVALUATION_DATA.EN_EVALUATION,
            },
        },
        {
            title: 'code评测',
            desc: '',
            data: {
                type: DATA_VISUAL_TYPE.TABLE,
                columns: ['数据集名称', 'LLaMA', 'StarCoder', 'GLM-130B', 'Ours'],
                data: EVALUATION_DATA.CODE_EVALUATION,
            },
        },
        {
            title: '考试能力',
            desc: '',
            data: {
                type: DATA_VISUAL_TYPE.BAR,
                legend: ['中文—D1', '中文-D2', '英文-D1', '英文-D2'],
                data: EVALUATION_DATA.EXAM_BILITY,
            },
        },
        {
            title: '案例展示',
            desc: '',
            custom: true,
            base: {
                title: '基座模型能力展示',
                desc: '基座模型可以完成复杂推理任务',
                list: [
                    {
                        title: '复杂推理能力',
                        desc: '基座模型已经具备结构化输出的能力',
                    },
                    {
                        title: '结构化输出能力',
                        desc: '基座模型可以根据注释以及前序代码完成剩余代码的编写',
                    },
                    {
                        title: '续写代码',
                    },
                ],
            },
            chat: {
                title: '对话模型能力展示',
                desc: '对话模型可以识别复杂指令，并且完成相应任务',
                list: [
                    {
                        title: '复杂指令识别',
                        desc: '',
                    },
                    {
                        title: '代码生成',
                        desc: '',
                    },
                ],
            },
        },
    ],

    // 未来计划
    'future.title': '未来计划',
    'future.desc':
        '当前模型还存在很多稳定性、安全性以及能力问题，我们正在努力让模型能够对不同的问题都能够稳定地输出较高质量的答案，同时让模型的输出能够满足安全伦理需求。我们未来会对开源这些模型balabala',

    // footer
    'footer.law': '法律协议',
    'footer.service': '服务协议',
    'footer.private': '个人信息保护政策',
    'footer.pjlab': '上海人工智能实验室官网',
};
