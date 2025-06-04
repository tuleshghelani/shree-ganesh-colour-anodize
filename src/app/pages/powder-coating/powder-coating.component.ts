import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-powder-coating',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './powder-coating.component.html',
  styleUrl: './powder-coating.component.scss'
})
export class PowderCoatingComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private title = inject(Title);
  private meta = inject(Meta);

  faqItems = [
    {
      question: "What is powder coating?",
      answer: "Powder coating is a dry finishing process where electrostatically charged powder particles are applied to a metal surface and then cured under heat. This creates a durable, uniform coating that's thicker and more resistant to chipping, scratching, fading, and corrosion than conventional liquid paint.",
      open: false
    },
    {
      question: "What are the environmental benefits of powder coating?",
      answer: "Powder coating is environmentally friendly as it contains no solvents and releases virtually no volatile organic compounds (VOCs). The process also allows for high material utilization with up to 95% of overspray being recoverable and reusable, significantly reducing waste compared to traditional liquid painting.",
      open: false
    },
    {
      question: "What materials can be powder coated?",
      answer: "Most metals can be powder coated, including steel, aluminum, galvanized steel, and zinc-coated metals. With specialized techniques, certain non-metallic substrates like MDF (Medium Density Fiberboard), composites, and some plastics can also be powder coated using low-temperature curing powders.",
      open: false
    },
    {
      question: "How durable is powder coating compared to liquid paint?",
      answer: "Powder coating is significantly more durable than liquid paint. It creates a thicker, more uniform coating that offers superior resistance to impacts, abrasion, chemicals, UV radiation, and extreme weather conditions. A properly applied powder coating can last 15-20 years, often outlasting liquid paint by several years.",
      open: false
    },
    {
      question: "How do I maintain powder-coated surfaces?",
      answer: "Maintain powder-coated surfaces by regularly cleaning with mild soap and water, avoiding abrasive cleaners or tools that can scratch the finish. For outdoor applications, periodic cleaning to remove dirt and contaminants will help preserve the appearance. Promptly address any damage to prevent corrosion of the underlying material.",
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
    this.title.setTitle('Premium Electrostatic Powder Coating Services | Shree Ganesh Colour Anodize');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Industry-leading powder coating services with superior durability and exceptional finishes. Get expert electrostatic powder coating solutions with precise quality control and environmentally friendly processes.'
    });
    
    this.meta.addTags([
      { name: 'keywords', content: 'powder coating, electrostatic powder coating, best powder coating, powder painting, powder finish, metal finishing, corrosion resistance, industrial powder coating, best powder coating services, powder coating services in India, metal surface treatment, powder application, powder finishing, durable coating, environmentally friendly coating' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shree Ganesh Colour Anodize' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // Location-specific meta tags
      { name: 'geo.region', content: 'IN' },
      { name: 'geo.placename', content: 'India' },
      { name: 'geo.position', content: '22.270369215203996;70.82591100324079' },
      { name: 'ICBM', content: '22.270369215203996, 70.82591100324079' },
      
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Electrostatic Powder Coating Services | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: 'Professional powder coating services with superior durability and exceptional finishes for industrial and decorative applications' },
      { property: 'og:image', content: '/assets/services/powder-coating/powder-coating-1.jpg' },
      { property: 'og:url', content: 'https://shreeganeshcolouranodize.com/services/powder-coating' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Shree Ganesh Colour Anodize' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:country-name', content: 'India' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Electrostatic Powder Coating Services | Shree Ganesh Colour Anodize' },
      { name: 'twitter:description', content: 'Professional powder coating services with superior durability and exceptional finishes for industrial and decorative applications' },
      { name: 'twitter:image', content: '/assets/services/powder-coating/powder-coating-1.jpg' },
      
      // Additional SEO tags
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#c4282c' },
      { name: 'application-name', content: 'Shree Ganesh Colour Anodize' },
      { name: 'apple-mobile-web-app-title', content: 'Shree Ganesh Colour Anodize' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Industry-specific tags
      { name: 'industry', content: 'Metal Finishing, Surface Treatment, Manufacturing' },
      { name: 'service-type', content: 'Powder Coating, Electrostatic Coating, Metal Coating' },
      { name: 'target-audience', content: 'Industrial Manufacturers, Architectural Firms, Furniture Manufacturers' },
      
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
      "serviceType": "Powder Coating",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Ganesh Colour Anodize",
        "image": "/assets/logo.png"
      },
      "description": "Professional powder coating services with superior durability and exceptional finishes",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Powder Coating Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Decorative Powder Coating",
            "description": "Vibrant, long-lasting finishes for aesthetic applications"
          },
          {
            "@type": "Offer",
            "name": "Industrial Powder Coating",
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