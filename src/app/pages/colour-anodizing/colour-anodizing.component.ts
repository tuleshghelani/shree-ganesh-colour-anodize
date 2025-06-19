import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title, TransferState, makeStateKey } from '@angular/platform-browser';

const PRODUCT_SCHEMA_KEY = makeStateKey<string>('COLOUR_ANODIZE_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('COLOUR_ANODIZE_BUSINESS_SCHEMA');
@Component({
  selector: 'app-colour-anodizing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './colour-anodizing.component.html',
  styleUrl: './colour-anodizing.component.scss'
})
export class ColourAnodizingComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private baseUrl = 'https://www.shreeganeshcolouranodize.com';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  faqItems = [
    {
      question: "What is colour anodizing?",
      answer: "Colour anodizing is an electrochemical process that creates a durable, porous oxide layer on aluminum surfaces...",
      open: false
    },
    {
      question: "How durable is colour anodizing?",
      answer: "Properly anodized finishes are extremely durable, offering excellent wear resistance...",
      open: false
    },
    {
      question: "What colours are available for anodizing?",
      answer: "We offer a comprehensive range of colours from subtle earth tones to vibrant primaries. Our advanced processes allow for precise colour matching to meet your specific requirements.",
      open: false
    },
    {
      question: "What is the process for colour anodizing?",
      answer: "The process typically involves cleaning the aluminum surface, applying a dye, and then anodizing...",
      open: false
    },
    {
      question: "What is the cost of colour anodizing?",
      answer: "The cost of colour anodizing depends on the complexity of the design and the quantity of parts...",
      open: false
    }
    // Add other FAQ items here
  ];

  toggleFaq(index: number) {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  ngOnInit() {
    this.setupSEO();
    this.setupStructuredData();
    this.setFaqStructuredData();
  }

  private setupSEO() {
    this.title.setTitle('Premium Colour Anodizing Services | Shree Ganesh Colour Anodize');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Industry-leading colour anodizing services with superior durability and vibrant finishes. Get expert aluminium anodizing solutions with precise colour matching and eco-friendly processes.'
    });
    
    this.meta.addTags([
      { name: 'keywords', content: 'colour anodizing, aluminum anodizing, anodized finishes, metal finishing, corrosion resistance, colour matching, eco-friendly anodizing, decorative anodizing, industrial anodizing, aluminum surface treatment, anodic coating, anodizing services in India, aluminum coloring, durable metal finishes, architectural anodizing' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shree Ganesh Colour Anodize' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // Location-specific meta tags
      { name: 'geo.region', content: 'IN' },
      { name: 'geo.placename', content: 'India' },
      { name: 'geo.position', content: '22.270369215203996;70.82591100324079' },
      { name: 'ICBM', content: '22.270369215203996, 70.82591100324079' },
      
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Colour Anodizing Services | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: 'Professional colour anodizing services with superior durability and vibrant finishes for industrial and decorative applications' },
      { property: 'og:image', content: '/assets/services/colour-anodizing/colour-anodizing-1.jpg' },
      { property: 'og:url', content: 'https://shreeganeshcolouranodize.com/services/colour-anodizing' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Shree Ganesh Colour Anodize' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:country-name', content: 'India' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Colour Anodizing Services | Shree Ganesh Colour Anodize' },
      { name: 'twitter:description', content: 'Professional colour anodizing services with superior durability and vibrant finishes for industrial and decorative applications' },
      { name: 'twitter:image', content: '/assets/services/colour-anodizing/colour-anodizing-1.jpg' },
      
      // Additional SEO tags
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#c4282c' },
      { name: 'application-name', content: 'Shree Ganesh Colour Anodize' },
      { name: 'apple-mobile-web-app-title', content: 'Shree Ganesh Colour Anodize' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Industry-specific tags
      { name: 'industry', content: 'Metal Finishing, Surface Treatment, Manufacturing' },
      { name: 'service-type', content: 'Colour Anodizing, Aluminum Treatment, Metal Coating' },
      { name: 'target-audience', content: 'Industrial Manufacturers, Architectural Firms, Consumer Electronics Manufacturers' },
      
      // Content information
      { name: 'content-language', content: 'en' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'rating', content: 'General' },
      { name: 'referrer', content: 'no-referrer-when-downgrade' },
      { name: 'mobile-web-app-capable', content: 'yes' }
    ]);
  }

  private setupStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Colour Anodizing",
      "serviceType": "Colour Anodizing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Ganesh Colour Anodize",
        "image": `${this.baseUrl}/assets/logo/logo.png`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "142",
          "reviewCount": "93"
        },
      },
      "image": `${this.baseUrl}/assets/logo/logo.png`,
      "description": "Professional colour anodizing services with superior durability and vibrant finishes",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Anodizing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Architectural Anodizing",
            "description": "Weather-resistant finishes for building components"
          },
          {
            "@type": "Offer",
            "name": "Industrial Anodizing",
            "description": "Durable coatings for mechanical and industrial parts"
          }
        ]
      }
    };

    this.transferState.set(PRODUCT_SCHEMA_KEY, JSON.stringify(structuredData));
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }

  private setFaqStructuredData(): void {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqStructuredData);
      this.document.head.appendChild(script);
    }
  }
}