"use client";

export default function RealCustomersSection() {
  const companies = [
    {
      id: 1,
      name: 'Blue Otter',
      logo: '/images/real-customer-logos/project-blue-otter.png',
    },
    {
      id: 2,
      name: 'Cadence Bank',
      logo: '/images/real-customer-logos/project-cadence-bank.png',
    },
    {
      id: 3,
      name: 'Chantal',
      logo: '/images/real-customer-logos/project-chantal.png',
    },
    {
      id: 4,
      name: 'Denise Austin',
      logo: '/images/real-customer-logos/project-denise-austin.png',
    },
    {
      id: 5,
      name: 'Flat Out',
      logo: '/images/real-customer-logos/project-flat-out.png',
    },
    {
      id: 6,
      name: 'Jurassic Quest',
      logo: '/images/real-customer-logos/project-jurassic-quest.png',
    },
    {
      id: 7,
      name: 'Landshark',
      logo: '/images/real-customer-logos/project-landshark.png',
    },
    {
      id: 8,
      name: 'Live Nation',
      logo: '/images/real-customer-logos/project-livenation.png',
    },
    {
      id: 9,
      name: 'PR Luxury Media',
      logo: '/images/real-customer-logos/project-pr-luxury-media.png',
    },
    {
      id: 10,
      name: 'Ron Hoover',
      logo: '/images/real-customer-logos/project-ron-hoover.png',
    },
    {
      id: 11,
      name: 'Sectigo',
      logo: '/images/real-customer-logos/project-sectigo.png',
    },
    {
      id: 12,
      name: 'Sidney Garber',
      logo: '/images/real-customer-logos/project-sidney-garber.png',
    },
    {
      id: 13,
      name: 'Snack Subscription',
      logo: '/images/real-customer-logos/project-snack-subscription.png',
    },
    {
      id: 14,
      name: 'Yak Attack',
      logo: '/images/real-customer-logos/project-yak-attack.png',
    },
    {
      id: 15,
      name: 'Zach and Zoe',
      logo: '/images/real-customer-logos/project-zach-and-zoe.png',
    },
    {
      id: 16,
      name: 'Dragons and Beasties',
      logo: '/images/real-customer-logos/project-dragons-and-beasties.png',
    },
    {
      id: 17,
      name: 'Margaritaville Resorts',
      logo: '/images/real-customer-logos/project-margaritaville-resorts.png',
    },
    {
      id: 18,
      name: 'Margaritaville',
      logo: '/images/real-customer-logos/project-margaritaville.png',
    },
    {
      id: 19,
      name: 'Mpact',
      logo: '/images/real-customer-logos/project-mpact.png',
    },
    {
      id: 20,
      name: 'Aircon',
      logo: '/images/real-customer-logos/project-aircon.png',
    },
    {
      id: 21,
      name: 'Casper',
      logo: '/images/real-customer-logos/project-casper.png',
    },
    {
      id: 22,
      name: 'Skywheel',
      logo: '/images/real-customer-logos/project-skywheel.png',
    },
    {
      id: 23,
      name: 'Scorpions',
      logo: '/images/real-customer-logos/project-scorpions.png',
    },
    {
      id: 24,
      name: 'Big Future',
      logo: '/images/real-customer-logos/project-big-future.png',
    },
    {
      id: 25,
      name: 'Ever Better',
      logo: '/images/real-customer-logos/project-ever-better.png',
    },
    {
      id: 26,
      name: 'Sister Dale',
      logo: '/images/real-customer-logos/project-sister-dale.png',
    },
    {
      id: 27,
      name: 'Big as Texas',
      logo: '/images/real-customer-logos/project-big-as-texas.png',
    },
    {
      id: 28,
      name: 'GFI',
      logo: '/images/real-customer-logos/project-gfi.png',
    },
    {
      id: 29,
      name: 'Breaker One 9',
      logo: '/images/real-customer-logos/project-breaker-one-9.png',
    },
    {
      id: 30,
      name: 'The Toasted Yolk',
      logo: '/images/real-customer-logos/project-the-toasted-yolk.png',
    },
    {
      id: 31,
      name: 'Highway Transport',
      logo: '/images/real-customer-logos/project-highway-transport.png',
    },
    {
      id: 32,
      name: 'Jerry Jeff Walker',
      logo: '/images/real-customer-logos/project-jerry-jeff-walker.png',
    },
    {
      id: 33,
      name: 'Dinosaur Adventure',
      logo: '/images/real-customer-logos/project-dinosaur-adventure.png',
    },
    {
      id: 34,
      name: 'Special Olympics',
      logo: '/images/real-customer-logos/project-special-olympics.png',
    },
  ];

  const scrollToClientBlock = (clientId: number) => {
    const element = document.getElementById(`client-block-${clientId}`);
    if (element) {
      // Get the navbar height (64px = h-16 in Tailwind)
      const navbarHeight = 64;
      // Add extra padding for better visual spacing
      const extraPadding = 32;
      const totalOffset = navbarHeight + extraPadding;
      
      // Get element position and scroll with offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - totalOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Trusted by Leading Companies
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Brands, Real Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            I've collaborated with some of the most recognized brands to bring their creative visions to life. Design work crafted by me — trusted by top names across industries.
          </p>
          
          {/* Bold Call-to-Action Text - No Link */}
          <p className="text-lg font-bold text-gray-900 max-w-2xl mx-auto">
            Dive into a project, or scroll your way down to the footer. Enjoy the ride.
          </p>
        </div>

        {/* Logo Grid - 4 columns with minimal spacing and larger logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2 items-center">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => scrollToClientBlock(company.id)}
              className="group flex items-center justify-center p-12 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="w-full h-32 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Create a placeholder logo with company name if image fails
                    const canvas = document.createElement('canvas');
                    canvas.width = 200;
                    canvas.height = 80;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                      ctx.fillStyle = '#f9fafb';
                      ctx.fillRect(0, 0, 200, 80);
                      ctx.fillStyle = '#6b7280';
                      ctx.font = 'bold 12px Inter, sans-serif';
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'middle';
                      ctx.fillText(company.name, 100, 40);
                      e.currentTarget.src = canvas.toDataURL();
                    }
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Join 35+ companies that trust Fernando for their design needs
          </p>
        </div>
      </div>
    </section>
  );
}