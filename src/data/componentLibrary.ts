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
    {
      id: "shadcn-button",
      name: "Button",
      category: "Buttons",
      code: dedent(`
const MyButton = () => (
  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
    Click me
  </button>
);
`),
    },
    {
      id: "shadcn-login",
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
      id: "shadcn-card",
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
      id: "shadcn-navbar",
      name: "Navbar",
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
      id: "shadcn-alert",
      name: "Alert",
      category: "Alerts",
      code: dedent(`
const Alert = () => (
  <div className="border p-3">
    <strong>Heads up!</strong>
    <p>You can update your preferences anytime.</p>
  </div>
);
`),
    },
    {
      id: "shadcn-input",
      name: "Input Field",
      category: "Inputs",
      code: dedent(`
const InputField = () => (
  <div>
    <label>Email address</label>
    <input className="border p-2 block" placeholder="you@example.com" />
  </div>
);
`),
    },
    {
      id: "shadcn-table",
      name: "Table",
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
      id: "shadcn-modal",
      name: "Modal",
      category: "Modals",
      code: dedent(`
const Modal = () => (
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
];
