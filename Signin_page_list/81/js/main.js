/**
 * 시안 81 - 네오 브루탈리즘 + 카드 분리형 + 입력 반응형 애니메이션
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function getGsap() {
  return window.gsap;
}

function animateFieldFocus81(el, isFocus) {
  var g = getGsap();
  if (!g || !el) return;
  var input = el.querySelector('.s81-input');
  var label = el.querySelector('.s81-label');
  if (isFocus) {
    g.fromTo(input, { scale: 1 }, { scale: 1.01, duration: 0.18, ease: 'power2.out' });
    g.to(input, { scale: 1, duration: 0.2, delay: 0.18, ease: 'power2.inOut' });
    if (label) g.fromTo(label, { opacity: 0.7 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
  }
}

function animateCardFocus81(card, isFocus) {
  var g = getGsap();
  if (!g || !card) return;
  if (isFocus) {
    g.fromTo(card, { y: 0 }, { y: -2, duration: 0.22, ease: 'power2.out' });
  } else {
    g.to(card, { y: 0, duration: 0.2, ease: 'power2.inOut' });
  }
}

function signupForm81() {
  var self = this;
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {},
    focusedField: null,

    onFocus: function (_ev, fieldKey) {
      this.focusedField = fieldKey;
      var refMap = { email: 'fieldEmail', name: 'fieldName', password: 'fieldPassword', passwordConfirm: 'fieldPasswordConfirm' };
      var cardMap = { email: 'cardAccount', name: 'cardAccount', password: 'cardPassword', passwordConfirm: 'cardPassword' };
      var fieldEl = this.$refs[refMap[fieldKey]];
      var cardEl = this.$refs[cardMap[fieldKey]];
      var ctx = this;
      requestAnimationFrame(function () {
        animateFieldFocus81(fieldEl || null, true);
        animateCardFocus81(cardEl || null, true);
        if (cardEl) cardEl.classList.add('s81-card--focused');
        if (fieldEl) fieldEl.classList.add('s81-field--focused');
      });
    },

    onBlur: function (_ev, fieldKey) {
      var refMap = { email: 'fieldEmail', name: 'fieldName', password: 'fieldPassword', passwordConfirm: 'fieldPasswordConfirm' };
      var cardMap = { email: 'cardAccount', name: 'cardAccount', password: 'cardPassword', passwordConfirm: 'cardPassword' };
      var fieldEl = this.$refs[refMap[fieldKey]];
      var cardEl = this.$refs[cardMap[fieldKey]];
      var ctx = this;
      requestAnimationFrame(function () {
        if (fieldEl) fieldEl.classList.remove('s81-field--focused');
        if (cardEl) cardEl.classList.remove('s81-card--focused');
        animateCardFocus81(cardEl || null, false);
      });
      this.focusedField = null;
    },

    focusNext: function (fromKey) {
      var order = ['email', 'name', 'password', 'passwordConfirm'];
      var idx = order.indexOf(fromKey);
      var nextId = idx < order.length - 1 ? order[idx + 1] : null;
      if (nextId === 'password') document.getElementById('s81-password') && document.getElementById('s81-password').focus();
      else if (nextId === 'passwordConfirm') document.getElementById('s81-passwordConfirm') && document.getElementById('s81-passwordConfirm').focus();
      else if (nextId === 'name') document.getElementById('s81-name') && document.getElementById('s81-name').focus();
      else if (nextId === 'email') document.getElementById('s81-email') && document.getElementById('s81-email').focus();
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
      var me = this;
      setTimeout(function () { me.submitting = false; }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm81', signupForm81);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = getGsap();
    var viewport = document.querySelector('.s81-viewport');
    if (g && viewport) {
      g.from(viewport, { opacity: 0, y: 20, duration: 0.45, ease: 'power2.out' });
      g.from('.s81-card', { opacity: 0, y: 12, duration: 0.35, stagger: 0.08, delay: 0.1, ease: 'power2.out' });
    }
  });
}
