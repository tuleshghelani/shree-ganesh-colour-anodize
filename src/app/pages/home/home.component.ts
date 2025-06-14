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
  slides = [0, 1, 2, 3]; // Four slides for our main services
  showDesignContent = false;
  
  // Track active FAQ items
  activeFaqItem: number | null = 0; // First item is open by default
  
  // FAQ items
  faqItems = [
    {
      question: 'What is colour anodizing and how does it benefit my products?',
      answer: 'Colour anodizing is an electrochemical process that creates a durable, porous oxide layer on aluminum surfaces which can then be dyed in various colors. The benefits include enhanced corrosion resistance, improved wear resistance, increased product lifespan, and aesthetic enhancement with vibrant color options that won\'t chip or peel like paint.'
    },
    {
      question: 'How durable is chrome plating compared to other finishes?',
      answer: 'Chrome plating offers exceptional durability compared to many other surface finishes. It provides superior hardness (up to 1000 Hv), excellent wear resistance, and outstanding corrosion protection. Chrome-plated surfaces can withstand harsh environments, chemicals, and abrasion much better than painted surfaces and most other decorative finishes, often lasting for decades with proper care.'
    },
    {
      question: 'What materials can be powder coated?',
      answer: 'Powder coating works best on conductive materials, primarily metals. Common materials suitable for powder coating include steel, aluminum, galvanized and zinc-coated metals, and some metal alloys. While primarily used on metals, some specialized powder coating processes can also be applied to certain non-metallic materials like medium-density fiberboard (MDF) and some composites through pre-treatment processes.'
    },
    {
      question: 'What is your typical turnaround time for orders?',
      answer: 'Our standard turnaround time varies depending on the type of service, quantity, and complexity of the project. Typically, smaller orders can be completed within 5-7 business days, while larger or more complex projects may require 10-14 business days. For urgent requirements, we offer expedited services subject to availability. We recommend contacting our team for a specific timeline estimate for your project.'
    }
  ];
  
  services = [
    {
      title: 'Colour Anodizing',
      description: 'Premium colour anodizing services for aluminum components with superior durability and vibrant finishes that resist corrosion and wear.',
      icon: 'fa-palette',
      benefits: ['Corrosion resistance', 'Wear resistance', 'Vibrant color options', 'Enhanced durability', 'Custom finish options']
    },
    {
      title: 'Chrome Plating',
      description: 'High-quality chrome plating solutions providing exceptional shine, durability and corrosion resistance for industrial and decorative applications.',
      icon: 'fa-shield-alt',
      benefits: ['Mirror-like finish', 'Superior corrosion protection', 'Extended component life', 'Enhanced aesthetic appeal', 'Wear resistance']
    },
    {
      title: 'Powder Coating',
      description: 'Environmentally friendly powder coating services delivering superior finish quality, excellent coverage and exceptional durability.',
      icon: 'fa-spray-can',
      benefits: ['Eco-friendly process', 'Superior durability', 'Wide color selection', 'Uniform coverage', 'Chemical resistance']
    }
  ];
  
  testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'AutoParts Ltd',
      comment: 'The colour anodizing service provided by Shree Ganesh exceeded our expectations. The consistent quality and vibrant finishes have helped elevate our products.',
      rating: 5
    },
    {
      name: 'Priyesh Patel',
      company: 'Modern Interiors',
      comment: 'Their powder coating service is impeccable. The finish quality and durability have made our architectural elements stand out in our designs.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      company: 'Industrial Solutions',
      comment: "We've been using Shree Ganesh's chrome plating services for our precision components for years. Their attention to detail and quality control are excellent.",
      rating: 4
    }
  ];
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  private setupSEO() {
    this.title.setTitle('Shree Ganesh Colour Anodize | Transform Dream To Reality | Premium Surface Treatments');
    
    this.meta.addTags([
      { name: 'description', content: 'Transform Dream To Reality with Shree Ganesh Colour Anodize - Leading provider of premium colour anodizing, chrome plating, and powder coating services with superior durability and finishing for industrial and decorative applications.' },
      { name: 'keywords', content: 'transform dream to reality, colour anodizing, color anodizing, chrome plating, powder coating, aluminium finishes, metal finishing, metal coating services, industrial coating, decorative coating' },
      { property: 'og:title', content: 'Shree Ganesh Colour Anodize | Transform Dream To Reality' },
      { property: 'og:description', content: 'Transform Dream To Reality with our premium colour anodizing, chrome plating, and powder coating services with superior durability' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shree Ganesh Colour Anodize' }
    ]);
  }

  private setupStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Shree Ganesh Colour Anodize',
      slogan: 'Transform Dream To Reality',
      description: 'Leading provider of premium colour anodizing, chrome plating, and powder coating services with superior durability and finishing for industrial and decorative applications.',
      image: '/assets/images/logo.png',
      priceRange: '₹',
      openingHours: 'Thursday-Tuesday 08:00-20:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Surface Treatment Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Colour Anodizing',
            description: 'Premium colour anodizing services for aluminum components'
          },
          {
            '@type': 'OfferCatalog',
            name: 'Chrome Plating',
            description: 'High-quality chrome plating solutions providing exceptional shine and durability'
          },
          {
            '@type': 'OfferCatalog',
            name: 'Powder Coating',
            description: 'Environmentally friendly powder coating services delivering superior finish quality'
          }
        ]
      }
    };

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
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
  
  // Toggle FAQ items
  toggleFaq(index: number) {
    this.activeFaqItem = this.activeFaqItem === index ? null : index;
  }
  
  // Check if a FAQ item is active
  isFaqActive(index: number): boolean {
    return this.activeFaqItem === index;
  }
}
