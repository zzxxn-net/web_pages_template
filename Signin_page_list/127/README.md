# 시안 127 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

라이트 톤(#f0f4f8)·스카이 악센트(#0ea5e9)·Outfit 기반의 **미래적 클린** 무드에, **마이크로 인터랙션 중심**(hover 시 input border 색·포커스 시 ring·valid 시 ✓ s127-pop·invalid 시 s127-shake·버튼 hover translateY(-2px))과 **입력 반응형 애니메이션**(포커스 시 라벨 색·위치·input ring, 유효 시 체크 팝, 오류 시 셰이크·에러 문구 팝)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **미래적 클린:** 배경 #f0f4f8, 입력 #fff, Outfit, 스카이 #0ea5e9·녹색 #10b981·에러 #ef4444, 10px 라운드.
- **마이크로 인터랙션:** hover input border accent; focus ring 3px; valid ✓ s127-pop; invalid s127-shake; 버튼 hover lift·shadow.
- **입력 반응형 애니메이션:** focus → 라벨 translateY(-0.15rem)·색; valid → ✓ scale 팝; invalid → input shake·에러 팝.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
