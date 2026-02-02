# 회원가입 페이지 템플릿 시안 2

## 콘셉트

**Split Panel** — 데스크톱에서 좌측 브랜드 패널·우측 폼 영역으로 나누고, 모바일에서는 상단 브랜드 + 하단 폼으로 쌓는 구조.

- 시안 1(Centered Card)과 달리 **2열 레이아웃**으로 브랜딩 영역과 입력 영역을 분리한다.
- 뷰포트 전체는 가로·세로 중앙 정렬을 유지하고, 내부만 그리드로 분할한다.

## UI/UX 특징

- **레이아웃**: PC 640px 이상에서 `grid 42% / 1fr`, 좌측 다크 패널(브랜드), 우측 화이트 폼. 모바일에서는 `grid rows: auto 1fr`로 상단 브랜드·하단 폼.
- **반응형**: 640px 브레이크포인트, 패딩·타이포 조정, 터치 영역 유지.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-panel` 등장(opacity + y 20px), 0.5초.

## 사용 의도

- 브랜드/이미지 영역을 강조하고 싶을 때 사용하는 **스플릿 레이아웃 시안**.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
2/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-panel` > `.signup-brand` + `.signup-form-section`, 이메일·이름·비밀번호·비밀번호 확인·가입하기·로그인 링크.
- **style.scss**: 변수·그리드·미디어쿼리, 다크/라이트 구분.
- **js/main.ts**: 시안 1과 동일 검증 로직, Alpine `signupForm`, GSAP 대상만 `.signup-panel`.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
