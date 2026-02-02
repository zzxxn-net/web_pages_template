# 시안 73 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 현대 판타지
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 상태 변화 강조

---

## 콘셉트

현대 판타지 톤과 풀스크린 몰입형, 상태 변화 강조를 결합한 회원가입 MVP 시안입니다. 어두운 퍼플·골드 배경 위에 Cinzel·Lora 세리프로 판타지 분위기를 주고, 한 화면에 폼 전체를 배치하며, 포커스·유효·에러 상태를 테두리·글로우·상태 인디케이터(원형)로 시각적으로 강조합니다.

## UI/UX 특징

- **현대 판타지:** 배경 #1a1625, 상단 퍼플 글로우, Cinzel·Lora, 액센트 #b898d0, 유효 시 #7ab89a
- **풀스크린 몰입형:** 100dvh·중앙 정렬, s73-full 단일 블록에 헤더·폼 일체, 반응형 padding
- **상태 변화 강조:** fieldState(focused/ok/invalid)에 따라 라벨·input-wrap 테두리·box-shadow 변경, s73-status 원형(ok=녹색·err=빨강)으로 유효/에러 표시, 전환 transition 적용

## 사용 의도 및 구조

- **index.html:** 메인 마크업, Alpine.js `signupForm()`(fieldState·isOk·검증·handleSubmit), HTMX 속성, s73-full·s73-input-wrap·s73-status
- **style.scss / style.css:** 시안 전용 스타일, 반응형 clamp
- **js/main.ts, js/main.js:** 검증·상태 클래스·GSAP 등장
- PC~모바일 전 범위 중앙 정렬·반응형 대응
