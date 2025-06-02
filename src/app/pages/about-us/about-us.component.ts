import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  // Calculate years of experience dynamically
  yearsOfExperience: number = new Date().getFullYear() - 2010;
  
  milestones = [
    {
      year: '2010',
      title: 'Company Foundation',
      description: 'Established with a vision to provide premium surface treatment solutions'
    },
    {
      year: '2012',
      title: 'Facility Expansion',
      description: 'Expanded our facility with state-of-the-art equipment for advanced treatments'
    },
    {
      year: '2015',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 certification for our quality management systems'
    },
    {
      year: '2020',
      title: 'Service Innovation',
      description: 'Introduced new eco-friendly processes and expanded service offerings'
    },
    {
      year: '2025',
      title: 'New Unit',
      description: 'Established a new unit for anodizing, chrome plating and powder coating services'
    }
  ];
  
  values = [
    {
      icon: 'fa-gem',
      title: 'Quality Excellence',
      description: 'We are committed to delivering the highest quality in every project we undertake.'
    },
    {
      icon: 'fa-handshake',
      title: 'Customer Satisfaction',
      description: "Our clients' success is our success. We work closely with customers to exceed expectations."
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'We continuously explore new technologies and processes to improve our services.'
    },
    {
      icon: 'fa-leaf',
      title: 'Sustainability',
      description: 'We implement eco-friendly practices throughout our operations.'
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('About Us | Shree Ganesh Colour Anodize | Premium Surface Treatment Specialists');
    
    this.meta.addTags([
      { name: 'description', content: `Learn about Shree Ganesh Colour Anodize - industry leaders in premium colour anodizing, chrome plating, and powder coating services with over ${this.yearsOfExperience} years of expertise and commitment to quality excellence.` },
      { name: 'keywords', content: 'about Shree Ganesh, colour anodizing company, surface treatment specialists, metal finishing experts, anodizing history, chrome plating company, powder coating professionals' },
      { property: 'og:title', content: 'About Us | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: `Learn about Shree Ganesh Colour Anodize - industry leaders in premium surface treatments with over ${this.yearsOfExperience} years of expertise` },
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
