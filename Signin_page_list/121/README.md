# 시안 121 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 사이버 미니멀  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

밝은 그레이(#f0f4f8)·시안 액센트(#06b6d4)·DM Sans 기반의 **사이버 미니멀** 무드에, **단계 분할형(Progressive Form)**(1단계: 이메일·이름 → 2단계: 비밀번호·비밀번호 확인, 단계 인디케이터 1–2)과 **GSAP 기반 부드러운 전환**(단계 전환 시 슬라이드·페이드, 진입 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **사이버 미니멀:** 배경 #f0f4f8, 입력 #fff, 액센트 #06b6d4, DM Sans, 10px 라운드·미니멀.
- **단계 분할형:** step 1(이메일·이름·다음) / step 2(비밀번호·비밀번호 확인·이전·가입하기). 단계 인디케이터(1–2 점·연결선)로 진행도 표시.
- **GSAP 전환:** goNext 시 step2 from(x: 20, opacity: 0); goPrev 시 step1 from(x: -20, opacity: 0). 진입 시 inner·header·formWrap from.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 380px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 단계별 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 380px로 PC·모바일 전 범위 대응.
