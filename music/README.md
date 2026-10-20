# Music 法律与支持页面

内容核对日期：2026-10-20。产品显示名依据当前 iOS `CFBundleDisplayName=Music`，中文补充说明为“本地音乐”。维护团队沿用本站品牌 Manna Studio，联系邮箱沿用 `onebestai@gmail.com`。

| 页面 | English | 简体中文 |
| --- | --- | --- |
| 服务条款 | [Terms of Service](terms-of-service.html) | [服务条款](terms-of-service-zh.html) |
| 隐私政策 | [Privacy Policy](privacy-policy.html) | [隐私政策](privacy-policy-zh.html) |
| 技术支持 | [Technical Support](support.html) | [技术支持](support-zh.html) |

六个 HTML 文件均为独立可直接访问的静态页面，共用 `style.css`，不依赖脚本、第三方字体、分析服务或网络 API 加载正文。提供页面互链、对应语言切换、目录锚点、键盘跳转、手机布局和深色模式。本站首页已加入六个入口。

## 内容依据

产品源项目：`/Users/lanxuezai/Documents/code/code_study/music`。以下是维护用证据位置，不是法律页面的外部链接。

| 事实 | 当前源码位置 |
| --- | --- |
| 产品名、依赖、无账号/广告/支付 SDK | `ios/Runner/Info.plist`、`pubspec.yaml`、`lib/ui/help_page.dart`；同时检查 `lib/` 网络地址与 SDK 引用 |
| Android 媒体、蓝牙、位置、热点与后台音频声明 | `android/app/src/main/AndroidManifest.xml`、原生 `ProximityBridge.kt`、`HotspotBridge.kt` |
| Apple 相机、本地网络、运动、蓝牙、NFC 与文件访问 | `ios/Runner/Info.plist`、`macos/Runner/Info.plist`、`ios/Runner/ProximityBridge.swift`、`lib/platform/ios_audio_picker_bridge.dart` |
| 本地 SQLite 与授权目录 | `lib/data/library_repository.dart`、`lib/ui/discovery_folders_page.dart` |
| 锁屏、系统播放与 App Group 快照 | `lib/playback/music_audio_handler.dart`、`ios/Runner/MusicPlatformBridge.swift` |
| 浏览器配对、可用曲目列表与音频下载、20 分钟会话 | `lib/application/transfer_server.dart`、`assets/transfer/index.html`、`lib/ui/transfer_page.dart` |
| 临时令牌胶囊链接、20 分钟到期、地址切换 | `lib/application/capsule_share_server.dart`、`lib/ui/capsule_page.dart` |
| 共听当前音频流、状态与时钟交换、显式保存 | `lib/application/local_jam_service.dart`、`lib/application/jam_audio_response.dart`、`lib/application/music_controller.dart`、`packages/jam_audio/` |
| BLE/GATT 临时描述、运动事件与本地 HTTP 碰传 | `lib/application/proximity_transfer_service.dart`、`lib/domain/proximity.dart`、`lib/ui/player_proximity.dart`、双端原生 `ProximityBridge` |
| NFC 标签读取与蓝牙碰传的区别 | `lib/platform/nfc_bridge.dart`、`lib/ui/nfc_page.dart`、双端原生 NFC 桥接 |
| Android 本地热点凭据只在会话展示 | `lib/platform/hotspot_bridge.dart`、`lib/ui/hotspot_help.dart`、原生 `HotspotBridge.kt` |
| WebDAV 直接 OPTIONS + Basic 认证，配置含密码写本机状态；SMB 尚无适配 | `lib/application/storage_source_service.dart` |
| 删除引用 / 删除管理副本 / 备份包边界 | `lib/application/library_maintenance.dart`、`lib/application/migration_service.dart`、`lib/ui/settings_page.dart` |
| 诊断预览字段与手动系统分享 | `MusicController.diagnosticPreview()`、`lib/ui/settings_page.dart` |

## 需要保留的事实边界

- 不写“所有数据绝不离开设备”：传歌、共听、系统分享、用户指定服务器和支持邮件都存在明确的数据接收方。
- 不写“端到端加密”“局域网绝对安全”或“密码加密保存”：当前 HTTP 和本机配置存储并不支持这些承诺。
- 不写“完整 NAS/SMB/WebDAV 远程播放”“任意公网互通”“所有设备零延迟”“iOS 自动创建热点”。
- 不将当前功能代码的存在当作全部平台/硬件的验收通过；支持页使用条件化说明，适配以实际版本为准。
- 不添加未经产品实现支持的订阅价格、年龄分级、特定法律实体注册信息、法域选择或跨法域合规认证。
- 音乐、封面、歌词及第三方素材的权利仍归相应权利人，条款不代替素材授权审查。

## 维护与发布

如后续增加公网信令/中继、第三方登录、收费、分析/崩溃上传、云同步、Keychain/Keystore 凭据存储或远程音源播放，需要同步更新中英文内容、日期和适用的商店隐私披露。

本次范围为本仓库页面与导航；没有修改音乐客户端中的入口，没有提交、推送或发布站点。上线地址应以实际部署为准。不要把本地预览通过当成线上发布完成。

本地验证已通过：六个页面及首页的 142 个相对链接与锚点、唯一标题/ID、语言与邮箱检查；Chrome 对六个页面各检查 320/768/1280px 共 18 个视口，核验六次语言切换、FAQ 展开、深色模式和放大字号。页面未发现横向溢出或运行异常，`git diff --check` 通过。此结果仅证明本地静态页面与浏览器表现，不代表已上线或客户端已接入。
