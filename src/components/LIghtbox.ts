interface Image {
  src: string;
  alt: string;
}

export default class Lightbox {
  private imageGroup: string = "";
  private imagesArray: Image[] = [];
  private selectedImageIndex: number = 0;
  private imagesAmount: number = 0;
  private mainLightboxElement: HTMLElement;

  constructor(mainLightboxElementId: string) {
    this.mainLightboxElement = document.getElementById(mainLightboxElementId)!;
  }

  private setImageGroup(image: HTMLImageElement) {
    this.imageGroup = image.getAttribute("data-gallery-name")!;
    this.setImagesArray();
    this.setSelectedImageIndex(image);
  }

  private setImagesArray() {
    const allImagesInGroup: NodeListOf<HTMLImageElement> =
      document.querySelectorAll(`[data-gallery-name=${this.imageGroup}]`)!;

    const imagesDataArray: Image[] = [...allImagesInGroup].map((image) => ({
      src: image.src,
      alt: image.alt,
    }));

    this.imagesArray = imagesDataArray;
    this.setImagesAmount(allImagesInGroup.length);
  }

  private setImagesAmount(imagesLength: number) {
    this.imagesAmount = imagesLength;
  }

  private setSelectedImageIndex(image: HTMLImageElement) {
    const index = +image.getAttribute("data-gallery-image-number")!;

    this.selectedImageIndex = index;
    this.displayImage();
  }

  private displayImage() {
    const { src, alt } = this.imagesArray[this.selectedImageIndex];

    const imagesAmount: HTMLSpanElement = document.querySelector(
      "[data-images-amount]"
    )!;

    imagesAmount.textContent = `${this.selectedImageIndex + 1} / ${
      this.imagesAmount
    }`;

    const lightboxImage: HTMLImageElement =
      document.querySelector("[data-image]")!;
    lightboxImage.src = src;
    lightboxImage.alt = alt;
  }

  prevImage() {
    if (!this.selectedImageIndex) {
      this.selectedImageIndex = this.imagesAmount - 1;
    } else {
      this.selectedImageIndex--;
    }

    this.displayImage();
  }

  nextImage() {
    if (this.selectedImageIndex === this.imagesAmount - 1) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }

    this.displayImage();
  }

  showLightbox(image: HTMLImageElement) {
    this.mainLightboxElement.classList.remove("hidden");
    this.setImageGroup(image);

    document.body.classList.add("lightbox-open");
  }

  closeLightbox() {
    this.mainLightboxElement.classList.add("fadeOut");
    document.body.classList.remove("lightbox-open");

    setTimeout(() => {
      this.mainLightboxElement.classList.remove("fadeOut");
      this.mainLightboxElement.classList.add("hidden");
    }, 300);
  }
}
