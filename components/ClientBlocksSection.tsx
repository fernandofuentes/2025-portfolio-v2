"use client";

import { useState, memo, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

interface ClientProject {
  id: number;
  name: string;
  logo: string;
  description: string;
  images: string[];
}

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = memo(({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  const handleBackgroundClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleImageClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handlePrevClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onPrev();
  }, [onPrev]);

  const handleNextClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onNext();
  }, [onNext]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center cursor-pointer"
      onClick={handleBackgroundClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Image Container - Fit to Screen */}
      <div className="w-full h-full flex items-center justify-center p-16">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain cursor-pointer"
          onClick={handleImageClick}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
});

Lightbox.displayName = 'Lightbox';

// Memoize individual project blocks to prevent unnecessary re-renders
const ProjectBlock = memo(({ project, onImageClick, onScrollToProjects }: {
  project: ClientProject;
  onImageClick: (images: string[], index: number) => void;
  onScrollToProjects: () => void;
}) => {
  const handleImageClick = useCallback((index: number) => {
    onImageClick(project.images, index);
  }, [project.images, onImageClick]);

  return (
    <div id={`client-block-${project.id}`} className="bg-gray-50 p-8 lg:p-12 rounded-2xl">
      
      {/* Top Row - Client Name and Logo */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-shrink-0">
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="h-12 w-auto object-contain"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Create a placeholder logo with company name if image fails
              const canvas = document.createElement('canvas');
              canvas.width = 200;
              canvas.height = 48;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.fillStyle = '#f9fafb';
                ctx.fillRect(0, 0, 200, 48);
                ctx.fillStyle = '#374151';
                ctx.font = 'bold 14px Inter, sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillText(project.name, 10, 24);
                e.currentTarget.src = canvas.toDataURL();
              }
            }}
          />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {project.name}
        </h3>
      </div>

      {/* Description */}
      <div className="mb-8">
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer group"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`${project.name} project image ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Return to Projects Button */}
      <div className="flex justify-center">
        <button
          onClick={onScrollToProjects}
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
        >
          <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
          Return to Projects Section
        </button>
      </div>
    </div>
  );
});

ProjectBlock.displayName = 'ProjectBlock';

export default function ClientBlocksSection() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [] as string[],
    currentIndex: 0,
  });

  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const clientProjects: ClientProject[] = [
    {
      id: 1,
      name: 'Blue Otter Digital',
      logo: '/images/real-customer-logos/project-blue-otter.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/blue-otter/Blue-Otter-Ad-1.png',
        '/images/client-projects/blue-otter/Blue-Otter-Ad-2.png',
        '/images/client-projects/blue-otter/Blue-Otter-Ad-3.png',
        '/images/client-projects/blue-otter/Blue-Otter-Ad-4.png',
        '/images/client-projects/blue-otter/Blue-Otter-Ad-5.png',
        '/images/client-projects/blue-otter/Blue-Otter-Ad-6.png',
      ],
    },
    {
      id: 2,
      name: 'Cadence Bank',
      logo: '/images/real-customer-logos/project-cadence-bank.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/cadence-bank/cadence-bank-1.png',
        '/images/client-projects/cadence-bank/cadence-bank-2.png',
        '/images/client-projects/cadence-bank/cadence-bank-3.png',
        '/images/client-projects/cadence-bank/cadence-bank-4.png',
        '/images/client-projects/cadence-bank/cadence-bank-5.png',
        '/images/client-projects/cadence-bank/cadence-bank-6.png',
      ],
    },
    {
      id: 3,
      name: 'Chantal',
      logo: '/images/real-customer-logos/project-chantal.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/chantal/chantal-1.png',
        '/images/client-projects/chantal/chantal-2.png',
        '/images/client-projects/chantal/chantal-3.png',
        '/images/client-projects/chantal/chantal-4.png',
        '/images/client-projects/chantal/chantal-5.png',
        '/images/client-projects/chantal/chantal-6.png',
      ],
    },
    {
      id: 4,
      name: 'Denise Austin',
      logo: '/images/real-customer-logos/project-denise-austin.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/denise-austin/denise-austin-1.png',
        '/images/client-projects/denise-austin/denise-austin-2.png',
        '/images/client-projects/denise-austin/denise-austin-3.png',
        '/images/client-projects/denise-austin/denise-austin-4.png',
        '/images/client-projects/denise-austin/denise-austin-5.png',
        '/images/client-projects/denise-austin/denise-austin-6.png',
      ],
    },
    {
      id: 5,
      name: 'Flat Out',
      logo: '/images/real-customer-logos/project-flat-out.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/flat-out/flatout-1.png',
        '/images/client-projects/flat-out/flatout-2.png',
        '/images/client-projects/flat-out/flatout-3.png',
        '/images/client-projects/flat-out/flatout-4.png',
        '/images/client-projects/flat-out/flatout-5.png',
        '/images/client-projects/flat-out/flatout-6.png',
      ],
    },
    {
      id: 6,
      name: 'Jurassic Quest',
      logo: '/images/real-customer-logos/project-jurassic-quest.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/jurassic-quest/jurassic-quest-1.png',
        '/images/client-projects/jurassic-quest/jurassic-quest-2.jpg',
        '/images/client-projects/jurassic-quest/jurassic-quest-3.png',
        '/images/client-projects/jurassic-quest/jurassic-quest-4.png',
        '/images/client-projects/jurassic-quest/jurassic-quest-5.jpg',
        '/images/client-projects/jurassic-quest/jurassic-quest-6.png',
      ],
    },
    {
      id: 7,
      name: 'Landshark',
      logo: '/images/real-customer-logos/project-landshark.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/landshark/landshark-1.png',
        '/images/client-projects/landshark/landshark-2.png',
        '/images/client-projects/landshark/landshark-3.png',
        '/images/client-projects/landshark/landshark-4.png',
        '/images/client-projects/landshark/landshark-5.png',
        '/images/client-projects/landshark/landshark-6.png',
      ],
    },
    {
      id: 8,
      name: 'Live Nation',
      logo: '/images/real-customer-logos/project-live-nation.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/live-nation/livenation-1.jpg',
        '/images/client-projects/live-nation/livenation-2.png',
        '/images/client-projects/live-nation/livenation-3.png',
        '/images/client-projects/live-nation/livenation-4.png',
        '/images/client-projects/live-nation/livenation-5.png',
        '/images/client-projects/live-nation/livenation-6.png',
      ],
    },
    {
      id: 9,
      name: 'PR Luxury Media',
      logo: '/images/real-customer-logos/project-pr-luxury-media.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/pr-luxury-media/coming-soon-1.png',
        '/images/client-projects/pr-luxury-media/coming-soon-2.png',
        '/images/client-projects/pr-luxury-media/coming-soon-3.png',
        '/images/client-projects/pr-luxury-media/coming-soon-4.png',
        '/images/client-projects/pr-luxury-media/coming-soon-5.png',
        '/images/client-projects/pr-luxury-media/coming-soon-6.png',
      ],
    },
    {
      id: 10,
      name: 'Ron Hoover',
      logo: '/images/real-customer-logos/project-ron-hoover.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/ron-hoover/ron-hoover-1.png',
        '/images/client-projects/ron-hoover/ron-hoover-2.png',
        '/images/client-projects/ron-hoover/ron-hoover-3.png',
        '/images/client-projects/ron-hoover/ron-hoover-4.png',
        '/images/client-projects/ron-hoover/ron-hoover-5.png',
        '/images/client-projects/ron-hoover/ron-hoover-6.png',
      ],
    },
    {
      id: 11,
      name: 'Sectigo',
      logo: '/images/real-customer-logos/project-sectigo.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/sectigo/sectigo-1.png',
        '/images/client-projects/sectigo/sectigo-2.png',
        '/images/client-projects/sectigo/sectigo-3.png',
        '/images/client-projects/sectigo/sectigo-4.png',
        '/images/client-projects/sectigo/sectigo-5.png',
        '/images/client-projects/sectigo/sectigo-6.png',
      ],
    },
    {
      id: 12,
      name: 'Sidney Garber',
      logo: '/images/real-customer-logos/project-sidney-garber.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/sidney-garber/sidney-garber-1.jpg',
        '/images/client-projects/sidney-garber/sidney-garber-2.png',
        '/images/client-projects/sidney-garber/sidney-garber-3.png',
        '/images/client-projects/sidney-garber/sidney-garber-4.png',
        '/images/client-projects/sidney-garber/sidney-garber-5.png',
        '/images/client-projects/sidney-garber/sidney-garber-6.png',
      ],
    },
    {
      id: 13,
      name: 'Snack Subscription',
      logo: '/images/real-customer-logos/project-snack-subscription.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/snack-subscription/snack-subscription-1.png',
        '/images/client-projects/snack-subscription/snack-subscription-2.png',
        '/images/client-projects/snack-subscription/snack-subscription-3.png',
        '/images/client-projects/snack-subscription/snack-subscription-4.png',
        '/images/client-projects/snack-subscription/snack-subscription-5.png',
        '/images/client-projects/snack-subscription/snack-subscription-6.jpg',
      ],
    },
    {
      id: 14,
      name: 'Yak Attack',
      logo: '/images/real-customer-logos/project-yak-attack.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/yak-attack/yak-attack-1.png',
        '/images/client-projects/yak-attack/yak-attack-2.png',
        '/images/client-projects/yak-attack/yak-attack-3.png',
        '/images/client-projects/yak-attack/yak-attack-4.png',
        '/images/client-projects/yak-attack/yak-attack-5.png',
        '/images/client-projects/yak-attack/yak-attack-6.png',
      ],
    },
    {
      id: 15,
      name: 'Zach and Zoe',
      logo: '/images/real-customer-logos/project-zach-and-zoe.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/zach-and-zoe/zach-and-zoe-1.jpg',
        '/images/client-projects/zach-and-zoe/zach-and-zoe-2.png',
        '/images/client-projects/zach-and-zoe/zach-and-zoe-3.png',
        '/images/client-projects/zach-and-zoe/zach-and-zoe-4.png',
        '/images/client-projects/zach-and-zoe/zach-and-zoe-5.png',
        '/images/client-projects/zach-and-zoe/zach-and-zoe-6.png',
      ],
    },
    {
      id: 16,
      name: 'Dragons and Beasties',
      logo: '/images/real-customer-logos/project-dragons-and-beasties.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/dragons-and-beasties/dragons-and-beasties-1.png',
        '/images/client-projects/dragons-and-beasties/dragons-and-beasties-2.png',
        '/images/client-projects/dragons-and-beasties/dragons-and-beasties-3.png',
        '/images/client-projects/dragons-and-beasties/dragons-and-beasties-4.png',
        '/images/client-projects/dragons-and-beasties/dragons-and-beasties-7.png',
        '/images/client-projects/dragons-and-beasties/dragons-and-beasties-8.png',
      ],
    },
    {
      id: 17,
      name: 'Margaritaville Resorts',
      logo: '/images/real-customer-logos/project-margaritaville-resorts.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/margaritaville-resorts/coming-soon-1.png',
        '/images/client-projects/margaritaville-resorts/coming-soon-2.png',
        '/images/client-projects/margaritaville-resorts/coming-soon-3.png',
        '/images/client-projects/margaritaville-resorts/coming-soon-4.png',
        '/images/client-projects/margaritaville-resorts/coming-soon-5.png',
        '/images/client-projects/margaritaville-resorts/coming-soon-6.png',
      ],
    },
    {
      id: 18,
      name: 'Margaritaville',
      logo: '/images/real-customer-logos/project-margaritaville.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/margaritaville/margaritaville-1.png',
        '/images/client-projects/margaritaville/margaritaville-2.png',
        '/images/client-projects/margaritaville/margaritaville-3.png',
        '/images/client-projects/margaritaville/margaritaville-4.png',
        '/images/client-projects/margaritaville/margaritaville-5.png',
        '/images/client-projects/margaritaville/margaritaville-6.png',
      ],
    },
    {
      id: 19,
      name: 'Mpact',
      logo: '/images/real-customer-logos/project-mpact.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/mpact/mpact-1.png',
        '/images/client-projects/mpact/mpact-2.png',
        '/images/client-projects/mpact/mpact-3.png',
        '/images/client-projects/mpact/mpact-4.png',
        '/images/client-projects/mpact/mpact-5.png',
        '/images/client-projects/mpact/mpact-6.png',
      ],
    },
    {
      id: 20,
      name: 'Aircon',
      logo: '/images/real-customer-logos/project-aircon.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/aircon/aircon-1.png',
        '/images/client-projects/aircon/aircon-2.png',
        '/images/client-projects/aircon/aircon-3.png',
        '/images/client-projects/aircon/aircon-4.png',
        '/images/client-projects/aircon/aircon-5.png',
        '/images/client-projects/aircon/aircon-6.png',
      ],
    },
    {
      id: 21,
      name: 'Casper',
      logo: '/images/real-customer-logos/project-casper.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/casper/coming-soon-1.png',
        '/images/client-projects/casper/coming-soon-2.png',
        '/images/client-projects/casper/coming-soon-3.png',
        '/images/client-projects/casper/coming-soon-4.png',
        '/images/client-projects/casper/coming-soon-5.png',
        '/images/client-projects/casper/coming-soon-6.png',
      ],
    },
    {
      id: 22,
      name: 'Skywheel',
      logo: '/images/real-customer-logos/project-skywheel.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/skywheel/skywheel-1.png',
        '/images/client-projects/skywheel/skywheel-2.png',
        '/images/client-projects/skywheel/skywheel-3.png',
        '/images/client-projects/skywheel/skywheel-4.png',
        '/images/client-projects/skywheel/skywheel-5.png',
        '/images/client-projects/skywheel/skywheel-6.png',
      ],
    },
    {
      id: 23,
      name: 'Scorpions',
      logo: '/images/real-customer-logos/project-scorpions.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/scorpions/scorpions-1.png',
        '/images/client-projects/scorpions/scorpions-2.png',
        '/images/client-projects/scorpions/scorpions-3.png',
        '/images/client-projects/scorpions/scorpions-4.png',
        '/images/client-projects/scorpions/scorpions-5.png',
        '/images/client-projects/scorpions/scorpions-6.png',
      ],
    },
    {
      id: 24,
      name: 'Big Future',
      logo: '/images/real-customer-logos/project-big-future.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/big-future/big-future-1.png',
        '/images/client-projects/big-future/big-future-2.png',
        '/images/client-projects/big-future/big-future-3.png',
        '/images/client-projects/big-future/big-future-4.png',
        '/images/client-projects/big-future/big-future-5.png',
        '/images/client-projects/big-future/big-future-6.png',
      ],
    },
    {
      id: 25,
      name: 'Ever Better',
      logo: '/images/real-customer-logos/project-ever-better.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/ever-better/coming-soon-1.png',
        '/images/client-projects/ever-better/coming-soon-2.png',
        '/images/client-projects/ever-better/coming-soon-3.png',
        '/images/client-projects/ever-better/coming-soon-4.png',
        '/images/client-projects/ever-better/coming-soon-5.png',
        '/images/client-projects/ever-better/coming-soon-6.png',
      ],
    },
    {
      id: 26,
      name: 'Sister Dale',
      logo: '/images/real-customer-logos/project-sister-dale.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/sister-dale/sisterdale-1.png',
        '/images/client-projects/sister-dale/sisterdale-2.png',
        '/images/client-projects/sister-dale/sisterdale-3.png',
        '/images/client-projects/sister-dale/sisterdale-4.png',
        '/images/client-projects/sister-dale/sisterdale-5.png',
        '/images/client-projects/sister-dale/sisterdale-6.png',
      ],
    },
    {
      id: 27,
      name: 'Big as Texas',
      logo: '/images/real-customer-logos/project-big-as-texas.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/big-as-texas/big-as-texas-1.png',
        '/images/client-projects/big-as-texas/big-as-texas-2.png',
        '/images/client-projects/big-as-texas/big-as-texas-3.png',
        '/images/client-projects/big-as-texas/big-as-texas-4.png',
        '/images/client-projects/big-as-texas/big-as-texas-5.png',
        '/images/client-projects/big-as-texas/big-as-texas-6.png',
      ],
    },
    {
      id: 28,
      name: 'GFI',
      logo: '/images/real-customer-logos/project-gfi.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/gfi/gfi-1.png',
        '/images/client-projects/gfi/gfi-2.png',
        '/images/client-projects/gfi/gfi-3.png',
        '/images/client-projects/gfi/gfi-4.png',
        '/images/client-projects/gfi/gfi-5.png',
        '/images/client-projects/gfi/gfi-6.png',
      ],
    },
    {
      id: 29,
      name: 'Breaker One 9',
      logo: '/images/real-customer-logos/project-breaker-one-9.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/breaker-one-9/breaker-one-9-1.png',
        '/images/client-projects/breaker-one-9/breaker-one-9-2.png',
        '/images/client-projects/breaker-one-9/breaker-one-9-3.png',
        '/images/client-projects/breaker-one-9/breaker-one-9-4.png',
        '/images/client-projects/breaker-one-9/breaker-one-9-5.png',
        '/images/client-projects/breaker-one-9/breaker-one-9-6.png',
      ],
    },
    {
      id: 30,
      name: 'The Toasted Yolk',
      logo: '/images/real-customer-logos/project-the-toasted-yolk.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/the-toasted-yolk/coming-soon-1.png',
        '/images/client-projects/the-toasted-yolk/coming-soon-2.png',
        '/images/client-projects/the-toasted-yolk/coming-soon-3.png',
        '/images/client-projects/the-toasted-yolk/coming-soon-4.png',
        '/images/client-projects/the-toasted-yolk/coming-soon-5.png',
        '/images/client-projects/the-toasted-yolk/coming-soon-6.png',
      ],
    },
    {
      id: 31,
      name: 'Highway Transport',
      logo: '/images/real-customer-logos/project-highway-transport.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/highway-transport/highway-transport-1.png',
        '/images/client-projects/highway-transport/highway-transport-2.png',
        '/images/client-projects/highway-transport/highway-transport-3.png',
        '/images/client-projects/highway-transport/highway-transport-4.png',
        '/images/client-projects/highway-transport/highway-transport-5.png',
        '/images/client-projects/highway-transport/highway-transport-6.png',
      ],
    },
    {
      id: 32,
      name: 'Jerry Jeff Walker',
      logo: '/images/real-customer-logos/project-jerry-jeff-walker.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/jerry-jeff-walker/jerry-jeff-walker-1.png',
        '/images/client-projects/jerry-jeff-walker/jerry-jeff-walker-2.png',
        '/images/client-projects/jerry-jeff-walker/jerry-jeff-walker-3.png',
        '/images/client-projects/jerry-jeff-walker/jerry-jeff-walker-4.png',
        '/images/client-projects/jerry-jeff-walker/jerry-jeff-walker-5.png',
        '/images/client-projects/jerry-jeff-walker/jerry-jeff-walker-6.png',
      ],
    },
    {
      id: 33,
      name: 'Dinosaur Adventure',
      logo: '/images/real-customer-logos/project-dinosaur-adventure.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/dinosaur-adventure/dinosaur-adventure-1.png',
        '/images/client-projects/dinosaur-adventure/dinosaur-adventure-2.png',
        '/images/client-projects/dinosaur-adventure/dinosaur-adventure-3.png',
        '/images/client-projects/dinosaur-adventure/dinosaur-adventure-4.png',
        '/images/client-projects/dinosaur-adventure/dinosaur-adventure-5.png',
        '/images/client-projects/dinosaur-adventure/dinosaur-adventure-6.png',
      ],
    },
    {
      id: 34,
      name: 'Special Olympics',
      logo: '/images/real-customer-logos/project-special-olympics.png',
      description: 'Description coming soon.',
      images: [
        '/images/client-projects/special-olympics/special-olympics-1.png',
        '/images/client-projects/special-olympics/special-olympics-2.png',
        '/images/client-projects/special-olympics/special-olympics-3.png',
        '/images/client-projects/special-olympics/special-olympics-4.gif',
        '/images/client-projects/special-olympics/special-olympics-5.png',
        '/images/client-projects/special-olympics/special-olympics-6.png',
      ],
    },
  ];

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({
      isOpen: false,
      images: [],
      currentIndex: 0,
    });
  }, []);

  const nextImage = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  }, []);

  const prevImage = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
    }));
  }, []);

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Client Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">The designs below were created by me and are the property of their respective companies.
            </p>
          </div>

          {/* Client Blocks */}
          <div className="space-y-20">
            {clientProjects.map((project) => (
              <ProjectBlock
                key={project.id}
                project={project}
                onImageClick={openLightbox}
                onScrollToProjects={scrollToProjects}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}