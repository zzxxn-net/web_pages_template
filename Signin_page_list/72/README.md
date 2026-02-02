# 시안 72 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 다크 아카이브
- **UI 구조:** 단계 분할형(Progressive Form)
- **인터랙션:** 포커스 이동 중심 UX

---

## 콘셉트

다크 아카이브 톤과 단계 분할형(Progressive Form), 포커스 이동 중심 UX를 결합한 회원가입 MVP 시안입니다. 어두운 배경·아카이브 느낌의 세리프 타이포 위에 4단계(이메일·이름·비밀번호·확인)로 폼을 나누고, 다음/이전·탭 클릭 시 해당 입력으로 포커스가 자동 이동하도록 설계했습니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #0f0f10, 카드 #18191b, Cormorant Garamond·Source Serif 4, 골드 액센트(#c9a86c), 아카이브 느낌의 세리프·여백
- **단계 분할형(Progressive Form):** 4개 단계 탭(1 이메일·2 이름·3 비밀번호·4 확인), 단계별 단일 패널 표시·이전/다음·4단계에서 가입하기
- **포커스 이동 중심 UX:** 다음/이전/탭 클릭 시 단계 전환 후 해당 단계 입력란에 자동 focus, Enter로 다음 단계 이동

## 사용 의도 및 구조

- **index.html:** 메인 마크업, Alpine.js `signupForm()`(step·goNext·goPrev·goToStep·focusInputForStep), HTMX 속성, s72-steps·s72-panels·s72-nav
- **style.scss / style.css:** 시안 전용 스타일, 반응형 clamp
- **js/main.ts, js/main.js:** 검증·단계 전환·포커스 이동·GSAP 패널 전환·등장
- PC~모바일 전 범위 중앙 정렬·반응형 대응
