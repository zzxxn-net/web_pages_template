# 회원가입 페이지 템플릿 시안 63

현대 판타지 톤의 단계 분할형(Progressive Form) 회원가입 페이지 MVP 시안입니다.  
스텝 인디케이터(1–2–3–4)와 단계별 블록으로 구분하고, 입력 시 반응형 애니메이션을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** 입력 반응형 애니메이션  

## 콘셉트 및 UI/UX 특징

- **현대 판타지:** 따뜻한 다크 배경(#1c1915)·Cormorant Garamond·Lora, 골드/앰버 액센트(#c9a227)로 판타지 감성을 줍니다.
- **단계 분할형(Progressive Form):** 이메일(1)·이름(2)·비밀번호(3)·비밀번호 확인(4)을 각각 `s63-step-block`으로 감싸 단계별 블록을 구성하고, 헤더에 스텝 인디케이터(1–2–3–4)를 두어 포커스에 따라 현재 스텝(active)·완료 스텝(done)을 표시합니다.
- **입력 반응형 애니메이션:** 포커스 시 해당 단계 블록 테두리·그림자 강조, 입력창 scale 1.02(CSS·GSAP), 블러 시 1로 복귀. GSAP으로 `.s63-wrap` 등장 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP  
- **파일:** `index.html`(마크업), `style.scss` → `style.css`(시안 전용 스타일), `js/main.ts` → `js/main.js`(검증·제출·stepActive·stepDone·GSAP 등장·입력 scale)  
- **동작:** Alpine.js로 focusedField·errors·stepActive·stepDone·검증·제출, GSAP으로 등장·입력 포커스 scale.

## 중앙 정렬 및 반응형

- `.s63-wrap`은 뷰포트 가로·세로 중앙에 배치하고, 헤더·폼은 중앙 정렬을 유지합니다.  
- `max-width: 400px`·패딩으로 PC~모바일 전 범위 반응형을 적용했습니다.
