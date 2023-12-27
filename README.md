# site-status

一个基于 UptimeRobot API 的在线状态面板

## 特色

- 站点状态总览
- 流畅的动画
- 数据获取失败提醒
- 移动端适配

## 事先准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/dashboard) 添加站点监控，并在 `My Settings` 页面获取 类型为 `Read-Only API Key` 的 `API Key`

## 如何使用

- 按照下方部署操作来安装依赖
- 在 `.env` 文件中进行配置修改
- 将打包后的文件上传至网站空间部署

## 部署

### 安装依赖

```bash
# 若没有 pnpm
npm install pnpm -g

# 安装依赖
pnpm install
```

### 开发

```bash
pnpm dev
```

### 打包

```bash
pnpm build
```

## 鸣谢

 - [uptime-status](https://github.com/yb/uptime-status) 基于此项目进行修改
 - [site-status](https://github.com/imsyy/site-status) 