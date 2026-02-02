# 회원가입 페이지 템플릿 시안 40

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 실험적 인터페이스

UI 구조: 풀스크린 몰입형

인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

**실험적 인터페이스 + 풀스크린 몰입형 + 입력 반응형 애니메이션** — **실험적 인터페이스** 무드(다크 배경·32px 그리드 라인·블러 블롭 2개·레드/티얼 강한 대비·Syne 폰트)와 **풀스크린 몰입형** 구조(뷰포트 전체 height 100dvh·고정 배경·중앙 카드)를 결합한 시안. **입력 반응형 애니메이션**으로 포커스 시 해당 필드 border·3px ring·24px glow·scale(1.01) 전환을 적용한다.

- 시안 21(실험적+풀스크린+GSAP), 시안 23(사이버 미니멀+풀스크린+입력 반응형), 시안 33(실험적+단계 분할형)과 달리 **실험적 인터페이스 + 풀스크린 몰입형** 조합으로, **풀 뷰포트** 내 그리드·블롭 배경 + 중앙 카드에 **입력 반응형 애니메이션**(--focused 시 scale·ring·glow)을 적용한다.
- **입력 반응형 애니메이션**: .expfull-field--focused 시 .expfull-input·.expfull-pw-wrap border primary, box-shadow 3px ring + 24px glow, transform scale(1.01). invalid 시 border·ring 에러 색.

## UI/UX 특징

- **레이아웃**: 풀스크린 몰입형. main height 100dvh·overflow auto. .expfull-bg(고정 그리드·블롭) + .expfull-inner(중앙) 내 .expfull-card(max-width 400px).
- **실험적 인터페이스 톤**: 배경 #0d0d0f, 32px 그리드 라인, 레드·티얼 블러 블롭 2개, 카드 반투명·backdrop-filter, primary #ff6b6b(레드), 악센트 #4ecdc4(티얼), Syne 폰트.
- **풀스크린 몰입형**: 뷰포트 전체를 채우며 배경이 고정되고 카드만 중앙에 배치. 스크롤 시에도 배경 고정.
- **입력 반응형 애니메이션**: 포커스 시 필드 scale(1.01)·3px primary ring·24px glow. invalid 시 에러 ring.
- **반응형**: 480px 이하에서 카드 패딩 축소, 중앙 정렬 유지.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .expfull-card(y 12 → 0), .expfull-blob(opacity·scale, stagger).

## 사용 의도

- **실험적 인터페이스** 톤과 **풀스크린 몰입형** 레이아웃, **입력 반응형 애니메이션**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
40/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 풀스크린 + 입력 반응형)
├── style.scss      # 시안 전용 SCSS (실험적·풀스크린·입력 반응형)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 카드·블롭
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-exp-full > .expfull-bg(라인·블롭) + .expfull-inner > .expfull-card(헤더 + form .expfull-field × 4, --focused/--invalid) + .expfull-submit.
- **style.scss / style.css**: 실험적 그리드·블롭·풀스크린·expfull-field--focused/--invalid scale·ring·glow.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .expfull-card·.expfull-blob.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
