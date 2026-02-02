# 회원가입 페이지 템플릿 시안 7

## 콘셉트

**Sectioned Form** — 폼을 **섹션 제목 + 구분선**으로 나누어, "기본 정보"(이메일·이름)와 "비밀번호"(비밀번호·비밀번호 확인) 두 블록으로 보여 주는 구조.

- 시안 1~6(단일 카드·스플릿·글래스·인라인·벤토·다크)과 달리 **시맨틱 섹션**으로 그룹을 나누고, 각 섹션에 h2 제목을 둔다.
- 뷰포트는 가로·세로 중앙 정렬을 유지하고, 카드 내부만 섹션 + 구분선으로 구분한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 440px. `.form-section` 두 개: 첫 번째는 "기본 정보", 두 번째는 "비밀번호". 섹션 사이 `border-bottom` 구분선.
- **섹션 제목**: `.section-heading` — 소문자 대신 대문자 스타일(uppercase), 작은 글씨, letter-spacing. `aria-labelledby`로 접근성 연결.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기, 섹션 `aria-labelledby`.
- **애니메이션**: GSAP으로 `.form-section` 2개에 stagger(0.08s), opacity + y 12px, 0.4초.

## 사용 의도

- **입력 항목이 여러 그룹**으로 나뉠 때, 시맨틱하게 구분해 주고 싶을 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
7/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-sectioned` > 헤더 + form > section#section-basic(기본 정보) + section#section-password(비밀번호) + actions + 푸터.
- **style.scss / style.css**: 섹션 구분선, 섹션 제목 스타일, 강조색 #c2410c(오렌지).
- **js/main.ts**: 시안 1~6과 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.form-section`(stagger).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
