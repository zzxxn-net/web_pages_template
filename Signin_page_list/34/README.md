# 회원가입 페이지 템플릿 시안 34

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 미래적 클린

UI 구조: 카드 분리형 레이아웃

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**미래적 클린 + 카드 분리형 레이아웃 + GSAP 기반 부드러운 전환** — **미래적 클린** 무드(밝은 그레이 그라데이션·화이트 카드·클린 타이포·DM Sans·스카이 블루 primary)와 **카드 분리형** 구조(헤더 카드 + 이메일·이름·비밀번호·비밀번호 확인·제출 버튼 각각 독립 카드)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 모든 카드가 스태거 등장(y + opacity)한다.

- 시안 17(미래적 클린+비대칭), 시안 28(미래적 클린+단일 포커스), 시안 18(감성 테크+카드 분리형)과 달리 **미래적 클린 + 카드 분리형 레이아웃** 조합으로, **필드별 독립 카드** 5장(헤더 + 이메일 + 이름 + 비밀번호 + 비밀번호 확인 + 제출)에 **GSAP 스태거**를 적용한다.
- **GSAP 기반 부드러운 전환**: .fuc-card 전체를 opacity 0, y 14에서 등장, duration 0.42, stagger 0.06, ease power2.out.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .fuc-wrap(max-width 400px) 내 **헤더 카드** + **필드 카드 4개** + **제출 카드** 6개 분리, gap 0.75rem.
- **미래적 클린 톤**: 배경 그라데이션(#f1f5f9 → #e2e8f0 → #f8fafc), 카드 #ffffff·얇은 보더·은은한 그림자, primary #0ea5e9(스카이 블루), 텍스트 #0f172a·#64748b.
- **카드 분리형**: .fuc-card--header(제목·설명), .fuc-card--field(라벨·입력·에러) × 4, .fuc-card--submit(가입하기 버튼). 포커스 시 해당 필드 카드 border·box-shadow primary 링.
- **반응형**: 480px 이하에서 카드 패딩·라운드 축소, 중앙 정렬 유지.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .fuc-card 스태거(y 14 → 0, opacity 0 → 1, stagger 0.06).

## 사용 의도

- **미래적 클린** 톤과 **카드 분리형** 레이아웃, **GSAP 부드러운 전환**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
34/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 필드별 카드 분리)
├── style.scss      # 시안 전용 SCSS (미래적 클린·카드 분리·포커스 링)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 카드 스태거
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-future-cards > .fuc-wrap(.fuc-card--header + form 내 .fuc-card--field × 4 + .fuc-card--submit).
- **style.scss / style.css**: 미래적 클린 그라데이션·화이트 카드·fuc-card--focused/--invalid.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .fuc-card 스태거.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
