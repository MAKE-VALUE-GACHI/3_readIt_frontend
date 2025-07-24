# 리드잇 프론트엔드 컨벤션

## 디자인 패턴

- 코드 작성에는 React Solid 원칙을 따른다

## 폴더구조

- 공통된 파일들은 용도에 맞게 src 폴더 내에 배치한다.
    ㄴapp
    ㄴcomponents
    ㄴhooks
    ㄴservices
    ㄴlib
    ㄴutils

- 특정 페이지에 종속된 파일들은 각 폴더 내부에 정의한다.

    ㄴapp
        ㄴ_components
        ㄴ_hooks
        ㄴ_utils

## 커밋 컨벤션

commitizen을 활용하여 커밋을 생성한다.


## CI/CD

- Husky로 commit lint, push build (예정)
- Github Action 자동배포
