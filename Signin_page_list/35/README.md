# 회원가입 페이지 템플릿 시안 35

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 네오 브루탈리즘

UI 구조: 풀스크린 몰입형

인터랙션: 상태 변화 강조

---

## 콘셉트

**네오 브루탈리즘 + 풀스크린 몰입형 + 상태 변화 강조** — **네오 브루탈리즘** 무드(3px 블랙 테두리·0 border-radius·Archivo Black 제목·대문자 라벨·오프셋 버튼 그림자)와 **풀스크린 몰입형** 구조(뷰포트 전체를 채우는 .bful-inner, 좌우 굵은 테두리로 몰입감)를 결합한 시안. **상태 변화 강조**로 포커스·유효·무효 시 필드 배경·테두리·✓/! 아이콘으로 즉시 시각 피드백을 준다.

- 시안 20(네오 브루탈리즘+마이크로 인터랙션+상태 변화), 시안 27(네오 브루탈리즘+단계 분할형+GSAP), 시안 16(다크 아카이브+풀스크린)과 달리 **네오 브루탈리즘 + 풀스크린 몰입형** 조합으로, **풀 높이 내부 영역**(min-height 100dvh)에 **상태 변화 강조**(--focused / --valid / --invalid + ✓·! 아이콘)를 적용한다.
- **상태 변화 강조**: .bful-field--focused(배경 틴트·inset box-shadow), .bful-field--valid(녹색 테두리·배경·✓ 표시), .bful-field--invalid(빨간 테두리·배경·! 표시·에러 문구). 버튼 hover 시 translate(-2px,-2px)·4px 오프셋 그림자.

## UI/UX 특징

- **레이아웃**: 풀스크린 몰입형. .signup-brutal-full이 뷰포트 전체·3px 테두리, .bful-inner가 max-width 420px·min-height 100dvh·좌우 3px 테두리로 중앙 블록. 480px 이하에서 상단 테두리만 유지.
- **네오 브루탈리즘 톤**: 배경 #f5f5f0, 내부 #ffffff, 테두리 #1a1a1a 3px, border-radius 0. Archivo Black 제목·Archivo 라벨·대문자 라벨·오프셋 버튼.
- **풀스크린 몰입형**: 내부 영역이 세로 전체를 채우며 폼이 중앙 정렬. 좌우 굵은 테두리로 화면이 한 블록으로 느껴지도록 구성.
- **상태 변화 강조**: focused(배경·inset ring), valid(녹색 테두리·배경·✓), invalid(빨간 테두리·배경·!·에러 문구).
- **반응형**: 480px 이하에서 .bful-inner min-height auto·좌우 테두리 제거·상단 테두리만.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .bful-inner(opacity + y 10) 부드러운 등장.

## 사용 의도

- **네오 브루탈리즘** 톤과 **풀스크린 몰입형** 레이아웃, **상태 변화 강조**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
35/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 풀스크린 + 상태 강조)
├── style.scss      # 시안 전용 SCSS (네오 브루탈리즘·풀스크린·상태 변화)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-brutal-full > .bful-inner(헤더 + form .bful-field × 4, --focused/--valid/--invalid, state ✓/!) + .bful-submit.
- **style.scss / style.css**: 네오 브루탈리즘 3px·0 radius·풀 높이 inner·상태별 border·background·state 아이콘.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .bful-inner.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
