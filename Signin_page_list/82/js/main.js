(function () {
  'use strict';

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var MIN_PASSWORD_LENGTH = 8;
  var FIELD_ORDER = ['email', 'name', 'password', 'passwordConfirm'];

  function signupForm82() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      showPassword: false,
      submitting: false,
      focusedField: null,
      errors: {},

      validateEmail: function () {
        var v = this.email.trim();
        if (!v) {
          this.errors.email = '이메일을 입력해 주세요.';
          return;
        }
        if (!EMAIL_REGEX.test(v)) {
          this.errors.email = '올바른 이메일 형식이 아닙니다.';
          return;
        }
        delete this.errors.email;
      },

      validateName: function () {
        var v = this.name.trim();
        if (!v) {
          this.errors.name = '이름을 입력해 주세요.';
          return;
        }
        if (v.length < 2) {
          this.errors.name = '이름은 2자 이상 입력해 주세요.';
          return;
        }
        delete this.errors.name;
      },

      validatePassword: function () {
        var v = this.password;
        if (!v) {
          this.errors.password = '비밀번호를 입력해 주세요.';
          return;
        }
        if (v.length < MIN_PASSWORD_LENGTH) {
          this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
          return;
        }
        delete this.errors.password;
      },

      validatePasswordConfirm: function () {
        if (this.password !== this.passwordConfirm) {
          this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
          return;
        }
        delete this.errors.passwordConfirm;
      },

      focusNext: function (current) {
        var idx = FIELD_ORDER.indexOf(current);
        if (idx < 0 || idx >= FIELD_ORDER.length - 1) return;
        var nextKey = FIELD_ORDER[idx + 1];
        var nextInput =
          nextKey === 'email' ? this.$refs.inputEmail :
          nextKey === 'name' ? this.$refs.inputName :
          nextKey === 'password' ? this.$refs.inputPassword :
          this.$refs.inputPasswordConfirm;
        if (nextInput && typeof nextInput.focus === 'function') {
          nextInput.focus();
        }
      },

      handleEnterKey: function (e) {
        var target = e.target;
        if (target.tagName !== 'INPUT' || target.type === 'submit') return;
        var fieldMap = {
          's82-email': 'email',
          's82-name': 'name',
          's82-password': 'password',
          's82-passwordConfirm': 'passwordConfirm',
        };
        var current = fieldMap[target.id];
        if (!current) return;
        e.preventDefault();
        if (current === 'passwordConfirm') {
          this.handleSubmit();
        } else {
          this.focusNext(current);
        }
      },

      handleSubmit: function () {
        this.validateEmail();
        this.validateName();
        this.validatePassword();
        this.validatePasswordConfirm();
        if (Object.keys(this.errors).length > 0) return;
        this.submitting = true;
        var self = this;
        setTimeout(function () {
          self.submitting = false;
        }, 800);
      },

      initFocusOrder: function () {},
    };
  }

  function runGsap() {
    var gsap = window.gsap;
    if (!gsap) return;
    var layout = document.querySelector('.s82-layout');
    var aside = document.querySelector('.s82-aside');
    var formSection = document.querySelector('.s82-form-section');
    if (layout) {
      gsap.fromTo(layout, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    }
    if (aside) {
      gsap.fromTo(aside, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.45, delay: 0.08, ease: 'power2.out' });
    }
    if (formSection) {
      gsap.fromTo(formSection, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.45, delay: 0.12, ease: 'power2.out' });
    }
  }

  document.addEventListener('alpine:init', function () {
    if (window.Alpine) {
      window.Alpine.data('signupForm82', signupForm82);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    runGsap();
  });
})();
