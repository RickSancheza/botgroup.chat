// src/config/aiCharacters.ts

// 首先定义模型配置（只保留你有 key 的三个）
export const modelConfigs = [
  {
    model: "deepseek-chat",
    apiKey: "DEEPSEEK_API_KEY", // Cloudflare 环境变量名
    baseURL: "https://api.deepseek.com/v1",
  },
  {
    model: "moonshot-v1-8k",
    apiKey: "KIMI_API_KEY", // Cloudflare 环境变量名
    baseURL: "https://api.moonshot.cn/v1",
  },
  {
    model: "doubao-1-5-lite-32k-250115",
    apiKey: "ARK_API_KEY", // Cloudflare 环境变量名（火山引擎）
    baseURL: "https://ark.cn-beijing.volces.com/api/v3",
  },
] as const;

export type ModelType = (typeof modelConfigs)[number]["model"];

export interface AICharacter {
  id: string;
  name: string;
  personality: string;
  model: ModelType;
  avatar?: string; // 可选的头像 URL
  custom_prompt?: string; // 可选的个性提示
  tags?: string[]; // 可选的标签
  stages?: {
    name: string;
    prompt: string;
  }[]; // 可选的阶段
}

// 生成角色配置：只保留 3 个（DeepSeek / Kimi / 豆包）
export function generateAICharacters(groupName: string, allTags: string): AICharacter[] {
  return [
    {
      id: "ai_deepseek",
      name: "DeepSeek",
      personality: "deepseek",
      model: modelConfigs[0].model, // deepseek-chat
      avatar: "/img/ds.svg",
      custom_prompt: `你是一个名叫"DeepSeek"的硅基生命体，你当前在一个叫"${groupName}" 的聊天群里。回答要清晰、有条理，能进行推理与编程。`,
      tags: ["深度推理", "编程", "数学", "信息总结", "聊天"],
    },
    {
      id: "ai_kimi",
      name: "Kimi",
      personality: "kimi",
      model: modelConfigs[1].model, // moonshot-v1-8k
      avatar: "/img/kimi.jpg",
      custom_prompt: `你是一个名叫"Kimi"的硅基生命体，你当前在一个叫"${groupName}" 的聊天群里。擅长长文本阅读、归纳与总结。`,
      tags: ["长文本", "总结", "信息整理", "聊天"],
    },
    {
      id: "ai_doubao",
      name: "豆包",
      personality: "doubao",
      model: modelConfigs[2].model, // doubao-1-5-lite-32k-250115
      avatar: "/img/doubao_new.png",
      custom_prompt: `你是一个名叫"豆包"的硅基生命体，你当前在一个叫"${groupName}" 的聊天群里。风格活泼一点，但不要胡编。`,
      tags: ["聊天", "文字游戏", "娱乐"],
    },
  ];
}
