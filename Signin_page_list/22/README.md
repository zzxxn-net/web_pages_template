# 회원가입 페이지 템플릿 시안 22

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 카드 분리형 레이아웃

인터랙션: 스크롤 없는 고정 플로우

---

## 콘셉트

**카드 분리형 레이아웃 + 다크 아카이브** — **헤더 카드**와 **폼 카드**를 분리하고, **다크 아카이브** 무드(세피아·다크 브라운 톤)로 일관된 UI를 구성한 시안. **스크롤 없는 고정 플로우**로 뷰포트 내에 전체 콘텐츠가 고정·배치된다.

- 시안 16(다크 아카이브+풀스크린 몰입형), 시안 18(감성 테크+카드 분리형)과 달리 **다크 아카이브 + 카드 분리형** 조합으로, **헤더 카드**와 **폼 카드**를 분리·배치하고 **스크롤 없는 고정 플로우**(main overflow hidden, .arch-fixed max-height calc(100dvh - 32px), 폼 카드만 overflow auto)를 적용한다.
- **스크롤 없는 고정 플로우**: 뷰포트 100dvh, padding 16px, .arch-fixed max-height로 전체가 화면 안에 들어가도록 설계. 폼 카드만 내용 초과 시 스크롤.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0f0d0b, .arch-fixed(max-width 400px, max-height calc(100dvh - 32px)), overflow hidden.
- **다크 아카이브 톤**: 세리프 제목(Georgia), 산세리프 본문. 텍스트 #e8e4dc, 보조 #9a948a, 보더 #2a2520, 강조 #8b7355(브론즈).
- **카드 분리형**: .arch-card--head(제목·설명), .arch-card--form(폼·푸터). 헤더 카드 flex-shrink: 0, 폼 카드 flex: 1, min-height: 0, overflow: auto.
- **스크롤 없는 고정 플로우**: main overflow hidden, .arch-fixed max-height로 스크롤 없이 고정. 폼 카드 내부만 필요 시 스크롤.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .arch-card 스태거(opacity + y 10, stagger 0.06), 0.45초.

## 사용 의도

- **카드 분리형** 레이아웃과 **다크 아카이브** 무드, **스크롤 없는 고정 플로우**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 검증·제출.

## 구조

```
22/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 헤더 카드 + 폼 카드)
├── style.scss      # 시안 전용 SCSS (다크 아카이브·카드 분리·스크롤 없는 고정)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (검증), GSAP 카드 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-dark-arch.signup-cards-fixed > .arch-fixed > .arch-card--head + .arch-card--form(폼 + 푸터).
- **style.scss / style.css**: $bg/$card-bg/$border, .arch-fixed max-height·overflow, 카드 분리·폼 카드 overflow auto.
- **js/main.ts**: validate*, handleSubmit, GSAP .arch-card 스태거.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
