# [React Study](https://medium.com/wasd/%EC%9B%B9%ED%8C%A9-webpack-%EA%B3%BC-%EB%B0%94%EB%B2%A8-babel-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-react-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-fb87d0027766)

## Webpack

### Webpack : 모듈 번들러(Module Bundler)

- 여러가지의 모듈(JS, CSS, HTML, Img 등)로 나눠서 작업 한 후 하나의 파일로 묶어서 브라우저가 읽을 수 있게 함

### webpack Property

- `entry` : 웹팩에서 자원을 변환 할 때 최초 진입점, JS파일경로! 모듈을 로딩하고 하나의 파일로 묶는다
- `output` : 웹팩에서 하나로 합친 것을 반환 할 위치!
- `Loader` : 원래 웹팩은 JS랑 JSON만 읽을 수 있음 그러나 `Loader`를 통해서 다른 자원(CSS, HTML, Img)을 읽을 수 있게 도와줌, 파일을 해석하고 변환하는 과정에 영향을 끼친다
- `plugin` : 기본적인 동작(합치는 동작) 외에 추가적인 동작을 할 수 있게 해줌, 결과물의 형태를 변환시킴

## Babel : JS의 ES6문법을 ES5문법으로 변환시켜주는 트렌스파일러

## React 개발 환경 구성

- `NodeJS`와 `npm`을 사용
- `Node JS` : 브라우저 뿐만 아니라 컴퓨터 환경에서도 코드를 읽을 수 있게 해주는 것
- `npm` : `Node Package Manager`의 약자, `NodeJS`에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할, 설치/관리를 수행할 수 있는 `CLI(명령 줄 인터페이스: Command-Line Interface)`를 제공

1.  작업할 폴더 만들기

    > `mkdir webpack-react-example && cd webpack-react-example` ---> `npm init -y`
    >
    > 이렇게 만들라고 하는데 그냥 일단 새로만들기 해서 폴더를 만든다

2.  바벨 설정

    > 바벨은 개발 단계에서만 사용하므로 -D 붙여주기
    >
    > `npm i -D @babel/core @babel/preset-env @babel/preset-react`
    >
    > `NodeJS`에 입력하면 `package.json`파일 안에 `devDependencies`여기에 들어간다
    > `babel-plugin-dynamic-import-node`폴더에서 `.babelrc`파일을 찾는다

        {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
        }

    > 추가하면 바벨 기본 설정 끝!

3.  웹팩 설정

    > `npm i -D webpack(모듈 번들러인 웹팩) webpack-cli(웹팩의 커맨드 라인 인터페이스) webpack-dev-server(개발 서버를 제공)` > `webpack.config.js` 파일 만들기

        // webpack.config.js

        module.exports = {
        mode: 'development', // 개발 환경
        entry: './src/index.js', // 애플리케이션 진입점
        output: { // 번들된 파일을 저장할 경로
            filename: 'bundle.[hash].js'
            // 애플리케이션이 컴파일 될 때 웹팩에서 생성된 해시를 사용
        },
        };

    > 잘 설정 했는지 확인을 해보자

        // package.json

        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack"
        },

    > `src/index.js`만들기
    > `npm start`하면 `dist`폴더 만들어지고 `bundle.[hash].js`파일 생성됨

    > `npm i -D babel-loader(es6 를 es5 로 바꿔주는 바벨을 웹팩에서 사용할 수 있음) html-loader(웹팩이 html을 읽을 수 있게 해줌` > `loader`은 `module`과 `rules`를 사용

        module: {
        rules: [
            {
            test: '빌드할 파일 확장자 정규식'
            exclude: '제외할 파일 정규식'
            use: {
                loader: '사용할 로더 이름'
                option: '로더 옵션'
            }
            }
        ]
        }

    > `webpack.config.js`파일에 추가

        module: {
        rules: [
        {
            test: /\.(js|jsx)$/, // es6과 관련된 `loader`,`.js`와 함꼐 `.jsx`확장자도 같이 번들함
            exclude: /node_modules/, // `node_modules` 제외
            use: {
            loader: "babel-loader",
            },
        },
        {
            test: /\.html$/, // `html loader`
            use: [
            {
                loader: "html-loader",
                options: {
                minimize: true, // 코드 최적화 하는 옵션
                },
            },
           ],
          },
         ],
        },

> `plugin`추가 `npm i -D html-webpack-plugin`

    plugins: [
        new HtmlWebpackPlugin({
        template: 'public/index.html', // public/index.html 를 템플릿으로 지정
        })
    ],

> 웹팩에서 개발 서버 제공 `npm i -D webpack-dev-server`

    // package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack-dev-server"
    },

> `webpack.config.js`파일에 `devServer`추가~

    devServer: {
        host: 'localhost', // 개발서버 url
        port: port, // 기본값으로 3000번 포트를 사용
        open: true, // 서버 실행 될 때 자동으로 열어줄건지 아닌지
    },

> [더 많은 devServer 옵션 보기](https://webpack.js.org/configuration/dev-server/)
