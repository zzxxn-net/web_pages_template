# 회원가입 페이지 템플릿 시안 25

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 현대 판타지

UI 구조: 풀스크린 몰입형

인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

**풀스크린 몰입형 + 현대 판타지** — 뷰포트 전체를 쓰는 **풀스크린 몰입** 레이아웃과, **현대 판타지** 무드(다크 톤·보라빛 그라데이션·세리프 제목·신비로운 글로우)를 결합한 시안. **입력 반응형 애니메이션**으로 포커스 시 필드 border·ring·scale 전환을 적용한다.

- 시안 19(현대 판타지+단일 포커스), 시안 23(사이버 미니멀+풀스크린)과 달리 **현대 판타지 + 풀스크린 몰입형** 조합으로, 카드 없이 .ff-wrap만 중앙에 두고, **입력 반응형 애니메이션**(--focused 시 scale(1.01)·ring)을 적용한다.
- **입력 반응형 애니메이션**: 포커스 시 해당 필드 border-color primary, box-shadow ring, transform scale(1.01). blur 시 검증 후 invalid 시 border·ring 에러 색.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 다크 그라데이션(#1a1625 → #1f1a28) + 상단 보라 글로우(.ff-bg). .ff-wrap(max-width 400px). 카드 박스 없이 풀스크린 몰입.
- **현대 판타지 톤**: Cormorant Garamond/Noto Serif KR 제목, Pretendard 입력·라벨. 텍스트 #f0e9f5, 보조 #a89bb8, primary #c9a0dc, 보더·배경 반투명.
- **입력 반응형 애니메이션**: .ff-field--focused 시 .ff-input·.ff-pw-wrap에 border-color primary, box-shadow 0 0 0 2px primary-soft, transform scale(1.01). .ff-field--invalid 시 border·box-shadow 에러 색. transition 0.25s.
- **반응형**: 480px 이하에서 제목 크기 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .ff-wrap 등장(opacity + y 16), 0.5초.

## 사용 의도

- **풀스크린 몰입** 레이아웃과 **현대 판타지** 무드, **입력 반응형 애니메이션**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
25/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 풀스크린·카드 없음)
├── style.scss      # 시안 전용 SCSS (현대 판타지·풀스크린·입력 반응)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-fantasy-full.signup-full > .ff-bg + .ff-wrap > 헤더 + form(.ff-field × 4, --focused/--invalid) + 가입하기 + 푸터.
- **style.scss / style.css**: 다크 그라데이션·글로우, $primary #c9a0dc, .ff-field--focused/--invalid, 입력 focus scale·ring.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .ff-wrap.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
