// 中文评测数据
export const ZH_EVALUATION = [
    {
        Dataset: 'Uniform Bar Exam (MBE+MEE+MPT)', // 数据集名称
        'GLM-130B': '298/400', // GLM-130B
        'Pervious SOTA': '298/400', // Previous SOTA
        Ours: '213/400', // Ours
        Children: [
            {
                Dataset: 'children1', // 数据集名称
                'GLM-130B': '298/400', // GLM-130B
                'Pervious SOTA': '298/400', // Previous SOTA
                Ours: '213/400', // Ours
            },
        ],
    },
];

// 英文评测数据
export const EN_EVALUATION = [
    {
        Dataset: 'Uniform Bar Exam (MBE+MEE+MPT)', // 数据集名称
        LLaMA: '298/400', // LLaMA
        'GLM-130B': '298/400', // GLM-130B
        Ours: '213/400', // Ours
        Children: [
            {
                Dataset: 'children1', // 数据集名称
                LLaMA: '298/400', // LLaMA
                'GLM-130B': '298/400', // GLM-130B
                Ours: '213/400', // Ours
            },
        ],
    },
];

// 代码评测数据
export const CODE_EVALUATION = [
    {
        Dataset: 'Uniform Bar Exam (MBE+MEE+MPT)', // 数据集名称
        LLaMA: '298/400', // LLaMA
        StarCoder: '223/400', // StarCoder
        'GLM-130B': '298/400', // GLM-130B
        Ours: '213/400', // Ours
        Children: [
            {
                Dataset: 'children1', // 数据集名称
                LLaMA: '298/400', // LLaMA
                StarCoder: '223/400', // StarCoder
                'GLM-130B': '298/400', // GLM-130B
                Ours: '213/400', // Ours
            },
        ],
    },
];

// 考试能力数据
export const EXAM_BILITY = {
    D1: {
        zh: {
            LLaMA: '',
            StarCoder: '',
            'GLM-130B': '',
            Ours: '',
        },
        en: {
            LLaMA: '',
            StarCoder: '',
            'GLM-130B': '',
            Ours: '',
        },
    },
    D2: {
        zh: {
            LLaMA: '',
            StarCoder: '',
            'GLM-130B': '',
            Ours: '',
        },
        en: {
            LLaMA: '',
            StarCoder: '',
            'GLM-130B': '',
            Ours: '',
        },
    },
};
