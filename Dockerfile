# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 将项目文件拷贝到容器中
COPY . .

# 安装项目依赖
RUN pnpm install

# 暴露端口（根据项目需要进行调整）
EXPOSE 5173

# 设置默认的启动命令
CMD ["pnpm", "dev"]
