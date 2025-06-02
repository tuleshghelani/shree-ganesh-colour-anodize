import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  contactForm!: FormGroup;
  loading = false;
  submitted = false;
  successMessage: string = '';
  errorMessage: string = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
  }
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
    
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      service: [''],
      message: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    
    this.loading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
      this.contactForm.reset();
      this.submitted = false;
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }, 1500);
    
    // In a real application, you would call your service to send the form data
    // this.contactService.sendMessage(this.contactForm.value).subscribe(
    //   response => {
    //     this.loading = false;
    //     this.successMessage = 'Thank you! Your message has been sent successfully.';
    //     this.contactForm.reset();
    //     this.submitted = false;
    //   },
    //   error => {
    //     this.loading = false;
    //     this.errorMessage = 'There was an error sending your message. Please try again.';
    //   }
    // );
  }
  
  private setupSEO() {
    this.title.setTitle('Contact Us | Shree Ganesh Colour Anodize | Premium Surface Treatments');
    
    this.meta.addTags([
      { name: 'description', content: 'Contact Shree Ganesh Colour Anodize for premium colour anodizing, chrome plating, and powder coating services. Get expert advice and quotes for your surface treatment needs.' },
      { name: 'keywords', content: 'contact, colour anodizing, chrome plating, powder coating, metal finishing services, industrial coating services, surface treatment solutions' },
      { property: 'og:title', content: 'Contact Us | Shree Ganesh Colour Anodize' },
      { property: 'og:description', content: 'Contact Shree Ganesh Colour Anodize for premium surface treatment solutions including colour anodizing, chrome plating, and powder coating services.' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shree Ganesh Colour Anodize' }
    ]);
  }
}
