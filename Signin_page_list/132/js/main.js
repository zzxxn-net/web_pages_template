/**
 * 시안 132: 다크 아카이브 + 비대칭 레이아웃 + GSAP 기반 부드러운 전환
 * Alpine.js + GSAP
 */
(function () {
  'use strict';

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var MIN_PASSWORD_LENGTH = 8;

  function signupForm132() {
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
        var el = document.getElementById('s132-' + nextId);
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
      if (window.Alpine) window.Alpine.data('signupForm132', signupForm132);
    });
    document.addEventListener('DOMContentLoaded', function () {
      var g = window.gsap;
      if (!g) return;
      var inner = document.querySelector('.s132-inner');
      var aside = document.querySelector('.s132-aside');
      var formWrap = document.querySelector('.s132-form-wrap');
      var fields = document.querySelectorAll('.s132-field');
      if (inner) g.from(inner, { opacity: 0, duration: 0.4, ease: 'power2.out' });
      if (aside) g.from(aside, { opacity: 0, x: -24, duration: 0.5, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, x: 24, duration: 0.5, ease: 'power2.out', delay: 0.12 });
      if (fields.length) g.from(fields, { opacity: 0, y: 12, duration: 0.35, stagger: 0.05, ease: 'power2.out', delay: 0.2 });
    });
  }
})();
