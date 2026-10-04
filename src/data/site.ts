// ALL CONTENT LIVES HERE. Edit text, links, products and industries in this file.
// In headlines, {Word} in braces turns that word green.

export const site = {
  name: "CTF",
  tagline: "Create the Future",
  location: "India",
  year: 2026,
};

export const contact = { href: "" };

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
];
export const navCta = { label: "Let's Build", href: contact.href };

export const hero = {
  eyebrow: "Robotics / AI / Real-World Impact",
  title: ["Intelligence", "in {Motion}."],
  body: "We design and build intelligent machines that solve real-world problems and create a smarter, safer, and more sustainable future.",
  cta: { label: "Explore Our Work", href: "#products" },
  side: ["Human ideas.", "Machines.", "Real impact."],
  image: "/images/hero.webp",
};

export const about = {
  eyebrow: "About CTF",
  title: ["Engineering", "a Smarter", "Tomorrow."],
  body: [
    "CTF is a deep-tech company focused on robotics, artificial intelligence, autonomous systems, and advanced engineering.",
    "We build intelligent machines designed to operate in the real world — helping people, transforming industries, and creating new possibilities for tomorrow.",
  ],
  cta: { label: "Our Story", href: "#vision" },
  side: ["Research", "Engineering", "Products", "Real-world solutions"],
  badge: "Built for a Smarter India.",
  image: "/images/about.webp",
};

export const technology = {
  eyebrow: "Our Technology",
  title: "Intelligence, Engineered.",
  body: "We bring together multiple engineering disciplines to create machines that can sense, understand, decide, and act.",
  cta: { label: "Explore Our Technology", href: "#technology" },
  // icon names: Bot | BrainCircuit | Navigation | Cog
  items: [
    { icon: "Bot", title: "Robotics", text: "Intelligent machines designed to operate and perform meaningful tasks in real-world environments." },
    { icon: "BrainCircuit", title: "Artificial Intelligence", text: "Computer vision, machine learning, perception, and decision-making systems that give machines intelligence." },
    { icon: "Navigation", title: "Autonomous Systems", text: "Machines capable of sensing their environment, understanding situations, making decisions, and acting independently." },
    { icon: "Cog", title: "Advanced Engineering", text: "Mechanical systems, electronics, embedded computing, control systems, and software — engineered as one." },
  ],
};

export const products = {
  eyebrow: "Featured Products",
  title: ["Real Machines.", "Real Impact."],
  body: "From autonomous robots to intelligent aerial systems, we develop machines designed to solve problems beyond the laboratory.",
  cta: { label: "Explore Products", href: "#products" },
  items: [
    { id: "x1", name: "CTF-X1", type: "Humanoid Robot", short: "X1", shortType: "Humanoid",
      text: "A next-generation robotic platform designed for human environments and real-world interaction.",
      features: ["Human-Robot Interaction", "AI Perception", "Autonomous Navigation", "Real-World Deployment"],
      image: "/images/x1.webp", thumb: "/images/t-x1.webp", href: "#" },
    { id: "q1", name: "CTF-Q1", type: "Autonomous Quadruped", short: "Q1", shortType: "Quadruped",
      text: "A highly mobile robotic platform designed for inspection, surveillance, exploration, and challenging terrain.",
      features: ["Autonomous Mobility", "Terrain Intelligence", "Computer Vision", "Remote Operations"],
      image: "/images/about.webp", thumb: "/images/t-q1.webp", href: "#" },
    { id: "a1", name: "CTF-A1", type: "Autonomous Inspection Rover", short: "A1", shortType: "Inspection Rover",
      text: "An intelligent ground vehicle designed to navigate complex environments and perform autonomous inspection tasks.",
      features: ["Navigation", "Mapping", "Computer Vision", "Sensor Fusion"],
      image: "/images/smart-cities.webp", thumb: "/images/t-a1.webp", href: "#" },
    { id: "d1", name: "CTF-D1", type: "Autonomous Aerial System", short: "D1", shortType: "Aerial Drone",
      text: "Intelligent aerial platforms designed for surveying, mapping, inspection, and autonomous missions.",
      features: ["Aerial Robotics", "Autonomous Flight", "AI Vision", "Precision Navigation"],
      image: "/images/infrastructure.webp", thumb: "/images/t-d1.webp", href: "#" },
  ],
};

export const industries = {
  eyebrow: "Industries We Serve",
  title: ["Built for the", "Real World."],
  body: "Our technology is designed to solve meaningful problems across industries.",
  cta: { label: "Explore All Industries", href: "#solutions" },
  items: [
    { title: "Agriculture", image: "/images/agriculture.webp", text: "Autonomous machines and intelligent aerial systems for smarter farming, monitoring, and precision agriculture." },
    { title: "Healthcare", image: "/images/healthcare.webp", text: "Robotic systems designed to assist people and support safer, more efficient healthcare environments." },
    { title: "Industry", image: "/images/industry.webp", text: "Intelligent automation, inspection, monitoring, and robotic systems for modern industrial environments." },
    { title: "Infrastructure", image: "/images/infrastructure.webp", text: "Autonomous inspection and monitoring technologies for complex infrastructure and large-scale environments." },
    { title: "Defence & Security", image: "/images/defence.webp", text: "Advanced autonomous systems designed for surveillance, exploration, and operations in challenging environments." },
    { title: "Smart Cities", image: "/images/smart-cities.webp", text: "Intelligent machines and autonomous systems for safer, more efficient, and connected urban environments." },
  ],
};

export const project = {
  eyebrow: "Featured Project",
  title: ["Autonomous", "Terrain Rover."],
  body: "An all-terrain autonomous robotic platform designed for exploration, mapping, inspection, and surveillance in challenging environments.",
  lead: "The system combines",
  tech: ["LiDAR", "Computer Vision", "Sensor Fusion", "Autonomous Navigation", "AI Perception", "Real-Time Control"],
  cta: { label: "View Project", href: "#" },
  cta2: { label: "Technical Details", href: "#" },
  image: "/images/defence.webp",
};

export const approach = {
  eyebrow: "Our Approach",
  eyebrowSub: "From idea to machine",
  title: ["We don't just", "imagine the future.", "We {engineer} it."],
  body: "Every CTF system moves through a complete engineering cycle.",
  steps: [
    { title: "Discover", text: "Identify meaningful problems and understand the environment in which the machine must operate." },
    { title: "Design", text: "Transform ideas into mechanical, electrical, computational, and software architectures." },
    { title: "Build", text: "Develop prototypes, electronics, embedded systems, robotic platforms, and intelligent software." },
    { title: "Test", text: "Validate machines through simulation, laboratory testing, and real-world environments." },
    { title: "Deploy", text: "Transform validated technology into reliable systems capable of creating real-world impact." },
  ],
};

export const vision = {
  eyebrow: "Our Vision",
  title: ["A Smarter", "India."],
  body: [
    "We envision an India where robotics and intelligent machines improve lives, empower industries, and create new possibilities for future generations.",
    "From agriculture and infrastructure to healthcare, manufacturing, mobility, and public safety, we believe intelligent machines can help build a more capable and connected nation.",
  ],
  cta: { label: "Our Vision", href: "#vision" },
  pillars: [
    { title: "Sustainable Growth", text: "Technology designed for a better future." },
    { title: "Safer Communities", text: "Machines that can operate where humans face risk." },
    { title: "Advanced Infrastructure", text: "Intelligent systems for a rapidly developing nation." },
    { title: "Global Innovation", text: "Building technology from India for the world." },
  ],
  image: "/images/vision.webp",
};

export const impact = {
  eyebrow: "Engineered for Impact",
  items: [
    { title: "People", text: "Technology that works alongside humans." },
    { title: "Industries", text: "Automation that increases capability and efficiency." },
    { title: "Environments", text: "Machines designed to operate where humans cannot." },
    { title: "Future", text: "Technology that creates possibilities that do not exist today." },
  ],
};

export const careers = {
  eyebrow: "Careers",
  title: ["Build Your Career", "in Robotics."],
  lead: "The future needs engineers who can build it.",
  body: "At CTF, you'll work across robotics, artificial intelligence, electronics, embedded systems, mechanical engineering, software, and autonomous systems.",
  values: ["Build machines.", "Solve real problems.", "Learn continuously.", "Create the future."],
  cta: { label: "Explore Careers", href: contact.href },
  rolesTitle: "Open roles",
  roles: ["Robotics Engineering", "AI & Computer Vision", "Embedded Systems", "Electronics Engineering", "Mechanical Design", "Software Engineering", "Research & Development"],
};

export const finalCta = {
  eyebrow: "Let's Build Together",
  title: ["The Future", "Is Physical."],
  lines: "Ideas. Engineering. Real Impact.",
  body: "We are building intelligent machines for the world that comes next.",
  cta: { label: "Start a Project", href: contact.href },
  cta2: { label: "Contact CTF", href: contact.href },
  side: ["People", "Technology", "A brighter tomorrow"],
  image: "/images/cta.webp",
};

export const footer = {
  links: [
    { label: "Home", href: "#home" }, { label: "Technology", href: "#technology" },
    { label: "Products", href: "#products" }, { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" }, { label: "Careers", href: "#careers" },
    { label: "Contact", href: contact.href },
  ],
  social: [
    { label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" }, { label: "GitHub", href: "#" },
  ],
  note: "Engineered for a smarter tomorrow.",
};
