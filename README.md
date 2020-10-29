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
  mkdir webpack-react-example && cd webpack-react-example ---> npm init -y
 이렇게 만들라고 하는데 나는 잘 모르겠고 그냥 일단 새로만들기 해서 폴더를 만든다
