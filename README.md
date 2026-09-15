# Manna Studio - GitHub Pages

这是 Manna Studio 的 GitHub Pages 项目，包含多个应用的隐私政策、服务条款和技术支持页面。

## 项目结构

```
.
├── index.html                          # 主页
├── clearbrief/                         # ClearBrief Coach 应用文档
│   ├── support.html                   # 技术支持（英文）
│   ├── support-zh.html                # 技术支持（中文）
│   ├── privacy-policy.html            # 隐私政策（英文）
│   ├── privacy-policy-zh.html         # 隐私政策（中文）
│   ├── terms-of-service.html          # 服务条款（英文）
│   └── terms-of-service-zh.html       # 服务条款（中文）
├── lansea/                             # Lansea AI 应用文档
│   ├── privacy-policy.html            # 隐私政策（英文）
│   ├── privacy-policy-zh.html         # 隐私政策（中文）
│   ├── terms-of-service.html          # 服务条款（英文）
│   └── terms-of-service-zh.html       # 服务条款（中文）
├── manna/                              # Manna 应用文档
│   ├── support.html                   # 技术支持（英文）
│   ├── support-zh.html                # 技术支持（中文）
│   ├── privacy-policy.html            # 隐私政策（英文）
│   ├── privacy-policy-zh.html         # 隐私政策（中文）
│   ├── terms-of-service.html          # 服务条款（英文）
│   └── terms-of-service-zh.html       # 服务条款（中文）
├── cyclesafe/                          # PetalCare 应用文档
│   ├── support.html                   # 技术支持（英文）
│   ├── support-zh.html                # 技术支持（中文）
│   ├── privacy-policy.html            # 隐私政策（英文）
│   ├── privacy-policy-zh.html         # 隐私政策（中文）
│   ├── terms-of-service.html          # 服务条款（英文）
│   └── terms-of-service-zh.html       # 服务条款（中文）
└── mindvault/                          # NoteLM 应用文档
    ├── support.html                   # 技术支持（英文）
    ├── support-zh.html                # 技术支持（中文）
    ├── privacy-policy.html            # 隐私政策（英文）
    ├── privacy-policy-zh.html         # 隐私政策（中文）
    ├── terms-of-service.html          # 服务条款（英文）
    └── terms-of-service-zh.html       # 服务条款（中文）
└── petchat/                            # Petchat 应用文档
    ├── privacy-policy.html            # 隐私政策（英文）
    ├── privacy-policy-zh.html         # 隐私政策（中文）
    ├── terms-of-service.html          # 服务条款（英文）
    └── terms-of-service-zh.html       # 服务条款（中文）
└── tts/                               # OfflineTranslate 应用文档
    ├── PRIVACY_POLICY.md             # 隐私政策（中英双语 · scriptio continua 排版）
    └── TERMS_OF_SERVICE.md           # 服务条款（中英双语 · scriptio continua 排版）
```

## 应用信息

### ClearBrief Coach - 沟通训练教练
- **定位**: Android / iOS 沟通训练应用
- **功能**:
  - 训练任务、练习反馈和推荐路径
  - 文本输入与 Android 离线语音转写
  - 账号登录、订阅管理和购买恢复
  - 本地设置、提醒和练习历史
  - 可选的云端辅助画像与推荐生成
- **隐私**: 主要为本地优先存储；会根据功能需要使用 Supabase、RevenueCat 和应用商店登录/购买流程

### Lansea AI - AI 陪伴
- **年龄分级**: 18+
- **类型**: AI 陪伴应用
- **功能**:
  - 个性化 AI 陪伴对话
  - 文本和语音交互
  - 情感支持和陪伴
  - 记忆和个性化学习
  - 跨设备同步
- **内购**: 订阅制解锁高级功能（无限对话、高级 AI 能力、优先支持）
- **隐私**: 使用 RevenueCat 进行购买验证，使用第三方 AI 服务提供对话功能

### Manna - 圣经小组件
- **年龄分级**: 4+
- **类型**: iOS 主屏每日经文与灵修小组件应用
- **功能**:
  - 离线经文内容与多语言展示
  - 小组件主题、字体、颜色与背景自定义
  - 收藏、置顶、阅读计划与灵修流程
  - 本地提醒与经文图片生成分享
- **内购**: 通过 RevenueCat 与 App Store 管理高级主题和个性化功能
- **隐私**: 主要本地存储，使用 App Group 供小组件共享数据，照片权限用于背景和图片导出

### PetalCare - 周期追踪
- **年龄分级**: 12+
- **类型**: 隐私优先的周期与症状追踪应用
- **功能**:
  - 周期追踪、症状记录、洞察与统计
  - 医生报告导出与加密备份恢复
  - Apple Health / Health Connect 可选导入
  - 生物识别锁、伪装模式、紧急锁定等隐私功能
- **内购**: 通过 RevenueCat 与应用商店管理 Pro 权益
- **隐私**: 本地加密数据库与安全存储为主，购买校验流程可能联网

### Petchat - 本地 AI 宠物陪伴
- **年龄分级**: 4+
- **类型**: 私密本地 AI 宠物陪伴应用
- **功能**:
  - 在设备上领养并陪伴虚拟宠物
  - 通过设备端 AI 模型（llama.cpp）进行对话互动
  - 主屏小组件 / 灵动岛查看宠物状态
  - 本地通知提醒
- **内购**: 通过 RevenueCat 与 App Store 管理高级权益
- **隐私**: 对话记录与宠物数据保存在设备本地，设备端 AI 处理，使用 App Group 供小组件共享数据

### NoteLM - 本地优先 AI 知识库
- **定位**: 本地优先 AI 笔记与知识库应用
- **功能**:
  - 本地笔记与 Markdown 编辑
  - 本地文件导入与检索索引
  - 网页链接导入为笔记
  - 语音笔记录制与设备端转写
  - 本地模型下载与设备端 AI 问答
  - 纯本地模式、PIN 应用锁、本地备份
- **支持页**:
  - 英文技术支持
  - 中文技术支持
- **隐私边界**:
  - 默认内容保留在设备本地
  - 网页导入和模型下载会直接从设备连接第三方站点
  - 当前代码中未见广告、分析 SDK 或强制云同步

### OfflineTranslate - 离线语音翻译
- **年龄分级**: 4+
- **类型**: iOS 完全离线的语音识别、翻译与语音克隆应用
- **功能**:
  - 一键按住说话：录音、识别、翻译并语音播报
  - 语音克隆：录制 5–20 秒参考声音，合成你自己的声音
  - 拍照翻译：拍摄或从相册选择图片，进行离线 OCR 文字识别与翻译
  - 完全离线运行，模型只需准备一次
- **模型**: SenseVoice（识别）、Hy-MT2（翻译）、HunyuanOCR（图片 OCR）、OmniVoice（语音克隆/合成），均为开源并只在设备端运行
- **内购**: 无（无账号、无订阅、无内购）
- **隐私**: 所有数据处理均在设备本地完成，无账号系统、无服务器、无分析 SDK；麦克风/相机/相册权限仅用于相应功能且不上传

## 隐私承诺

### ClearBrief Coach
- ✅ 本地优先保存练习内容和偏好
- ✅ Android 支持离线语音转写
- ✅ 登录、订阅和云端辅助功能仅在需要时才会使用外部服务
- ✅ 不设计行为广告，不主动出售个人信息
- ✅ 支持用户通过联系邮箱获取帮助或请求删除

### Lansea AI
- ✅ 明确的数据收集和使用说明
- ✅ 使用 RevenueCat 进行购买验证（不处理支付）
- ✅ 使用第三方 AI 服务提供对话功能
- ✅ 对话内容不用于营销或广告
- ✅ 符合 GDPR、CCPA、PIPL、LGPD 等国际隐私法规
- ✅ 提供完整的用户数据控制权

### Manna 和 CycleSafe
- ✅ 完全离线运行
- ✅ 不收集任何用户数据
- ✅ 不使用第三方分析工具
- ✅ 所有数据仅存储在用户设备本地
- ✅ 符合 GDPR、CCPA、PIPL、LGPD 等国际隐私法规

### NoteLM
- ✅ 本地优先，核心内容默认存储在设备本地
- ✅ 不要求账号注册
- ✅ 当前代码中未见广告 SDK、分析 SDK、强制云同步
- ✅ 可选联网行为限于网页导入、模型下载、外部链接和平台商店流程
- ✅ 文档已按本地存储、语音、网页导入、模型下载、PIN 锁和本地备份进行披露

### Petchat
- ✅ 对话记录与宠物数据保存在设备本地
- ✅ 设备端 AI 模型处理，对话内容不上传服务器
- ✅ 不要求账号注册
- ✅ 不使用广告 SDK 或自有分析系统
- ✅ 通过 RevenueCat 校验订阅，符合 App Store 审核要求

### OfflineTranslate
- ✅ 语音识别、翻译、OCR 与语音克隆全部在设备端完成
- ✅ 不收集任何个人数据：无账号、无服务器、无分析 SDK、无广告
- ✅ 录音、克隆语音、翻译记录与图片仅保存在设备沙盒本地，不上传
- ✅ 唯一联网行为是首次下载开源语言模型（下载完成后无需网络）
- ✅ 麦克风/相机/相册权限仅按需使用，可在系统设置中撤销
- ✅ 符合 GDPR、CCPA、PIPL、LGPD 等国际隐私法规的本地优先原则

## 部署到 GitHub Pages

1. 创建一个新的 GitHub 仓库
2. 将这些文件推送到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择主分支作为源
5. 您的网站将在 `https://yourusername.github.io/repository-name/` 上线

## 联系信息

- **邮箱**: onebestai@gmail.com

## 许可

© 2026 Manna Studio. All rights reserved.
