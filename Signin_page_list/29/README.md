# 회원가입 페이지 템플릿 시안 29

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 사이버 미니멀

UI 구조: 카드 분리형 레이아웃

인터랙션: 스크롤 없는 고정 플로우

---

## 콘셉트

**카드 분리형 레이아웃 + 사이버 미니멀** — **사이버 미니멀** 무드(다크 배경·모노스페이스·얇은 테두리·primary 블루)와 **카드 분리형** 구조(헤더 카드 + 폼 카드 + 푸터 링크 분리)를 결합한 시안. **스크롤 없는 고정 플로우**로 뷰포트 고정(max-height 100dvh), 페이지 스크롤 없이 카드 영역 내에서만 콘텐츠 배치·필요 시 폼 카드 내부 스크롤로 처리한다.

- 시안 15(사이버 미니멀+단계 분할형), 시안 23(사이버 미니멀+풀스크린), 시안 22(다크 아카이브+카드 분리형+스크롤 없는)와 달리 **사이버 미니멀 + 카드 분리형** 조합으로, **스크롤 없는 고정 플로우**(.cmcard-fixed max-height calc(100dvh - 32px), overflow hidden)를 적용한다.
- **인터랙션**: GSAP .cmcard-card 등장(stagger 0.06s).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0c0e10, .cmcard-fixed(max-width 400px, max-height calc(100dvh - 32px), overflow hidden) 내 헤더 카드(.cmcard-card--head) + 폼 카드(.cmcard-card--form) + 푸터.
- **사이버 미니멀 톤**: JetBrains Mono 제목·라벨·버튼, Inter 입력. 텍스트 #e6edf3, 보조 #8b949e, primary #58a6ff, 카드 배경 #161b22, 보더 #21262d.
- **카드 분리형**: 헤더 카드(제목·설명)와 폼 카드(이메일·이름·비밀번호·비밀번호 확인·가입하기) 분리. 폼 카드 flex 1, min-height 0, overflow auto로 뷰포트 초과 시 카드 내부만 스크롤.
- **반응형**: 480px 이하에서 카드 패딩·제목 크기 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .cmcard-card 등장(opacity + y 10, stagger 0.06s, 0.45s).

## 사용 의도

- **사이버 미니멀** 톤과 **카드 분리형** 회원가입, **스크롤 없는 고정 플로우**가 필요한 페이지에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 검증·제출.

## 구조

```
29/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 카드 분리형)
├── style.scss      # 시안 전용 SCSS (사이버 미니멀·카드 분리·고정 플로우)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (검증), GSAP 카드 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-cyber-cards.signup-fixed > .cmcard-fixed > .cmcard-card--head + .cmcard-card--form(form) + .cmcard-footer.
- **style.scss / style.css**: 사이버 미니멀 색·모노스페이스·카드·고정 플로우.
- **js/main.ts**: validate*, handleSubmit, GSAP .cmcard-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
