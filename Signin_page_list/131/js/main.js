/**
 * 시안 131: 현대 판타지 + 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js + GSAP (main.ts 컴파일 결과)
 */
(function () {
  'use strict';

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var MIN_PASSWORD_LENGTH = 8;

  function signupForm131() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      showPassword: false,
      focusedField: null,
      touched: {},
      submitting: false,
      errors: {},

      focusNext: function (nextId) {
        var el = document.getElementById('s131-' + nextId);
        if (el && typeof el.focus === 'function') el.focus();
      },

      validateEmail: function () {
        var v = this.email.trim();
        if (!v) { this.errors.email = '이메일을 입력해 주세요.'; return; }
        if (!EMAIL_REGEX.test(v)) { this.errors.email = '올바른 이메일 형식이 아닙니다.'; return; }
        delete this.errors.email;
      },

      validateName: function () {
        var v = this.name.trim();
        if (!v) { this.errors.name = '이름을 입력해 주세요.'; return; }
        if (v.length < 2) { this.errors.name = '이름은 2자 이상 입력해 주세요.'; return; }
        delete this.errors.name;
      },

      validatePassword: function () {
        var v = this.password;
        if (!v) { this.errors.password = '비밀번호를 입력해 주세요.'; return; }
        if (v.length < MIN_PASSWORD_LENGTH) { this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
        delete this.errors.password;
      },

      validatePasswordConfirm: function () {
        if (this.password !== this.passwordConfirm) { this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
        delete this.errors.passwordConfirm;
      },

      handleSubmit: function () {
        this.validateEmail();
        this.validateName();
        this.validatePassword();
        this.validatePasswordConfirm();
        if (Object.keys(this.errors).length > 0) return;
        this.submitting = true;
        var self = this;
        setTimeout(function () { self.submitting = false; }, 800);
      },

      initAnim: function () {}
    };
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('alpine:init', function () {
      if (window.Alpine) window.Alpine.data('signupForm131', signupForm131);
    });
    document.addEventListener('DOMContentLoaded', function () {
      var g = window.gsap;
      if (!g) return;
      var inner = document.querySelector('.s131-inner');
      var header = document.querySelector('.s131-header');
      var formWrap = document.querySelector('.s131-form-wrap');
      var fields = document.querySelectorAll('.s131-field');
      if (inner) g.from(inner, { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -10, duration: 0.4, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 14, duration: 0.4, ease: 'power2.out', delay: 0.12 });
      if (fields.length) g.from(fields, { opacity: 0, y: 10, duration: 0.35, stagger: 0.06, ease: 'power2.out', delay: 0.18 });
    });
  }
})();
