# Design Style Specification — Bauhaus Replica

## 1. 项目概述

| 属性 | 值 |
|------|-----|
| **输入来源** | designprompts.dev/bauhaus 网页截图（9张分段截图 + 1张全页截图） |
| **复刻范围** | 完整首页，含 Header → Hero → Brand Panel → Stats → Sponsors → Blog → Features → Steps → Benefits → Testimonials → Pricing → FAQ → CTA → Footer |
| **视觉真值依据** | 截图视觉优先；URL 仅作辅助确认 |
| **不一致处理策略** | 以截图最终渲染效果为准 |

## 2. 风格锁定摘要

### 风格关键词
**Bauhaus / Constructivism / Geometric Brutalism / Swiss International Style**

### 页面气质
- 高对比度、几何主导、无圆角（仅 full round 或 sharp）、硬边框、硬偏移阴影
- 像杂志排版一样的大胆留白与密集信息区交替
- 装饰性几何形不是"点缀"，而是构图的核心元素（200-400px 级别）

### 设计体系映射
- **Bauhaus 1919 核心原则**：形式追随功能、原色系统、几何纯粹主义
- **Constructivist 影响**：对角线构图、重叠形状、粗黑边框
- **Swiss Style 影响**：栅格系统、无衬线大标题、左对齐文本块、严格间距节奏

### 目标受众
B2B 买家（眼镜外贸行业）——需要传达：专业、可靠、现代制造能力

### 最不可偏离的 10 个风格锚点

1. **三原色绝对优先级** — 红 #D02020 / 蓝 #1040C0 / 黄 #F0C020，绝不引入第四主色
2. **硬阴影 ONLY** — 所有 shadow 必须是 `offset offset 0 #121212` 形式，禁止 box-shadow blur
3. **边框二态** — 只有 2px 或 4px solid black，没有中间值；圆角只有 0 或 9999px（full）
4. **按钮按压效果** — active 时 translate(4px,4px) + box-shadow:none，模拟物理按键
5. **大几何装饰形尺寸** — Hero/CTA/Brand Panel 的装饰形必须在 140-384px 范围，不能缩小成 icon 级别
6. **点阵纹理** — 蓝色面板区域必须覆盖 radial-gradient dot pattern（2px dots, ~20-24px spacing）
7. **灰度图片 + hover 彩色** — Blog 卡片图片默认 filter:grayscale(100%)，hover 变彩色
8. **卡片角饰** — Features 卡片右上角必须有 24px 实心色点（红/蓝/黄轮替）
9. **Section 节奏** — 背景交替：白(Hero)→蓝+红(网格)→红(Brand)→黄(Stats)→灰(Sponsors)→蓝(Blog)→灰(Features)→白(Steps)→红(Benefits)→灰(Testi)→黄(Pricing)→白(FAQ)→黄(CTA)→黑(Footer)
10. **Outfit 字体唯一** — 全站只用 Outfit (400/500/700/900)，禁止引入其他字体族

## 3. 版式系统

### 页面宽度
- **最大内容宽度**: 1280px
- **安全边距**: 24px（移动端）→ 32px（平板）→ 自适应居中（桌面）
- **全宽区块**: Hero（左右分栏）、Stats（4等分）、Blog section（蓝底满屏）

### 栅格 / 列结构

| 区块 | 栅格类型 | 列数 | 说明 |
|------|---------|------|------|
| Header | Flex 横向 | 4区段 | Logo — Nav — Spacer — Actions |
| Hero | CSS Grid 50/50 | 2列 | 左白右蓝，垂直分割 |
| Hero Bottom Grid | CSS Grid | 2×2 = 4单元格 | 白/蓝/红/白，粗黑线分隔 |
| Brand Panel | CSS Grid | 2列 | 左380px固定 / 右自适应 |
| Stats | CSS Grid | 4等分 | 黄背景，细黑竖线分隔 |
| Sponsors | CSS Grid | 3列 | 灰底 |
| Blog Cards | CSS Grid | 3列 | 蓝底满屏 |
| Features | CSS Grid | 3×2 = 6卡片 | 灰底，带背景菱形装饰 |
| Steps | CSS Grid | 4列 | 白底 |
| Benefits | CSS Grid | 3列 | 红底 |
| Testimonials | CSS Grid | 3列 | 灰底 |
| Pricing | CSS Grid | 3列 | 黄底 |

### 对齐方式
- **标题**: 全部 left-align（除 Section Header 居中外），uppercase，tight letter-spacing (-0.02em ~ -0.03em)
- **正文**: left-align，line-height 1.6-1.7
- **统计数字**: center-align
- **卡片内容**: top-left 对齐为主

### 区块间距规则
- **Section 内部 padding**: 96px vertical × 24px horizontal（桌面端）
- **Section 间距离**: 由背景色切换自然分隔，无额外 margin（相邻区块紧贴）
- **模块内部间距**: 卡片 gap = 32px，卡片内 padding = 24px

### 模块内节奏差异
- **Hero**: 极致宽松，text 占左侧 60% 视觉重量
- **Stats**: 紧凑等分，每个 stat-item 内容居中
- **Features**: 均匀网格，卡片等高
- **CTA**: 居中聚焦，装饰形作为背景层

## 4. 颜色系统

### 主层级颜色

| Token | Hex | 用途 |
|-------|-----|------|
| --bau-red | `#D02020` | CTA 按钮、品牌强调、Benefits 背景、FAQ open 态 |
| --bau-blue | `#1040C0` | Hero 右侧、Blog 区域、链接 hover、部分徽章 |
| --bau-yellow | `#F0C020` | Stats 背景、CTA 背景、Pricing 背景、装饰圆形 |
| --bau-black | `#121212` | 正文文字、所有 border、shadow 色 |
| --bau-white | `#FFFFFF` | 大面积背景、卡片底色、按钮反白文字 |
| --bau-canvas | `#F0F0F0` | Features/Testimonials/Sponsors 区块背景 |
| --bau-light-yellow | `#FFF9C4` | FAQ 答案展开背景、Stats 微调 |
| --bau-dark | `#1A1A1A` | Footer 背景（比 black 更柔和） |

### 文字颜色层级

| 层级 | 颜色 | 用途 |
|------|------|------|
| H1-H2 主标题 | `#121212` | 最大字号 56-96px |
| H3 卡片标题 | `#121212` | 18-22px bold |
| 正文 | `#333333` | 15-17px |
| 次级文字 | `#555555` | Stat labels、描述辅助 |
| 弱化文字 | `#666666` - `#888888` | Footer links、meta 信息 |
| 反白文字 | `#FFFFFF` | 在红/蓝/黑背景上 |

### 强调色使用规则
- **红色**用于：主要行动按钮（Primary CTA）、Brand Panel 背景、Benefits Section 背景、日期标记、FAQ 激活态、下划线链接
- **蓝色**用于：Hero 右侧、Blog Section、导航 hover、方形徽章、部分图标框
- **黄色**用于：Stats/Pricing/CTA 背景、菱形徽章、装饰圆形、三角 logo 元素

### 渐变使用
- **Footer 顶线**: `linear-gradient(90deg, red 33%, blue 33%, blue 66%, yellow 66%)` — 三色均分
- **禁止**: 其他渐变。不使用任何 linear-gradient/radial-gradient 作背景或文字（dot pattern 是 texture 不是 gradient）

## 5. 字体系统

### 字体族
```
font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
**Google Fonts**: Outfit (weights: 400, 500, 700, 900)

### 标题层级

| 级别 | 字号 | 字重 | 行高 | Letter-spacing | Text-transform | 典型位置 |
|------|------|------|------|----------------|----------------|---------|
| H1 (Hero Title) | clamp(56px, 7vw, 96px) | 900 | 0.95 | -0.03em | UPPERCASE | Hero 左侧 |
| H2 (Section) | clamp(36px, 5vw, 56px) | 900 | 1.1 | -0.02em | UPPERCASE | 每个 section header |
| H2 (Panel) | clamp(42px, 5vw, 64px) | 900 | 1 | -0.02em | UPPERCASE | Brand Panel |
| H3 (Card) | 18-24px | 900 | 1.2-1.3 | -0.01em | UPPERCASE | Feature/Benefit card title |
| H4 (Step) | 17px | 800 | 1 | 0.03em | UPPERCASE | Step item title |

### 正文层级

| 级别 | 字号 | 字重 | 行高 | 用途 |
|------|------|------|------|------|
| Body Large | 17px | 400 | 1.7 | Brand panel 描述段落 |
| Body Normal | 15px | 400 | 1.65 | Card descriptions |
| Body Small | 14px | 400 | 1.6 | FAQ answers, footer text |
| Caption | 12-13px | 600-700 | 1.4 | Blog meta, stat labels, nav links |

### 按钮 / 标签层级

| 元素 | 字号 | 字重 | 特征 |
|------|------|------|------|
| Primary Button | 20px | 700 | uppercase, 0.02em tracking |
| Outline Button | 20px | 700 | 同上 |
| Small Button | 16px | 700 | Header actions |
| Link Button | 14px | 700 | uppercase, 0.05em tracking, underline |

### 中文排版规则
- 中英文混排时，中文字体 fallback 到 system-ui sans-serif
- 中文标题同样使用 uppercase 视觉冲击（或改为中文对应的全大写感：加粗+字间距）
- 中文行高建议 1.7-1.8（比英文稍大）

## 6. 圆角 / 边框 / 阴影 / 质感系统

### 圆角层级（严格二态）

| 圆角值 | 使用场景 |
|--------|---------|
| **0px** (sharp) | 按钮、卡片、容器、方形徽章、方形图标框 |
| **9999px** / **50%** (full round) | 圆形 logo 元素、圆形徽章、pill 图片容器、avatar、圆形装饰形 |

**禁止**: 4px / 8px / 12px / 16px 等中间值圆角

### 边框规则

| 边框规格 | 粗细 | 颜色 | 使用场景 |
|---------|------|------|---------|
| Thin Border | 2px | #121212 | 按钮、Header 底线、Stat 分隔线、FAQ item |
| Thick Border | 4px | #121212 | 卡片外框、大几何装饰形、Logo 元素 |
| Accent Border | 4px | colored (red/blue/yellow) | Sponsor card image containers |

**规则**: 所有可见边框都是纯黑色 (#121212)，不允许灰色/半透明边框

### 阴影规则（硬偏移，零模糊）

| 阴影 Token | 值 | 使用场景 |
|-----------|-----|---------|
| --shadow-sm | `3px 3px 0 #121212` | FAQ closed state, small elements |
| --shadow-md | `4px 4px 0 #121212` | Buttons default state, small cards |
| --shadow-lg | `6px 6px 0 #121212` | Blog cards, feature cards, benefit cards |
| --shadow-xl | `8px 8px 0 #121212` | Featured pricing card |

**交互态变化**:
- Hover: `translate(-4px, -4px)` + shadow offset 增加 4px（即总偏移量翻倍视觉效果）
- Active: `translate(4px, 4px)` + `box-shadow: none`

**禁止**: `box-shadow` 的 blur-radius 参数（第四个值）永远为 0

### 质感效果

| 效果 | 实现 | 使用区域 |
|------|------|---------|
| Dot Pattern (点阵纹理) | `radial-gradient(circle, rgba(255,255,255,0.12~0.15) 2px, transparent 2px)` background-size: 20-24px | Hero right panel, Hero grid cell 2 (blue area) |
| Grayscale Image | `filter: grayscale(100%)` | Blog card 默认状态 |
| Image Shape Clip | `border-radius: 9999px` (pill) 或默认 rect | Blog card images 交替 |
| Background Decor Shape | 绝对定位大圆形/方形/菱形 | CTA section, Features section bg |

## 7. 组件清单与状态规则

### 导航 (Header)
- **高度**: 72px fixed/sticky
- **Logo**: 三原色几何组合（28px circle + 28px square + triangle）+ 品牌名 18px/700
- **Nav Links**: 14px/500, uppercase, 0.05em letter-spacing, 32px gap
- **Actions**: Outline button (LOG IN) + Primary button (GET STARTED), 16px font, 44px height
- **底部**: 2px solid black border-bottom
- **Hover**: Links 变蓝 #1040C0

### 按钮 (Button)

| 变体 | 背景 | 文字色 | 边框 | Shadow | Active 态 |
|------|------|-------|------|--------|----------|
| Primary (Red) | #D02020 | white | 2px black | 4px 4px 0 black | translate(4px,4px) + no shadow |
| Outline (White) | white | black | 2px black | 4px 4px 0 black | 同上 |
| Small | 同上变体 | 同上 | 同上 | 3px 3px 0 | 同上 |
| Link (Text) | transparent | black | 无 | 无（有 red bottom-border 2px） | gap 增加 |

- **统一尺寸**: 20px/700 font, 56px height, padding 12px 32px
- **Small**: 16px/700, 44px height, padding 8px 24px
- **Transition**: transform 0.1s + box-shadow 0.1s（快速响应=物理按键感）

### 卡片 (Card)

**通用 Card 规格**:
- Background: white
- Border: 4px solid black
- Shadow: 6px 6px 0 black (hard offset)
- Padding: 24px (inner content)
- **Hover**: transform(-4px, -4px) + shadow(12px 12px 0)

**Blog Card 特殊**:
- 图片区域: padding 16px, bg=#F0F0F0, min-height 180px
- 图片形状交替: card 1/3 = pill (border-radius:9999px), card 2 = rectangle
- 图片默认灰度, hover 变彩
- Meta 行: 日期(红色) · 作者(灰色), 12px/700
- 标题: 18px/900, uppercase
- 底部: "READ ARTICLE →" link button

**Feature Card 特殊**:
- 图标框: 56×56px, 4px 黑边框, 内含 SVG stroke 图标
- 角饰: 右上角 24px 实心圆点（红→蓝→黄轮替）
- 标题: 20px/900 uppercase
- 描述: 15px/1.65, color #444

**Sponsor Card 特殊**:
- 图片容器: 圆形(红边框) 或 圆角矩形(蓝边框), 深色填充
- 标题居中: 24px/900 uppercase
- "LEARN MORE →" 红下划线链接

### 徽章 (Badge)
- 尺寸: 52×52px
- 边框: 4px solid black
- **Circle**: border-radius 50%, 红色背景, 白字
- **Square**: 0圆角, 蓝色背景, 白字
- **Diamond**: 正方 rotate(45deg), 黄色背景, 黑字, 内 span reverse rotate

### FAQ 手风琴 (Accordion)

| State | Background | 文字色 | Border | Shadow |
|-------|-----------|--------|--------|--------|
| Closed | white | black | 2px black | 3px 3px 0 black |
| Open (Active) | #D02020 (red) | white | 2px black | 4px 4px 0 black |
| Answer Area | #FFF9C4 (light yellow) | black | none | none |

- Icon: "+" → active 时 rotate(45deg)变成 "×"
- Answer max-height transition: 0.3s ease
- Items 之间 margin-bottom: -2px（让 borders 重叠为单线）

## 8. 图像 / 图标 / 插画规则

### 图片处理
- **Blog Images**: 默认 grayscale(100%), hover grayscale(0%), transition 0.3s
- **Image Container Shapes**:
  - Pill shape (rounded-full): blog card 第 1、第 3 张
  - Rectangle: blog card 第 2 张
  - Circle with colored border: sponsor card 第 1 张
  - Rounded rectangle: sponsor card 第 2 张
- **Aspect Ratio**: 16:9 (blog), 4:3 (sponsor), 1:1 (avatar)
- **Alt text**: 必须, 描述性

### 图标风格
- **Line icons only**: SVG stroke-based, stroke-width 2.5, fill="none"
- **Contained in box**: 56×56px 方框, 4px 黑边框, 图标 28×28px
- **Shapes**: circle outline / triangle / square outline (对应三个 feature 类别)
- **Color**: stroke always #121212 (black)

### 几何装饰形（非图标）
这些是页面构图的**核心元素**，不是小装饰：

| 位置 | 形状 | 尺寸 | 颜色 | 特征 |
|------|------|------|------|------|
| Hero Left 角落 | Quarter circle | 280px dia | Yellow 35% opacity | 从边缘溢出 |
| Hero Right | Circle | 298px dia | Yellow #F0C020 | 4px 黑边框 |
| Hero Right | Triangle/Wedge | ~160×200px | Red #D02020 | 旋转 -15° |
| Hero Right | Square | 224×224px | White | 4px 黑边框 |
| Hero Grid Cell 2 | Downward triangle | 180×110px base | Red | 顶边居中 |
| Brand Panel Left | Circle | 140×140px | White | 4px 黑边框 |
| Brand Panel Left | Square | 130×130px | Black | 4px 黑边框 |
| Brand Panel Left | Semi-circle | 140×70px | Yellow | 上直下弧 |
| Brand Panel Left | Diagonal bar | 200×18px | Black | 旋转 -35° |
| CTA Section | Circle | 384×384px | Red 85% opacity | 左侧居中 |
| CTA Section | Square | 384×384px | Blue 50% opacity | 右侧居中 |
| Features BG | Diamond (outline) | 240×240px | Blue 15% opacity stroke | 右下角, rotate 45° |

## 9. 响应式与内容伸缩规则

### 断点策略

| 断点 | 宽度范围 | 关键调整 |
|------|---------|---------|
| Desktop | > 1024px | 完整设计，多列布局 |
| Tablet | 641px – 1024px | Hero 单列, 2列网格, Brand Panel 单列 |
| Mobile | ≤ 640px | 全部单列，隐藏 Nav Links，缩小字号 |

### 各断点关键变化

**Tablet (≤1024px)**:
- Hero: grid-template-columns: 1fr (上下堆叠)
- Brand Panel: grid-template-columns: 1fr
- Stats: grid-template-columns: repeat(2, 1fr)
- Blog/Features/Benefits/Testi/Pricing/Sponsor: 2列
- Footer: 2列
- Steps: 2列

**Mobile (≤640px)**:
- Nav Links: display: none
- Hero Grid: 1列（cells 堆叠，去除右边框）
- Stats: 1列（去右边框，保留底边框分隔）
- 所有卡片网格: 1列
- Footer: 1列
- Steps: 1列
- Button: font-size 16px, height 48px
- H1: 最小 42px
- H2 Section: 最小 32px

### 可拉伸内容 vs 固定比例

| 内容 | 策略 |
|------|------|
| Hero Text | fluid clamp() |
| Geometric shapes | 固定 px（装饰形保持视觉冲击力） |
| Cards | 等高 flex/grid auto-stretch |
| Images | aspect-ratio 锁定 |
| Stats | 等分 grid column |

## 10. 后续 Skill 强约束指令

### 必须保留（MUST KEEP）
1. ✅ 三原色系统不变：红 #D02020 / 蓝 #1040C0 / 黄 #F0C020
2. ✅ 硬阴影零模糊：所有 shadow 都是 offset-only 格式
3. ✅ Outfit 字体族唯一：不得替换或增加字体
4. ✅ 边框二态：只有 2px 或 4px solid black
5. ✅ 圆角二态：只有 0px 或 full-round (9999px/50%)
6. ✅ 按钮按压效果：active translate + shadow-none
7. ✅ 点阵纹理在蓝色背景区域
8. ✅ 灰度图片 + hover 变彩
9. ✅ 卡片角饰（实心色点）
10. ✅ Section 背景色交替节奏
11. ✅ 大几何装饰形的尺寸级别（140-384px）

### 可以适配（MAY ADAPT）
- 📝 具体文案内容（标题、描述、CTA 文字）
- 📝 卡片数量（3列可增减，但保持对称）
- 📝 图片资源 URL（换成实际产品图）
- 📝 Section 顺序微调（但需保持整体节奏）
- 📝 Footer 链接分组和数量

### 禁止发生（MUST NOT DO）
- ❌ 引入新的主色调或渐变
- ❌ 使用模糊阴影（box-shadow blur > 0）
- ❌ 使用中间值圆角（4px/8px/16px 等）
- ❌ 替换 Outfit 字体
- ❌ 把稀疏 Bauhaus 排版改密集成模板风
- ❌ 移除几何装饰形或缩小到 icon 级别
- ❌ 改变 Section 背景色节奏
- ❌ 去掉按钮的按压物理反馈效果
- ❌ 给卡片添加圆角（非 0 非 full）
- ❌ 使用非黑白边框颜色

## 11. 扩页时的风险点

### 最容易跑偏的地方
1. **新 Section 的背景色选择** — 必须遵循既定交替节奏，不能随意选色
2. **新卡片的装饰元素** — 每张卡片都需要角饰或图标框，不能做成素卡片
3. **几何装饰形的尺度** — 新页面也必须包含大尺寸（200px+）装饰形，不能退化成小 icon
4. **按钮的一致性** — 所有 CTA 必须用 btn-primary 或 btn-outline class，不能用裸 link
5. **图片的处理** — 所有图片默认灰度，hover 变彩，这个模式不能丢

### 复用优先级（扩页时按此顺序）
1. Feature Card 组件（最通用）
2. Blog Card 组件（内容型）
3. Stats Item 组件（数据展示）
4. Pricing Card 组件（销售转化）
5. Hero 50/50 Split 布局（首页专用，子页慎用）

---

_规范版本: v1.0 | 基于 designprompts.dev/bauhaus 截图逆向生成_
