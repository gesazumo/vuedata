# 내부망으로 이사가기

***
## 외부망에서 선행해야 하는 작업 
1. yarn 설치.

인터넷에서 yarn을 설치한다.

2. .yarnrc 파일 생성

```
yarn-offline-mirror ".npm-packages"
yarn-offline-mirror-pruning true
```
내용 입력

3. 기존 의존모듈 & lock파일 삭제 & 캐시 삭제

기존에 있던 mode_modules와 yarn.lock 파일은 삭제하고 아래 명령어 입력.

```
yarn cache clean
```

4. yarn insatll

```
yarn install
```
install 다 되면 
/npm-packages 폴더안에 의존모듈들이 .tgz파일로 저장된다.
yarn.lock 파일도 새로 생김.

5. 반입
이상태로 소스코드 전체를 압축해서 내부망으로 반입한다.

***

## 내부망작업

1. 의존모듈 받기

```
yanr install --offline
```

2. node_module 확인

의존모듈 받아진거 확인해고 로컬서버 실행.

