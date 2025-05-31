import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4]; // Array for slide indicators
  showDesignContent = false;
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  private setupSEO() {
    this.title.setTitle('Premium Printing Services | Professional Printing Solutions');
    
    this.meta.addTags([
      { name: 'description', content: 'Professional printing services including brochures, catalogs, stickers, stationery, box printing, offset printing, CMYK printing, and UV printing.' },
      { name: 'keywords', content: 'printing services, brochures, catalogs, stickers, stationery, box printing, offset printing, CMYK printing, UV printing' },
      { property: 'og:title', content: 'Premium Printing Services' },
      { property: 'og:description', content: 'Professional printing services for all your business needs' },
      { property: 'og:type', content: 'website' }
    ]);
  }

  private setupStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'PrintingService',
      name: 'Premium Printing Services',
      description: 'Professional printing services including brochures, catalogs, stickers, stationery, box printing, offset printing, CMYK printing, and UV printing.',
      offers: {
        '@type': 'Offer',
        itemOffered: [
          { '@type': 'Service', name: 'Company Brochures' },
          { '@type': 'Service', name: 'Products Catalogue' },
          { '@type': 'Service', name: 'Sticker Label' },
          { '@type': 'Service', name: 'Office Stationery' },
          { '@type': 'Service', name: 'Box Printing' },
          { '@type': 'Service', name: 'Offset Printing' },
          { '@type': 'Service', name: 'CMYK Printing' },
          { '@type': 'Service', name: 'UV Printing' }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
      this.startSlideShow();
    }
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }
  
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleDesignContent() {
    this.showDesignContent = !this.showDesignContent;
  }
}
