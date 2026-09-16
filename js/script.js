/**
 * Project Starter Template - Main Script
 * Responsive Navigation & Accessible Mobile Menu Handler
 */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu-wrapper");

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("active");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      menu.classList.add("active");
      toggle.classList.add("is-active");
      toggle.setAttribute("aria-expanded", "true");
    };

    // Toggle navigation menu
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains("active");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        menu.classList.contains("active") &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("active")) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close menu when clicking navigation links on mobile
    const links = menu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          closeMenu();
        }
      });
    });

    // Reset menu state when window is resized to desktop width
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 900 && menu.classList.contains("active")) {
          closeMenu();
        }
      }, 100);
    });
  }

  // Scroll Reveal Observer (Vanilla replacement for AOS)
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  }
  // Continuous infinite autoplay slider for mobile viewports on ".feature-advertise-slider.swiper".
  // On desktop (innerWidth > 900), layout stays static flex centered row.
  const featureAdvertiseEl = document.querySelector(".feature-advertise-slider.swiper");
  if (featureAdvertiseEl && window.Swiper) {
    let featureSwiper = null;

    const initFeatureSwiper = () => {
      const isMobile = window.innerWidth <= 900;

      if (isMobile) {
        if (!featureSwiper) {
          const rootFontSize =
            parseFloat(
              getComputedStyle(document.documentElement).fontSize
            ) || 10;
          // Same gap value as desktop: 12.2rem
          const spaceBetween = Math.round(12.2 * rootFontSize);

          featureSwiper = new Swiper(featureAdvertiseEl, {
            slidesPerView: "auto",
            spaceBetween,
            speed: 4000,
            loop: true,
            loopedSlides: 12,
            loopAdditionalSlides: 12,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
            allowTouchMove: true,
          });
        } else {
          featureSwiper.update();
        }
      } else if (!isMobile) {
        if (featureSwiper) {
          featureSwiper.destroy(true, true);
          featureSwiper = null;
        }
      }
    };

    initFeatureSwiper();

    let featureResizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(featureResizeTimer);
      featureResizeTimer = setTimeout(initFeatureSwiper, 150);
    });
  }

  // Continuous infinite autoplay slider (marquee-like) for the
  // "banner-after-slider" band. Uses Swiper's loop + autoplay with linear
  // timing so the cards move as one constant, seamless conveyor belt.
  const marqueeEl = document.querySelector(".banner-after-slider.swiper");
  if (marqueeEl && window.Swiper) {
    // The project sets html { font-size: 62.5% } => 1rem = 10px.
    // The existing design used gap: 8.8rem between cards; replicate that
    // spacing with Swiper's (margin-based) spaceBetween so transform math is exact.
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    const spaceBetween = Math.round(8.8 * rootFontSize);

    new Swiper(marqueeEl, {
      slidesPerView: "auto", // keeps each card at its natural design width
      spaceBetween, // original 8.8rem gap between cards
      speed: 4000, // slow, deliberate linear crawl (premium feel)
      loop: true, // seamless infinite loop via Swiper's cloned slides
      loopedSlides: 12, // base set when using slidesPerView:"auto" loop clones
      loopAdditionalSlides: 12, // keep the viewport filled at wrap (no blank space)
      autoplay: {
        delay: 0, // no pause between slides -> constant motion
        disableOnInteraction: false, // autoplay continues after swipe/drag
      },
    });
  }

  // ========================================
  // COMMITMENT VIDEO SLIDER & OVERLAY HANDLER
  // ========================================
  const commitmentSwiperEl = document.querySelector(".commitment-swiper");
  if (commitmentSwiperEl && window.Swiper) {
    const commitmentSwiper = new Swiper(commitmentSwiperEl, {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      speed: 600,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 24,
          centeredSlides: false,
        },
        901: {
          spaceBetween: 20,
          centeredSlides: false,
        },
        0: {
          spaceBetween: 16,
          centeredSlides: true,
        },
      },
    });

    const commitmentSliderEl = document.querySelector(".commitment-slider");
    if (commitmentSliderEl) {
      // Card click toggles video play/pause
      commitmentSliderEl.addEventListener("click", (e) => {
        const card = e.target.closest(".video-card");
        if (!card) return;

        const video = card.querySelector("video");
        if (!video) return;

        if (video.paused) {
          // Pause any other playing video
          document
            .querySelectorAll(".video-card video")
            .forEach((otherVideo) => {
              if (otherVideo !== video && !otherVideo.paused) {
                otherVideo.pause();
              }
            });
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });

      // Capture phase listeners for media events (since play/pause do not bubble)
      commitmentSliderEl.addEventListener(
        "play",
        (e) => {
          if (e.target && e.target.tagName === "VIDEO") {
            const card = e.target.closest(".video-card");
            if (card) {
              card.classList.add("is-playing");
            }
            if (commitmentSwiper && commitmentSwiper.autoplay) {
              commitmentSwiper.autoplay.stop();
            }
          }
        },
        true,
      );

      commitmentSliderEl.addEventListener(
        "pause",
        (e) => {
          if (e.target && e.target.tagName === "VIDEO") {
            const card = e.target.closest(".video-card");
            if (card) {
              card.classList.remove("is-playing");
            }
            if (commitmentSwiper && commitmentSwiper.autoplay) {
              commitmentSwiper.autoplay.start();
            }
          }
        },
        true,
      );

      commitmentSliderEl.addEventListener(
        "ended",
        (e) => {
          if (e.target && e.target.tagName === "VIDEO") {
            const card = e.target.closest(".video-card");
            if (card) {
              card.classList.remove("is-playing");
            }
            if (commitmentSwiper && commitmentSwiper.autoplay) {
              commitmentSwiper.autoplay.start();
            }
          }
        },
        true,
      );
    }
  }

  // ========================================
  // HORMONES PRODUCT GALLERY THUMBNAIL SLIDER
  // ========================================
  const hormonesThumbsEl = document.querySelector(".hormones-thumbs-swiper");
  const hormonesMainEl = document.querySelector(".hormones-main-swiper");

  if (hormonesThumbsEl && hormonesMainEl && window.Swiper) {
    const updateThumbCorners = (swiper) => {
      if (!swiper || !swiper.slides) return;

      swiper.slides.forEach((slide) => {
        const box = slide.querySelector(".hormones-thumb-img-box");
        if (box) {
          box.classList.remove(
            "first-visible-thumb-box",
            "last-visible-thumb-box"
          );
        }
      });

      const visibleSlides = Array.from(swiper.slides).filter(
        (slide) =>
          slide.classList.contains("swiper-slide-visible") ||
          slide.classList.contains("swiper-slide-fully-visible")
      );

      if (visibleSlides.length > 0) {
        const firstBox = visibleSlides[0].querySelector(
          ".hormones-thumb-img-box"
        );
        const lastBox = visibleSlides[
          visibleSlides.length - 1
        ].querySelector(".hormones-thumb-img-box");

        if (firstBox) firstBox.classList.add("first-visible-thumb-box");
        if (lastBox) lastBox.classList.add("last-visible-thumb-box");
      }
    };

    const hormonesThumbsSwiper = new Swiper(hormonesThumbsEl, {
      loop: true,
      spaceBetween: 14,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      on: {
        init(swiper) {
          updateThumbCorners(swiper);
        },
        slideChange(swiper) {
          updateThumbCorners(swiper);
        },
        transitionEnd(swiper) {
          updateThumbCorners(swiper);
        },
        setTranslate(swiper) {
          updateThumbCorners(swiper);
        },
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 14,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 3.5,
          spaceBetween: 8,
        },
      },
    });

    new Swiper(hormonesMainEl, {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".hormones-slider .swiper-button-next",
        prevEl: ".hormones-slider .swiper-button-prev",
      },
      thumbs: {
        swiper: hormonesThumbsSwiper,
      },
    });
  }

  // ========================================
  // PURCHASE OPTIONS & CUSTOM DROPDOWN LOGIC
  // ========================================
  const purchaseOptionsWrap = document.querySelector(
    ".purchase-options-wrapper"
  );
  if (purchaseOptionsWrap) {
    const cards = purchaseOptionsWrap.querySelectorAll(
      ".purchase-option-card"
    );
    const dropdownWrap = purchaseOptionsWrap.querySelector(
      ".custom-dropdown-wrap"
    );
    const dropdownTrigger = purchaseOptionsWrap.querySelector(
      ".custom-dropdown-trigger"
    );
    const selectedText = purchaseOptionsWrap.querySelector(
      ".selected-delivery-text"
    );
    const dropdownOptions = purchaseOptionsWrap.querySelectorAll(
      ".dropdown-option"
    );

    // Option Card Selection (Subscribe vs One Time)
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        // If user clicks inside open dropdown menu, don't re-trigger card active logic
        if (e.target.closest(".custom-dropdown-menu")) return;

        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      });
    });

    // Custom Dropdown Trigger Toggle
    if (dropdownTrigger && dropdownWrap) {
      dropdownTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdownWrap.classList.contains("open");
        dropdownWrap.classList.toggle("open", !isOpen);
        dropdownTrigger.setAttribute(
          "aria-expanded",
          !isOpen ? "true" : "false"
        );
      });

      // Dropdown Option Selection
      dropdownOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdownOptions.forEach((opt) => opt.classList.remove("active"));
          option.classList.add("active");

          if (selectedText) {
            selectedText.textContent = option.textContent.trim();
          }

          dropdownWrap.classList.remove("open");
          dropdownTrigger.setAttribute("aria-expanded", "false");

          // Ensure Subscribe card stays active when selecting dropdown option
          const subscribeCard =
            purchaseOptionsWrap.querySelector(".subscribe-option");
          if (subscribeCard) {
            cards.forEach((c) => c.classList.remove("active"));
            subscribeCard.classList.add("active");
          }
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!dropdownWrap.contains(e.target)) {
          dropdownWrap.classList.remove("open");
          dropdownTrigger.setAttribute("aria-expanded", "false");
        }
      });

      // Close dropdown on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && dropdownWrap.classList.contains("open")) {
          dropdownWrap.classList.remove("open");
          dropdownTrigger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  // ========================================
  // ACCORDION TOGGLE (SINGLE-OPEN PER WRAPPER)
  // ========================================
  const accordionWrappers = document.querySelectorAll(
    ".product-accordion-wrapper, .faq-accordion-wrapper, .accordion-wrapper"
  );
  accordionWrappers.forEach((wrapper) => {
    const accordionItems = wrapper.querySelectorAll(".accordion-item");
    const accordionHeaders = wrapper.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        const isActive = item.classList.contains("active");

        // Close all accordion items within this wrapper
        accordionItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          const otherHeader = otherItem.querySelector(".accordion-header");
          if (otherHeader) {
            otherHeader.setAttribute("aria-expanded", "false");
          }
        });

        // Open clicked item if it was not already active
        if (!isActive) {
          item.classList.add("active");
          header.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
});



