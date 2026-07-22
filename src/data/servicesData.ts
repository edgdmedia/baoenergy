export interface Service {
  id: string;
  slug: string;
  title: string;
  img: string;
  excerpt: string;
  body: string[];
}

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "maintenance-support-services",
    title: "Maintenance Support Services",
    img: "/assets/refinery-cloudy.jpg",
    excerpt: "Valve servicing, instrumentation calibration, gas detector and breathing apparatus support.",
    body: [
      "Maintenance Support Services in our Company encompass a range of essential activities aimed at ensuring the smooth operation and longevity of equipment and systems. One crucial aspect of these services is valve maintenance, which includes tasks such as valve greasing campaigns and general valve servicing.",
      "Another vital component of maintenance support services is the upkeep of general instrumentation. This involves tasks such as equipment calibration, repair, and servicing. Skilled technicians are responsible for troubleshooting any instrument-related issues and ensuring their accuracy and reliability.",
      "Portable gas detectors and monitors play a critical role in maintaining a safe working environment in the energy industry. Calibration and repairs of these devices are essential to ensure their accuracy and reliability in detecting potentially hazardous gases."
    ]
  },
  {
    id: "svc-2",
    slug: "asset-integrity-management",
    title: "Asset Integrity Management",
    img: "/assets/refinery-night.jpg",
    excerpt: "Protecting the integrity and reliability of equipment, structures and systems across their lifecycle.",
    body: [
      "Asset Integrity Management is a crucial service that focuses on ensuring the integrity and reliability of equipment, structures, and systems throughout their operational lifecycle, minimizing risk and maximizing uptime.",
      "Through structured inspection regimes, condition monitoring, and risk-based assessment, we help clients extend asset life, maintain regulatory compliance, and avoid unplanned downtime across their facilities."
    ]
  },
  {
    id: "svc-3",
    slug: "procurement-services",
    title: "Procurement Services (Equipment and Spares/Material)",
    img: "/assets/container-ship.jpg",
    excerpt: "Sourcing essential equipment, spares and materials reliably and cost-effectively.",
    body: [
      "Procurement Services play a crucial role in ensuring the availability of essential equipment, spares, and materials necessary for the smooth running of operations, sourced reliably and cost-effectively.",
      "Leveraging an established supplier network, we manage sourcing, expediting, quality assurance, and logistics so that our clients receive the right materials at the right time and the right price."
    ]
  },
  {
    id: "svc-4",
    slug: "metering-system-recertification",
    title: "Oil & Gas Metering System Recertification and Assurance",
    img: "/assets/refinery-sunset.jpg",
    excerpt: "Accurate measurement and reliable data for fair transactions and regulatory compliance.",
    body: [
      "The service of Oil & Gas Metering System Recertification and Assurance is vital to ensure accurate measurement and reliable data, supporting fair commercial transactions and regulatory compliance.",
      "Our specialists verify, recertify, and assure metering systems against industry standards, delivering the measurement confidence required for custody transfer and allocation."
    ]
  },
  {
    id: "svc-5",
    slug: "manpower-support-services",
    title: "Manpower Support Services",
    img: "/assets/worker.jpg",
    excerpt: "Competent, skilled personnel supporting every aspect of facility operations.",
    body: [
      "Manpower Support Services are designed to provide competent and skilled personnel to support various aspects of facility operations. This service supplies trained technicians, operators, and specialists on demand.",
      "We recruit, vet, and deploy personnel matched to each client’s technical and operational requirements, providing flexible resourcing that scales with project needs."
    ]
  },
  {
    id: "svc-6",
    slug: "others",
    title: "Others",
    img: "/assets/cooling-towers.jpg",
    excerpt: "Project Management. Waste Management. Logistics Management Consulting.",
    body: [
      "Beyond our core disciplines we offer a range of complementary value-added services, including Project Management, Waste Management, and Logistics Management Consulting.",
      "These offerings round out our integrated approach, allowing clients to consolidate multiple support needs with a single, dependable partner."
    ]
  }
];

export const stats = [
  { big: "3", label: "Core sectors — Oil & Gas, Telecoms, FMCG" },
  { big: "6", label: "Integrated service lines" },
  { big: "100%", label: "Indigenous, fully-integrated provider" },
  { big: "Lagos", label: "Headquartered in Surulere, Nigeria" }
];

export const hsePrinciples = [
  {
    no: "01",
    title: "People First",
    short: "Every worker is empowered to stop work when a condition looks unsafe.",
    long: "No task is so urgent that it cannot be done safely. Every member of our workforce carries the authority — and the responsibility — to stop work the moment a condition appears unsafe, without fear of reprisal."
  },
  {
    no: "02",
    title: "Rigorous Standards",
    short: "Procedures aligned to recognised codes and client requirements.",
    long: "We align our procedures with recognised industry codes and client-specific requirements, supported by competency-based training, permit-to-work discipline and routine certification of tools and equipment."
  },
  {
    no: "03",
    title: "Environmental Care",
    short: "Disciplined waste management, spill prevention and responsible resource use.",
    long: "We work to minimise our footprint on every project through disciplined waste management, spill prevention, and responsible use of resources — protecting the communities and environments in which we operate."
  },
  {
    no: "04",
    title: "Continuous Improvement",
    short: "Audits and near-miss reporting feed a steady cycle of review.",
    long: "Incidents, near-misses and audits feed a structured cycle of review. We learn deliberately from every job so that the standard of everything we do rises steadily over time."
  }
];

export const sectors = [
  "Oil & Gas",
  "Telecommunications",
  "FMCG",
  "Project & Logistics"
];
