export interface ProductModule {
  name: string;
  desc: string;
  included: boolean;
  addOnPrice?: string;
}

export interface Product {
  slug: string;
  title: string;
  desc: string;
  longDescription: string;
  features: string[];
  color: string;
  price: string;
  modules: ProductModule[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'garage-management-system',
    title: 'Garage Management System',
    desc: 'The ultimate operating system for modern repair shops.',
    longDescription:
      'GRIPTOR Garage Management System brings every part of your repair shop — job cards, technician workflows, and customer-facing estimates — into a single connected platform. Cut down on paperwork, speed up turnaround times, and give your team real-time visibility into every vehicle on the lot.',
    features: ['Job Cards & Estimates', 'Technician Tracking', 'Digital Inspections'],
    color: 'from-[var(--navy)] to-[var(--royal)]',
    price: '$79',
    modules: [
      {
        name: 'Job Cards & Estimates',
        desc: 'Create, track, and approve digital job cards and customer estimates.',
        included: true
      },
      {
        name: 'Technician Tracking',
        desc: 'Assign jobs and monitor technician progress in real time.',
        included: true
      },
      {
        name: 'Digital Inspections',
        desc: 'Photo and video-based vehicle inspection reports for customers.',
        included: true
      },
      {
        name: 'Multi-location Support',
        desc: 'Manage job cards and technicians across multiple branches.',
        included: false,
        addOnPrice: '$29'
      },
      {
        name: 'Fleet Management Module',
        desc: 'Track service history and schedules for fleet customers.',
        included: false,
        addOnPrice: '$39'
      },
      {
        name: 'Custom Branding',
        desc: 'White-label job cards, estimates, and customer portals.',
        included: false,
        addOnPrice: '$19'
      }
    ]
  },
  {
    slug: 'inventory-pos',
    title: 'Inventory & POS',
    desc: 'Never run out of stock. Process payments instantly.',
    longDescription:
      'Keep parts on the shelf and money in the register. GRIPTOR Inventory & POS combines real-time stock tracking with a fast, reliable point-of-sale so your team can quote, sell, and restock without ever leaving the platform.',
    features: ['Barcode Scanning', 'Low Stock Alerts', 'Supplier Management'],
    color: 'from-[var(--teal)] to-[var(--cyan)]',
    price: '$59',
    modules: [
      {
        name: 'Barcode Scanning',
        desc: 'Scan parts in and out with any standard barcode scanner.',
        included: true
      },
      {
        name: 'Low Stock Alerts',
        desc: 'Automatic notifications when parts fall below threshold.',
        included: true
      },
      {
        name: 'Supplier Management',
        desc: 'Track suppliers, purchase orders, and lead times.',
        included: true
      },
      {
        name: 'Multi-warehouse Sync',
        desc: 'Sync stock levels across multiple warehouses or branches.',
        included: false,
        addOnPrice: '$25'
      },
      {
        name: 'Advanced Demand Forecasting',
        desc: 'Predict reorder needs using historical sales data.',
        included: false,
        addOnPrice: '$35'
      },
      {
        name: 'Hardware Integration Kit',
        desc: 'Connect receipt printers, cash drawers, and card readers.',
        included: false,
        addOnPrice: '$15'
      }
    ]
  },
  {
    slug: 'customer-crm',
    title: 'Customer CRM',
    desc: 'Build loyalty with automated communication.',
    longDescription:
      'Turn one-time customers into repeat business. GRIPTOR Customer CRM automates service reminders, feedback collection, and messaging so your shop stays top of mind without any manual follow-up.',
    features: ['Service Reminders', 'WhatsApp Integration', 'Feedback System'],
    color: 'from-[var(--royal)] to-[var(--bright-blue)]',
    price: '$49',
    modules: [
      {
        name: 'Service Reminders',
        desc: 'Automated SMS and email reminders for upcoming services.',
        included: true
      },
      {
        name: 'WhatsApp Integration',
        desc: 'Send updates and reminders directly over WhatsApp.',
        included: true
      },
      {
        name: 'Feedback System',
        desc: 'Collect and manage customer reviews after every visit.',
        included: true
      },
      {
        name: 'Loyalty & Rewards Program',
        desc: 'Points-based rewards to keep customers coming back.',
        included: false,
        addOnPrice: '$20'
      },
      {
        name: 'Marketing Automation',
        desc: 'Automated campaigns based on customer service history.',
        included: false,
        addOnPrice: '$30'
      },
      {
        name: 'Customer Mobile App',
        desc: 'Branded mobile app for booking and tracking service.',
        included: false,
        addOnPrice: '$25'
      }
    ]
  }
];
