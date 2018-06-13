FROM harbor.dankal.cn/common/nodejs

ENV VIRTUAL_HOST web-sf.dankal.cn
ENV LETSENCRYPT_HOST web-sf.dankal.cn
ENV LETSENCRYPT_EMAIL bingo@dankal.cn

COPY . /app
