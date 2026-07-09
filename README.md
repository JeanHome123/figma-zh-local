# Figma网页版UI文案汉化

一个面向 Figma 网页版的本地 Chrome 扩展，用于离线替换常见英文 UI 文案为简体中文。

这个项目的核心机制非常简单：扩展内置一份本地词典，在 Figma 页面中发现完全匹配的英文 UI 文案时，将其替换为对应中文。它不是在线翻译插件，不依赖任何远程服务，也不会上传 Figma 页面内容、文件信息、账号信息或本地收集候选。

## 功能

- 在 `https://www.figma.com/*` 页面中替换常见 UI 文案。
- 支持文本节点翻译，例如按钮、菜单、面板标题。
- 支持属性文案翻译，例如 `title`、`aria-label`、`placeholder`、`data-tooltip`。
- 提供保守模式，跳过较长文本、链接、邮箱和疑似路径，降低误翻译概率。
- 提供本地收集模式，记录未命中的短英文 UI 候选，方便后续人工补充词典。
- 提供弹窗开关面板，可控制汉化、文本翻译、属性翻译、保守模式、本地收集和调试日志。

## 安全边界

这个扩展按本地离线原则设计：

- 基于本地词典做文案替换，所有匹配和替换都在浏览器本地完成。
- 不访问远程词库。
- 不调用翻译接口。
- 不发送任何页面内容到第三方服务。
- 不上传本地收集候选。
- 不读取 `document.cookie`。
- 不读取网页的 `localStorage` 或 `sessionStorage`。
- 不申请 `cookies`、`webRequest`、`scripting`、`activeTab`、`tabs`、`<all_urls>` 等权限。
- 不使用 `fetch`、`XMLHttpRequest`、`eval`、`new Function`。
- 本地收集候选仅保存在 `chrome.storage.local`。

当前 `manifest.json` 只声明：

```json
{
  "permissions": ["storage"],
  "host_permissions": ["https://www.figma.com/*"]
}
```

## 目录结构

```text
manifest.json   Chrome 扩展配置
content.js      Figma 页面汉化与本地收集逻辑（词典存在于这里）
popup.html      扩展弹窗结构
popup.css       扩展弹窗样式
popup.js        扩展弹窗交互
```

## 安装方式

1. 打开 Chrome 地址栏：`chrome://extensions/`
2. 开启右上角“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择本仓库根目录。
5. 刷新 Figma 页面。

## 使用方式

点击浏览器扩展图标，可以看到以下开关：

- `启用汉化`：总开关。
- `文本节点翻译`：翻译页面中的普通文本节点。
- `属性文案翻译`：翻译提示、占位符、辅助标签等属性。
- `保守模式`：跳过较长文本和疑似敏感内容。
- `本地收集模式`：记录未翻译候选，默认关闭。
- `调试日志`：在控制台输出命中记录，默认关闭。

修改开关后，刷新 Figma 页面即可看到更稳定的效果。

## 本地收集模式

本地收集模式用于辅助补充词典。开启后，扩展会在本机记录未命中的短英文候选，并统计出现次数。

弹窗中提供：

- `候选数量`
- `复制候选列表`
- `清空候选`

复制格式示例：

```text
Move to folder    5
Shared libraries  3
Recently opened   2
```

这些候选不会自动翻译，也不会上传。建议人工筛选后再加入词典。

## 误翻译说明

Figma 页面中可能同时存在 UI 文案、文件名、资源标题、评论、画布文本和用户输入。扩展会尽量跳过输入区、评论区、代码块、画布、SVG 和部分资源卡片区域，但无法保证 100% 区分所有内容。

如果出现误翻译，可以：

1. 关闭 `文本节点翻译`，仅保留属性文案翻译。
2. 保持 `保守模式` 开启。
3. 将误翻译词条从 `content.js` 的 `DICT` 中移除或调整。

## 开发检查

可以用 Node.js 做基础语法检查：

```bash
node --check content.js
node --check popup.js
```

发布前建议搜索确认没有网络、远程脚本和敏感 API：

```bash
rg "fetch\\(|XMLHttpRequest|document\\.cookie|localStorage|sessionStorage|eval\\(|new Function|<all_urls>|cookies|webRequest|scripting|activeTab|chrome\\.tabs" .
```

## 许可证

本项目基于 MIT License 发布，详见 [LICENSE](./LICENSE)。
