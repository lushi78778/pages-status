# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18 AS builder  

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 将项目文件拷贝到容器中
COPY . .

# 安装项目依赖
RUN pnpm install

# 编译
RUN pnpm build


# 最小化镜像
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g http-server

EXPOSE 12445
CMD ["http-server", "dist", "-p", "12445"]