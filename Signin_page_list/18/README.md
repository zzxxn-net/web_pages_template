# 회원가입 페이지 템플릿 시안 18

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 감성 테크

UI 구조: 카드 분리형 레이아웃

인터랙션: GSAP 기반 부드러운 전환, 입력 반응형 애니메이션

---

## 콘셉트

**카드 분리형 레이아웃 + 감성 테크** — **헤더 카드**와 **폼 카드**를 분리하여 두 개의 독립 카드로 구성하고, **감성 테크** 무드(따뜻한 그라데이션·부드러운 그림자·퍼플 악센트)로 일관된 UI를 구성한 시안.

- 시안 1~17(단일·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘·단계형·풀스크린·비대칭)과 달리 **헤더 카드**(제목·설명)와 **폼 카드**(입력·버튼·푸터)를 **분리된 카드**로 배치한다.
- **GSAP 기반 부드러운 전환**: 헤더 카드 → 폼 카드 순으로 스태거 등장(y + opacity). **입력 반응형 애니메이션**: 포커스 시 해당 필드에 scale(1.01)·border·box-shadow 전환.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .emotion-wrap(max-width 400px) 내 **헤더 카드** + **폼 카드** 2개 분리, gap 1rem.
- **감성 테크 톤**: 배경 그라데이션(#fef3f2 → #fce7f3 → #ede9fe), 카드 반투명·backdrop-filter, 보더·그림자 부드럽게, primary #a855f7(퍼플).
- **카드 분리형**: .emotion-card--header(제목·설명), .emotion-card--form(폼·푸터). 각 카드 독립 스타일·등장 애니메이션.
- **입력 반응형 애니메이션**: .emotion-field--focused 시 필드 scale(1.01), 입력 border·ring primary. Alpine focusedField + onInputFocus/clearFocus로 포커스 필드 강조.
- **반응형**: 480px 이하에서 패딩·라운드 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .emotion-card--header(opacity + y 14), .emotion-card--form(opacity + y 18, delay 0.1) 부드러운 전환.

## 사용 의도

- **카드 분리형** 레이아웃과 **감성 테크** 무드를 원할 때 활용.
- HTMX hx-post 연동 가능, Alpine.js로 포커스·검증·제출. GSAP으로 카드 등장, CSS로 입력 반응.

## 구조

```
18/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 헤더 카드 + 폼 카드)
├── style.scss      # 시안 전용 SCSS (감성 테크·카드 분리·입력 반응)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, onInputFocus, 검증), GSAP 카드 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-emotion.signup-cards > .emotion-wrap > .emotion-card--header + .emotion-card--form(폼 + 푸터). 필드별 :class="emotion-field--focused".
- **style.scss / style.css**: $bg 그라데이션, 카드 분리·backdrop-filter, .emotion-field--focused scale·ring, primary #a855f7.
- **js/main.ts**: focusedField, onInputFocus(el), clearFocus(), validate*, handleSubmit, GSAP .emotion-card--header, .emotion-card--form 스태거.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
