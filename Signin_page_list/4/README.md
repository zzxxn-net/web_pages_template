# 회원가입 페이지 템플릿 시안 4

## 콘셉트

**Inline Label Form** — PC에서는 각 행을 **라벨(좌) + 입력(우)** 한 줄로 배치하고, 모바일에서는 라벨 위·입력 아래로 쌓는 구조.

- 시안 1(단일 카드), 2(스플릿), 3(글래스)와 달리 **폼 레이아웃 자체**를 가로 배치로 바꾼 시안이다.
- 폼 영역만 중앙 카드로 두고, 내부는 라벨 너비 고정·입력 영역 flex로 정리한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 520px. 600px 이상에서 `.inline-row`가 `flex-direction: row`, 라벨 120px 우측 정렬, 입력 영역 flex:1.
- **반응형**: 600px 미만에서는 모든 행이 라벨 위·입력 아래 세로 배치.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-inline` 등장(opacity + y 12px), 0.45초.

## 사용 의도

- **폼이 많은 설정/관리 화면**처럼 라벨·입력을 한 줄로 보고 싶을 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
4/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-inline` > 헤더 + `.inline-form`(.inline-row 반복) + 푸터. 가입하기 행은 빈 라벨 + 버튼.
- **style.scss / style.css**: 600px 브레이크포인트, 라벨 120px·우측 정렬, 입력 영역 flex.
- **js/main.ts**: 시안 1·2·3과 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.signup-inline`.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
