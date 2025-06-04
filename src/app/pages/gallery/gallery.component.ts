import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private title = inject(Title);
  
  // Gallery images array
  galleryImages: string[] = [];
  selectedImage: string | null = null;
  showModal: boolean = false;
  
  constructor() {
    this.setupSEO();
    this.loadGalleryImages();
  }
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
  
  private setupSEO() {
    this.title.setTitle('Gallery | Shree Ganesh Colour Anodize');
    this.meta.updateTag({ name: 'description', content: 'Explore our gallery showcasing premium colour anodizing, chrome plating, and powder coating projects. View our high-quality metal finishing work.' });
    this.meta.updateTag({ name: 'keywords', content: 'metal finishing gallery, anodizing projects, chrome plating examples, powder coating showcase' });
  }
  
  private loadGalleryImages() {
    // Load images from 1.webp to 18.webp
    for (let i = 1; i <= 18; i++) {
      this.galleryImages.push(`assets/gallery/${i}.webp`);
    }
  }
  
  openImageModal(imagePath: string) {
    this.selectedImage = imagePath;
    this.showModal = true;
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  }
  
  closeImageModal() {
    this.showModal = false;
    this.selectedImage = null;
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = ''; // Restore scrolling
    }
  }
}
