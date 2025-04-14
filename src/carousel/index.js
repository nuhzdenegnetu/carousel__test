/**
 * Carousel Module
 * @description Exports carousel components with different functionality
 */

// class Carousel {
//   constructor(p) {
//     const settings = {
//       containerId: '#carousel',
//       slideId: '.slide',
//       interval: 5000,
//       isPlaying: true,
//       pauseOnHover: false,
//       ...p
//     };
//
//     this.container = document.querySelector(settings.containerId);
//     this.slideItems = this.container.querySelectorAll(settings.slideId);
//     this.TIMER_INTERVAL = settings.interval;
//     this.isPlaying = settings.isPlaying;
//     this.pauseOnHover = settings.pauseOnHover;
//     this.currentSlide = 0;
//     this.timerId = null;
//     this.SLIDES_COUNT = this.slideItems.length;
//     this.CODE_SPACE = 'Space';
//     this.CODE_LEFT_ARROW = 'ArrowLeft';
//     this.CODE_RIGHT_ARROW = 'ArrowRight';
//     this.FA_PAUSE = '<i class="far fa-pause-circle"></i>';
//     this.FA_PLAY = '<i class="far fa-play-circle"></i>';
//   }
//
//   init() {
//     this._initControls();
//     this._initIndicators();
//     this._initListeners();
//
//     // Активуємо перший слайд
//     this.slideItems[0].classList.add('active');
//
//     if (this.isPlaying) {
//       this._tick();
//     }
//   }
//
//   _initControls() {
//     const controls = document.createElement('div');
//     controls.setAttribute('id', 'controls-container');
//     controls.innerHTML = `
//       <button id="pause-btn">${this.isPlaying ? this.FA_PAUSE : this.FA_PLAY}</button>
//       <button id="prev-btn"></button>
//       <button id="next-btn"></button>
//     `;
//     this.container.append(controls);
//   }
//
//   _initIndicators() {
//     const indicators = document.createElement('div');
//     indicators.setAttribute('id', 'indicators-container');
//
//     for (let i = 0; i < this.SLIDES_COUNT; i++) {
//       const indicator = document.createElement('div');
//       indicator.classList.add('indicator');
//       indicator.dataset.slideTo = i;
//       if (i === 0) indicator.classList.add('active');
//       indicators.append(indicator);
//     }
//
//     this.container.append(indicators);
//   }
//
//   _initListeners() {
//     document.addEventListener('keydown', this._pressKey.bind(this));
//
//     const pauseBtn = this.container.querySelector('#pause-btn');
//     const nextBtn = this.container.querySelector('#next-btn');
//     const prevBtn = this.container.querySelector('#prev-btn');
//     const indicators = this.container.querySelector('#indicators-container');
//
//     pauseBtn.addEventListener('click', this.pausePlay.bind(this));
//     nextBtn.addEventListener('click', this.next.bind(this));
//     prevBtn.addEventListener('click', this.prev.bind(this));
//     indicators.addEventListener('click', this._indicateHandler.bind(this));
//
//     if (this.pauseOnHover) {
//       this.container.addEventListener('mouseenter', this.pause.bind(this));
//       this.container.addEventListener('mouseleave', this.play.bind(this));
//     }
//   }
//
//   _pressKey(e) {
//     if (e.code === this.CODE_LEFT_ARROW) this.prev();
//     if (e.code === this.CODE_RIGHT_ARROW) this.next();
//     if (e.code === this.CODE_SPACE) {
//       e.preventDefault();
//       this.pausePlay();
//     }
//   }
//
//   _indicateHandler(e) {
//     const target = e.target;
//     if (target && target.classList.contains('indicator')) {
//       this.pause();
//       this._gotoNth(+target.dataset.slideTo);
//     }
//   }
//
//   _tick() {
//     if (!this.isPlaying) return;
//     this.timerId = setInterval(() => {
//       this._gotoNth(this.currentSlide + 1);
//     }, this.TIMER_INTERVAL);
//   }
//
//   _gotoNth(n) {
//     const slides = this.container.querySelectorAll('.slide');
//     const indicators = this.container.querySelectorAll('.indicator');
//
//     slides[this.currentSlide].classList.toggle('active');
//     indicators[this.currentSlide].classList.toggle('active');
//     this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT;
//     slides[this.currentSlide].classList.toggle('active');
//     indicators[this.currentSlide].classList.toggle('active');
//   }
//
//   pause() {
//     if (!this.isPlaying) return;
//     const pauseBtn = this.container.querySelector('#pause-btn');
//     pauseBtn.innerHTML = this.FA_PLAY;
//     this.isPlaying = false;
//     clearInterval(this.timerId);
//     this.timerId = null;
//   }
//   play() {
//     if (this.isPlaying) return;
//     const pauseBtn = this.container.querySelector('#pause-btn');
//     pauseBtn.innerHTML = this.FA_PAUSE;
//     this.isPlaying = true;
//     this._tick();
//   }
//
//   pausePlay() {
//     this.isPlaying ? this.pause() : this.play();
//   }
//
//   next() {
//     this.pause();
//     this._gotoNth(this.currentSlide + 1);
//   }
//
//   prev() {
//     this.pause();
//     this._gotoNth(this.currentSlide - 1);
//   }
// }
//
// class SwipeCarousel extends Carousel {
//   constructor(options) {
//     super(options);
//     this.slidesContainer = this.slideItems[0]?.parentElement;
//     this.startPosX = null;
//     this.endPosX = null;
//     this.swipeThreshold = options.swipeThreshold || 100;
//   }
//
//   _initListeners() {
//     super._initListeners();
//
//     this.container.addEventListener('touchstart', this._swipeStart.bind(this), { passive: true });
//     this.slidesContainer.addEventListener('mousedown', this._swipeStart.bind(this));
//     this.container.addEventListener('touchend', this._swipeEnd.bind(this));
//     this.slidesContainer.addEventListener('mouseup', this._swipeEnd.bind(this));
//   }
//
//   _swipeStart(e) {
//     this.startPosX = e instanceof MouseEvent
//       ? e.clientX
//       : e.changedTouches[0].clientX;
//   }
//
//   _swipeEnd(e) {
//     this.endPosX = e instanceof MouseEvent
//       ? e.clientX
//       : e.changedTouches[0].clientX;
//
//     if (this.endPosX - this.startPosX > this.swipeThreshold) this.prev();
//     if (this.endPosX - this.startPosX < -this.swipeThreshold) this.next();
//   }
// }
//
// export { Carousel, SwipeCarousel };
// export default SwipeCarousel;


// Basic carousel with core functionality
// export { default as Carousel } from './core.js'
//
// // Enhanced carousel with touch/swipe support
// export { default as SwipeCarousel } from './swipe.js'
//
// // Default export is the SwipeCarousel which has all functionality
// export { default } from './swipe.js'

// Альтернативний варіант експорту для простішої реалізації каруселі:
// Експортуємо обидва класи з одного файлу, щоб зменшити кількість імпортів у проєкті.
// Іменований експорт (Carousel, SwipeCarousel) дає змогу явно звертатися до потрібного компонента,
// а експорт за замовчуванням (SwipeCarousel) спрощує імпорт для найпоширенішого сценарію використання.
// export { Carousel, SwipeCarousel };
// export default SwipeCarousel;
