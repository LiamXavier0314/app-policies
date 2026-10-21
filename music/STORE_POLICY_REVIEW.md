# Groove Player 多平台法律页面与商店申报核对

核对日期：2026-10-20。范围：iOS / iPadOS、macOS、Android / Google Play 的中英文服务条款与隐私政策，以及配套支持说明。这里记录发布维护事项，不作为面向用户的附加协议，也不表示商店申报或审核已经完成。

## 本次已写入的内容

| 主题 | 隐私政策 / 服务条款的覆盖方式 |
| --- | --- |
| 适用主体、应用名称与联系 | Groove Player / 本地音乐，现有品牌 Manna Studio，隐私联系人及支持邮箱；发行开发者以真实商店资料为准，不虚构公司注册名、地址或电话 |
| 数据范围 | 媒体、标签、来源路径、指纹、曲库关系、历史、偏好、目录授权、外部源账户配置、系统播放快照及支持通信 |
| 数据来源和用途 | 用户导入、系统媒体库与用户授权目录、用户启动的连接、系统权限、用户主动反馈；列明目的与必要性 |
| 收集与对外传输 | 将纯本机处理、浏览器配对、胶囊、共听、BLE / NFC、热点、用户指定 WebDAV 与支持邮件分别说明 |
| 平台权限 | Android MediaStore / SAF / 细分媒体权限及旧版权限；Apple 文件授权、相机、本地网络、蓝牙、运动；macOS 沙盒及硬件差异 |
| 授权和撤回 | 接受条款不是可选处理的通用同意；系统权限、目录移除、停止连接与支持请求各有路径 |
| 保留、删除和账户 | 区分移除引用、删除管理音频、清缓存、撤销授权、外部副本、系统备份；明确无 Groove Player 注册账户及无账户注销流程 |
| 安全 | 如实说明 HTTP 无 TLS / 无端到端加密、外部源凭据存本机数据库、临时链接及会话范围，未写“绝对安全” |
| 权利和地区规则 | 适用时的访问、更正、删除、可携带、限制、反对、撤回、代理、申诉和监管投诉；不歧视；不宣称跨法域认证 |
| 跟踪与儿童 | 无广告 / 出售 / 跨情境行为广告共享 / AI 训练 / 重大自动化决策；儿童监护和中国不满 14 周岁特别保护 |
| 跨境和第三方 | 本地默认保存；邮件、网页托管、网盘、指定服务器和接收设备分别说明；不虚构服务商国家或合同安排已经完成 |
| 软件许可和内容权利 | 有限软件使用许可、开源例外、用户内容权利、媒体版权、滥用限制、备份与安全使用 |
| Apple 分发 | 引用 Standard EULA；范围、家庭共享例外、维护支持、保证退款、产品 / IP 主张、第三方受益人及出口限制说明 |
| Google Play 分发 | 引用 Google Play 使用条款，明确 Google 与应用开发者的责任区分、Android 权限、无注册 / 无当前内购 |
| 费用与争议 | 当前无收费和自动续费授权；第三方成本、真实交易退款规则、法定消费者保障、停止使用、终止与争议救济 |

中英文隐私政策各 14 节，服务条款各 14 节。未在隐私政策中直接宣称“Data Not Collected”“Google Play 无数据收集”或“所有数据传输均加密”。

## Apple 软件许可选择

页面明确采用 **Apple Standard EULA + 本页服务补充说明** 的安排，适用于通过 Apple 商店取得且没有其他有效 Custom EULA 的版本。[A3][A4]

不要把本页面直接当作已满足全部最低条款的 Custom EULA 上传到 App Store Connect。Apple 自定义 EULA 最低要求包含实际开发者名称、地址及相应联系信息；当前仓库没有确认对应发行主体的邮政地址和电话。[A3] 若以后选择 Custom EULA，需补齐真实资料并核对十项最低条款；不得使用占位地址或借用其他产品的法人信息。当前页面没有以这一不确定事项阻塞可完成的 Standard EULA 补充文案。

## 商店数据标签：不能将两个平台的定义互换

Apple 的收集定义考察数据离开设备后，开发者或第三方合作方是否能在实时处理所需期限之外访问；其可选披露例外也有额外条件。[A2] Google Play 的“收集”原则上指离开用户设备的传输，内存短暂处理仍需在表单中说明；本机处理、端到端加密等例外各有条件。[G2]

Google 对“用户主动发起、符合合理预期的第三方传输”的 **sharing** 申报例外，不自动构成 **collection** 例外；当前局域网 HTTP 也不能套用端到端加密例外。[G2]

| 当前数据流 | 申报前应据实际发行包确认 |
| --- | --- |
| 仅保存在设备的媒体、历史、歌单、设置 | 确认无 SDK 或远程功能额外发送后，按相应平台的本地处理定义判断；仅有权限不等于已上传 |
| 传歌、胶囊、共听的音频 / 视频 / 文件 / 标签 | Google 从离设备传输、用户内容类型及用户主动 sharing 例外逐项判断；Apple 判断是否由开发者 / 合作方实际收集及保留，不能只依据“局域网”决定 |
| IP、端口、临时房间标识、时钟 / 连接质量 | 按用途、是否可关联用户、发送目标及保留方式判断对应类别；临时标识也不当然无须披露 |
| WebDAV URL、用户名与认证信息 | 是向用户指定服务器发出的实际请求；根据收集定义、接收方身份和适用例外确认，不能写成“仅存在本机” |
| 诊断手动分享与支持来信 | 对照用户支持 / 诊断类数据及可选披露条件；数据不会自动发送不等于所有支持数据都可省略 |
| 系统账户、商店交易、系统诊断与备份 | 将平台自行处理与应用 / SDK 处理区分；不能让平台自身行为掩盖应用实际发送 |

本次没有进入 App Store Connect 或 Play Console 提交任何标签，表格是源码核对依据，不是已填表答案。当前原生插件、依赖、不同发行包和服务方实际行为仍需与最终提交包逐项一致。

## 发布前仍需落实的具体事项

1. **安全传输是技术事项。** 当前 `TransferServer`、`CapsuleShareServer`、`LocalJamService` 和碰传服务使用 HTTP，外部 WebDAV 还允许用户填写 HTTP 并发送 Basic 认证。Google 的 User Data 政策要求敏感数据安全处理，并使用现代密码技术传输。[G1] 本页如实披露并不能证明这些链路合规；针对认证及个人敏感内容的生产链路，应实现适当传输保护并验证后再判断申报。不能在当前状态将 Play 的“所有数据传输均加密”勾选为真。
2. **页面必须实际上线且可访问。** Google 要求公开、有效、无地理围栏、非 PDF 的隐私政策网址；Apple 和 Google 都要求商店元数据与应用内可方便访问政策。[A1][G1] 本地六个 HTML 页面已具备静态访问形态，但本次没有推送 / 部署，也没有验证实际公开 URL。
3. **客户端需保持相同披露。** 目前 `lib/ui/settings_page.dart` 使用 `HelpPage` 提供简要帮助与隐私文字，并非本次完整页面。发行时需要接入公开政策链接或等效的完整应用内内容；涉及超出合理预期的敏感访问，Google 的显著应用内说明和有效同意不能只放在网页中。[G1]
4. **核对实际发行主体。** 应用商店开发者资料、公开政策中的品牌 / 应用名及隐私联系方式须真实一致。当前不推测公司法人、地址或电话；本次文案沿用已存在的站点品牌与邮箱。
5. **账户删除按事实申报。** 当前没有账户创建，因此不虚构注销按钮。Google 的账户删除特定要求适用于提供应用账户创建的应用；仍须让本机内容与实际持有的支持数据有可行删除路径。[G3] 若新增注册或外部账户创建入口，需重新落实应用内和网页删除入口及关联数据删除。
6. **权限与最终产物核对。** Google 限制高敏感权限用途；媒体访问应与播放和选择范围相符，保持不申请 `MANAGE_EXTERNAL_STORAGE`，并检查依赖合并后的 Manifest。[G4] Apple 权限文案、隐私清单、SDK 行为、系统 API 理由和 App Privacy 表单各自核验，网页不能替代配置。

上述事项是已观察到的发布边界，不等于本次已经修复客户端或完成商店认证。

## 官方来源

以下九个地址于 2026-10-20 实际获取并返回 HTTP 200；引用依据为正文，不仅是 URL 可达。Google 权限页存在跳转，已保留目标。政策可能更新，提交时需复核当前规则。

- [A1] Apple — [App Review Guidelines，5.1.1 / 5.1.2](https://developer.apple.com/app-store/review/guidelines/)。明确隐私政策位置、数据用途、第三方保护、保留删除与同意。
- [A2] Apple — [App privacy details](https://developer.apple.com/app-store/app-privacy-details/)。定义收集、第三方合作方、可选披露与跟踪。
- [A3] Apple — [Minimum Terms of Developer’s EULA](https://www.apple.com/legal/internet-services/itunes/dev/minterms/)。列明自定义许可的十项最低条款及开发者联系资料。
- [A4] Apple — [Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)。说明默认 / 自定义许可关系、使用范围、开源例外等。
- [G1] Google — [User Data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)。明确政策内容与位置、安全传输、显著说明和同意。
- [G2] Google — [Provide information for Google Play’s Data safety section](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)。明确离设备收集、短暂处理及 sharing 的不同例外。
- [G3] Google — [Understanding Google Play’s app account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en)。确认账户创建时的删除义务。
- [G4] Google — [Permissions and APIs that Access Sensitive Information](https://support.google.com/googleplay/android-developer/answer/9888170?hl=en)，当前跳转至 [权限政策正文](https://support.google.com/googleplay/android-developer/answer/16558241?hl=en)。确认权限必要性与用途限制。
- [G5] Google — [Google Play Terms of Service](https://play.google.com/about/play-terms/)。用于 Android 商店分发条款引用。

地区权利章节使用“法律适用时”的限定，没有据此声称已经获得 GDPR、COPPA、CCPA/CPRA 或中国个人信息保护合规认证。
