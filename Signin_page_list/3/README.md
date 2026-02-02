# 회원가입 페이지 템플릿 시안 3

## 콘셉트

**Glassmorphism** — 그라데이션 배경 위에 반투명·블러 처리된 카드 하나를 두고, 그 안에 회원가입 폼을 배치한 구조.

- 시안 1(단일 카드), 시안 2(스플릿 패널)와 달리 **전체 배경을 그라데이션**으로 채우고, **유리 효과(backdrop-filter)** 카드만 중앙에 둔다.
- 라이트/다크 대비가 아닌 **배경과 카드가 같은 톤**으로 어우러지도록 설계했다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬, 카드 최대 너비 400px. 배경은 135deg 그라데이션(indigo → violet).
- **글래스 카드**: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.12)`, 얇은 흰색 테두리.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-glass` 등장(opacity + scale 0.98 → 1), 0.5초.

## 사용 의도

- 랜딩/마케팅 페이지에서 **비주얼을 강조**하고 싶을 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
3/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-glass` > 헤더 + 폼 + 푸터. 이메일·이름·비밀번호·비밀번호 확인·가입하기·로그인 링크.
- **style.scss / style.css**: 그라데이션, 글래스 변수, 입력 필드 반투명 스타일.
- **js/main.ts**: 시안 1·2와 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.signup-glass`(scale 등장).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
