FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-12
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update 

# install extra packages
# RUN apt-get -y install --no-install-recommends <your-package-list-here>

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog

