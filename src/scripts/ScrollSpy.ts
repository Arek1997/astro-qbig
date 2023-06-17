export default class ScrollSpy {
  private sectionsArr: NodeListOf<HTMLElement> | null = null;
  private navigationLinksArr: NodeListOf<HTMLLinkElement> | null = null;

  constructor() {
    this.getAllSections();
    this.getNavigationLinks();
    this.createObserver();
  }

  private getAllSections() {
    this.sectionsArr = document.querySelectorAll("section");
  }

  private getNavigationLinks() {
    this.navigationLinksArr = document.querySelectorAll("nav .menu-wrapper a");
  }

  private createObserver() {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        const { id } = entry.target;
        const activeLink: HTMLAnchorElement = document.querySelector(
          `a[href='#${id}']`
        )!;

        this.navigationLinksArr?.forEach((link) =>
          link.classList.remove("active-link")
        );

        activeLink?.classList.add("active-link");
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.15,
      root: null,
    });

    this.sectionsArr?.forEach((item) => observer.observe(item));
  }
}
