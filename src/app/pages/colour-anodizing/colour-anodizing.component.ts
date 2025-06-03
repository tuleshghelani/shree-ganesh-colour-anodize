import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-colour-anodizing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './colour-anodizing.component.html',
  styleUrl: './colour-anodizing.component.scss'
})
export class ColourAnodizingComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private title = inject(Title);
  private meta = inject(Meta);

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
  }

  private setupSEO() {
    this.title.setTitle('Premium Colour Anodizing Services | Shree Ganesh Colour Anodize');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Industry-leading colour anodizing services with superior durability and vibrant finishes. Get expert aluminium anodizing solutions with precise colour matching and eco-friendly processes.'
    });
    
    this.meta.addTags([
      { name: 'keywords', content: 'colour anodizing, aluminum anodizing, anodized finishes, metal finishing, corrosion resistance, colour matching, eco-friendly anodizing' },
      { property: 'og:title', content: 'Premium Colour Anodizing Services | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: 'Professional colour anodizing services with superior durability and vibrant finishes for industrial and decorative applications' },
      { property: 'og:type', content: 'website' }
    ]);
  }

  private setupStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Colour Anodizing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Ganesh Colour Anodize",
        "image": "/assets/logo.png"
      },
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

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.text = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }
  }
}