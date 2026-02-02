# 회원가입 페이지 템플릿 시안 19

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 현대 판타지

UI 구조: 단일 포커스 입력 흐름

인터랙션: 포커스 이동 중심 UX

---

## 콘셉트

**단일 포커스 입력 흐름 + 현대 판타지** — **한 번에 한 질문·한 입력**만 노출하고, 다음/이전으로 **포커스 이동**하며 진행하는 **현대 판타지** 무드(다크 그라데이션·소프트 글로우·퍼플 악센트)로 일관된 UI를 구성한 시안.

- 시안 1~18(단일 카드·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘·단계형·풀스크린·비대칭·카드 분리형)과 달리 **4단계 단일 포커스**(1: 이메일 → 2: 이름 → 3: 비밀번호 → 4: 비밀번호 확인 + 가입하기)로, 한 화면에 하나의 입력만 노출한다.
- **포커스 이동 중심 UX**: 다음/이전 클릭 또는 Enter 시 GSAP으로 단계 전환 후 해당 입력에 자동 포커스. 단계 인디케이터(점 4개) 클릭으로 해당 단계 이동(앞으로 이동 시 중간 단계 검증).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .fantasy-wrap(max-width 400px). 현대 판타지 톤: 배경 그라데이션(#1a1625 → #2d1f3d → #1e1b2e), 카드 반투명·backdrop-filter, 상단 소프트 글로우, primary #c084fc(퍼플).
- **단일 포커스 입력 흐름**: .fantasy-step × 4, 각 단계에 프롬프트 문구 + 필드 1개 + 이전/다음 또는 가입하기. x-show="step === n"으로 한 번에 한 단계만 표시.
- **포커스 이동**: goNext/goPrev/goToStep 호출 시 validateCurrentStep 후 step 변경, $nextTick 후 해당 단계 입력 필드에 focus().
- **반응형**: 480px 이하에서 패딩·라운드·프롬프트 크기 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기, 단계 dots aria-current.
- **애니메이션**: GSAP .fantasy-card 등장(opacity + y 20). 단계 전환 시 현재 step 슬라이드 아웃 → 다음 step 슬라이드 인(또는 이전 시 역방향).

## 사용 의도

- **단일 포커스·한 번에 한 입력** 흐름과 **현대 판타지** 무드를 원할 때 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·검증·포커스·GSAP 트리거.

## 구조

```
19/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 4단계 단일 포커스)
├── style.scss      # 시안 전용 SCSS (현대 판타지·단일 포커스·포커스 이동)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext, goPrev, goToStep, focusInputForStep, 검증), GSAP 카드·단계 전환
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-fantasy.signup-single-focus > .fantasy-wrap > .fantasy-card > form(.fantasy-step × 4) + .fantasy-dots(4) + 푸터.
- **style.scss / style.css**: $bg 그라데이션, .fantasy-glow, 카드·입력·버튼·dots, primary #c084fc.
- **js/main.ts**: step(1~4), validateCurrentStep, focusInputForStep(s), goNext( GSAP 전환 + 포커스 ), goPrev( GSAP 역전환 + 포커스 ), goToStep(n), handleSubmit, GSAP .fantasy-card 등장·단계 전환.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
