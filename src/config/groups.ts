// src/config/groups.ts

export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: "group1",
    name: "🔥硅碳生命体交流群",
    description:
      '群消息关注度权重：“user”的最新消息>其他成员最新消息>“user”的历史消息>其他成员历史消息>',
    // 只保留 DeepSeek 和 豆包
    members: ["ai_deepseek", "ai_doubao"],
    isGroupDiscussionMode: true,
  },

  // 如果你只想要一个群，可以删除下面这个
  // {
  //   id: "group2",
  //   name: "👨‍👩‍👧‍👦三模型聊天群",
  //   description:
  //     "仅包含 DeepSeek / Kimi / 豆包 三个角色，用于日常聊天与对比。",
  //   members: ["ai_deepseek", "ai_kimi", "ai_doubao"],
  //   isGroupDiscussionMode: true,
  // },
];
