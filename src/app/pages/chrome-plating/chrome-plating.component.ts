import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chrome-plating',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chrome-plating.component.html',
  styleUrl: './chrome-plating.component.scss'
})
export class ChromePlatingComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private title = inject(Title);
  private meta = inject(Meta);

  faqItems = [
    {
      question: "What is chrome plating?",
      answer: "Chrome plating is an electroplating process that applies a thin layer of chromium onto a metal surface. This creates a durable, corrosion-resistant finish with a distinctive mirror-like appearance that enhances both aesthetics and performance.",
      open: false
    },
    {
      question: "How durable is chrome plating?",
      answer: "Chrome plating is exceptionally durable, offering superior hardness and wear resistance. Properly plated chrome surfaces can withstand years of use in demanding environments, resisting scratches, corrosion, and chemical damage while maintaining their distinctive appearance.",
      open: false
    },
    {
      question: "What metals can be chrome plated?",
      answer: "Most metals can be chrome plated, including steel, aluminum, copper, brass, and zinc alloys. Each base metal requires specific preparation techniques to ensure proper adhesion and finish quality. Our experts can advise on the best approach for your specific components.",
      open: false
    },
    {
      question: "What is the difference between decorative and hard chrome plating?",
      answer: "Decorative chrome plating is thinner (0.2-0.5 microns) and primarily used for aesthetic purposes with underlying nickel layers for corrosion protection. Hard chrome plating is thicker (2-250 microns), applied directly to the base metal, and designed for industrial applications requiring extreme wear resistance and durability.",
      open: false
    },
    {
      question: "How do I maintain chrome-plated surfaces?",
      answer: "Maintain chrome-plated surfaces by regularly cleaning with mild soap and water, avoiding abrasive cleaners or tools that can scratch the finish. For automotive applications, apply a quality chrome polish periodically. Prevent prolonged exposure to harsh chemicals and salt, and address any damage promptly to prevent corrosion.",
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  ngOnInit() {
    this.setupSEO();
    this.setupStructuredData();
  }

  private setupSEO() {
    this.title.setTitle('Premium Chrome Plating Services | Shree Ganesh Colour Anodize');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Industry-leading chrome plating services with superior durability and mirror-like finishes. Get expert electroplating solutions with precise quality control and environmentally responsible processes.'
    });
    
    this.meta.addTags([
      { name: 'keywords', content: 'chrome plating, electroplating chromium, hard chrome plating, decorative chrome plating, metal finishing, corrosion resistance, industrial chrome plating, best chrome plating services, chrome plating services in India, metal surface treatment, chrome electroplating, chrome coating, chrome finishing, chrome polishing, chrome restoration' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shree Ganesh Colour Anodize' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // Location-specific meta tags
      { name: 'geo.region', content: 'IN' },
      { name: 'geo.placename', content: 'India' },
      { name: 'geo.position', content: '22.270369215203996;70.82591100324079' },
      { name: 'ICBM', content: '22.270369215203996, 70.82591100324079' },
      
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Chrome Plating Services | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: 'Professional chrome plating services with superior durability and mirror-like finishes for industrial and decorative applications' },
      { property: 'og:image', content: '/assets/services/chrome-plating/chrome-plating-1.jpg' },
      { property: 'og:url', content: 'https://shreeganeshcolouranodize.com/services/chrome-plating' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Shree Ganesh Colour Anodize' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:country-name', content: 'India' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Chrome Plating Services | Shree Ganesh Colour Anodize' },
      { name: 'twitter:description', content: 'Professional chrome plating services with superior durability and mirror-like finishes for industrial and decorative applications' },
      { name: 'twitter:image', content: '/assets/services/chrome-plating/chrome-plating-1.jpg' },
      
      // Additional SEO tags
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#c4282c' },
      { name: 'application-name', content: 'Shree Ganesh Colour Anodize' },
      { name: 'apple-mobile-web-app-title', content: 'Shree Ganesh Colour Anodize' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Industry-specific tags
      { name: 'industry', content: 'Metal Finishing, Surface Treatment, Manufacturing' },
      { name: 'service-type', content: 'Chrome Plating, Electroplating, Metal Coating' },
      { name: 'target-audience', content: 'Industrial Manufacturers, Automotive Industry, Decorative Hardware Manufacturers' },
      
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
      "serviceType": "Chrome Plating",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Ganesh Colour Anodize",
        "image": "/assets/logo.png"
      },
      "description": "Professional chrome plating services with superior durability and mirror-like finishes",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Chrome Plating Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Decorative Chrome Plating",
            "description": "Brilliant, mirror-like finishes for aesthetic applications"
          },
          {
            "@type": "Offer",
            "name": "Hard Chrome Plating",
            "description": "Durable, wear-resistant coatings for industrial components"
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
