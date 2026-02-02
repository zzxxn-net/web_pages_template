# 시안 124 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

웜 톤(#faf8f5)·Cormorant Garamond 이탤릭·앰버 악센트(#8b6914) 기반의 **현대 판타지** 무드에, **단일 포커스 입력 흐름**(포커스 필드만 강조·나머지 dim·Enter로 다음 필드 이동)과 **입력 반응형 애니메이션**(포커스 시 라벨 플로팅·테두리 글로우·유효 시 체크 팝·오류 시 에러 문구 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **현대 판타지:** 배경 #faf8f5, Cormorant Garamond 이탤릭 제목·버튼, 앰버(#8b6914)·녹색(#5a7d52) 악센트, 12px 라운드.
- **단일 포커스 입력 흐름:** 포커스 필드만 opacity 1·scale 1, 비포커스 필드 opacity 0.58; Enter로 다음 필드 포커스 이동, GSAP으로 전환.
- **입력 반응형 애니메이션:** 포커스/입력 시 라벨 translateY(-1.5rem)·scale(0.9); 포커스 시 input border·box-shadow; valid 시 ✓ s124-pop; invalid 시 에러 s124-pop.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
