(() => {
  'use strict';

  const DEFAULT_SETTINGS = {
    enabled: true,
    translateTextNodes: true,
    translateAttributes: true,
    conservativeMode: true,
    collectUntranslated: false,
    debugLog: false
  };

  const DICT = {
    "Cancel": "取消",
    "Learn more": "了解更多",
    "Name": "名称",
    "Save": "保存",
    "Remove": "移除",
    "Got it": "知道了",
    "Done": "完成",
    "Close": "关闭",
    "Back": "返回",
    "Delete": "删除",
    "None": "无",
    "Copy link": "复制链接",
    "Continue": "继续",
    "Settings": "设置",
    "Edit": "编辑",
    "Next": "下一步",
    "Custom": "自定义",
    "Text": "文本",
    "Color": "颜色",
    "Preview": "预览",
    "View": "视图",
    "Search": "搜索",
    "Image": "图像",
    "Components": "组件",
    "Link": "链接",
    "Members": "成员",
    "Video": "视频",
    "Plugins": "插件",
    "Mixed": "混合",
    "Manage": "管理",
    "Description": "描述",
    "Copy": "复制",
    "Teams": "团队",
    "Review": "审核",
    "File": "文件",
    "FigJam": "FigJam",
    "Update": "更新",
    "Undo": "撤销",
    "Redo": "重做",
    "Templates": "模板",
    "Other": "其他",
    "Open": "打开",
    "More options": "更多选项",
    "Libraries": "资源库",
    "Fill": "填充",
    "Dismiss": "忽略",
    "Try again": "重试",
    "Title": "标题",
    "Styles": "样式",
    "Style": "样式",
    "Star": "收藏",
    "Opacity": "不透明度",
    "Make": "制作",
    "Left": "左",
    "Go back": "返回",
    "Files": "文件",
    "Design": "设计",
    "Confirm": "确认",
    "Submit": "提交",
    "Something went wrong": "出错了",
    "Section": "分区",
    "Right": "右",
    "Recents": "最近",
    "Organization": "组织",
    "Frame": "画框",
    "Connect": "连接",
    "Alignment": "对齐",
    "Widget": "小组件",
    "Type": "类型",
    "Team": "团队",
    "Stop": "停止",
    "Scale": "缩放",
    "Publish": "发布",
    "Position": "位置",
    "People": "人员",
    "Page": "页面",
    "Line": "线条",
    "Email": "邮箱",
    "Ellipse": "椭圆",
    "Development": "开发",
    "Details": "详情",
    "Create team": "创建团队",
    "Size": "尺寸",
    "Seat type": "席位类型",
    "Restore": "恢复",
    "Prototype": "原型",
    "Offset": "偏移",
    "Direction": "方向",
    "Create": "创建",
    "Content": "内容",
    "Code block": "代码块",
    "Center": "居中",
    "Background": "背景",
    "Back to files": "返回文件",
    "Assets": "资产",
    "Approve": "批准",
    "Admin": "管理员",
    "Workspace": "工作区",
    "Vertical": "垂直",
    "Vector": "矢量",
    "Upgrade to Professional": "升级到专业版",
    "Status": "状态",
    "Solid": "纯色",
    "Reset": "重置",
    "Request sent": "请求已发送",
    "Rename": "重命名",
    "Reload": "重新加载",
    "Rectangle": "矩形",
    "Pending": "待处理",
    "Log in": "登录",
    "Language": "语言",
    "Horizontal": "水平",
    "Connected": "已连接",
    "Community": "社区",
    "Code": "代码",
    "Bottom": "底部",
    "Auto": "自动",
    "Added": "已添加",
    "Workspaces": "工作区",
    "Widgets": "小组件",
    "View plans": "查看套餐",
    "Variables": "变量",
    "Upgrade": "升级",
    "Table": "表格",
    "Stamp": "图章",
    "Slides": "幻灯片",
    "Show more": "显示更多",
    "Shape": "形状",
    "See more": "查看更多",
    "Resources": "资源",
    "Removed": "已移除",
    "Projects": "项目",
    "Professional": "专业版",
    "Play": "播放",
    "Overview": "概览",
    "Overlay": "覆盖层",
    "Light": "浅色",
    "Guest": "访客",
    "Export": "导出",
    "Duplicate": "复制副本",
    "Default": "默认",
    "Decline": "拒绝",
    "Dark": "深色",
    "Upload": "上传",
    "Untitled": "未命名",
    "Total": "总计",
    "Suggested": "建议",
    "Spacing": "间距",
    "Slice": "切片",
    "Share": "分享",
    "Send": "发送",
    "Select all": "全选",
    "See all": "查看全部",
    "Retry": "重试",
    "Recommended": "推荐",
    "Published": "已发布",
    "Properties": "属性",
    "Other teams": "其他团队",
    "Not now": "暂不",
    "More actions": "更多操作",
    "More": "更多",
    "Monthly": "按月",
    "Locked": "已锁定",
    "Group": "编组",
    "Go to main component": "转到主组件",
    "Free": "免费",
    "Font size": "字号",
    "Fixed": "固定",
    "Filter": "筛选",
    "Error": "错误",
    "Enabled": "已启用",
    "Duration": "时长",
    "Download": "下载",
    "Disconnect": "断开连接",
    "Dev Mode": "开发模式",
    "Desktop": "桌面端",
    "Created": "已创建",
    "Corner radius": "圆角半径",
    "Contact support": "联系支持",
    "Connector": "连接线",
    "Colors": "颜色",
    "Change language": "更改语言",
    "Billing group": "计费组",
    "AI credits": "AI 点数",
    "AI chat": "AI 聊天",
    "Webpage": "网页",
    "Variable": "变量",
    "Value": "值",
    "Try it out": "试试看",
    "Terms of Service": "服务条款",
    "Team name": "团队名称",
    "Sticky": "便签",
    "Start from scratch": "从零开始",
    "Start": "开始",
    "Square": "正方形",
    "Slot": "插槽",
    "Site": "站点",
    "Select": "选择",
    "Rotation": "旋转",
    "Replace": "替换",
    "Polygon": "多边形",
    "Plugin": "插件",
    "Pages": "页面",
    "Padding": "内边距",
    "Open in new tab": "在新标签页打开",
    "Mind map": "思维导图",
    "Min width": "最小宽度",
    "Medium": "中",
    "Media": "媒体",
    "Leave": "离开",
    "Import": "导入",
    "Home": "首页",
    "Hidden": "隐藏",
    "Grid": "网格",
    "Get started": "开始使用",
    "Full": "完整",
    "From Community": "来自社区",
    "Font": "字体",
    "Find": "查找",
    "Enterprise": "企业版",
    "Embed": "嵌入",
    "Document": "文档",
    "Disabled": "已禁用",
    "Diamond": "菱形",
    "Delay": "延迟",
    "Current": "当前",
    "Created in this file": "创建于此文件",
    "Count": "计数",
    "Connectors": "连接线",
    "Component": "组件",
    "Completed": "已完成",
    "Collection": "集合",
    "Clear search": "清除搜索",
    "Clear": "清除",
    "Blur": "模糊",
    "Basic": "基础",
    "An error occurred": "发生错误",
    "Admins": "管理员",
    "View details": "查看详情",
    "Version": "版本",
    "Edited": "已编辑",
    "Viewed": "查看",
    "Unpublish": "取消发布",
    "Union": "联合",
    "Underline": "下划线",
    "Unavailable": "不可用",
    "Unassigned": "未分配",
    "Trigger": "触发器",
    "Triangle": "三角形",
    "Top left": "左上",
    "Timeline": "时间线",
    "Theme": "主题",
    "Text style": "文本样式",
    "Template": "模板",
    "Team project": "团队项目",
    "Tablet": "平板",
    "Privacy Policy": "隐私政策",
    "Note:": "注意：",
    "Object": "对象",
    "No results": "无结果",
    "No results found": "未找到结果",
    "Loading": "加载中",
    "Loading...": "加载中...",
    "Log out": "退出登录",
    "Log out of all accounts": "退出所有账号",
    "Help": "帮助",
    "Help and resources": "帮助与资源",
    "Help Center": "帮助中心",
    "Preferences": "偏好设置",
    "Open in app": "在应用中打开",
    "Sign up": "注册",
    "Try Figma Make": "试用 Figma Make",
    "Try Figma Slides": "试用 Figma Slides",
    "Try Figma Sites": "试用 Figma Sites",
    "Try Figma Buzz": "试用 Figma Buzz",
    "Upgrade to Organization": "升级到组织版",
    "Upgrade to a Professional plan": "升级到专业版套餐",
    "Upgrade to an Organization plan": "升级到组织版套餐",

    "Recommended resources from Community": "来自社区的推荐资源",
    "See more resources": "查看更多资源",
    "Recently viewed": "最近查看",
    "Shared files": "共享文件",
    "Shared projects": "共享项目",
    "All organizations": "所有组织",
    "All files": "所有文件",
    "Last viewed": "最近查看",
    "Drafts": "草稿",
    "All projects": "所有项目",
    "Trash": "回收站",
    "Starred": "已收藏",
    "See what's included": "查看包含内容",
    "See what’s included": "查看包含内容",
    "Your plan and usage": "你的套餐和用量",
    "Ready to go beyond this free plan? Upgrade for premium features.": "准备升级免费套餐？升级后可使用高级功能。",
    "Upgrade for premium features": "升级以使用高级功能",
    "Free plan": "免费套餐",
    "Search files": "搜索文件",
    "Search teams": "搜索团队",
    "Search files, teams, or people": "搜索文件、团队或成员",
    "Open notifications": "打开通知",
    "Notifications": "通知",
    "List view": "列表视图",
    "Grid view": "网格视图",
    "New design file": "新建设计文件",
    "New FigJam board": "新建 FigJam 白板",
    "New slide deck": "新建幻灯片",
    "New site": "新建站点",
    "Design file": "设计文件",
    "FigJam board": "FigJam 白板",
    "Slide deck": "幻灯片",
    "Team library": "团队资源库",
    "Invite": "邀请",
    "Invite members": "邀请成员",
    "New project": "新建项目",
    "New folder": "新建文件夹",
    "Folder": "文件夹",
    "Project": "项目",
    "Move to project": "移动到项目",
    "Move to drafts": "移动到草稿",
    "Delete file": "删除文件",
    "Duplicate file": "复制文件",
    "Rename file": "重命名文件",
    "File name": "文件名",
    "Owner": "所有者",
    "Last modified": "最近修改",
    "Created by": "创建者",
    "Show less": "收起",
    "Sort by": "排序方式",
    "Ascending": "升序",
    "Descending": "降序",
    "Private": "私有",
    "Public": "公开",
    "Anyone with the link": "知道链接的任何人",
    "Can view": "可查看",
    "Can edit": "可编辑",
    "Can comment": "可评论",
    "Viewer": "查看者",
    "Editor": "编辑者",
    "Commenter": "评论者",
    "Owner settings": "所有者设置",
    "Share file": "共享文件",
    "Copy file link": "复制文件链接",
    "Invite people": "邀请人员",
    "Anyone": "任何人",
    "Only people invited": "仅受邀人员",
    "No access": "无访问权限",
    "Access": "访问权限",
    "Permissions": "权限",
    "Manage access": "管理访问权限",
    "Request access": "请求访问权限",
    "Open file": "打开文件",
    "Open project": "打开项目",
    "Open team": "打开团队",
    "Browse": "浏览",
    "Recent": "最近",
    "Personal": "个人",
    "Organization settings": "组织设置",
    "Team settings": "团队设置",
    "Workspace settings": "工作区设置",
    "Billing": "账单",
    "Plan": "套餐",
    "Usage": "用量",
    "Seats": "席位",
    "Admins only": "仅管理员",
    "Notifications settings": "通知设置",
    "Keyboard shortcuts": "键盘快捷键",
    "Release notes": "更新日志",
    "Contact us": "联系我们",
    "Terms": "条款",
    "Privacy": "隐私",

    "Move": "移动",
    "Bring forward": "上移一层",
    "Send backward": "下移一层",
    "Bring to front": "置于顶层",
    "Send to back": "置于底层",
    "Align left": "左对齐",
    "Align right": "右对齐",
    "Align top": "顶部对齐",
    "Align bottom": "底部对齐",
    "Align horizontal centers": "水平居中对齐",
    "Align vertical centers": "垂直居中对齐",
    "Distribute horizontal spacing": "水平分布间距",
    "Distribute vertical spacing": "垂直分布间距",
    "Auto layout": "自动布局",
    "Layout grid": "布局网格",
    "Effects": "效果",
    "Stroke": "描边",
    "Selection colors": "选区颜色",
    "Local styles": "本地样式",
    "Design panel": "设计面板",
    "Prototype panel": "原型面板",
    "Inspect": "检查",
    "Comments": "评论",
    "Add comment": "添加评论",
    "Resolve": "解决",
    "Reply": "回复",
    "Present": "演示",
    "Present preview": "演示预览",
    "Zoom in": "放大",
    "Zoom out": "缩小",
    "Zoom to fit": "缩放以适应",
    "Zoom to selection": "缩放到选区",
    "Show rulers": "显示标尺",
    "Show layout grids": "显示布局网格",
    "Show comments": "显示评论",
    "Hide comments": "隐藏评论",
    "Outline stroke": "轮廓化描边",
    "Flatten": "扁平化",
    "Use as mask": "用作蒙版",
    "Mask": "蒙版",
    "Boolean groups": "布尔组",
    "Detach instance": "分离实例",
    "Create component": "创建组件",
    "Create component set": "创建组件集",
    "Main component": "主组件",
    "Instance": "实例",
    "Variants": "变体",
    "Add variant": "添加变体",
    "Detach": "分离",
    "Swap instance": "替换实例",
    "Constraints": "约束",
    "Resizing": "调整尺寸",
    "Hug contents": "贴合内容",
    "Fill container": "填充容器",
    "Fixed size": "固定尺寸",
    "Min height": "最小高度",
    "Max width": "最大宽度",
    "Max height": "最大高度",
    "Clip content": "裁剪内容",
    "Ignore auto layout": "忽略自动布局",
    "Absolute position": "绝对定位",
    "Layer": "图层",
    "Layers": "图层",
    "Assets panel": "资产面板",
    "Pages panel": "页面面板",
    "Add page": "添加页面",
    "Rename page": "重命名页面",
    "Delete page": "删除页面",
    "Duplicate page": "复制页面",
    "Copy properties": "复制属性",
    "Paste properties": "粘贴属性",
    "Add to sidebar": "添加到侧边栏",
    "For FigJam": "用于 FigJam",
    "For Figma": "用于 Figma",
    "For Figma Slides": "用于 Figma Slides",
    "Comment": "评论",
    "Hand tool": "抓手工具",
    "Help/zoom toolbar": "帮助/缩放工具栏",
    "Show as grid": "网格显示",
    "Show as list": "列表显示",
    "Move row down": "下移一行",
    "Move row up": "上移一行",
    "New file": "新建文件",
    "Dismiss recommendations": "关闭推荐",
    "Refresh recommendations": "刷新推荐",
    "Prototype view": "原型视图",
    "Resize handle": "调整大小手柄",
    "Any of this file's editors can give you access": "此文件的任一编辑者都可以授予你访问权限",
    "Ask to edit": "请求编辑权限",
    "Draw": "绘制",
    "Multiplayer tools": "多人协作工具",
    "Copy colors": "复制颜色",
    "Edit file menu": "编辑文件菜单",
    "Minimize UI": "最小化界面",
    "View mode": "查看模式",
    "Sidebar": "侧边栏",
    "Sort/Filter": "排序/筛选",
    "New Buzz file": "新建 Buzz 文件",
    "New Design file": "新建设计文件",
    "New FigJam file": "新建 FigJam 文件",
    "New Make file": "新建 Make 文件",
    "New Site file": "新建站点文件",
    "New Slides file": "新建幻灯片文件",
    "FigJam file": "FigJam 文件",
    "Prototype file": "原型文件",
    "Figma Design": "Figma 设计",
    "Motion": "动效",
    "Toolbelt Mode": "工具带模式",
    "Application toolbar": "应用工具栏",
    "Comments on canvas": "画布评论",
    "Create new comment": "创建新评论",
    "Left sidebar": "左侧边栏",
    "Main menu": "主菜单",
    "Navigation Bar": "导航栏",
    "Right sidebar": "右侧边栏",
    "Comments panel": "评论面板",
    "Search for comments": "搜索评论",
    "Add export settings": "添加导出设置",
    "Create new file in project": "在项目中新建文件",
    "Account": "账号",
    "Notifications, new notification received": "通知，有新通知",
    "Pan to node": "平移到节点",
    "Disabled by team": "已被团队禁用",
    "Modes": "模式",
    "Remove from sidebar": "从侧边栏移除",
    "Buzz file": "Buzz 文件",
    "Figma Weave file": "Figma Weave 文件",
    "Make file": "Make 文件",
    "Sites file": "站点文件",
    "Actions…": "操作…",
    "Help and account": "帮助和账号",
    "Open in desktop app": "在桌面应用中打开",
    "Created by you": "由你创建",
    "Change theme": "更改主题",
    "Open project dropdown": "打开项目下拉菜单",
    "Edit file": "编辑文件",
    "Open team dropdown": "打开团队下拉菜单",
    "Search templates and tools": "搜索模板和工具",
    "Add account": "添加账号",
    "Additional labels": "其他标签",
    "Create a community profile": "创建社区个人资料",
    "Create branch…": "创建分支…",
    "Date trashed": "移入回收站日期",
    "Export frames to PDF…": "将画框导出为 PDF…",
    "Export…": "导出…",
    "Find next frame": "查找下一个画框",
    "Find previous frame": "查找上一个画框",
    "Frame outlines": "画框轮廓",
    "Get desktop app": "获取桌面应用",
    "Mask outlines": "蒙版轮廓",
    "Memory usage": "内存使用情况",
    "New Design": "新建设计",
    "Next page": "下一页",
    "Previous page": "上一页",
    "Save local copy…": "保存本地副本…",
    "Show slices": "显示切片",
    "Show/Hide UI": "显示/隐藏界面",
    "Switch to Design": "切换到设计",
    "Switch to Dev Mode": "切换到开发模式",
    "You don't have any trashed files.": "你没有任何已删除的文件。",
    "Zoom to next frame": "缩放到下一个画框",
    "Zoom to previous frame": "缩放到上一个画框",
    "Breadcrumbs": "面包屑导航",
    "System theme": "系统主题",
    "Date shared": "共享日期",
    "Presentations": "演示文稿",
    "Shared with": "共享对象",
    "UI kits": "UI 套件",
    "Wireframes": "线框图",
    "Search Community": "搜索社区",
    "Search for internal resources": "搜索内部资源",
    "Pick color": "拾取颜色",
    "Saved": "已保存",
    "AI Workflows with Figma Weave, See more": "Figma Weave AI 工作流，查看更多",
    "Brainstorming, See more": "头脑风暴，查看更多",
    "Plugins, See more": "插件，查看更多",
    "Prompt to Code with Figma Make, See more": "使用 Figma Make 从提示生成代码，查看更多",
    "Social media templates, See more": "社交媒体模板，查看更多",
    "UI kits, See more": "UI 套件，查看更多",
    "Website templates, See more": "网站模板，查看更多",
    "Select all with": "选择所有相同项",
    "Select inverse": "反向选择",
    "Select matching layers": "选择匹配图层",
    "Select none": "取消选择",
    "Select similar layers": "选择相似图层",
    "Ctrl+click opens right click menus": "按住 Ctrl 点击时打开右键菜单",
    "Hide canvas UI during changes": "编辑时隐藏画布界面",
    "Highlight layers on hover": "悬停时高亮图层",
    "Invert zoom direction": "反转缩放方向",
    "Keep tool selected after use": "使用后保持工具选中",
    "Keyboard layout…": "键盘布局…",
    "Keyboard zooms into selection": "键盘缩放时聚焦选区",
    "Open links in desktop app": "在桌面应用中打开链接",
    "Permissions and helpers…": "权限与辅助功能…",
    "Play audio notifications in AI chat": "AI 聊天中播放提示音",
    "Right-click and drag to pan": "按住右键拖动画布",
    "Show dimensions on objects": "显示对象尺寸",
    "Use alternate zoom handling": "使用备用缩放方式",
    "Use Ctrl+Alt+↑/↓ to rotate layers": "使用 Ctrl+Alt+↑/↓ 旋转图层",
    "Use old shortcuts for outlines": "使用旧版轮廓快捷键",
    "Use scroll wheel zoom": "使用滚轮缩放",
    "Couldn't find any matches. Try adjusting your filters.": "找不到任何匹配项。请尝试调整筛选条件。",
    "Date created": "创建日期",
    "Move to trash": "移至回收站",
    "Move…": "移动…",
    "Share…": "共享…",
    "Accessibility settings…": "无障碍设置…",
    "Color profile…": "颜色配置文件…",
    "Account settings": "账号设置",
    "Open font settings": "打开字体设置",
    "Help page": "帮助页面",
    "Legal summary": "法律摘要",
    "Support forum": "支持论坛",
    "Video tutorials": "视频教程",
    "Import from Sketch": "从 Sketch 导入",
    "Expand UI": "展开界面",
    "Height": "高度",
    "Width": "宽度",
    "Layout": "布局",
    "Button to download image": "下载图片按钮",
    "Annotations": "批注",
    "Switch to Draw": "切换到绘制",
    "Find next": "查找下一个",
    "Find previous": "查找上一个",
    "Security": "安全",
    "Snap to pixel grid": "吸附到像素网格",
    "Zoom to 200%": "缩放到 200%",
    "Zoom to 50%": "缩放到 50%",
    "Zoom/view options": "缩放/视图选项",
    "All notifications": "所有通知",
    "Unread notification": "未读通知",
    "7 results available.": "有 7 个结果可用。",
    "All sides": "所有边",
    "Borders": "边框",
    "Collaboration tools": "协作工具",
    "Color format": "颜色格式",
    "Linear Gradient": "线性渐变",
    "Mark all as read": "全部标记为已读",
    "Only mentions and replies": "仅提及和回复",
    "Results will update as you type.": "结果会随输入实时更新。",
    "Viewer tools": "查看者工具",
    "Ask the community": "询问社区",
    "Change keyboard layout…": "更改键盘布局…",
    "Change language…": "更改语言…",
    "Report abuse": "举报滥用",
    "Submit feedback": "提交反馈",
    "Support Forum": "支持论坛",
    "YouTube videos": "YouTube 视频",
    "Loading comments…": "正在加载评论…",
    "Activity digests": "活动摘要",
    "Activity on my Community resources · Weekly": "我的社区资源动态 · 每周",
    "All activity on my workspace": "我工作区中的所有活动",
    "All comments on my published resources": "我已发布资源的所有评论",
    "All comments, mentions, and replies": "所有评论、提及和回复",
    "All types of invites and requests": "所有类型的邀请和请求",
    "Browser notifications": "浏览器通知",
    "Community comments": "社区评论",
    "Email notifications": "邮件通知",
    "Enable browser notifications": "启用浏览器通知",
    "File comments": "文件评论",
    "Invites and requests": "邀请和请求",
    "Only invites and requests that need my response": "仅需我处理的邀请和请求",
    "Only shared resources": "仅共享资源",
    "Product tips and news": "产品技巧和新闻",
    "Send me occasional emails with updates and promotions from Figma": "偶尔向我发送 Figma 更新和推广邮件",
    "Send notifications by email": "通过邮件发送通知",
    "Shared resources and when added to user groups": "共享资源以及被加入用户组时",
    "Spotlight me": "跟随我的视角",
    "User groups": "用户组",
    "You can unsubscribe from Figma emails any time. For more information, review our": "你可以随时退订 Figma 邮件。更多信息请查看我们的"
  };

  const ATTRS = ['title', 'aria-label', 'placeholder', 'data-tooltip'];
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA', 'CANVAS', 'SVG']);
  const SKIP_SELECTOR = [
    'input',
    'textarea',
    '[contenteditable=""]',
    '[contenteditable="true"]',
    '[role="textbox"]',
    '[data-lexical-editor]',
    '[data-testid*="comment"]',
    '[class*="comment"]'
  ].join(',');
  const SKIP_COLLECT_SELECTOR = [
    'a[href*="/file/"]',
    'a[href*="/design/"]',
    'a[href*="/community/"]',
    '[data-testid*="file"]',
    '[data-testid*="resource"]',
    '[class*="file_tile"]',
    '[class*="resource"]'
  ].join(',');

  let settings = { ...DEFAULT_SETTINGS };
  let observer = null;
  let scheduled = false;
  let collectFlushTimer = null;
  const pendingRoots = new Set();
  const pendingCandidates = new Map();

  function log(...args) {
    if (settings.debugLog) console.log('[Figma-ZH-Local]', ...args);
  }

  function normalize(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  function isRiskyText(text) {
    if (!settings.conservativeMode) return false;
    const value = normalize(text);
    if (value.length > 80) return true;
    if (/https?:\/\/|www\./i.test(value)) return true;
    if (/\S+@\S+\.\S+/.test(value)) return true;
    if (/^[A-Z]:\\|^\.\.?[\\/]|[\\/][^\\/]+[\\/]/.test(value)) return true;
    return false;
  }

  function isCollectableCandidate(raw) {
    if (!settings.collectUntranslated) return false;
    if (!raw || !/[A-Za-z]/.test(raw)) return false;

    const value = normalize(raw);
    if (value.length < 2 || value.length > 80) return false;
    if (DICT[value]) return false;
    if (translateDynamic(value)) return false;
    if (/https?:\/\/|www\./i.test(value)) return false;
    if (/\S+@\S+\.\S+/.test(value)) return false;
    if (/^[A-Z]:\\|^\.\.?[\\/]|[\\/][^\\/]+[\\/]/.test(value)) return false;
    if (/^[\d\s.,:;!?()[\]{}'"`~@#$%^&*_+=|\\/<>-]+$/.test(value)) return false;
    if (value.length <= 3 && /^[A-Z][a-z]*$/.test(value)) return false;
    return true;
  }

  function queueCandidate(raw, sourceType, element) {
    if (!isCollectableCandidate(raw)) return;
    if (element && sourceType === 'text') {
      try {
        if (element.closest(SKIP_COLLECT_SELECTOR)) return;
      } catch {
        return;
      }
    }

    const text = normalize(raw);
    const current = pendingCandidates.get(text) || {
      count: 0,
      sourceTypes: new Set(),
      firstSeenAt: Date.now(),
      lastSeenAt: Date.now()
    };

    current.count += 1;
    current.sourceTypes.add(sourceType);
    current.lastSeenAt = Date.now();
    pendingCandidates.set(text, current);

    if (collectFlushTimer) return;
    collectFlushTimer = setTimeout(flushCandidates, 1000);
  }

  function hasExtensionContext() {
    return Boolean(globalThis.chrome?.runtime?.id && globalThis.chrome?.storage?.local);
  }

  async function flushCandidates() {
    collectFlushTimer = null;
    if (pendingCandidates.size === 0) return;
    if (!hasExtensionContext()) {
      pendingCandidates.clear();
      return;
    }

    const batch = Array.from(pendingCandidates.entries());
    pendingCandidates.clear();

    try {
      const stored = await chrome.storage.local.get({ untranslatedCandidates: {} });
      const merged = stored.untranslatedCandidates || {};

      for (const [text, item] of batch) {
        const existing = merged[text] || {
          count: 0,
          sourceTypes: [],
          firstSeenAt: item.firstSeenAt,
          lastSeenAt: item.lastSeenAt
        };
        const sourceTypes = new Set(existing.sourceTypes || []);
        for (const sourceType of item.sourceTypes) sourceTypes.add(sourceType);

        merged[text] = {
          count: existing.count + item.count,
          sourceTypes: Array.from(sourceTypes).slice(0, 8),
          firstSeenAt: Math.min(existing.firstSeenAt || item.firstSeenAt, item.firstSeenAt),
          lastSeenAt: Math.max(existing.lastSeenAt || item.lastSeenAt, item.lastSeenAt)
        };
      }

      await chrome.storage.local.set({ untranslatedCandidates: merged });
    } catch (error) {
      log('candidate flush skipped:', error?.message || error);
    }
  }

  function lookup(raw) {
    if (!raw || !/[A-Za-z]/.test(raw)) return null;
    if (isRiskyText(raw)) return null;

    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    const core = normalize(raw);
    if (!core) return null;

    const exact = DICT[core];
    if (exact) return `${leading}${exact}${trailing}`;

    const dynamic = translateDynamic(core);
    if (dynamic) return `${leading}${dynamic}${trailing}`;

    const punctuated = core.match(/^(.+?)([:：;；,，.!?！？]+)$/);
    if (punctuated && DICT[punctuated[1]]) {
      return `${leading}${DICT[punctuated[1]]}${punctuated[2]}${trailing}`;
    }

    return null;
  }

  function translateDuration(value) {
    return value
      .replace(/\b1 minute\b/g, '1 分钟')
      .replace(/\b(\d+) minutes\b/g, '$1 分钟')
      .replace(/\b1 hour\b/g, '1 小时')
      .replace(/\b(\d+) hours\b/g, '$1 小时')
      .replace(/\b1 day\b/g, '1 天')
      .replace(/\b(\d+) days\b/g, '$1 天')
      .replace(/\b1 week\b/g, '1 周')
      .replace(/\b(\d+) weeks\b/g, '$1 周')
      .replace(/\b1 month\b/g, '1 个月')
      .replace(/\b(\d+) months\b/g, '$1 个月')
      .replace(/\b1 year\b/g, '1 年')
      .replace(/\b(\d+) years\b/g, '$1 年');
  }

  function translateDynamic(core) {
    let match = core.match(/^Edited (.+?) ago$/);
    if (match) return `已编辑于 ${translateDuration(match[1])}前`;

    match = core.match(/^Viewed (.+?) ago$/);
    if (match) return `查看于 ${translateDuration(match[1])}前`;

    match = core.match(/^Created (.+?) ago$/);
    if (match) return `创建于 ${translateDuration(match[1])}前`;

    match = core.match(/^Updated (.+?) ago$/);
    if (match) return `更新于 ${translateDuration(match[1])}前`;

    match = core.match(/^(.+?) ago$/);
    if (match && /^(?:1|\d+) (?:minute|minutes|hour|hours|day|days|week|weeks|month|months|year|years)$/.test(match[1])) {
      return `${translateDuration(match[1])}前`;
    }

    match = core.match(/^by (.+)$/);
    if (match) return `作者：${match[1]}`;

    match = core.match(/^(.+)'s team library$/);
    if (match) return `${match[1]} 的团队资源库`;

    match = core.match(/^(.+)'s drafts$/);
    if (match) return `${match[1]} 的草稿`;

    match = core.match(/^(.+)'s team$/);
    if (match) return `${match[1]} 的团队`;

    match = core.match(/^Account dropdown for (.+)$/);
    if (match) return `${match[1]} 的账号下拉菜单`;

    match = core.match(/^Plan: (.+)'s team$/);
    if (match) return `套餐：${match[1]} 的团队`;

    match = core.match(/^Change plan\. (.+)'s team currently on (.+) plan$/);
    if (match) return `更改套餐。${match[1]} 的团队当前使用${translatePlanName(match[2])}套餐`;

    return null;
  }

  function translatePlanName(value) {
    return DICT[value] || value;
  }

  function shouldSkipElement(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (SKIP_TAGS.has(element.tagName)) return true;

    try {
      if (element.matches(SKIP_SELECTOR) || element.closest(SKIP_SELECTOR)) return true;
    } catch {
      return true;
    }

    return false;
  }

  function shouldSkipAttributeElement(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (SKIP_TAGS.has(element.tagName) && !['TEXTAREA'].includes(element.tagName)) return true;

    try {
      if (element.closest('[contenteditable=""], [contenteditable="true"], [role="textbox"], [data-lexical-editor]')) {
        return true;
      }
    } catch {
      return true;
    }

    return false;
  }

  function translateTextNode(node) {
    if (!settings.translateTextNodes) return;
    const parent = node.parentElement;
    if (!parent || shouldSkipElement(parent)) return;

    const translated = lookup(node.nodeValue);
    if (translated && translated !== node.nodeValue) {
      node.nodeValue = translated;
      log('text', translated);
    } else {
      queueCandidate(node.nodeValue, 'text', parent);
    }
  }

  function translateAttributes(element) {
    if (!settings.translateAttributes || shouldSkipAttributeElement(element)) return;

    for (const attr of ATTRS) {
      const value = element.getAttribute(attr);
      const translated = lookup(value);
      if (translated && translated !== value) {
        element.setAttribute(attr, translated);
        log('attr', attr, translated);
      } else {
        queueCandidate(value, `attr:${attr}`, element);
      }
    }
  }

  function scan(root) {
    if (!settings.enabled || !root) return;

    if (root.nodeType === Node.ELEMENT_NODE) {
      if (shouldSkipElement(root)) return;
      translateAttributes(root);
      root.querySelectorAll('*').forEach(translateAttributes);
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
  }

  function scheduleScan(root) {
    if (!root) return;
    pendingRoots.add(root);
    if (scheduled) return;
    scheduled = true;

    requestAnimationFrame(() => {
      scheduled = false;
      for (const item of pendingRoots) scan(item);
      pendingRoots.clear();
    });
  }

  function observe() {
    if (!settings.enabled || !document.body || observer) return;

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(scheduleScan);
        } else if (mutation.type === 'attributes') {
          scheduleScan(mutation.target);
        } else if (mutation.type === 'characterData') {
          scheduleScan(mutation.target.parentElement);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      attributeFilter: ATTRS
    });
  }

  function stopObserver() {
    if (!observer) return;
    observer.disconnect();
    observer = null;
  }

  async function loadSettings() {
    if (!hasExtensionContext()) return false;
    try {
      const stored = await chrome.storage.local.get(DEFAULT_SETTINGS);
      settings = { ...DEFAULT_SETTINGS, ...stored };
      return true;
    } catch (error) {
      log('settings load skipped:', error?.message || error);
      return false;
    }
  }

  async function boot() {
    const loaded = await loadSettings();
    if (!loaded) return;
    if (!settings.enabled) {
      stopObserver();
      return;
    }

    if (!document.body) {
      requestAnimationFrame(boot);
      return;
    }

    scan(document.body);
    observe();
  }

  if (hasExtensionContext()) {
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName !== 'local') return;
      for (const [key, change] of Object.entries(changes)) {
        if (key in DEFAULT_SETTINGS) settings[key] = change.newValue;
      }
      if (settings.enabled) {
        scan(document.body);
        observe();
      } else {
        stopObserver();
      }
    });
  }

  boot();
})();
