export type Library = {
  id: string;
  name: string;
};

export type ComponentSnippet = {
  id: string;
  name: string;
  category: string;
  code: string;
};

export const LIBRARIES: Library[] = [
  { id: "shadcn", name: "shadcn/ui" },
  { id: "mui", name: "Material UI" },
  { id: "chakra", name: "Chakra UI" },
  { id: "antd", name: "Ant Design" },
  { id: "radix", name: "Radix" },
  { id: "headless", name: "Headless UI" },
  { id: "mantine", name: "Mantine" },
  { id: "plain", name: "Plain HTML/JSX" },
];

const dedent = (s: string) => s.replace(/^\n/, "").replace(/\n\s*$/, "");

export const COMPONENTS: Record<string, ComponentSnippet[]> = {
  shadcn: [
    // ============ BUTTONS ============
    {
      id: "btn-primary",
      name: "Primary Button",
      category: "Buttons",
      code: dedent(`
const PrimaryButton = () => (
  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
    Click me
  </button>
);
`),
    },
    {
      id: "btn-icon",
      name: "Icon Button",
      category: "Buttons",
      code: dedent(`
const IconButton = () => (
  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
    <span>★</span> Favorite
  </button>
);
`),
    },
    {
      id: "btn-group",
      name: "Button Group",
      category: "Buttons",
      code: dedent(`
const ButtonGroup = () => (
  <div>
    <button className="px-3 py-2 border">Left</button>
    <button className="px-3 py-2 border">Middle</button>
    <button className="px-3 py-2 border">Right</button>
  </div>
);
`),
    },
    {
      id: "btn-loading",
      name: "Loading Button",
      category: "Buttons",
      code: dedent(`
const LoadingButton = () => (
  <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded" disabled>
    Loading...
  </button>
);
`),
    },
    {
      id: "btn-ghost",
      name: "Ghost Button",
      category: "Buttons",
      code: dedent(`
const GhostButton = () => (
  <button className="px-4 py-2 text-gray-700">
    Cancel
  </button>
);
`),
    },

    // ============ FORMS ============
    {
      id: "form-login",
      name: "Login Form",
      category: "Forms",
      code: dedent(`
const LoginForm = () => (
  <form className="p-6 border">
    <h2>Sign in</h2>
    <input placeholder="Email" className="block border p-2 w-full mt-2" />
    <input placeholder="Password" type="password" className="block border p-2 w-full mt-2" />
    <button className="bg-blue-500 text-white px-4 py-2 mt-3">Sign in</button>
  </form>
);
`),
    },
    {
      id: "form-signup",
      name: "Signup Form",
      category: "Forms",
      code: dedent(`
const SignupForm = () => (
  <form className="p-6 border">
    <h2>Create account</h2>
    <input placeholder="Full name" className="block border p-2 w-full mt-2" />
    <input placeholder="Email" className="block border p-2 w-full mt-2" />
    <input placeholder="Password" type="password" className="block border p-2 w-full mt-2" />
    <label className="block mt-2"><input type="checkbox" /> I agree to terms</label>
    <button className="bg-blue-500 text-white px-4 py-2 mt-3">Sign up</button>
  </form>
);
`),
    },
    {
      id: "form-contact",
      name: "Contact Form",
      category: "Forms",
      code: dedent(`
const ContactForm = () => (
  <form className="p-6 border">
    <h2>Get in touch</h2>
    <input placeholder="Your name" className="block border p-2 w-full mt-2" />
    <input placeholder="Email" className="block border p-2 w-full mt-2" />
    <textarea placeholder="Message" className="block border p-2 w-full mt-2" rows={4} />
    <button className="bg-blue-500 text-white px-4 py-2 mt-3">Send message</button>
  </form>
);
`),
    },
    {
      id: "form-newsletter",
      name: "Newsletter Form",
      category: "Forms",
      code: dedent(`
const Newsletter = () => (
  <form className="p-4 border">
    <h3>Subscribe to our newsletter</h3>
    <p>Get updates straight to your inbox.</p>
    <div>
      <input placeholder="you@example.com" className="border p-2" />
      <button className="bg-blue-500 text-white px-4 py-2">Subscribe</button>
    </div>
  </form>
);
`),
    },
    {
      id: "form-search",
      name: "Search Form",
      category: "Forms",
      code: dedent(`
const SearchForm = () => (
  <form className="p-2 border">
    <input placeholder="Search..." className="border p-2 w-full" />
    <button className="bg-gray-200 px-3 py-2 mt-2">Search</button>
  </form>
);
`),
    },

    // ============ CARDS ============
    {
      id: "card-pricing",
      name: "Pricing Card",
      category: "Cards",
      code: dedent(`
const PricingCard = () => (
  <div className="border p-4">
    <h3>Pro</h3>
    <p>$29/mo</p>
    <ul>
      <li>Feature one</li>
      <li>Feature two</li>
      <li>Feature three</li>
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2">Choose Pro</button>
  </div>
);
`),
    },
    {
      id: "card-product",
      name: "Product Card",
      category: "Cards",
      code: dedent(`
const ProductCard = () => (
  <div className="border p-4">
    <div className="bg-gray-200 h-40 mb-3" />
    <h3>Wireless Headphones</h3>
    <p>Premium audio quality</p>
    <p>$199</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-2">Add to cart</button>
  </div>
);
`),
    },
    {
      id: "card-profile",
      name: "Profile Card",
      category: "Cards",
      code: dedent(`
const ProfileCard = () => (
  <div className="border p-4 text-center">
    <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto" />
    <h3 className="mt-2">Jane Doe</h3>
    <p>Product Designer</p>
    <p>Crafting delightful experiences.</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-2">Follow</button>
  </div>
);
`),
    },
    {
      id: "card-blog",
      name: "Blog Card",
      category: "Cards",
      code: dedent(`
const BlogCard = () => (
  <article className="border p-4">
    <div className="bg-gray-200 h-40 mb-3" />
    <p>March 12, 2025</p>
    <h3>How we redesigned our onboarding</h3>
    <p>A deep dive into our recent UX overhaul and the lessons we learned.</p>
    <a href="#">Read more →</a>
  </article>
);
`),
    },
    {
      id: "card-stat",
      name: "Stat Card",
      category: "Cards",
      code: dedent(`
const StatCard = () => (
  <div className="border p-4">
    <p>Total Revenue</p>
    <p>$48,329</p>
    <p>+12.5% from last month</p>
  </div>
);
`),
    },
    {
      id: "card-feature",
      name: "Feature Card",
      category: "Cards",
      code: dedent(`
const FeatureCard = () => (
  <div className="border p-4">
    <div className="w-10 h-10 bg-gray-200 mb-3" />
    <h3>Lightning Fast</h3>
    <p>Built on a modern stack for instant load times and smooth interactions.</p>
  </div>
);
`),
    },

    // ============ NAVBARS / APP BARS ============
    {
      id: "nav-simple",
      name: "Simple Navbar",
      category: "Navbars",
      code: dedent(`
const Navbar = () => (
  <nav className="flex justify-between p-4 border-b">
    <span>Logo</span>
    <div>
      <a href="#" className="mr-4">Home</a>
      <a href="#" className="mr-4">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>
);
`),
    },
    {
      id: "nav-appbar",
      name: "App Bar",
      category: "Navbars",
      code: dedent(`
const AppBar = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <div>
      <button>☰</button>
      <span>Dashboard</span>
    </div>
    <div>
      <button>🔔</button>
      <div className="w-8 h-8 rounded-full bg-gray-300 inline-block" />
    </div>
  </header>
);
`),
    },
    {
      id: "nav-cta",
      name: "Navbar with CTA",
      category: "Navbars",
      code: dedent(`
const NavbarCTA = () => (
  <nav className="flex justify-between items-center p-4 border-b">
    <span>BrandCo</span>
    <div>
      <a href="#" className="mr-4">Features</a>
      <a href="#" className="mr-4">Pricing</a>
      <a href="#" className="mr-4">Docs</a>
      <button className="bg-blue-500 text-white px-4 py-2">Get Started</button>
    </div>
  </nav>
);
`),
    },
    {
      id: "nav-sidebar",
      name: "Sidebar Nav",
      category: "Navbars",
      code: dedent(`
const Sidebar = () => (
  <aside className="border-r p-4 w-56">
    <p>Menu</p>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </aside>
);
`),
    },
    {
      id: "nav-tabs",
      name: "Tab Navigation",
      category: "Navbars",
      code: dedent(`
const TabNav = () => (
  <div className="border-b">
    <button className="px-4 py-2 border-b-2 border-blue-500">Overview</button>
    <button className="px-4 py-2">Analytics</button>
    <button className="px-4 py-2">Reports</button>
    <button className="px-4 py-2">Settings</button>
  </div>
);
`),
    },

    // ============ MODALS / DIALOGS ============
    {
      id: "modal-confirm",
      name: "Confirm Modal",
      category: "Modals",
      code: dedent(`
const ConfirmModal = () => (
  <div className="border p-6 bg-white">
    <h3>Confirm action</h3>
    <p>Are you sure you want to continue?</p>
    <div>
      <button className="border px-3 py-1 mr-2">Cancel</button>
      <button className="bg-blue-500 text-white px-3 py-1">Confirm</button>
    </div>
  </div>
);
`),
    },
    {
      id: "modal-delete",
      name: "Delete Dialog",
      category: "Modals",
      code: dedent(`
const DeleteDialog = () => (
  <div className="border p-6 bg-white">
    <h3>Delete item?</h3>
    <p>This action cannot be undone. The item will be permanently removed.</p>
    <div>
      <button className="border px-3 py-1 mr-2">Cancel</button>
      <button className="bg-red-500 text-white px-3 py-1">Delete</button>
    </div>
  </div>
);
`),
    },
    {
      id: "modal-form",
      name: "Form Dialog",
      category: "Modals",
      code: dedent(`
const FormDialog = () => (
  <div className="border p-6 bg-white">
    <h3>Create project</h3>
    <input placeholder="Project name" className="block border p-2 w-full mt-2" />
    <textarea placeholder="Description" className="block border p-2 w-full mt-2" />
    <div className="mt-3">
      <button className="border px-3 py-1 mr-2">Cancel</button>
      <button className="bg-blue-500 text-white px-3 py-1">Create</button>
    </div>
  </div>
);
`),
    },
    {
      id: "modal-success",
      name: "Success Dialog",
      category: "Modals",
      code: dedent(`
const SuccessDialog = () => (
  <div className="border p-6 bg-white text-center">
    <div className="w-12 h-12 rounded-full bg-green-200 mx-auto" />
    <h3 className="mt-3">Payment successful</h3>
    <p>Your order has been confirmed. A receipt has been sent to your email.</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-3">Done</button>
  </div>
);
`),
    },
    {
      id: "modal-drawer",
      name: "Drawer",
      category: "Modals",
      code: dedent(`
const Drawer = () => (
  <aside className="border-l p-6 w-80 bg-white h-full">
    <div className="flex justify-between">
      <h3>Cart</h3>
      <button>×</button>
    </div>
    <ul className="mt-3">
      <li>Product A — $29</li>
      <li>Product B — $49</li>
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2 mt-3 w-full">Checkout</button>
  </aside>
);
`),
    },

    // ============ TABLES ============
    {
      id: "table-users",
      name: "Users Table",
      category: "Tables",
      code: dedent(`
const UserTable = () => (
  <table className="border">
    <thead>
      <tr><th>Name</th><th>Email</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td>Ada</td><td>ada@x.com</td><td>Admin</td></tr>
      <tr><td>Linus</td><td>linus@x.com</td><td>User</td></tr>
    </tbody>
  </table>
);
`),
    },
    {
      id: "table-data",
      name: "Data Table",
      category: "Tables",
      code: dedent(`
const DataTable = () => (
  <div className="border">
    <div className="p-3 border-b">
      <input placeholder="Search..." className="border p-1" />
    </div>
    <table>
      <thead>
        <tr><th>Order</th><th>Customer</th><th>Status</th><th>Total</th></tr>
      </thead>
      <tbody>
        <tr><td>#1024</td><td>Jane Doe</td><td>Paid</td><td>$129</td></tr>
        <tr><td>#1025</td><td>John Smith</td><td>Pending</td><td>$89</td></tr>
        <tr><td>#1026</td><td>Acme Inc</td><td>Refunded</td><td>$249</td></tr>
      </tbody>
    </table>
  </div>
);
`),
    },
    {
      id: "table-pricing",
      name: "Pricing Table",
      category: "Tables",
      code: dedent(`
const PricingTable = () => (
  <table className="border">
    <thead>
      <tr><th>Feature</th><th>Free</th><th>Pro</th><th>Enterprise</th></tr>
    </thead>
    <tbody>
      <tr><td>Projects</td><td>3</td><td>Unlimited</td><td>Unlimited</td></tr>
      <tr><td>Storage</td><td>1 GB</td><td>50 GB</td><td>1 TB</td></tr>
      <tr><td>Support</td><td>Community</td><td>Email</td><td>24/7</td></tr>
    </tbody>
  </table>
);
`),
    },

    // ============ INPUTS ============
    {
      id: "input-text",
      name: "Text Input",
      category: "Inputs",
      code: dedent(`
const TextInput = () => (
  <div>
    <label>Email address</label>
    <input className="border p-2 block" placeholder="you@example.com" />
  </div>
);
`),
    },
    {
      id: "input-textarea",
      name: "Textarea",
      category: "Inputs",
      code: dedent(`
const TextArea = () => (
  <div>
    <label>Bio</label>
    <textarea className="border p-2 block w-full" rows={4} placeholder="Tell us about yourself" />
  </div>
);
`),
    },
    {
      id: "input-select",
      name: "Select Dropdown",
      category: "Inputs",
      code: dedent(`
const SelectInput = () => (
  <div>
    <label>Country</label>
    <select className="border p-2 block">
      <option>United States</option>
      <option>Canada</option>
      <option>United Kingdom</option>
      <option>Germany</option>
    </select>
  </div>
);
`),
    },
    {
      id: "input-checkbox",
      name: "Checkbox Group",
      category: "Inputs",
      code: dedent(`
const CheckboxGroup = () => (
  <div>
    <p>Notifications</p>
    <label className="block"><input type="checkbox" /> Email</label>
    <label className="block"><input type="checkbox" /> SMS</label>
    <label className="block"><input type="checkbox" /> Push notifications</label>
  </div>
);
`),
    },
    {
      id: "input-radio",
      name: "Radio Group",
      category: "Inputs",
      code: dedent(`
const RadioGroup = () => (
  <div>
    <p>Plan</p>
    <label className="block"><input type="radio" name="plan" /> Free</label>
    <label className="block"><input type="radio" name="plan" /> Pro</label>
    <label className="block"><input type="radio" name="plan" /> Enterprise</label>
  </div>
);
`),
    },
    {
      id: "input-toggle",
      name: "Toggle Switch",
      category: "Inputs",
      code: dedent(`
const Toggle = () => (
  <div>
    <span>Dark mode</span>
    <button className="border px-3 py-1">On</button>
  </div>
);
`),
    },
    {
      id: "input-search",
      name: "Search Input",
      category: "Inputs",
      code: dedent(`
const SearchInput = () => (
  <div className="border p-2">
    <span>🔍</span>
    <input placeholder="Search anything..." className="border-0 outline-none" />
  </div>
);
`),
    },

    // ============ ALERTS ============
    {
      id: "alert-info",
      name: "Info Alert",
      category: "Alerts",
      code: dedent(`
const InfoAlert = () => (
  <div className="border p-3">
    <strong>Heads up!</strong>
    <p>You can update your preferences anytime.</p>
  </div>
);
`),
    },
    {
      id: "alert-success",
      name: "Success Alert",
      category: "Alerts",
      code: dedent(`
const SuccessAlert = () => (
  <div className="border p-3 bg-green-50">
    <strong>✓ Success</strong>
    <p>Your changes have been saved.</p>
  </div>
);
`),
    },
    {
      id: "alert-warning",
      name: "Warning Alert",
      category: "Alerts",
      code: dedent(`
const WarningAlert = () => (
  <div className="border p-3 bg-yellow-50">
    <strong>⚠ Warning</strong>
    <p>Your subscription expires in 3 days.</p>
  </div>
);
`),
    },
    {
      id: "alert-error",
      name: "Error Alert",
      category: "Alerts",
      code: dedent(`
const ErrorAlert = () => (
  <div className="border p-3 bg-red-50">
    <strong>✕ Error</strong>
    <p>Something went wrong. Please try again.</p>
  </div>
);
`),
    },
    {
      id: "alert-toast",
      name: "Toast Notification",
      category: "Alerts",
      code: dedent(`
const Toast = () => (
  <div className="border p-3 bg-white shadow">
    <div>
      <strong>New message</strong>
      <p>You have a new message from Sarah.</p>
    </div>
    <button>×</button>
  </div>
);
`),
    },

    // ============ DROPDOWNS ============
    {
      id: "dropdown-menu",
      name: "Dropdown Menu",
      category: "Dropdowns",
      code: dedent(`
const DropdownMenu = () => (
  <div className="border p-2 inline-block">
    <button>Options ▾</button>
    <ul className="border mt-1">
      <li className="p-2">Edit</li>
      <li className="p-2">Duplicate</li>
      <li className="p-2">Archive</li>
      <li className="p-2">Delete</li>
    </ul>
  </div>
);
`),
    },
    {
      id: "dropdown-user",
      name: "User Dropdown",
      category: "Dropdowns",
      code: dedent(`
const UserDropdown = () => (
  <div className="border inline-block">
    <button className="p-2">
      <div className="w-7 h-7 rounded-full bg-gray-300 inline-block" /> Jane Doe ▾
    </button>
    <ul className="border mt-1">
      <li className="p-2">Profile</li>
      <li className="p-2">Settings</li>
      <li className="p-2">Billing</li>
      <li className="p-2">Sign out</li>
    </ul>
  </div>
);
`),
    },
    {
      id: "dropdown-filter",
      name: "Filter Dropdown",
      category: "Dropdowns",
      code: dedent(`
const FilterDropdown = () => (
  <div className="border p-3">
    <p>Filter by status</p>
    <label className="block"><input type="checkbox" /> Active</label>
    <label className="block"><input type="checkbox" /> Pending</label>
    <label className="block"><input type="checkbox" /> Archived</label>
    <button className="bg-blue-500 text-white px-3 py-1 mt-2">Apply</button>
  </div>
);
`),
    },

    // ============ HEROES ============
    {
      id: "hero-centered",
      name: "Centered Hero",
      category: "Heroes",
      code: dedent(`
const Hero = () => (
  <section className="p-12 text-center">
    <h1>Build beautiful UIs faster</h1>
    <p>Style any React component in seconds. Powered by AI.</p>
    <div>
      <button className="bg-blue-500 text-white px-5 py-3 mr-2">Get started</button>
      <button className="border px-5 py-3">Learn more</button>
    </div>
  </section>
);
`),
    },
    {
      id: "hero-split",
      name: "Split Hero",
      category: "Heroes",
      code: dedent(`
const SplitHero = () => (
  <section className="p-12">
    <div>
      <h1>The fastest way to ship UIs</h1>
      <p>Turn raw components into delightful interfaces with one click.</p>
      <button className="bg-blue-500 text-white px-5 py-3">Try free</button>
    </div>
    <div className="bg-gray-200 h-64 mt-6" />
  </section>
);
`),
    },
    {
      id: "hero-cta",
      name: "Hero with Email CTA",
      category: "Heroes",
      code: dedent(`
const HeroCTA = () => (
  <section className="p-12 text-center">
    <h1>Join 10,000+ developers</h1>
    <p>Get early access to new components and templates.</p>
    <form>
      <input placeholder="you@example.com" className="border p-2" />
      <button className="bg-blue-500 text-white px-4 py-2">Notify me</button>
    </form>
  </section>
);
`),
    },

    // ============ FOOTERS ============
    {
      id: "footer-simple",
      name: "Simple Footer",
      category: "Footers",
      code: dedent(`
const Footer = () => (
  <footer className="p-6 border-t text-center">
    <p>© 2025 BrandCo. All rights reserved.</p>
    <div>
      <a href="#" className="mr-3">Privacy</a>
      <a href="#" className="mr-3">Terms</a>
      <a href="#">Contact</a>
    </div>
  </footer>
);
`),
    },
    {
      id: "footer-columns",
      name: "Footer with Columns",
      category: "Footers",
      code: dedent(`
const FooterColumns = () => (
  <footer className="p-8 border-t">
    <div>
      <div>
        <h4>Product</h4>
        <ul><li>Features</li><li>Pricing</li><li>Changelog</li></ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul><li>About</li><li>Blog</li><li>Careers</li></ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul><li>Docs</li><li>Help Center</li><li>API</li></ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul><li>Privacy</li><li>Terms</li><li>Security</li></ul>
      </div>
    </div>
    <p>© 2025 BrandCo</p>
  </footer>
);
`),
    },
    {
      id: "footer-newsletter",
      name: "Footer with Newsletter",
      category: "Footers",
      code: dedent(`
const FooterNewsletter = () => (
  <footer className="p-8 border-t">
    <div>
      <h3>Stay in the loop</h3>
      <p>Subscribe for product updates and design tips.</p>
    </div>
    <form>
      <input placeholder="you@example.com" className="border p-2" />
      <button className="bg-blue-500 text-white px-4 py-2">Subscribe</button>
    </form>
    <p>© 2025 BrandCo</p>
  </footer>
);
`),
    },

    // ============ DATE & FILE ============
    {
      id: "date-picker",
      name: "Date Picker",
      category: "Pickers",
      code: dedent(`
const DatePicker = () => (
  <div>
    <label>Pick a date</label>
    <input type="date" className="border p-2 block" />
  </div>
);
`),
    },
    {
      id: "date-range",
      name: "Date Range Picker",
      category: "Pickers",
      code: dedent(`
const DateRange = () => (
  <div>
    <label>Date range</label>
    <div>
      <input type="date" className="border p-2" />
      <span> to </span>
      <input type="date" className="border p-2" />
    </div>
  </div>
);
`),
    },
    {
      id: "time-picker",
      name: "Time Picker",
      category: "Pickers",
      code: dedent(`
const TimePicker = () => (
  <div>
    <label>Meeting time</label>
    <input type="time" className="border p-2 block" />
  </div>
);
`),
    },
    {
      id: "color-picker",
      name: "Color Picker",
      category: "Pickers",
      code: dedent(`
const ColorPicker = () => (
  <div>
    <label>Brand color</label>
    <input type="color" className="border p-1 block" />
  </div>
);
`),
    },
    {
      id: "file-upload",
      name: "File Upload",
      category: "Pickers",
      code: dedent(`
const FileUpload = () => (
  <div className="border p-6 text-center">
    <p>Drop files here or click to upload</p>
    <input type="file" className="block mx-auto mt-2" />
    <p>PNG, JPG, PDF up to 10MB</p>
  </div>
);
`),
    },
    {
      id: "file-avatar",
      name: "Avatar Upload",
      category: "Pickers",
      code: dedent(`
const AvatarUpload = () => (
  <div>
    <div className="w-20 h-20 rounded-full bg-gray-300" />
    <button className="border px-3 py-1 mt-2">Change avatar</button>
    <input type="file" className="hidden" />
  </div>
);
`),
    },

    // ============ FEEDBACK ============
    {
      id: "progress-bar",
      name: "Progress Bar",
      category: "Feedback",
      code: dedent(`
const ProgressBar = () => (
  <div>
    <p>Uploading... 65%</p>
    <div className="border h-2">
      <div className="bg-blue-500 h-2" style={{ width: '65%' }} />
    </div>
  </div>
);
`),
    },
    {
      id: "spinner",
      name: "Loading Spinner",
      category: "Feedback",
      code: dedent(`
const Spinner = () => (
  <div className="text-center p-4">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full mx-auto" />
    <p>Loading...</p>
  </div>
);
`),
    },
    {
      id: "skeleton",
      name: "Skeleton Loader",
      category: "Feedback",
      code: dedent(`
const Skeleton = () => (
  <div className="border p-4">
    <div className="bg-gray-200 h-4 w-3/4 mb-2" />
    <div className="bg-gray-200 h-4 w-1/2 mb-2" />
    <div className="bg-gray-200 h-4 w-2/3" />
  </div>
);
`),
    },
    {
      id: "badge",
      name: "Badge",
      category: "Feedback",
      code: dedent(`
const Badges = () => (
  <div>
    <span className="border px-2 py-1">New</span>
    <span className="border px-2 py-1 bg-green-100">Active</span>
    <span className="border px-2 py-1 bg-yellow-100">Pending</span>
    <span className="border px-2 py-1 bg-red-100">Failed</span>
  </div>
);
`),
    },
    {
      id: "tooltip",
      name: "Tooltip",
      category: "Feedback",
      code: dedent(`
const Tooltip = () => (
  <div>
    <button className="border px-3 py-1">Hover me</button>
    <div className="border bg-gray-800 text-white p-2 mt-1 inline-block">
      This is a helpful tooltip
    </div>
  </div>
);
`),
    },

    // ============ LISTS ============
    {
      id: "list-simple",
      name: "Simple List",
      category: "Lists",
      code: dedent(`
const SimpleList = () => (
  <ul className="border">
    <li className="p-3 border-b">First item</li>
    <li className="p-3 border-b">Second item</li>
    <li className="p-3 border-b">Third item</li>
    <li className="p-3">Fourth item</li>
  </ul>
);
`),
    },
    {
      id: "list-contacts",
      name: "Contact List",
      category: "Lists",
      code: dedent(`
const ContactList = () => (
  <ul className="border">
    <li className="p-3 border-b">
      <div className="w-10 h-10 rounded-full bg-gray-300 inline-block" />
      <div className="inline-block ml-2">
        <p>Jane Doe</p>
        <p>jane@example.com</p>
      </div>
    </li>
    <li className="p-3 border-b">
      <div className="w-10 h-10 rounded-full bg-gray-300 inline-block" />
      <div className="inline-block ml-2">
        <p>John Smith</p>
        <p>john@example.com</p>
      </div>
    </li>
  </ul>
);
`),
    },
    {
      id: "list-activity",
      name: "Activity Feed",
      category: "Lists",
      code: dedent(`
const ActivityFeed = () => (
  <ul className="border p-4">
    <li className="border-b py-2"><strong>Jane</strong> commented on Project Alpha — 2m ago</li>
    <li className="border-b py-2"><strong>John</strong> uploaded 3 files — 15m ago</li>
    <li className="border-b py-2"><strong>Acme</strong> renewed their subscription — 1h ago</li>
    <li className="py-2"><strong>Sarah</strong> joined the team — 3h ago</li>
  </ul>
);
`),
    },

    // ============ MISC ============
    {
      id: "breadcrumbs",
      name: "Breadcrumbs",
      category: "Misc",
      code: dedent(`
const Breadcrumbs = () => (
  <nav>
    <a href="#">Home</a> / <a href="#">Projects</a> / <span>Alpha</span>
  </nav>
);
`),
    },
    {
      id: "pagination",
      name: "Pagination",
      category: "Misc",
      code: dedent(`
const Pagination = () => (
  <nav>
    <button className="border px-3 py-1">‹ Prev</button>
    <button className="border px-3 py-1">1</button>
    <button className="border px-3 py-1 bg-blue-500 text-white">2</button>
    <button className="border px-3 py-1">3</button>
    <button className="border px-3 py-1">Next ›</button>
  </nav>
);
`),
    },
    {
      id: "accordion",
      name: "Accordion",
      category: "Misc",
      code: dedent(`
const Accordion = () => (
  <div className="border">
    <details className="p-3 border-b">
      <summary>What is included in the free plan?</summary>
      <p>Free plan includes 3 projects and basic support.</p>
    </details>
    <details className="p-3 border-b">
      <summary>Can I cancel anytime?</summary>
      <p>Yes, you can cancel your subscription at any time.</p>
    </details>
    <details className="p-3">
      <summary>Do you offer refunds?</summary>
      <p>We offer a 30-day money-back guarantee.</p>
    </details>
  </div>
);
`),
    },
    {
      id: "avatar-group",
      name: "Avatar Group",
      category: "Misc",
      code: dedent(`
const AvatarGroup = () => (
  <div>
    <div className="w-10 h-10 rounded-full bg-gray-300 inline-block" />
    <div className="w-10 h-10 rounded-full bg-gray-400 inline-block" />
    <div className="w-10 h-10 rounded-full bg-gray-500 inline-block" />
    <span>+5 others</span>
  </div>
);
`),
    },
    {
      id: "stepper",
      name: "Stepper",
      category: "Misc",
      code: dedent(`
const Stepper = () => (
  <div>
    <div>
      <span className="border rounded-full w-8 h-8 inline-flex items-center justify-center bg-blue-500 text-white">1</span>
      <span> Account</span>
    </div>
    <div>
      <span className="border rounded-full w-8 h-8 inline-flex items-center justify-center">2</span>
      <span> Profile</span>
    </div>
    <div>
      <span className="border rounded-full w-8 h-8 inline-flex items-center justify-center">3</span>
      <span> Confirm</span>
    </div>
  </div>
);
`),
    },
    {
      id: "empty-state",
      name: "Empty State",
      category: "Misc",
      code: dedent(`
const EmptyState = () => (
  <div className="border p-12 text-center">
    <div className="w-16 h-16 bg-gray-200 mx-auto" />
    <h3 className="mt-3">No projects yet</h3>
    <p>Get started by creating your first project.</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-3">Create project</button>
  </div>
);
`),
    },
  ],
};

// Reuse shadcn snippets as starters across all libraries (visual only — AI restyles)
for (const lib of LIBRARIES) {
  if (!COMPONENTS[lib.id]) COMPONENTS[lib.id] = COMPONENTS.shadcn;
}

export const CATEGORIES = [
  "Buttons",
  "Forms",
  "Cards",
  "Navbars",
  "Modals",
  "Tables",
  "Inputs",
  "Alerts",
  "Dropdowns",
  "Heroes",
  "Footers",
  "Pickers",
  "Feedback",
  "Lists",
  "Misc",
];
