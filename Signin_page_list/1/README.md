# 회원가입 페이지 템플릿 시안 1

## 콘셉트

**Centered Card** — 단일 카드 중앙 배치, 한 화면에서 완결되는 MVP 회원가입 폼.

- 화면 중앙에 하나의 카드만 두고, 모든 입력을 한 스텝에서 처리한다.
- 배경과 카드를 분리해 시인성을 높이고, 버튼·포커스는 브랜드 컬러(블루)로 통일한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬(`flex center`), 카드 최대 너비 420px.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소, 터치 영역 유지.
- **접근성**: 라벨–입력 연결, `aria-invalid`/에러 메시지로 폼 검증 상태 노출, 비밀번호 보기/숨기기 토글.
- **애니메이션**: GSAP으로 카드 등장만 적용(opacity + y), 과하지 않게 0.5초 이내로 처리.

## 사용 의도

- 랜딩/서비스 첫 가입 플로우에 바로 붙이기 좋은 **단일 페이지 시안**.
- HTMX `hx-post` 연동 가능한 마크업, Alpine.js로 클라이언트 검증·토글만 담당.

## 구조

```
1/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 스타일 소스
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과 (브라우저 로드용)
└── README.md       # 본 설명
```

- **index.html**: 이메일, 이름, 비밀번호, 비밀번호 확인, 가입하기 버튼, 로그인 링크.
- **style.scss / style.css**: 변수 기반 색·간격, 미디어쿼리로 모바일 대응.
- **js/main.ts**: 이메일 형식, 이름 2자 이상, 비밀번호 8자 이상·일치 검증, Alpine `signupForm` 컴포넌트.
- **GSAP**: `.signup-card` 초기 등장만 사용.

## 기술 스택

- HTMX 1.9.x (폼 `hx-post` 연동용)
- Alpine.js 3.x (폼 상태·검증·비밀번호 토글)
- TypeScript (js/main.ts)
- SASS/SCSS → style.css
- GSAP 3.12 (카드 등장 애니메이션)
