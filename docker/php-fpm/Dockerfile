FROM php:8.3.12-fpm

RUN mkdir -p /usr/share/man/man1 && apt-get update -q -y && apt-get install -q -y --no-install-recommends build-essential --no-install-suggests libxml2-dev libmemcached-dev libmemcached11 libssl-dev libfreetype6-dev rsync \
    libcurl4-openssl-dev libzip-dev libmagickwand-dev libmagickcore-dev libjpeg62-turbo-dev libmcrypt-dev libxpm-dev libpng-dev libicu-dev libxslt1-dev ca-certificates openssl \
    default-mysql-client openssh-client default-jre default-jre-headless curl unzip git imagemagick wget gnupg jpegoptim && \
    rm -rf /var/lib/apt/lists/* && \
    mkdir -p /root/.ssh && ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts

RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql

RUN wget http://www.python.org/ftp/python/2.7.3/Python-2.7.3.tgz && tar -xzf Python-2.7.3.tgz
RUN cd Python-2.7.3 && ./configure --prefix=/usr --enable-shared && make && make install

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
SHELL ["/bin/bash", "-l", "-c"]
RUN nvm install 18.20.4 && cp /root/.nvm/versions/node/v18.20.4/bin/node /usr/bin/node
RUN npm install -g uglify-js uglifycss

ADD http://pngquant.org/pngquant-2.17.0-src.tar.gz /usr/src
RUN cd /usr/src && \
    tar xvzf pngquant-2.17.0-src.tar.gz && \
    cd pngquant-2.17.0 && make && make install && \
    cd .. && rm pngquant-2.17.0-src.tar.gz && rm -rf pngquant-2.17.0

RUN docker-php-ext-install gd
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-xpm

RUN docker-php-ext-install intl xsl zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -q -y && apt-get install -q -y --no-install-recommends yarn && \
    apt-get clean

CMD ["php-fpm"]
