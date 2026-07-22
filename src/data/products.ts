export interface ProductModule {
  name: string;
  desc: string;
  included: boolean;
  addOnPriceUSD?: number;
}

export interface Product {
  slug: string;
  title: string;
  desc: string;
  longDescription: string;
  features: string[];
  color: string;
  /** null = bundled/included, not sold standalone (e.g. Cloud Hosting) */
  priceUSD: number | null;
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
    priceUSD: 79,
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
        addOnPriceUSD: 29
      },
      {
        name: 'Fleet Management Module',
        desc: 'Track service history and schedules for fleet customers.',
        included: false,
        addOnPriceUSD: 39
      },
      {
        name: 'Custom Branding',
        desc: 'White-label job cards, estimates, and customer portals.',
        included: false,
        addOnPriceUSD: 19
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
    priceUSD: 59,
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
        addOnPriceUSD: 25
      },
      {
        name: 'Advanced Demand Forecasting',
        desc: 'Predict reorder needs using historical sales data.',
        included: false,
        addOnPriceUSD: 35
      },
      {
        name: 'Hardware Integration Kit',
        desc: 'Connect receipt printers, cash drawers, and card readers.',
        included: false,
        addOnPriceUSD: 15
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
    priceUSD: 49,
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
        addOnPriceUSD: 20
      },
      {
        name: 'Marketing Automation',
        desc: 'Automated campaigns based on customer service history.',
        included: false,
        addOnPriceUSD: 30
      },
      {
        name: 'Customer Mobile App',
        desc: 'Branded mobile app for booking and tracking service.',
        included: false,
        addOnPriceUSD: 25
      }
    ]
  },
  {
    slug: 'workshop-management',
    title: 'Workshop Management',
    desc: 'Optimize bay utilization and technician scheduling.',
    longDescription:
      'Get a real-time view of every bay in your shop. Workshop Management shows which bays are free, occupied, or in maintenance, so you can schedule work and technicians without guesswork or double-booking.',
    features: ['Bay Availability Board', 'Job-to-Bay Assignment', 'Technician Scheduling'],
    color: 'from-[var(--navy)] to-[var(--teal)]',
    priceUSD: 45,
    modules: [
      { name: 'Bay Availability Board', desc: 'A live board showing which bays are free, occupied, or under maintenance.', included: true },
      { name: 'Job-to-Bay Assignment', desc: 'Assign an active job card to a bay and track it through to completion.', included: true },
      { name: 'Technician Scheduling', desc: 'See which technician is working which bay, in real time.', included: true },
      { name: 'Capacity Forecasting', desc: 'Predict daily bay capacity based on booked jobs.', included: false, addOnPriceUSD: 20 },
      { name: 'Maintenance Logs', desc: 'Track equipment maintenance and downtime per bay.', included: false, addOnPriceUSD: 15 },
      { name: 'Multi-location Support', desc: 'Manage bays across multiple branches.', included: false, addOnPriceUSD: 29 }
    ]
  },
  {
    slug: 'booking-system',
    title: 'Booking System',
    desc: 'Online appointment scheduling with automated reminders.',
    longDescription:
      'Let customers book a service slot without a phone call. Booking System manages appointments end to end — from request to confirmation to automated reminders — so your front desk spends less time on the phone.',
    features: ['Appointment Scheduling', 'Status Tracking', 'Automated Reminders'],
    color: 'from-[var(--royal)] to-[var(--cyan)]',
    priceUSD: 35,
    modules: [
      { name: 'Appointment Scheduling', desc: 'Create and manage bookings against a customer, vehicle, and date.', included: true },
      { name: 'Status Tracking', desc: 'Move bookings through pending, confirmed, and completed.', included: true },
      { name: 'Automated Reminders', desc: 'Reminders sent ahead of an upcoming appointment.', included: true },
      { name: 'Online Booking Widget', desc: 'A public booking form customers can fill in themselves.', included: false, addOnPriceUSD: 25 },
      { name: 'Calendar Sync', desc: 'Sync bookings with Google or Outlook calendars.', included: false, addOnPriceUSD: 18 },
      { name: 'No-show Tracking', desc: 'Flag and follow up on missed appointments.', included: false, addOnPriceUSD: 12 }
    ]
  },
  {
    slug: 'fleet-management',
    title: 'Fleet Management',
    desc: 'Comprehensive tools for managing large vehicle fleets.',
    longDescription:
      'Servicing a fleet is different from servicing one car at a time. Fleet Management groups a customer’s vehicles together so you can track status, service history, and turnaround across the whole fleet at a glance.',
    features: ['Fleet Grouping', 'Per-vehicle Status', 'Fleet Service History'],
    color: 'from-[var(--bright-blue)] to-[var(--navy)]',
    priceUSD: 55,
    modules: [
      { name: 'Fleet Grouping', desc: 'Group a company or customer’s vehicles under one fleet record.', included: true },
      { name: 'Per-vehicle Status', desc: 'Track each vehicle’s status — active, in service, or retired.', included: true },
      { name: 'Fleet Service History', desc: 'A shared history view across every vehicle in a fleet.', included: true },
      { name: 'Fleet Billing Summary', desc: 'Consolidated invoicing across an entire fleet.', included: false, addOnPriceUSD: 25 },
      { name: 'Driver Assignment', desc: 'Assign and track drivers per vehicle.', included: false, addOnPriceUSD: 15 },
      { name: 'Custom Branding', desc: 'White-label fleet reports for corporate customers.', included: false, addOnPriceUSD: 19 }
    ]
  },
  {
    slug: 'customer-mobile-app',
    title: 'Customer Mobile App',
    desc: 'White-labeled app for your customers to track services.',
    longDescription:
      'Give customers a way to check on their vehicle without calling you. Customer Mobile App provides a branded lookup experience so customers can check job status by phone number or plate, any time.',
    features: ['Service Status Lookup', 'Branded Experience', 'Shareable Access Link'],
    color: 'from-[var(--teal)] to-[var(--royal)]',
    priceUSD: 45,
    modules: [
      { name: 'Service Status Lookup', desc: 'Customers look up their vehicle’s current job status by phone or plate.', included: true },
      { name: 'Branded Experience', desc: 'Your shop’s name and logo on every customer-facing screen.', included: true },
      { name: 'Shareable Access Link', desc: 'A link or QR code customers can use to check status anytime.', included: true },
      { name: 'Push Notifications', desc: 'Notify customers automatically when their vehicle status changes.', included: false, addOnPriceUSD: 25 },
      { name: 'Service History Access', desc: 'Let customers view their own past visits and invoices.', included: false, addOnPriceUSD: 20 },
      { name: 'In-app Feedback', desc: 'Collect reviews directly through the customer experience.', included: false, addOnPriceUSD: 15 }
    ]
  },
  {
    slug: 'vehicle-inspection',
    title: 'Vehicle Inspection',
    desc: 'Digital multi-point inspection forms with photo uploads.',
    longDescription:
      'Replace the paper checklist. Vehicle Inspection records a structured, digital multi-point inspection for every vehicle — pass, advisory, or fail — tied directly to the customer and technician who performed it.',
    features: ['Digital Inspection Reports', 'Pass/Advisory/Fail Results', 'Inspection History'],
    color: 'from-[var(--cyan)] to-[var(--navy)]',
    priceUSD: 25,
    modules: [
      { name: 'Digital Inspection Reports', desc: 'Structured multi-point inspection forms per vehicle.', included: true },
      { name: 'Pass/Advisory/Fail Results', desc: 'A clear result on every inspected item.', included: true },
      { name: 'Inspection History', desc: 'A searchable history of every inspection performed.', included: true },
      { name: 'Photo & Video Uploads', desc: 'Attach photos and video directly to inspection items.', included: false, addOnPriceUSD: 20 },
      { name: 'Customer-facing Reports', desc: 'Share a formatted inspection report with the customer.', included: false, addOnPriceUSD: 18 },
      { name: 'Custom Checklists', desc: 'Build inspection templates specific to your shop.', included: false, addOnPriceUSD: 15 }
    ]
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    desc: 'Integrated financial tracking, invoicing, and tax reporting.',
    longDescription:
      'See what your shop actually makes. Accounting pulls real revenue from your job cards and point-of-sale, tracks expenses as you log them, and gives you a clear month-by-month picture of the numbers.',
    features: ['Revenue Tracking', 'Expense Logging', 'Monthly Financial Summary'],
    color: 'from-[var(--royal)] to-[var(--teal)]',
    priceUSD: 49,
    modules: [
      { name: 'Revenue Tracking', desc: 'Real revenue pulled automatically from completed jobs and sales.', included: true },
      { name: 'Expense Logging', desc: 'Log and categorize shop expenses as they happen.', included: true },
      { name: 'Monthly Financial Summary', desc: 'A month-by-month view of revenue, expenses, and net.', included: true },
      { name: 'Tax Reporting', desc: 'Generate tax-ready summaries for your accountant.', included: false, addOnPriceUSD: 25 },
      { name: 'Multi-location Rollup', desc: 'Combine financials across multiple branches.', included: false, addOnPriceUSD: 29 },
      { name: 'Custom Categories', desc: 'Build expense categories specific to your shop.', included: false, addOnPriceUSD: 12 }
    ]
  },
  {
    slug: 'reports-analytics',
    title: 'Reports & Analytics',
    desc: 'Deep insights into revenue, performance, and growth.',
    longDescription:
      'Turn your shop’s data into decisions. Reports & Analytics brings revenue trends, technician performance, and customer growth into one dashboard, so you know what’s working and what needs attention.',
    features: ['Revenue Trends', 'Technician Performance', 'Customer Growth Insights'],
    color: 'from-[var(--bright-blue)] to-[var(--cyan)]',
    priceUSD: 39,
    modules: [
      { name: 'Revenue Trends', desc: 'Month-over-month revenue trends across jobs and sales.', included: true },
      { name: 'Technician Performance', desc: 'Completed jobs and turnaround time per technician.', included: true },
      { name: 'Customer Growth Insights', desc: 'New vs. returning customer trends over time.', included: true },
      { name: 'Top Parts Report', desc: 'See your best-selling parts and categories.', included: false, addOnPriceUSD: 18 },
      { name: 'Custom Dashboards', desc: 'Build a dashboard around the metrics that matter to you.', included: false, addOnPriceUSD: 25 },
      { name: 'Scheduled Email Reports', desc: 'Get key metrics emailed to you on a schedule.', included: false, addOnPriceUSD: 15 }
    ]
  },
  {
    slug: 'cloud-hosting',
    title: 'Cloud Hosting',
    desc: 'Secure, 99.9% uptime enterprise-grade cloud infrastructure.',
    longDescription:
      'Every GRIPTOR plan runs on the same secure, enterprise-grade cloud infrastructure — automatic backups, encrypted data, and 99.9% uptime, with nothing for your shop to install or maintain.',
    features: ['99.9% Uptime', 'Automatic Backups', 'Encrypted Data'],
    color: 'from-[var(--navy)] to-[var(--bright-blue)]',
    priceUSD: null,
    modules: [
      { name: '99.9% Uptime', desc: 'Enterprise-grade infrastructure with industry-leading uptime.', included: true },
      { name: 'Automatic Backups', desc: 'Your shop’s data is backed up automatically, every day.', included: true },
      { name: 'Encrypted Data', desc: 'Data encrypted in transit and at rest.', included: true },
      { name: 'Dedicated Environment', desc: 'An isolated hosting environment for large multi-location operators.', included: false, addOnPriceUSD: 49 },
      { name: 'Custom Domain', desc: 'Run your admin portal on your own domain.', included: false, addOnPriceUSD: 15 },
      { name: 'SLA & Priority Uptime Support', desc: 'A formal uptime SLA with priority incident response.', included: false, addOnPriceUSD: 39 }
    ]
  }
];
