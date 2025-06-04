import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  certificates = [
    {
      title: 'ISO Certification',
      description: 'ISO 9001 certified for quality management systems, ensuring consistent high-quality services and continuous improvement.',
      image: 'assets/certificate/ISO.png',
      alt: 'ISO Quality Certificate'
    },
    {
      title: 'Factory & Equipment Certification',
      description: 'State-of-the-art facility certification for our modern plant with advanced equipment and machinery.',
      image: 'assets/certificate/plant.png',
      alt: 'Plant and Equipment Certification'
    },
    {
      title: 'REMA Compliance Certification',
      description: 'Certified compliance with industry standards and regulations for surface treatment processes.',
      image: 'assets/certificate/REMA.jpg',
      alt: 'REMA Industry Compliance Certificate'
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('Certifications | Shree Ganesh Colour Anodize | Quality Assured Surface Treatments');
    
    this.meta.addTags([
      { name: 'description', content: 'View our professional certifications that ensure quality assurance and industry compliance for all our premium surface treatment services at Shree Ganesh Colour Anodize.' },
      { name: 'keywords', content: 'certifications, ISO certification, quality assurance, surface treatment certification, anodizing standards, chrome plating certification, industry compliance' },
      { property: 'og:title', content: 'Certifications | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: 'View our professional certifications that ensure quality assurance and industry compliance for all our premium surface treatment services.' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shree Ganesh Colour Anodize' }
    ]);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
  }
}
