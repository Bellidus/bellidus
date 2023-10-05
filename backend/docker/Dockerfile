# Use uma imagem base do Python 3.9-slim
FROM python:3.9-slim

# Defina a variável de ambiente para garantir que a saída python seja enviada diretamente ao terminal sem buffering
ENV PYTHONUNBUFFERED=1

# Instale as dependências do sistema necessárias para o Poetry e MongoDB (ajuste conforme o banco NoSQL desejado)
RUN apt-get update && apt-get install -y curl && \
    curl -sSL https://install.python-poetry.org | sh

# Copie o arquivo de dependências do projeto (pyproject.toml e poetry.lock) para o container
WORKDIR /app
COPY pyproject.toml poetry.lock /app/

# Instale as dependências usando o Poetry
RUN poetry config virtualenvs.create false && poetry install

# Copie o restante do projeto para o container
COPY . /app/
