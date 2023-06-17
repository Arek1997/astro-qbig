export default class Animate {
  private animateElements: NodeListOf<HTMLDivElement> | null = null;

  constructor() {
    this.getAnimateElements();
    this.animationObserver();
  }

  private getAnimateElements() {
    this.animateElements = document.querySelectorAll("[data-animate]");
  }

  private animationObserver() {
    const intersectionCallback: IntersectionObserverCallback = (
      entries,
      options
    ) => {
      const [entry] = entries;
      const { target: animateElement } = entry;

      if (entry.isIntersecting) {
        animateElement.classList.add("fadeInFromBottom");
        options.unobserve(animateElement);
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.3,
      root: null,
    });

    this.animateElements?.forEach((item) => observer.observe(item));
  }
}
