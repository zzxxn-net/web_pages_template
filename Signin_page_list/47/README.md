# 회원가입 페이지 템플릿 시안 47

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 실험적 인터페이스

UI 구조: 마이크로 인터랙션 중심

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**실험적 인터페이스 + 마이크로 인터랙션 중심 + GSAP 기반 부드러운 전환** — **실험적 인터페이스** 무드(다크 배경 #0f0f12·그리드 라인·블러 블롭·Syne·primary #a78bfa)와 **마이크로 인터랙션 중심** 구조(라벨 포커스 시 underline 확장·입력 포커스 시 scale(1.005)·버튼 호버 시 하단 라인 확장·라벨 색 전환)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 헤더(y -10)·필드(y 12, stagger)·액션(y 8) 등장 애니메이션을 적용한다.

- 시안 36(현대 판타지+마이크로+스크롤 없음), 시안 40(실험적+풀스크린+입력 반응형)과 달리 **실험적 인터페이스 + 마이크로 인터랙션 중심** 조합에 **GSAP 부드러운 전환**(헤더·필드·액션 stagger 등장)을 전면 적용한다.
- **마이크로 인터랙션**: .eim-field--focused 시 .eim-label-line width 0→100%, .eim-label-text color→primary, input scale(1.005). .eim-btn 호버 시 .eim-btn-line scaleX(0)→1, translateY(-1px).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .eim-inner(max-width 380px) 내 .eim-card(헤더 + 폼 필드 + 제출 버튼).
- **실험적 인터페이스 톤**: 배경 #0f0f12, 그리드 라인·블러 블롭·Syne·primary #a78bfa, 에러 #f87171.
- **마이크로 인터랙션 중심**: 라벨 포커스 시 underline(.eim-label-line) 확장, 입력 포커스 시 scale(1.005), 버튼 호버 시 하단 라인 확장·translateY(-1px).
- **GSAP 부드러운 전환**: .eim-header(y -10), .eim-field(y 12, stagger 0.06), .eim-actions(y 8) 등장.
- **반응형**: 480px 이하에서 카드 패딩 축소, 중앙 정렬 유지.
- **접근성**: 라벨·placeholder, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP 헤더·필드·액션 stagger 등장.

## 사용 의도

- **실험적 인터페이스** 톤과 **마이크로 인터랙션 중심** UX, **GSAP 부드러운 전환**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
47/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
